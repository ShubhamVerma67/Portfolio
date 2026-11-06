"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { X, ArrowLeft, ArrowRight, ExternalLink, Check, Copy, Sparkles, Layers, Sliders } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onSelectProjectForContact?: (projectTitle: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
  onSelectProjectForContact,
}: ProjectModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleDiscuss = () => {
    onClose();
    if (onSelectProjectForContact) {
      onSelectProjectForContact(project.title);
    }
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-dark-950/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-zinc-800 rounded-3xl shadow-2xl z-10 flex flex-col custom-scrollbar">
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-900/95 backdrop-blur-md border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-crimson-500/10 border border-crimson-500/30 text-[11px] font-mono text-crimson-400 font-bold uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs text-zinc-400">
              CLIENT: <strong className="text-zinc-200">{project.client}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="w-9 h-9 rounded-full bg-dark-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 flex items-center justify-center transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="w-9 h-9 rounded-full bg-dark-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 flex items-center justify-center transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-crimson-500 text-white flex items-center justify-center transition-colors ml-2"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          {/* Hero Showcase Image (Full Uncropped Auto-Adjusted View) */}
          <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-dark-950 border border-zinc-800 shadow-2xl flex items-center justify-center p-4 sm:p-6">
            {/* Ambient Blurred Backdrop */}
            <div className="absolute inset-0 overflow-hidden opacity-25 filter blur-3xl scale-125 pointer-events-none">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-dark-950/60 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center z-10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {project.metrics && (
              <div className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-xl bg-dark-900/90 backdrop-blur-md border border-zinc-800 font-mono text-xs text-white flex items-center gap-2 shadow-lg">
                <span className="text-zinc-400">{project.metrics.label}:</span>
                <span className="text-crimson-400 font-bold text-sm">
                  {project.metrics.value}
                </span>
              </div>
            )}
          </div>

          {/* Project Title & Overview */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
              <span>YEAR // {project.year}</span>
              {project.specs && (
                <span className="text-emerald-400 font-semibold">
                  {project.specs}
                </span>
              )}
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-dark-950 border border-zinc-800/80">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-crimson-400 uppercase tracking-widest font-bold">
                01 // THE CHALLENGE
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-electric-cyan uppercase tracking-widest font-bold">
                02 // CREATIVE SOLUTION
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Color Palette & Tools Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Palette */}
            {project.colorPalette && (
              <div className="p-5 rounded-2xl bg-dark-950 border border-zinc-800/80">
                <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
                  COLOR PALETTE (CLICK TO COPY HEX)
                </span>
                <div className="flex flex-wrap gap-3">
                  {project.colorPalette.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => handleCopyColor(hex)}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-zinc-800 hover:border-zinc-700 transition-all font-mono text-xs text-zinc-300"
                      title={`Copy ${hex}`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: hex }}
                      />
                      <span>{hex}</span>
                      {copiedHex === hex ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-zinc-400 group-hover:text-zinc-300" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Software Tools Used */}
            <div className="p-5 rounded-2xl bg-dark-950 border border-zinc-800/80">
              <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
                SOFTWARE & PRODUCTION SUITE
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-dark-900 border border-zinc-800 font-mono text-xs text-zinc-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
              Need a similar design system or cover layout?
            </span>
            <button
              onClick={handleDiscuss}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-crimson-500/25 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>DISCUSS A SIMILAR PROJECT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
