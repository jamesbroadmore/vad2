import React, { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { chatSuggestions } from "../mock";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function genSession() {
  return "sess_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to VAD. I'm your product specialist — ask me about forged wheels, carbon aero, sizes or starting a bespoke build.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(genSession);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content }]);
    setLoading(true);
    // placeholder assistant message we stream into
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: content }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const parts = acc.split("\n\n");
        acc = parts.pop() || "";
        for (const part of parts) {
          const line = part.split("\n").find((l) => l.startsWith("data:"));
          if (!line) continue;
          const data = line.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            if (json.delta) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = {
                  role: "assistant",
                  content: copy[copy.length - 1].content + json.delta,
                };
                return copy;
              });
            }
          } catch (e) {
            /* ignore parse errors on partial */
          }
        }
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Sorry — I'm having trouble connecting right now. Please try again, or reach us at info@vaddesign.com.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <div className="fixed bottom-6 right-6 z-[80] flex items-center gap-3">
        {/* Attention label — only when panel closed */}
        {!open && (
          <span
            data-testid="chat-toggle-label"
            className="hidden sm:flex items-center gap-2 bg-[#111114] border border-vad-red/40 text-white text-sm font-display uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg shadow-black/50 animate-vad-bob"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ask VAD AI
          </span>
        )}

        <button
          data-testid="chat-toggle-button"
          onClick={() => setOpen((o) => !o)}
          className="relative w-16 h-16 rounded-full bg-vad-red text-white grid place-items-center shadow-xl shadow-red-900/60 hover:scale-110 transition-transform focus:outline-none"
          aria-label="Open VAD assistant"
        >
          {/* Pulsing attention rings — only when closed */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-vad-red opacity-60 animate-ping" />
              <span className="absolute -inset-1 rounded-full ring-2 ring-vad-red/40 animate-pulse" />
            </>
          )}
          <span className="relative z-10">
            {open ? <X size={26} /> : <MessageSquare size={26} />}
          </span>
        </button>
      </div>

      {/* Panel */}
      <div
        data-testid="chat-panel"
        className={`fixed bottom-24 right-6 z-[80] w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-[#0d0d10] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-[#111114] border-b border-white/10 px-4 py-3.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-vad-red grid place-items-center font-display font-bold text-white text-sm">
            V
          </div>
          <div>
            <p className="font-display text-sm text-white tracking-wide">VAD Assistant</p>
            <p className="text-[11px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
            </p>
          </div>
        </div>

        <div ref={scrollRef} data-testid="chat-messages" className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-vad-red text-white rounded-br-sm"
                    : "bg-[#1a1a1f] text-white/85 rounded-bl-sm"
                }`}
              >
                {m.content || (loading && i === messages.length - 1 ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  m.content
                ))}
              </div>
            </div>
          ))}

          {messages.length <= 1 && (
            <div className="pt-2 space-y-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  data-testid="chat-suggestion"
                  onClick={() => send(s)}
                  className="block w-full text-left text-xs text-white/70 border border-white/10 rounded-md px-3 py-2 hover:border-vad-red hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 p-3 flex items-center gap-2">
          <input
            data-testid="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about wheels, aero, sizes..."
            className="flex-1 bg-[#1a1a1f] text-white text-sm rounded-md px-3 py-2.5 outline-none focus:ring-1 focus:ring-vad-red placeholder:text-white/30"
          />
          <button
            data-testid="chat-send-button"
            onClick={() => send()}
            disabled={loading}
            className="w-10 h-10 rounded-md bg-vad-red text-white grid place-items-center disabled:opacity-50 hover:bg-white hover:text-black transition-colors"
            aria-label="Send"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}
