"use client";

import React, { useRef, useState, useEffect } from "react";
import HeroCanvas from "@/components/canvas/HeroCanvas";
import { ArrowDown, Sparkles, MoveRight, Layers, Eye, Award } from "lucide-react";
import { PERSONAL_INFO, ACHIEVEMENTS } from "@/data/portfolioData";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;
      if (totalDist > 0) {
        const currentScrolled = -rect.top;
        const progress = Math.min(1, Math.max(0, currentScrolled / totalDist));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[140vh] sm:h-[160vh] bg-dark-950"
    >
      {/* Sticky container for visual storytelling canvas */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between pt-20 sm:pt-24">
        {/* Canvas Background Layer (Object-fit: cover, no HTML video tag) */}
        <div className="absolute inset-0 z-0">
          <HeroCanvas scrollProgress={scrollProgress} isScrubbingEnabled={true} />
        </div>

        {/* Main Hero Center Typography */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 my-auto flex flex-col items-start justify-center">
          {/* Subtitle Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/80 border border-zinc-700/60 backdrop-blur-md mb-4 sm:mb-6 shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 text-crimson-400" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-200 uppercase">
              {PERSONAL_INFO.subtitle}
            </span>
          </div>

          {/* Oversized Bold Typography: SHUBHAM VERMA */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase leading-[0.88] select-none text-balance">
            <span className="block drop-shadow-2xl">SHUBHAM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              VERMA
            </span>
          </h1>

          {/* Red Laser Accent Bar below name */}
          <div className="w-24 sm:w-36 h-1 bg-gradient-to-r from-crimson-500 via-crimson-400 to-transparent my-4 sm:my-6 rounded-full" />

          {/* Short Introduction highlighting 3+ years of creative experience */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed text-balance">
            Transforming concepts into high-impact visual identities, publication book covers, packaging, and digital media. 
            <span className="text-white font-medium"> 3+ years of professional craft</span> rooted in bold typography, emotional storytelling, and pre-press precision.
          </p>

          {/* Interactive CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={handleExploreClick}
              className="px-7 py-3.5 rounded-full bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-xl shadow-crimson-500/25 hover:shadow-crimson-500/50 flex items-center gap-3 group"
              data-cursor="pointer"
              data-cursor-text="EXPLORE"
            >
              <span>EXPLORE MY WORK</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-dark-900/90 hover:bg-zinc-800 text-zinc-200 font-mono text-sm uppercase tracking-wider font-semibold border border-zinc-700/80 backdrop-blur-md transition-all flex items-center gap-2 group"
              data-cursor="pointer"
              data-cursor-text="CONTACT"
            >
              <Eye className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span>LET&apos;S TALK</span>
            </a>
          </div>
        </div>

        {/* Hero Bottom Bar with Scroll Indicator & Key Metrics */}
        <div className="relative z-10 w-full pb-8 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Scroll Indicator */}
          <a
            href="#about"
            className="flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            data-cursor="pointer"
          >
            <div className="w-6 h-10 rounded-full border border-zinc-600 group-hover:border-crimson-400 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1 h-2 rounded-full bg-crimson-400 animate-bounce" />
            </div>
            <span className="tracking-widest uppercase">SCROLL TO DISCOVER</span>
          </a>

          {/* Quick Metrics Badges */}
          <div className="flex items-center gap-4 sm:gap-8 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">3+</span>
              <span className="text-[11px] text-zinc-400">Years Experience</span>
            </div>
            <div className="w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">8</span>
              <span className="text-[11px] text-zinc-400">Design Disciplines</span>
            </div>
            <div className="w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <span className="text-crimson-400 font-bold text-sm">100%</span>
              <span className="text-[11px] text-zinc-400">Print Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
