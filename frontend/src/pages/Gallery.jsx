import React, { useState, useMemo } from "react";
import { galleryCategories, galleryImages } from "../mock";
import { PageHero } from "./Wheels";
import Lightbox from "../components/Lightbox";
import useReveal from "../hooks/useReveal";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [index, setIndex] = useState(null);
  useReveal([cat]);

  const filtered = useMemo(
    () => (cat === "All" ? galleryImages : galleryImages.filter((g) => g.category === cat)),
    [cat]
  );

  return (
    <div>
      <PageHero
        tag="GALLERY"
        title="The VAD Portfolio"
        sub="Real forged wheels, carbon aero and complete GT builds from the VAD Design workshop."
        image="/vad/z4/z4-side.jpg"
      />

      {/* Category filter */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12">
        <div className="flex flex-wrap gap-2.5" data-testid="gallery-filters">
          {galleryCategories.map((c) => (
            <button
              key={c}
              data-testid={`gallery-filter-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              onClick={() => setCat(c)}
              className={`font-display uppercase tracking-wider text-xs px-4 py-2.5 border transition-colors ${
                cat === c
                  ? "bg-vad-red border-vad-red text-white"
                  : "border-white/15 text-white/60 hover:border-vad-red hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((g, i) => (
            <button
              key={g.src}
              data-testid="gallery-item"
              onClick={() => setIndex(i)}
              className="reveal group relative mb-4 block w-full overflow-hidden break-inside-avoid"
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-vad-red text-[10px] uppercase tracking-wider mb-0.5">{g.category}</p>
                <p className="font-display text-white text-sm">{g.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox images={filtered} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </div>
  );
}
