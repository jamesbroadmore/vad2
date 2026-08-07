import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Feather, Gauge } from "lucide-react";
import { carbonItems } from "../mock";
import { PageHero } from "./Wheels";
import useReveal from "../hooks/useReveal";

const features = [
  { icon: Feather, title: "Prepreg Autoclave", desc: "Aerospace-grade prepreg carbon cured under heat and pressure for maximum stiffness at minimum weight." },
  { icon: Gauge, title: "Downforce Engineered", desc: "Every splitter, wing and diffuser is developed for real aerodynamic gain — not just looks." },
  { icon: Layers, title: "Full Widebody", desc: "Complete GT3R-inspired panel sets that transform the stance and presence of the car." },
];

export default function Aero() {
  useReveal();
  return (
    <div>
      <PageHero
        tag="AERO & CARBON FIBRE"
        title="GT Aero Programme"
        sub="Carbon fibre body styling and aero conversions engineered for downforce, balance and unmistakable motorsport presence."
        image="/vad/aero/porsche-997-aero.jpg"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title} className="reveal bg-[#101013] border border-white/10 p-8" style={{ transitionDelay: `${i * 70}ms` }}>
              <f.icon className="text-vad-red mb-5" size={34} strokeWidth={1.5} />
              <h3 className="font-display text-xl text-white mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 space-y-20">
        {carbonItems.map((c, i) => (
          <div key={c.title} className={`reveal grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <div className="overflow-hidden group [direction:ltr]">
              <img src={c.image} alt={c.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="[direction:ltr]">
              <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">0{i + 1}</p>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">{c.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{c.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-white font-display uppercase tracking-wider text-sm hover:text-vad-red transition-colors">
                Enquire <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0b0b0e] border-t border-white/10 py-20 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-white mb-5">Commission a full carbon programme</h2>
          <p className="reveal text-white/60 mb-8">Bespoke design, engineering and manufacture for your platform.</p>
          <Link to="/contact" className="reveal inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors">
            Start Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
