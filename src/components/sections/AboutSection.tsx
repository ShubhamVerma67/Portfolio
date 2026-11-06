"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {

  return (
    <section id="about" className="relative w-full py-28 sm:py-36 bg-dark-900 border-t border-zinc-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-crimson-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Label */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
            [ 02 // PROFILE & PHILOSOPHY ]
          </span>
          <div className="h-px w-16 bg-zinc-800" />
          <span className="font-mono text-xs text-zinc-400 uppercase">
            MEET SHUBHAM VERMA
          </span>
        </div>

        {/* Modern Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portrait & Creative Passport */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-crimson-500/20 via-zinc-700/20 to-electric-cyan/20 blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-dark-950 border border-zinc-800 shadow-2xl">
                {/* Real High-Res Portrait Image extracted from video */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-dark-950">
                  <Image
                    src="/images/shubham-portrait.jpg"
                    alt="Shubham Verma - Graphic Designer"
                    fill
                    className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />

                  {/* Red Horizontal Laser Overlay Motif matching video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-crimson-500/40 shadow-[0_0_12px_rgba(255,42,85,0.8)] pointer-events-none" />

                  {/* Floating Camera Metadata Tags */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-emerald-400 px-2 py-1 rounded bg-dark-900/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED CREATIVE
                  </div>

                  {/* Bottom Portrait Card Info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-white text-base tracking-tight">
                        {PERSONAL_INFO.name}
                      </h4>
                      <p className="font-mono text-xs text-crimson-400">
                        {PERSONAL_INFO.title} • 3+ YRS EXP
                      </p>
                    </div>
                    <div className="text-right font-mono text-[10px] text-zinc-400">
                      <span>NEW DELHI</span>
                      <span className="block text-zinc-400">INDIA</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>

          {/* Right Column: Editorial Typography & Profile Story */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            {/* Profile Paragraphs */}
            <div className="flex flex-col gap-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-zinc-200 font-medium text-lg sm:text-xl leading-relaxed">
                {PERSONAL_INFO.fullBio[0]}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {PERSONAL_INFO.fullBio[1]}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-crimson-500/20 flex items-center gap-2 group"
                data-cursor="pointer"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-dark-950 hover:bg-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-wider font-bold border border-zinc-700 transition-all"
                data-cursor="pointer"
              >
                DISCUSS A COMMISSION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
