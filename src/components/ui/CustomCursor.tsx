"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only enable for desktop mice
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      );

      if (clickable) {
        setIsHovered(true);
        const text = clickable.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const animateRing = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-crimson-500 pointer-events-none z-[9999] transition-opacity duration-300 mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered ? "scale-0" : "scale-100"}`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing interactive ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-crimson-500/80 transition-all duration-200 flex items-center justify-center mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-16 h-16 -ml-8 -mt-8 bg-crimson-500/10 border-crimson-400 scale-110 backdrop-blur-[1px]"
            : "w-8 h-8 -ml-4 -mt-4 bg-transparent scale-100"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-widest text-white uppercase font-bold animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
