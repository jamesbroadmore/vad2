# VAD (V.A.D Design) — Product Requirements & Status

## Original Problem Statement
Clone all content from vadwheels.com into a new **dark, premium motorsport-branded full-stack website** for VAD (V.A.D Design), a UK forged-wheel / carbon-aero / widebody-programme engineering company. Requirements:
- Multi-page navigation: Home, Forged Wheels, Aero & Carbon, Programmes, About, Contact
- Intro splash video (plays once per browser session)
- Gemini-powered AI chat widget acting as a VAD product/spec assistant
- Contact enquiry form persisted to a real database
- "Ensure all the wiring front and back is done correctly and all features are working as intended. Future proof this website."

User language: **English only.**

## Tech Stack
- Frontend: React (CRA + CRACO), Tailwind CSS, react-router-dom, lucide-react icons
- Backend: FastAPI + Motor (async MongoDB)
- AI: Gemini `gemini-3-flash-preview` via `emergentintegrations` LlmChat (EMERGENT_LLM_KEY)

## Architecture
- `/app/backend/server.py` — API (`/api` prefix): `GET /api/`, `POST /api/chat` (SSE stream), `GET /api/chat/{session_id}/history`, `POST|GET /api/enquiries`, `POST|GET /api/status`.
- Mongo collections: `chat_messages` {id, session_id, role, content, timestamp}, `enquiries` {id, name, email, phone, interest, message, created_at}.
- Frontend: `App.js` routes 6 pages; `ChatWidget.jsx` → `/api/chat` (parses SSE deltas); `Contact.jsx` → `/api/enquiries`; `IntroSplash.jsx` dual-source video.
- Brand/product page content is intentionally **static** in `src/mock.js` (no CRUD needed per contracts.md). Only chat + enquiries are dynamic.

## Implemented (verified) — 2026-08-07
- [x] Full 6-page dark motorsport-branded frontend
- [x] Intro splash video **FIXED & future-proofed**: was error 4 / black screen (H.264-only mp4 with moov atom at end). Now serves WebM/VP9 + MP4/H.264(faststart) dual sources + graceful `onError` dismiss + brand fallback. Verified playing (readyState 4) in browser.
- [x] Gemini AI chat widget — streaming SSE, VAD-specific system prompt, verified relevant answers
- [x] Multi-turn chat memory — **now rehydrates from MongoDB on cache miss**, so context survives backend restarts / horizontal scaling (verified via restart test recalling prior fact)
- [x] Contact enquiry form → persists to Mongo, success state verified
- [x] Chat history endpoint
- [x] Comprehensive testing: testing_agent iteration_1 = 100% backend (8/8 pytest) + 100% frontend

## Backlog / Future (P1/P2 — optional, from code review)
- P2: Rate limiting on `/api/chat` and `/api/enquiries`
- P2: Use Pydantic `EmailStr` for enquiry email validation
- P2: Enquiry email notifications (e.g. Resend/SendGrid) to VAD inbox
- P2: Admin view to browse submitted enquiries

## Test Credentials
- No authentication in this app.
- EMERGENT_LLM_KEY set in `/app/backend/.env` for Gemini chat.
