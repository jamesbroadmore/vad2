"""Backend tests for VAD app: chat SSE, chat history, enquiries."""
import os
import json
import time
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # fallback: read from frontend .env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")

API = f"{BASE_URL}/api"


# ---------- Health ----------
def test_root():
    r = requests.get(f"{API}/")
    assert r.status_code == 200
    assert "VAD" in r.json().get("message", "")


# ---------- Chat SSE streaming ----------
def _stream_chat(session_id, message, timeout=45):
    r = requests.post(
        f"{API}/chat",
        json={"session_id": session_id, "message": message},
        stream=True,
        timeout=timeout,
    )
    assert r.status_code == 200, r.text
    assert "text/event-stream" in r.headers.get("content-type", "")
    deltas = []
    done = False
    for raw in r.iter_lines(decode_unicode=True):
        if not raw:
            continue
        if raw.startswith("data: "):
            payload = raw[6:]
            if payload == "[DONE]":
                done = True
                break
            try:
                obj = json.loads(payload)
                if "delta" in obj:
                    deltas.append(obj["delta"])
            except json.JSONDecodeError:
                pass
    r.close()
    return "".join(deltas), done


@pytest.fixture(scope="module")
def chat_session_id():
    return f"TEST_sess_{uuid.uuid4().hex[:8]}"


def test_chat_stream_wheels_question(chat_session_id):
    text, done = _stream_chat(chat_session_id, "What forged wheel sizes do you offer?")
    assert done, "Stream did not end with [DONE]"
    assert len(text) > 20, f"Response too short: {text!r}"
    lower = text.lower()
    # Should mention wheels/sizes and not be an error fallback
    assert "snag" not in lower, f"Got error fallback: {text}"
    assert any(k in lower for k in ["18", "19", "20", "21", "forged", "wheel"]), f"Unexpected content: {text}"


def test_chat_multi_turn_context(chat_session_id):
    # First message already sent above; send follow-up on same session
    text, done = _stream_chat(chat_session_id, "And in magnesium specifically?")
    assert done
    assert len(text) > 10
    assert "snag" not in text.lower()
    lower = text.lower()
    assert "magnes" in lower or "vad" in lower or "forged" in lower


def test_chat_history_persistence(chat_session_id):
    time.sleep(1)  # ensure writes flushed
    r = requests.get(f"{API}/chat/{chat_session_id}/history")
    assert r.status_code == 200
    msgs = r.json()
    # Expect at least 4: 2 user + 2 assistant
    assert len(msgs) >= 4, f"Got {len(msgs)} messages"
    roles = [m["role"] for m in msgs]
    assert roles.count("user") >= 2
    assert roles.count("assistant") >= 2
    # order preserved
    assert msgs[0]["role"] == "user"


# ---------- Enquiries ----------
def test_create_enquiry_and_list():
    payload = {
        "name": "TEST_John",
        "email": "test_john@example.com",
        "phone": "+441234000",
        "interest": "wheels",
        "message": "TEST enquiry about forged magnesium wheels",
    }
    r = requests.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["status"] == "received"
    assert "id" in data
    eid = data["id"]

    # GET list — newest first
    r2 = requests.get(f"{API}/enquiries")
    assert r2.status_code == 200
    items = r2.json()
    match = [e for e in items if e["id"] == eid]
    assert match, "Created enquiry not found in list"
    e = match[0]
    assert e["name"] == payload["name"]
    assert e["email"] == payload["email"]
    assert e["message"] == payload["message"]
    # Newest-first: created enquiry should be near the top
    top_ids = [e["id"] for e in items[:3]]
    assert eid in top_ids, "Newest enquiry not near top of list"


@pytest.mark.parametrize("missing", ["name", "email", "message"])
def test_create_enquiry_missing_field_422(missing):
    payload = {"name": "X", "email": "x@y.com", "message": "hi"}
    payload.pop(missing)
    r = requests.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 422, f"Expected 422 for missing {missing}, got {r.status_code}"



# ---------- Z4 for-sale knowledge ----------
def test_chat_mentions_z4_price():
    sid = f"TEST_z4_{uuid.uuid4().hex[:8]}"
    text, done = _stream_chat(sid, "Tell me about the BMW Z4 GT3 V8 for sale")
    assert done
    assert "snag" not in text.lower(), f"Got error fallback: {text}"
    assert "68,000" in text or "68000" in text or "£68" in text, f"No £68,000 in response: {text}"
