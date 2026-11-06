"use client";

import React from "react";
import { SKILLS } from "@/data/portfolioData";

export default function SkillsSection() {
  const filteredSkills = SKILLS;

  return (
    <section id="skills" className="relative w-full py-28 sm:py-36 bg-dark-950 border-t border-zinc-800/80">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
                [ 03 // ARSENAL & TOOLKIT ]
              </span>
              <div className="h-px w-12 bg-zinc-800" />
              <span className="font-mono text-xs text-zinc-400 uppercase">
                INDUSTRY STANDARDS
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              DESIGN SOFTWARE &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-pink-400 to-electric-purple">
                TECHNICAL MASTERY
              </span>
            </h2>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="relative rounded-2xl p-6 bg-dark-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              style={{
                boxShadow: `0 0 0 0 ${skill.brandColor}00`,
              }}
              data-cursor="pointer"
            >
              {/* Subtle software accent ambient glow on hover */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: skill.brandColor }}
              />

              {/* Card Top: Monogram Badge & Info */}
              <div>
                <div className="flex items-start justify-between mb-5">
                  {/* Authentic App Badge */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-black text-2xl border transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    style={{
                      backgroundColor: "#0B0C10",
                      borderColor: `${skill.brandColor}60`,
                      color: skill.brandColor,
                      boxShadow: `0 4px 20px ${skill.brandColor}25`,
                    }}
                  >
                    {skill.code}
                  </div>

                  {/* Experience Badge */}
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[11px] text-zinc-400 uppercase">
                      EXPERIENCE
                    </span>
                    <span className="font-mono text-xs font-bold text-white">
                      {skill.years}
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-zinc-100 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Card Bottom: Specialties Chips */}
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2">
                  KEY SPECIALTIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Arsenal Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              ALL ARTWORKS DELIVERED IN MULTI-FORMAT (AI, PSD, INDD, CDR, EPS, PDF/X-1A)
            </span>
          </div>
          <div className="text-zinc-400 text-[11px]">
            STRICT CMYK / PANTONE COLOR CALIBRATION
          </div>
        </div>
      </div>
    </section>
  );
}
