"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-dark-950 border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-display font-bold text-xs text-white">
                SV
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              {PERSONAL_INFO.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">
              WORK
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              SKILLS
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              EXPERIENCE
            </a>
            <a href="#freelance" className="hover:text-white transition-colors">
              FREELANCE
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              EDUCATION
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              CONTACT
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 transition-colors group"
            data-cursor="pointer"
            data-cursor-text="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Big Subtle Watermark */}
        <div className="my-8 select-none pointer-events-none text-center">
          <span className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-zinc-900/60 tracking-tighter uppercase leading-none block">
            SHUBHAM VERMA
          </span>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-900 font-mono text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Shubham Verma. All Visual Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>PRINT & DIGITAL PRE-PRESS PERFECTION</span>
            <span>•</span>
            <span className="text-crimson-400 font-semibold">NEW DELHI, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
