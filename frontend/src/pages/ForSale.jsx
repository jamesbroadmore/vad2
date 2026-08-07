import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BadgeCheck, ShieldCheck, Check, Gauge } from "lucide-react";
import { carForSale } from "../mock";
import Lightbox from "../components/Lightbox";
import useReveal from "../hooks/useReveal";

export default function ForSale() {
  useReveal();
  const [index, setIndex] = useState(null);
  const car = carForSale;

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <img src={car.hero} alt={car.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16">
          <span className="inline-flex items-center gap-2 self-start bg-vad-red text-white font-display uppercase tracking-wider text-xs px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> For Sale · 1-of-1
          </span>
          <h1 data-testid="forsale-title" className="font-display font-bold text-5xl md:text-7xl text-white leading-[0.95] mb-3">
            {car.name}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-6">{car.subtitle}</p>
          <div className="flex flex-wrap items-center gap-6">
            <p data-testid="forsale-price" className="font-display font-bold text-4xl md:text-5xl text-vad-red">{car.price}</p>
            <Link
              to="/contact"
              data-testid="forsale-enquire-hero"
              className="inline-flex items-center gap-2 bg-white text-black font-display uppercase tracking-wider px-7 py-3.5 hover:bg-vad-red hover:text-white transition-colors"
            >
              Enquire Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="border-b border-white/10 bg-[#0b0b0e]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: MapPin, label: "Location", value: car.location },
            { icon: ShieldCheck, label: "Status", value: car.status },
            { icon: BadgeCheck, label: "Provenance", value: car.provenance },
          ].map((f) => (
            <div key={f.label} className="reveal flex items-start gap-3">
              <f.icon className="text-vad-red shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-display uppercase tracking-wider text-[11px] text-white/45">{f.label}</p>
                <p className="text-white text-sm">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid lg:grid-cols-[1.3fr_1fr] gap-14">
        <div className="reveal">
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-4">THE BUILD</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">A road-legal GT3, unrepeatable</h2>
          <div className="space-y-4 text-white/65 leading-relaxed">
            {car.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="reveal space-y-4">
          {car.highlights.map((h) => (
            <div key={h.title} className="bg-[#101013] border border-white/10 p-5 flex items-start gap-4">
              <Gauge className="text-vad-red shrink-0 mt-0.5" size={22} strokeWidth={1.5} />
              <div>
                <p className="font-display text-white text-base mb-1">{h.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL SPEC */}
      <section className="bg-[#0b0b0e] border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="reveal mb-10">
            <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">FULL SPECIFICATION</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Engineered to the last detail</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {car.specs.map((s, i) => (
              <div key={s.group} className="reveal bg-[#101013] border border-white/10 p-7" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-display text-lg text-white">{s.group}</h3>
                {s.note && <p className="text-vad-red text-xs uppercase tracking-wider mb-4 mt-1">{s.note}</p>}
                <ul className={`space-y-2.5 ${s.note ? "" : "mt-4"}`}>
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <Check size={15} className="text-vad-red shrink-0 mt-1" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal text-white/45 text-sm mt-6 max-w-3xl">{car.logistics}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="reveal mb-10">
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">GALLERY</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Every angle</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {car.gallery.map((g, i) => (
            <button
              key={g.src}
              data-testid="forsale-gallery-item"
              onClick={() => setIndex(i)}
              className="reveal group relative overflow-hidden aspect-square"
              style={{ transitionDelay: `${(i % 8) * 40}ms` }}
            >
              <img src={g.src} alt={g.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b0b0e] border-t border-white/10 py-20 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-white mb-4">Serious enquiries only</h2>
          <p className="reveal text-white/60 mb-8">
            A crown jewel for any private collection, or the ultimate road-legal track-day weapon. Worldwide shipping arranged.
          </p>
          <Link
            to="/contact"
            data-testid="forsale-enquire-cta"
            className="reveal inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            Enquire About This Car <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Lightbox images={car.gallery} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </div>
  );
}
