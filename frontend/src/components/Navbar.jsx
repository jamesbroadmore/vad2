import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../mock";

const VadLogo = ({ className = "h-8" }) => (
  <svg viewBox="0 0 300 110" className={className} aria-label="VAD">
    <g fill="none" strokeLinecap="round">
      {/* V */}
      <path d="M8 26 L54 92 L70 92 L30 26 Z" fill="#ffffff" />
      {/* red slash */}
      <path d="M60 92 L104 26 L120 26 L78 92 Z" fill="#E30613" />
      {/* A */}
      <path d="M108 92 L150 26 L166 26 L208 92 L188 92 L158 44 L128 92 Z" fill="#ffffff" />
      <rect x="140" y="70" width="36" height="9" fill="#ffffff" />
      {/* D */}
      <path d="M200 26 L244 26 C280 26 296 44 296 59 C296 74 280 92 244 92 L214 92 L214 74 L244 74 C262 74 270 67 270 59 C270 51 262 44 244 44 L214 44 Z" fill="#ffffff" />
      {/* red arc accent over D */}
      <path d="M204 20 L250 20 C288 20 306 40 300 60" stroke="#E30613" strokeWidth="5" fill="none" />
    </g>
  </svg>
);

export { VadLogo };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <VadLogo className="h-8 md:h-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-xs tracking-widest-xl text-white/50 hidden sm:block">
            DESIGN
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((l) => {
            const active = location.pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`font-display text-[13px] tracking-wider uppercase relative py-1 transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-vad-red transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center font-display text-sm uppercase tracking-wider bg-vad-red text-white px-5 py-2.5 hover:bg-white hover:text-black transition-colors duration-300"
        >
          Enquire
        </Link>

        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="bg-[#08080a] px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="font-display text-base uppercase tracking-wider text-white/80 py-3 border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 text-center font-display uppercase tracking-wider bg-vad-red text-white py-3"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}
