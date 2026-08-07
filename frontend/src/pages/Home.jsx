import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Disc3, Wind, Car, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, services, programmes, stats, wheelBenefits } from "../mock";
import useReveal from "../hooks/useReveal";

const iconMap = { disc: Disc3, wind: Wind, car: Car, wrench: Wrench };

export default function Home() {
  const [slide, setSlide] = useState(0);
  useReveal();

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const current = heroSlides[slide];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
        ))}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-center">
          <div key={slide} className="max-w-2xl">
            <p className="font-display text-vad-red tracking-widest-xl text-sm mb-4 animate-[fadeIn_0.8s_ease]">
              {current.tag}
            </p>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] text-white mb-5">
              {current.title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8">
              {current.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-7 py-3.5 hover:bg-white hover:text-black transition-colors"
              >
                Explore Programmes
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/wheels"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display uppercase tracking-wider px-7 py-3.5 hover:border-vad-red hover:text-vad-red transition-colors"
              >
                Forged Wheels
              </Link>
            </div>
          </div>
        </div>

        {/* slide controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10 max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1 transition-all duration-300 ${
                  i === slide ? "w-10 bg-vad-red" : "w-5 bg-white/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
              className="w-10 h-10 border border-white/20 grid place-items-center text-white hover:border-vad-red hover:text-vad-red transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
              className="w-10 h-10 border border-white/20 grid place-items-center text-white hover:border-vad-red hover:text-vad-red transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-vad-red py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center">
              {["FORGED MAGNESIUM", "CARBON FIBRE AERO", "GT WIDEBODY", "BESPOKE ENGINEERING", "TRACK & STREET", "MADE IN ENGLAND"].map((t) => (
                <span key={t} className="font-display uppercase tracking-wider text-white text-sm px-6">
                  {t} <span className="text-white/50 ml-6">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="reveal mb-14 max-w-2xl">
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">WHAT WE DO</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            The pinnacle of bespoke motorsport engineering
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                to={s.path}
                key={s.id}
                className="reveal group bg-[#101013] border border-white/10 p-7 card-glow transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Icon className="text-vad-red mb-6" size={34} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-white mb-1">{s.title}</h3>
                <p className="text-vad-red text-xs uppercase tracking-wider mb-4">{s.subtitle}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-white text-sm font-display uppercase tracking-wider group-hover:text-vad-red transition-colors">
                  Discover <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0b0b0e]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((st) => (
            <div key={st.label} className="reveal text-center">
              <p className="font-display font-bold text-4xl md:text-5xl text-white">{st.value}</p>
              <p className="text-vad-red text-xs uppercase tracking-wider mt-2">{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMMES PREVIEW */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">VEHICLE PROGRAMMES</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Our most popular builds</h2>
          </div>
          <Link to="/programmes" className="font-display uppercase tracking-wider text-sm text-white/70 hover:text-vad-red transition-colors inline-flex items-center gap-2">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programmes.slice(0, 6).map((p, i) => (
            <Link
              to="/programmes"
              key={p.id}
              className="reveal group relative overflow-hidden aspect-[4/3] block"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-vad-red text-xs uppercase tracking-wider mb-1">{p.category}</p>
                <h3 className="font-display text-2xl text-white">{p.name}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-vad-red grid place-items-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BENEFITS BANNER */}
      <section className="relative py-24 bg-[#0b0b0e] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="reveal max-w-2xl mb-12">
            <p className="font-display text-vad-red tracking-widest-xl text-sm mb-3">WHY FORGED MAGNESIUM</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Engineered to outperform</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wheelBenefits.map((b, i) => (
              <div key={b.title} className="reveal border-l-2 border-vad-red pl-5" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="font-display font-bold text-2xl text-white mb-2">{b.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="reveal relative overflow-hidden border border-white/10 bg-[#101013] p-10 md:p-16 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-vad-red/10 blur-3xl rounded-full" />
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-4 relative">START YOUR BUILD</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 relative">
            Ready to commission your VAD?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 relative">
            From a single forged wheel set to a full carbon widebody programme — let's build something extraordinary.
          </p>
          <Link to="/contact" className="relative inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors">
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
