"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Phone, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "Selected Work", href: "#work" },
  { name: "About Profile", href: "#about" },
  { name: "Skills & Tools", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Freelance", href: "#freelance" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-dark-950/85 backdrop-blur-md border-b border-zinc-800/60 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group"
            data-cursor="pointer"
            data-cursor-text="TOP"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-display font-bold text-xs text-white group-hover:border-crimson-500 group-hover:text-crimson-400 transition-all shadow-lg">
              SV
            </div>
            <span className="font-display font-black tracking-tight text-sm sm:text-base text-white group-hover:text-crimson-400 transition-colors whitespace-nowrap">
              SHUBHAM VERMA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-dark-900/70 border border-zinc-800/80 rounded-full px-3.5 xl:px-5 py-2 backdrop-blur-md shadow-2xl shrink-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 xl:px-4 py-1.5 text-[11px] xl:text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800/70 rounded-full transition-all whitespace-nowrap shrink-0 group"
                data-cursor="pointer"
              >
                <span className="whitespace-nowrap">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0 ml-4 lg:ml-8 xl:ml-12">
            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN FOR WORK</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-4 xl:px-5 py-2 rounded-full bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-crimson-500/20 hover:shadow-crimson-500/40 flex items-center gap-1.5 whitespace-nowrap group"
              data-cursor="pointer"
              data-cursor-text="HIRE"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-3 py-1.5 rounded-full bg-crimson-500 text-white text-[11px] font-mono font-bold"
            >
              TALK
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 sm:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2">
              PORTFOLIO DIRECTORY
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="flex items-center justify-between py-3 border-b border-zinc-800/60 text-lg font-display font-bold text-zinc-100 hover:text-crimson-400 transition-colors"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-crimson-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-crimson-400" />
                <span>EMAIL</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
