"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { Project, ProjectCategory } from "@/types/portfolio";
import ProjectModal from "@/components/ui/ProjectModal";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Filter,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Editorial & Book Cover Design",
  "Poster & Flyer Design",
  "Social Media Creatives",
  "Digital Marketing Creatives",
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleNextProject = () => {
    if (!activeModalProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeModalProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setActiveModalProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeModalProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeModalProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setActiveModalProject(PROJECTS[prevIndex]);
  };

  return (
    <section id="work" className="relative w-full py-28 sm:py-36 bg-dark-900 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-crimson-400 tracking-widest uppercase">
                [ 04 // SELECTED ARCHIVE ]
              </span>
              <div className="h-px w-12 bg-zinc-800" />
              <span className="font-mono text-xs text-zinc-400 uppercase">
                PORTFOLIO SHOWCASE
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              FEATURED WORK &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-pink-400 to-electric-purple">
                CREATIVE EXPERIMENTS
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            SHOWING <span className="text-white font-bold">{filteredProjects.length}</span> OF{" "}
            <span className="text-zinc-400">{PROJECTS.length} CURATED PROJECTS</span>
          </div>
        </div>

        {/* Category Filter Pills (All 8 Categories) */}
        <div className="mb-12 overflow-x-auto pb-4 custom-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-crimson-500 text-white font-bold border-crimson-400 shadow-lg shadow-crimson-500/20"
                    : "bg-dark-950/80 text-zinc-400 hover:text-white border-zinc-800/80 hover:border-zinc-700"
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-dark-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-crimson-500/5"
              data-cursor="pointer"
              data-cursor-text="VIEW"
            >
              {/* Project Image Box with Auto-Adjust (No Cut, Full Image Visible) */}
              <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden bg-dark-950 flex items-center justify-center p-6 sm:p-8">
                {/* Ambient Blurred Backdrop matching image palette */}
                <div className="absolute inset-0 overflow-hidden opacity-25 filter blur-2xl scale-125 pointer-events-none">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-dark-950/60 pointer-events-none" />

                {/* Uncropped Full Image (Auto-Adjusted, 100% visible) */}
                <div className="relative w-full h-full flex items-center justify-center z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <span className="px-3 py-1 rounded-full bg-dark-950/90 border border-zinc-700/80 text-[10px] font-mono text-crimson-400 font-bold uppercase backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-dark-950/90 border border-zinc-700/80 text-[10px] font-mono text-zinc-300 backdrop-blur-md shadow-md">
                    {project.year}
                  </span>
                </div>

                {/* Hover Center Reveal Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-crimson-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-2xl flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW PROJECT</span>
                  </div>
                </div>

                {/* Client Tag on bottom corner */}
                <div className="absolute bottom-3 left-4 z-20 font-mono text-[11px] text-zinc-300 px-3 py-1 rounded-lg bg-dark-950/90 border border-zinc-800/80 backdrop-blur-md shadow-md">
                  CLIENT: <span className="text-white font-semibold">{project.client}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-display font-black text-xl text-white group-hover:text-crimson-400 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tools & Details */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-900 border border-zinc-800 text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-dark-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-crimson-500 group-hover:text-crimson-400 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on Behance CTA Button */}
        <div className="mt-14 sm:mt-18 flex flex-col items-center justify-center text-center">
          <a
            href="https://www.behance.net/shubhamverma46"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-crimson-600 via-crimson-500 to-pink-600 text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider shadow-2xl shadow-crimson-500/25 hover:shadow-crimson-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-crimson-400/40"
            data-cursor="pointer"
            data-cursor-text="BEHANCE"
          >
            <span>VIEW MORE ON BEHANCE</span>

            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* Full-Screen Project Presentation Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
}
