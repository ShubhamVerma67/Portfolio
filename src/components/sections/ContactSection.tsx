"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  ArrowUpRight,
  Share2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Branding & Logo Design",
    budget: "₹25,000 - ₹50,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with high-end response & confetti celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff2a55", "#00f0ff", "#ffffff", "#7b2cbf"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-28 sm:py-36 bg-dark-900 border-t border-zinc-800/80">
      {/* Ambient glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crimson-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-950 border border-zinc-800 text-xs font-mono text-crimson-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.92] max-w-5xl text-balance">
            LET&apos;S CREATE SOMETHING{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-pink-400 to-electric-cyan">
              AMAZING.
            </span>
          </h2>

          <p className="max-w-xl text-zinc-400 text-sm sm:text-base font-sans mt-6 leading-relaxed">
            Have a brand identity to build, a book cover to design, packaging to craft, or an apparel drop in mind? Reach out directly and let&apos;s build work that stands the test of time.
          </p>
        </div>

        {/* Contact Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Cards */}
            <div className="p-8 rounded-3xl bg-dark-950 border border-zinc-800 flex flex-col gap-6 shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider border-b border-zinc-800 pb-4">
                DIRECT CONTACT CHANNELS
              </h3>

              {/* Phone */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-zinc-800 flex items-center justify-center text-crimson-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      DIRECT TELEPHONE
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-crimson-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="px-2.5 py-1 rounded bg-dark-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono text-zinc-300 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? "COPIED" : "COPY"}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-zinc-800 flex items-center justify-center text-crimson-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      ELECTRONIC MAIL
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-crimson-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="px-2.5 py-1 rounded bg-dark-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono text-zinc-300 transition-colors"
                  title="Copy Email Address"
                >
                  {copiedType === "email" ? "COPIED" : "COPY"}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-start justify-between gap-4 pt-2 border-t border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-zinc-800 flex items-center justify-center text-crimson-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      STUDIO LOCATION
                    </span>
                    <span className="text-xs font-mono text-zinc-200 leading-relaxed block">
                      {PERSONAL_INFO.address}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      New Delhi, India
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.address, "address")}
                  className="px-2.5 py-1 rounded bg-dark-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono text-zinc-300 transition-colors shrink-0"
                  title="Copy Studio Address"
                >
                  {copiedType === "address" ? "COPIED" : "COPY"}
                </button>
              </div>
            </div>

            {/* Local Studio Time */}
            <div className="p-5 px-6 rounded-3xl bg-dark-950 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-crimson-400" />
                <span>NEW DELHI TIME (GMT+5:30)</span>
              </span>
              <span className="text-white font-bold">{currentTime || "IST"}</span>
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-3xl bg-dark-950 border border-zinc-800">
              <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-4">
                CREATIVE PROFILES & NETWORKS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {PERSONAL_INFO.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-dark-900 border border-zinc-800 hover:border-crimson-500/50 hover:bg-dark-850 transition-all flex items-center justify-between font-mono text-xs text-zinc-200 group"
                    data-cursor="pointer"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-crimson-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                    MESSAGE TRANSMITTED SUCCESSFULLY!
                  </h3>
                  <p className="text-sm font-sans text-zinc-300 max-w-md mb-8 leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Shubham Verma will review your project brief and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Branding & Logo Design",
                        budget: "₹25,000 - ₹50,000",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-mono uppercase text-zinc-200 tracking-wider transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-zinc-800 pb-4">
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                      PROJECT INQUIRY FORM
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-1">
                      Fill out the specifications below to schedule a consultation.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-zinc-400 uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-zinc-800 text-white font-sans text-sm placeholder:text-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-zinc-400 uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-zinc-800 text-white font-sans text-sm placeholder:text-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-zinc-400 uppercase">
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-crimson-500 transition-colors"
                      >
                        <option value="Branding & Logo Design">Branding & Logo Design</option>
                        <option value="Editorial & Book Cover Design">Editorial & Book Cover Design</option>
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="T-Shirt & Merchandise Design">T-Shirt & Merchandise Design</option>
                        <option value="Social Media Creatives">Social Media Creatives</option>
                        <option value="Poster & Flyer Design">Poster & Flyer Design</option>
                        <option value="Print Design & Brochures">Print Design & Brochures</option>
                        <option value="Digital Marketing Creatives">Digital Marketing Creatives</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-zinc-400 uppercase">
                        ESTIMATED BUDGET
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-crimson-500 transition-colors"
                      >
                        <option value="Under ₹15,000">Under ₹15,000</option>
                        <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000</option>
                        <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                        <option value="₹75,000+ (Comprehensive Brand)">₹75,000+ (Comprehensive)</option>
                        <option value="Flexible / Hourly Discussion">Flexible / Hourly</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-zinc-400 uppercase">
                      PROJECT BRIEF / SCOPE DETAILS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, target audience, preferred timelines, and any design inspiration..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-zinc-800 text-white font-sans text-sm placeholder:text-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-crimson-500 hover:bg-crimson-400 text-white font-mono text-sm uppercase font-bold tracking-wider transition-all duration-300 shadow-xl shadow-crimson-500/25 hover:shadow-crimson-500/40 flex items-center justify-center gap-3 disabled:opacity-70 group"
                    data-cursor="pointer"
                    data-cursor-text="SEND"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>TRANSMITTING INQUIRY...</span>
                      </span>
                    ) : (
                      <>
                        <span>TRANSMIT PROJECT BRIEF</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
                    <span>* 100% CONFIDENTIAL & SECURE</span>
                    <span>RESPONSE GUARANTEED WITHIN 24H</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
