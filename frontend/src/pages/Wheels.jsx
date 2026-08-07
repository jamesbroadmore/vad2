import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { wheelProducts, wheelBenefits, wheelSizes } from "../mock";
import useReveal from "../hooks/useReveal";

const PageHero = ({ tag, title, sub, image }) => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#08080a]" />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <p className="font-display text-vad-red tracking-widest-xl text-sm mb-4">{tag}</p>
      <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">{title}</h1>
      <p className="text-white/65 text-lg max-w-2xl">{sub}</p>
    </div>
  </section>
);

export { PageHero };

export default function Wheels() {
  useReveal();
  return (
    <div>
      <PageHero
        tag="FORGED WHEELS"
        title="Magnesium & Aluminium"
        sub="1 & 2 piece super lightweight forged wheel designs. If you want the pinnacle product, choose magnesium forged."
        image="/vad/wheels/wheels-hero.jpg"
      />

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {wheelBenefits.map((b, i) => (
            <div key={b.title} className="reveal bg-[#101013] border border-white/10 p-7" style={{ transitionDelay: `${i * 60}ms` }}>
              <p className="font-display font-bold text-3xl text-vad-red mb-3">{b.title}</p>
              <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="reveal mb-10">
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">THE COLLECTION</p>
          <h2 className="font-display font-bold text-4xl text-white">Motorsport road & race wheels</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wheelProducts.map((w, i) => (
            <div key={w.id} className="reveal group bg-[#101013] border border-white/10 overflow-hidden card-glow transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="aspect-square overflow-hidden bg-black">
                <img src={w.image} alt={w.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <p className="text-vad-red text-xs uppercase tracking-wider mb-1">{w.type}</p>
                <h3 className="font-display text-xl text-white mb-2">{w.name}</h3>
                <p className="text-white/50 text-sm mb-4">{w.sizes}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-display uppercase tracking-wider text-xs text-white/70">{w.price}</span>
                  <Link to="/contact" className="font-display uppercase tracking-wider text-xs text-vad-red hover:text-white transition-colors inline-flex items-center gap-1">
                    Enquire <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="bg-[#0b0b0e] border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="reveal mb-10">
            <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">SIZES & WIDTHS</p>
            <h2 className="font-display font-bold text-4xl text-white">Available specifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {wheelSizes.map((s, i) => (
              <div key={s.title} className="reveal bg-[#101013] border border-white/10 p-7" style={{ transitionDelay: `${i * 70}ms` }}>
                <h3 className="font-display text-lg text-white mb-4">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.rows.map((r) => (
                    <li key={r} className="flex items-center gap-2.5 text-white/60 text-sm font-mono">
                      <Check size={15} className="text-vad-red shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal text-white/40 text-sm mt-6">
            Various offsets and applications available — please get in touch for further details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 text-center">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-white mb-6">
          Configure your bespoke forged set
        </h2>
        <Link to="/contact" className="reveal inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
