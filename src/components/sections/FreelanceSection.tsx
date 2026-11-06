"use client";

import React from "react";
import { FREELANCE_EXPERIENCE } from "@/data/portfolioData";
import {
  Sparkles,
  Shirt,
  Compass,
  Share2,
  Palette,
  ArrowUpRight,
  Check,
  Zap,
} from "lucide-react";

const ICONS = [Shirt, Compass, Share2, Palette];

export default function FreelanceSection() {
  return (
    <section id="freelance" className="relative w-full py-28 sm:py-36 bg-dark-900 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
                [ 06 // INDEPENDENT COMMISSIONS ]
              </span>
              <div className="h-px w-12 bg-zinc-800" />
              <span className="font-mono text-xs text-zinc-400 uppercase">
                DIRECT CLIENT PROJECTS
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              FREELANCE PRACTICE &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-pink-400 to-electric-cyan">
                BESPOKE DESIGN
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
            Collaborating with ambitious startups, fashion labels, and creative founders worldwide to produce distinctive visual identities, apparel art, and digital campaigns.
          </p>
        </div>

        {/* Floating Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FREELANCE_EXPERIENCE.map((item, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl p-8 bg-dark-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-crimson-500/5 overflow-hidden"
                data-cursor="pointer"
              >
                {/* Background Ambient Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-crimson-500/5 rounded-full blur-2xl group-hover:bg-crimson-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-zinc-800 flex items-center justify-center text-crimson-400 group-hover:border-crimson-500/60 group-hover:scale-105 transition-all shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-dark-900 border border-zinc-800 text-zinc-300">
                        {item.tag}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-800/80 text-zinc-400">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Client Scope */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-crimson-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <div className="font-mono text-xs text-zinc-400 mb-4">
                    CLIENT SCOPE: <span className="text-zinc-200">{item.client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                <div className="pt-6 border-t border-zinc-800/80">
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-3">
                    DELIVERABLES & OUTPUT
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {item.deliverables.map((deliv) => (
                      <div
                        key={deliv}
                        className="flex items-center gap-2 text-xs font-mono text-zinc-300"
                      >
                        <Zap className="w-3 h-3 text-crimson-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-8 rounded-3xl bg-dark-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              HAVE AN INDEPENDENT PROJECT OR BRAND LAUNCH?
            </h4>
            <p className="text-xs font-mono text-zinc-400">
              Available for direct client contracts, merchandise apparel graphics, and brand design.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-crimson-500/20 flex items-center gap-2 shrink-0 group"
            data-cursor="pointer"
          >
            <span>COMMISSION A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
