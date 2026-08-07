# VAD Design — Product Requirements & Status

## Original Problem Statement
Rebuild vadwheels.com / vaddesign.com as a new dark, premium motorsport-branded **full-stack** digital home for VAD (V.A.D Design). Multi-page site (Home, Wheels, Aero, Programmes, About, Contact) with an intro splash video, a Gemini-powered AI product/spec assistant, and real DB-backed enquiry submission. User directive: "ensure all the wiring front and back is done correctly and all features are working as intended. future proof this website."

## Stack / Architecture
- **Frontend**: React (CRA + craco), Tailwind, shadcn/ui, lucide-react, react-router. Reads `REACT_APP_BACKEND_URL`.
- **Backend**: FastAPI (`/app/backend/server.py`), all routes under `/api`. Motor/MongoDB.
- **AI**: Gemini via `emergentintegrations` (`LlmChat`, model `gemini-3-flash-preview`), streaming SSE. Uses `EMERGENT_LLM_KEY`.
- **DB collections**: `chat_messages`, `enquiries`, `status_checks`.
- **Images**: Real VAD photography self-hosted under `/app/frontend/public/vad/{programmes,wheels,aero,z4}/`.
- **Intro video**: `/public/vad_intro.{webm,mp4}` (WebM/VP9 + MP4/H.264 faststart, graceful onError fallback).

## Key API Endpoints
- `GET /api/` health
- `POST /api/chat` → SSE stream (`data:{delta}` … `data:[DONE]`), multi-turn per `session_id`
- `GET /api/chat/{session_id}/history`
- `POST /api/enquiries` → `{id,status:'received'}` · `GET /api/enquiries`

## Pages / Routes
`/` Home · `/wheels` · `/aero` · `/programmes` · `/gallery` · `/for-sale` · `/about` · `/contact`

## Implemented (verified via testing_agent — iteration_1 & iteration_2, 100%)
- 2026-06: **Intro video fixed & future-proofed** — was error 4 (H.264-only + moov-at-end). Added WebM/VP9 source + MP4 faststart + graceful `onError` dismiss. Plays on all browsers.
- 2026-06: **Full front↔back wiring verified** — Gemini chat (streaming, multi-turn, persisted), Contact→enquiries CRUD, chat history.
- 2026-06: **Real VAD content** — crawled live site; self-hosted ~55 real photos (car builds, wheels, carbon aero, BMW Z4).
- 2026-06: **Gallery page** (`/gallery`) — category filters (All / GT Programmes / Forged Wheels / Carbon Aero / BMW Z4 GT3 V8), masonry grid, reusable `Lightbox` (keyboard + arrow nav).
- 2026-06: **Cars For Sale** (`/for-sale`) — 1-of-1 BMW Z4 GT3 V8 @ **£68,000**, full spec, highlights, gallery + lightbox, enquire CTAs. Home page "For Sale" spotlight. Assistant knows the listing.
- 2026-06: **POA pricing** — wheels/aero/programmes marked "POA — Price on application"; Z4 is the only fixed price.
- 2026-06: **Vercel-ready frontend** — added `frontend/vercel.json` (CRA build + SPA rewrites) for hybrid deploy (frontend on Vercel, backend on Emergent).

## Deployment notes
- Recommended: Emergent Deploy (handles FastAPI + Mongo + SSE natively).
- Hybrid (user's path): push via "Save to Github" → import `frontend/` into Vercel (Root Dir = `frontend`), set `REACT_APP_BACKEND_URL` to the Emergent-deployed backend. Backend + Mongo + SSE stay on Emergent.

## Backlog / Roadmap
- **P1 Admin Inbox**: protected page for the team to read/manage submitted enquiries.
- **P1 Enquiry Alerts**: email notification on new enquiry (e.g. Resend/SendGrid).
- **P2 Wheel Configurator**: visual model/size/finish picker feeding into the enquiry.
- **P2 Future-proofing (from test review)**: rehydrate `LlmChat` from Mongo on cache miss (survive restarts / scale); rate-limit `/api/chat` & `/api/enquiries`; `EmailStr` validation on enquiries.

## No auth in app (no test credentials needed).
