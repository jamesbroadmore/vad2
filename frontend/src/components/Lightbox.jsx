import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Reusable full-screen image lightbox with keyboard + arrow navigation.
export default function Lightbox({ images, index, onClose, onIndexChange }) {
  const has = index !== null && index >= 0 && images[index];

  const go = useCallback(
    (dir) => {
      if (index === null) return;
      const next = (index + dir + images.length) % images.length;
      onIndexChange(next);
    },
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    if (!has) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [has, go, onClose]);

  if (!has) return null;
  const img = images[index];

  return (
    <div
      data-testid="lightbox"
      className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-sm grid place-items-center p-4 animate-[fadeIn_0.25s_ease]"
      onClick={onClose}
    >
      <button
        data-testid="lightbox-close"
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-vad-red grid place-items-center text-white transition-colors"
        aria-label="Close"
      >
        <X size={22} />
      </button>

      <button
        data-testid="lightbox-prev"
        onClick={(e) => { e.stopPropagation(); go(-1); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/10 hover:bg-vad-red grid place-items-center text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={26} />
      </button>

      <figure className="max-w-[92vw] max-h-[86vh]" onClick={(e) => e.stopPropagation()}>
        <img
          data-testid="lightbox-image"
          src={img.src}
          alt={img.caption || ""}
          className="max-w-[92vw] max-h-[78vh] object-contain mx-auto shadow-2xl"
        />
        <figcaption className="text-center mt-4">
          {img.caption && (
            <span className="font-display uppercase tracking-wider text-sm text-white">{img.caption}</span>
          )}
          <span className="block text-white/40 text-xs mt-1">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        data-testid="lightbox-next"
        onClick={(e) => { e.stopPropagation(); go(1); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/10 hover:bg-vad-red grid place-items-center text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
}
