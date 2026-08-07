import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { navLinks, contactInfo } from "../mock";
import { VadLogo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <VadLogo className="h-10 mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Forged wheels, carbon fibre & GT aero styling. Bespoke motorsport
              engineering designed and built in England.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 grid place-items-center border border-white/15 text-white/60 hover:border-vad-red hover:text-vad-red transition-colors"
                  aria-label="social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm text-white mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-white/50 text-sm hover:text-vad-red transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm text-white mb-4">
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Porsche GT3R Aero</li>
              <li>Nissan GTR Widebody</li>
              <li>BMW Z4 GT3 V8</li>
              <li>Forged Magnesium Wheels</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-vad-red mt-0.5 shrink-0" />
                {contactInfo.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-vad-red shrink-0" />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-vad-red shrink-0" />
                {contactInfo.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} VAD Design. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-display tracking-wider uppercase">
            Forged · Carbon · Aero
          </p>
        </div>
      </div>
    </footer>
  );
}
