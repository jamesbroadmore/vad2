import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { programmes } from "../mock";
import { PageHero } from "./Wheels";
import useReveal from "../hooks/useReveal";

export default function Programmes() {
  useReveal();
  const [active, setActive] = useState(null);

  return (
    <div>
      <PageHero
        tag="VEHICLE PROGRAMMES"
        title="Track & Street Builds"
        sub="Race-derived widebody conversions and full carbon aero programmes for the world's most iconic GT platforms."
        image="https://images.unsplash.com/photo-1593516979583-cf194560a7f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {programmes.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="reveal group relative overflow-hidden aspect-[16/10] text-left"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-vad-red text-xs uppercase tracking-wider mb-1">{p.category}</p>
                <h3 className="font-display text-2xl md:text-3xl text-white">{p.name}</h3>
                <div className="flex gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider border border-white/25 text-white/70 px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute top-5 right-5 w-11 h-11 bg-vad-red grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-[90] grid place-items-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActive(null)}>
          <div className="relative bg-[#101013] border border-white/10 max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 grid place-items-center text-white hover:bg-vad-red transition-colors">
              <X size={20} />
            </button>
            <img src={active.image} alt={active.name} className="w-full aspect-[16/9] object-cover" />
            <div className="p-8">
              <p className="text-vad-red text-xs uppercase tracking-wider mb-2">{active.category}</p>
              <h3 className="font-display font-bold text-3xl text-white mb-4">{active.name}</h3>
              <p className="text-white/65 leading-relaxed mb-6">{active.blurb}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {active.tags.map((t) => (
                  <span key={t} className="text-xs uppercase tracking-wider border border-vad-red/50 text-vad-red px-3 py-1.5">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-7 py-3.5 hover:bg-white hover:text-black transition-colors">
                Enquire About This Build <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
