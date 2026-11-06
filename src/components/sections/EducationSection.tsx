"use client";

import React from "react";
import { EDUCATION } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative w-full py-28 sm:py-36 bg-dark-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
            [ 07 // ACADEMIC FOUNDATIONS ]
          </span>
          <div className="h-px w-12 bg-zinc-800" />
          <span className="font-mono text-xs text-zinc-400 uppercase">
            CREDENTIALS & TRAINING
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-14">
          EDUCATION &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-pink-400 to-electric-cyan">
            FORMAL DIPLOMAS
          </span>
        </h2>

        {/* Clean Modern Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative rounded-3xl p-8 bg-dark-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Card Top: Institution & Period */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-dark-950 border border-zinc-800 flex items-center justify-center text-crimson-400 group-hover:border-crimson-500/50 group-hover:scale-105 transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl text-white tracking-tight">
                        {edu.institution}
                      </h3>
                      <p className="font-mono text-xs text-crimson-400 font-bold uppercase">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950 border border-zinc-800 font-mono text-xs text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Coursework Modules */}
                <div>
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-3">
                    CORE SPECIALIZATION MODULES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-dark-950/70 p-2.5 rounded-xl border border-zinc-800/80"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">PROGRAM COMPLETION</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
