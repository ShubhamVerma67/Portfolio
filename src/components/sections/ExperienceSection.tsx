"use client";

import React, { useState } from "react";
import { WORK_EXPERIENCE } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  BookOpen,
  MonitorPlay,
} from "lucide-react";

export default function ExperienceSection() {
  const [selectedExpId, setSelectedExpId] = useState<string>(WORK_EXPERIENCE[0].id);

  return (
    <section id="experience" className="relative w-full py-28 sm:py-36 bg-dark-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
            [ 05 // CAREER TIMELINE ]
          </span>
          <div className="h-px w-12 bg-zinc-800" />
          <span className="font-mono text-xs text-zinc-400 uppercase">
            PROFESSIONAL ROLES
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-14">
          WORK EXPERIENCE &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 to-electric-cyan">
            INDUSTRY IMPACT
          </span>
        </h2>

        {/* Experience Cards Stack */}
        <div className="flex flex-col gap-10">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="relative rounded-3xl p-6 sm:p-10 bg-dark-900 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Subtle accent vertical indicator */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: exp.accentColor }}
              />

              {/* Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-800 text-white border border-zinc-700">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-crimson-400 font-semibold">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-zinc-800 text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-crimson-400" />
                    <span>{exp.period}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400">{exp.dateRange}</span>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-zinc-800 text-zinc-300">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Role Summary */}
              <div className="my-6">
                <p className="text-zinc-300 text-base leading-relaxed font-sans">
                  {exp.summary}
                </p>
              </div>

              {/* Responsibilities Pillars */}
              <div
                className={`grid grid-cols-1 ${
                  exp.responsibilities.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
                } gap-6 pt-2`}
              >
                {exp.responsibilities.map((group) => (
                  <div
                    key={group.title}
                    className="p-5 rounded-2xl bg-dark-950/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex flex-col gap-3"
                  >
                    <h4 className="font-display font-bold text-sm text-zinc-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
                      <span>{group.title}</span>
                    </h4>

                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed font-sans"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tools Used Pill Bar */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-zinc-500 uppercase mr-1">
                    APPLIED TOOLS:
                  </span>
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 border border-zinc-800 text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>PRE-PRESS CERTIFIED DELIVERABLES</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
