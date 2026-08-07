import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { stats } from "../mock";
import { PageHero } from "./Wheels";
import useReveal from "../hooks/useReveal";

export default function About() {
  useReveal();
  return (
    <div>
      <PageHero
        tag="ABOUT VAD"
        title="Engineered In England"
        sub="VAD Design are specialists in forged wheels, carbon fibre and GT aero styling — delivering bespoke custom applications for the world's most demanding drivers."
        image="https://images.unsplash.com/photo-1578478412827-8c0ec4fdde15?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <p className="font-display text-vad-red tracking-widest-xl text-sm mb-4">OUR CRAFT</p>
          <h2 className="font-display font-bold text-4xl text-white mb-6">Where motorsport meets the street</h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              From forged magnesium wheels born on the race track to full carbon fibre widebody
              programmes, every VAD product is engineered without compromise. We combine precision
              3-D hot forging, aerospace prepreg carbon and hand-finished craftsmanship.
            </p>
            <p>
              Our GT aero programmes for Porsche, Nissan GTR and BMW platforms are equally at home
              on the circuit or the road — track & street, exactly as our clients demand.
            </p>
            <p>
              Whatever the application, if you want the pinnacle product, VAD delivers bespoke
              engineering of the highest order.
            </p>
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-white font-display uppercase tracking-wider text-sm hover:text-vad-red transition-colors">
            Work With Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1614740932412-963402533312?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" alt="wheel" className="w-full aspect-[3/4] object-cover mt-8" />
          <img src="https://images.unsplash.com/photo-1706883376540-b21e5559fc45?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" alt="car" className="w-full aspect-[3/4] object-cover" />
        </div>
      </section>

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

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-24 text-center">
        <h2 className="reveal font-display font-bold text-3xl md:text-5xl text-white mb-6">
          Choose the pinnacle. <span className="text-vad-red">Choose VAD.</span>
        </h2>
        <Link to="/contact" className="reveal inline-flex items-center gap-2 bg-vad-red text-white font-display uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors">
          Get In Touch <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
