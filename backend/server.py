from fastapi import FastAPI, APIRouter
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ['EMERGENT_LLM_KEY']

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

SYSTEM_MESSAGE = """You are the VAD Assistant — a knowledgeable, friendly product specialist for VAD (V.A.D Design), a UK-based motorsport engineering company specialising in forged wheels, carbon fibre aero and bespoke widebody programmes.

YOUR KNOWLEDGE BASE:

FORGED WHEELS (precision 3-D hot forged in a 20,000-ton press):
- VAD F1 — Forged Magnesium, sizes 17" 18" 19" 20" 21"
- VT06F — Forged Magnesium, sizes 18" 19" 20" 21"
- VAD MF-R GT3 — Magnesium Centrelock, sizes 17"-21", all widths & finishes
- VAD LM1-R — Carbon Fibre Barrel, sizes 17"-21", all widths & applications
- VAD RS5 — Forged Magnesium, sizes 18" 19" 20" 21"
- VAD VM1 13X19 — Forged Magnesium, 19" motorsport spec

WHEEL SIZE RANGES:
- 1 Piece Forged Monoblock: 7.5x18→12x18, 7.5x19→12x19, 8x20→12.5x20, 8x21→12.5x21
- 2 Piece Forged Duoblock: 8x18→11x18, 8x19→11x19, 8x20→11x20, 8x21→11x21
- 2 Piece Carbon Fibre Barrel: 8x18→11x18, 8x19→11x19, 8x20→11x20, 8x21→11x21

WHY FORGED MAGNESIUM:
- Up to 1.5x lighter than aluminium, 2x lighter than cast wheels
- Unique fibre structure bends without cracking (3-D hot forging)
- 5-7% lower fuel consumption, shorter braking, faster acceleration
- 100x higher vibration damping than aluminium — longer suspension life

CARBON FIBRE AERO (prepreg autoclave):
- Front splitters & lips, rear swan-neck GT wings & multi-element diffusers
- Full carbon widebody panel sets — bonnets, wings, doors, quarter panels

WIDEBODY / GT PROGRAMMES (track & street, road & race homologated):
- Porsche 997.2 GT3R (flagship full carbon widebody aero conversion)
- Porsche 991.1 GT3R (R16-derived carbon widebody)
- Nissan GTR GT3 (R35 widebody + full carbon aero)
- BMW (E89) Z4 GT3 V8 (widebody + V8 conversion)
- Porsche 997 K3R (Kremer K3R tribute body kit)
- Porsche 981 Cayman RSR (widebody + RSR-Evo)
- Bespoke one-off design, engineering & manufacture also available

CARS FOR SALE:
- BMW (E89) Z4 GT3 V8 Street — a 1-of-1 road-legal FIA-style GT3 build and VAD's flagship promotional car. Price: £68,000.
  Spec: LS3 V8 crate engine (485 HP), Tremec 6-speed heavy-duty manual, Emerald ECU, full VAD dry-carbon GTRR widebody aero, adjustable Bilstein coilovers, GT3RR 3-piece forged wheels (10.5J x 19" front / 13J x 19" rear on Michelin), Sparco race seats and carbon steering wheel. Street registered with valid UK MOT and road tax. Worldwide enclosed shipping can be arranged. Direct users to the "For Sale" page or an enquiry.

CONTACT:
- Location: England, United Kingdom
- Email: info@vaddesign.com
- Phone: +44 (0) 1234 567 890
- Hours: Mon–Fri, 09:00–17:00 GMT

GUIDELINES:
- Be concise (2-5 short sentences unless detail is requested). Use plain text, no markdown headers.
- Answer only about VAD products, motorsport wheels/aero and related fitment topics.
- Pricing for wheels, aero and programmes is POA (price on application) — invite the user to submit an enquiry via the Contact page or email info@vaddesign.com. The only fixed-price item is the BMW Z4 GT3 V8 for sale at £68,000.
- If asked something unrelated to VAD or motorsport, politely steer back to VAD products.
- Never invent products, sizes or specs not listed above."""

chat_sessions = {}


async def get_chat(session_id: str) -> LlmChat:
    if session_id not in chat_sessions:
        # Rehydrate prior conversation from Mongo so context survives backend
        # restarts / horizontal scaling (cache miss -> rebuild from persisted history).
        initial = [{"role": "system", "content": SYSTEM_MESSAGE}]
        prior = await db.chat_messages.find(
            {"session_id": session_id}, {"_id": 0}
        ).sort("timestamp", 1).to_list(100)
        for m in prior:
            if m["role"] == "user":
                initial.append({"role": "user", "content": [{"type": "text", "text": m["content"]}]})
            elif m["role"] == "assistant":
                initial.append({"role": "assistant", "content": m["content"]})
        chat_sessions[session_id] = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=SYSTEM_MESSAGE,
            initial_messages=initial,
        ).with_model("gemini", "gemini-3-flash-preview")
    return chat_sessions[session_id]


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    role: str
    content: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class EnquiryCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    interest: Optional[str] = ""
    message: str


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    interest: str = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "VAD API running"}


@api_router.post("/chat")
async def chat_stream(req: ChatRequest):
    chat = await get_chat(req.session_id)
    user_msg = ChatMessage(session_id=req.session_id, role="user", content=req.message)
    await db.chat_messages.insert_one(user_msg.model_dump())

    async def event_gen():
        full = ""
        try:
            async for ev in chat.stream_message(UserMessage(text=req.message)):
                if isinstance(ev, TextDelta):
                    full += ev.content
                    yield f"data: {json.dumps({'delta': ev.content})}\n\n"
                elif isinstance(ev, StreamDone):
                    break
        except Exception:
            logger.exception("Chat stream failed for session %s", req.session_id)
            fallback = "Sorry — I hit a snag answering that. Please try again, or reach us at info@vaddesign.com."
            full = full or fallback
            yield f"data: {json.dumps({'delta': fallback})}\n\n"
        if full:
            assistant_msg = ChatMessage(session_id=req.session_id, role="assistant", content=full)
            await db.chat_messages.insert_one(assistant_msg.model_dump())
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        event_gen(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@api_router.get("/chat/{session_id}/history", response_model=List[ChatMessage])
async def chat_history(session_id: str):
    docs = await db.chat_messages.find({"session_id": session_id}, {"_id": 0}).sort("timestamp", 1).to_list(200)
    return docs


@api_router.post("/enquiries")
async def create_enquiry(payload: EnquiryCreate):
    enquiry = Enquiry(**payload.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    return {"id": enquiry.id, "status": "received"}


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return await db.status_checks.find({}, {"_id": 0}).to_list(1000)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
