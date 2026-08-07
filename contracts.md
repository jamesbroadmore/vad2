# VAD — API Contracts

## Backend base: `${REACT_APP_BACKEND_URL}/api`

### 1. POST /api/chat  (Gemini AI assistant — streaming SSE)
Request:
```json
{ "session_id": "sess_xxx", "message": "What forged wheel sizes do you offer?" }
```
Response: `text/event-stream`
```
data: {"delta": "token"}\n\n
...
data: [DONE]\n\n
```
- Model: Gemini `gemini-3.5-flash` via emergentintegrations (EMERGENT_LLM_KEY).
- Multi-turn: LlmChat instance cached per session_id; messages persisted to `chat_messages` collection.
- System prompt: VAD product/spec specialist (wheels, aero, programmes, sizes, contact info).

### 2. POST /api/enquiries  (Contact form)
Request:
```json
{ "name": "...", "email": "...", "phone": "", "interest": "Forged Wheels", "message": "..." }
```
Response 200: `{ "id": "<uuid>", "status": "received" }`

### 3. GET /api/enquiries
Returns list of enquiries (newest first).

### 4. GET /api/chat/{session_id}/history
Returns stored chat messages for a session.

## Mongo collections
- `chat_messages`: { id, session_id, role, content, timestamp }
- `enquiries`: { id, name, email, phone, interest, message, created_at }

## Frontend integration
- `ChatWidget.jsx` → POST /api/chat, parses SSE `delta` chunks (already implemented).
- `Contact.jsx` → POST /api/enquiries (already implemented).
- All other page data stays static in `mock.js` (brand content, no CRUD needed).
