import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { contactInfo } from "../mock";
import { PageHero } from "./Wheels";
import useReveal from "../hooks/useReveal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const interests = ["Forged Wheels", "Carbon Aero", "Widebody Programme", "Bespoke Build", "Other"];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: interests[0], message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch(`${API}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setForm({ name: "", email: "", phone: "", interest: interests[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero
        tag="CONTACT"
        title="Start Your Enquiry"
        sub="Tell us about your project — from a single forged wheel set to a full carbon widebody programme."
        image="https://images.unsplash.com/photo-1552962730-61f41ae62092?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div className="reveal space-y-6">
          {[
            { icon: MapPin, label: "Location", value: contactInfo.location },
            { icon: Mail, label: "Email", value: contactInfo.email },
            { icon: Phone, label: "Phone", value: contactInfo.phone },
            { icon: Clock, label: "Hours", value: contactInfo.hours },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 bg-[#101013] border border-white/10 p-5">
              <div className="w-11 h-11 bg-vad-red/10 grid place-items-center shrink-0">
                <c.icon className="text-vad-red" size={20} />
              </div>
              <div>
                <p className="font-display uppercase tracking-wider text-xs text-white/50 mb-1">{c.label}</p>
                <p className="text-white">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal bg-[#101013] border border-white/10 p-7 md:p-9">
          {status === "done" ? (
            <div data-testid="contact-success-message" className="h-full min-h-[360px] grid place-items-center text-center">
              <div>
                <CheckCircle2 className="text-vad-red mx-auto mb-4" size={54} />
                <h3 className="font-display text-2xl text-white mb-2">Enquiry received</h3>
                <p className="text-white/60">Thank you — our team will be in touch shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 font-display uppercase tracking-wider text-sm text-vad-red hover:text-white transition-colors">
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field data-testid="contact-name-input" label="Name *" value={form.name} onChange={update("name")} placeholder="Your name" required />
                <Field data-testid="contact-email-input" label="Email *" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field data-testid="contact-phone-input" label="Phone" value={form.phone} onChange={update("phone")} placeholder="Optional" />
                <div>
                  <label className="font-display uppercase tracking-wider text-xs text-white/50 mb-2 block">Interest</label>
                  <select data-testid="contact-interest-select" value={form.interest} onChange={update("interest")} className="w-full bg-[#08080a] border border-white/15 text-white px-4 py-3 outline-none focus:border-vad-red transition-colors">
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="font-display uppercase tracking-wider text-xs text-white/50 mb-2 block">Message *</label>
                <textarea data-testid="contact-message-textarea" value={form.message} onChange={update("message")} rows={5} required placeholder="Tell us about your build..." className="w-full bg-[#08080a] border border-white/15 text-white px-4 py-3 outline-none focus:border-vad-red transition-colors resize-none" />
              </div>
              {status === "error" && (
                <p className="text-vad-red text-sm">Something went wrong. Please try again or email us directly.</p>
              )}
              <button data-testid="contact-submit-button" type="submit" disabled={status === "loading"} className="inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors disabled:opacity-60">
                {status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Sending</> : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

const Field = ({ label, ...props }) => (
  <div>
    <label className="font-display uppercase tracking-wider text-xs text-white/50 mb-2 block">{label}</label>
    <input {...props} className="w-full bg-[#08080a] border border-white/15 text-white px-4 py-3 outline-none focus:border-vad-red transition-colors" />
  </div>
);
