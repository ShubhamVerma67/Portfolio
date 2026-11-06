"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface HeroCanvasProps {
  scrollProgress?: number; // 0 to 1
  isScrubbingEnabled?: boolean;
}

const TOTAL_FRAMES = 73;

export default function HeroCanvas({
  scrollProgress = 0,
  isScrubbingEnabled = true,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const autoFrameRef = useRef<number>(0);
  const animationFrameId = useRef<number>(0);
  const isLoadedRef = useRef<boolean>(false);

  // Preload all 73 WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}.webp`;

      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === TOTAL_FRAMES) {
          isLoadedRef.current = true;
        }
      };

      img.onerror = () => {
        // Fallback or skip if single frame fails
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount >= TOTAL_FRAMES - 2) {
          isLoadedRef.current = true;
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      // Cleanup image sources if needed
      loadedImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Update target frame from scroll progress
  useEffect(() => {
    if (!isPlayingAuto && isScrubbingEnabled) {
      const frame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(scrollProgress * (TOTAL_FRAMES - 1)))
      );
      targetFrameRef.current = frame;
    }
  }, [scrollProgress, isPlayingAuto, isScrubbingEnabled]);

  // Track mouse for subtle graphic parallax & interactive reticle
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Render loop with object-fit: cover & 60fps requestAnimationFrame
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Smooth frame lerp
    if (isPlayingAuto) {
      autoFrameRef.current = (autoFrameRef.current + 0.35) % TOTAL_FRAMES;
      currentFrameRef.current = Math.floor(autoFrameRef.current);
    } else {
      // Lerp towards target frame for ultra-smooth scrub
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.15;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }
    }

    // Smooth mouse lerp
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

    const frameIdx = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentFrameRef.current))
    );
    const activeImg = imagesRef.current[frameIdx];

    // Background base
    ctx.fillStyle = "#070709";
    ctx.fillRect(0, 0, width, height);

    if (activeImg && activeImg.complete && activeImg.naturalWidth > 0) {
      // Calculate object-fit: cover
      const imgWidth = activeImg.naturalWidth;
      const imgHeight = activeImg.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = width / height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        drawHeight = height;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      }

      // Subtle mouse parallax on video layer
      const parallaxX = mouseRef.current.x * 12;
      const parallaxY = mouseRef.current.y * 8;

      ctx.drawImage(
        activeImg,
        offsetX + parallaxX,
        offsetY + parallaxY,
        drawWidth,
        drawHeight
      );

      // Creative dark vignette & gradient overlay for editorial readability
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(7, 7, 9, 0.75)");
      gradient.addColorStop(0.35, "rgba(7, 7, 9, 0.4)");
      gradient.addColorStop(0.7, "rgba(7, 7, 9, 0.65)");
      gradient.addColorStop(1, "rgba(7, 7, 9, 0.98)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Side radial vignettes
      const radial = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.2,
        width / 2,
        height / 2,
        width * 0.85
      );
      radial.addColorStop(0, "transparent");
      radial.addColorStop(0.7, "rgba(7, 7, 9, 0.35)");
      radial.addColorStop(1, "rgba(7, 7, 9, 0.85)");
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Visual storytelling: Graphic Designer Crosshairs & HUD elements
      ctx.save();
      const centerX = width / 2 + mouseRef.current.x * 20;
      const centerY = height / 2 + mouseRef.current.y * 15;

      // Subtle red laser beam glow reflecting the video's signature motif
      const laserGradient = ctx.createLinearGradient(0, centerY - 2, width, centerY + 2);
      laserGradient.addColorStop(0, "transparent");
      laserGradient.addColorStop(0.2, "rgba(255, 42, 85, 0.05)");
      laserGradient.addColorStop(0.5, "rgba(255, 42, 85, 0.3)");
      laserGradient.addColorStop(0.8, "rgba(255, 42, 85, 0.05)");
      laserGradient.addColorStop(1, "transparent");
      ctx.fillStyle = laserGradient;
      ctx.fillRect(0, centerY - 1, width, 2);

      // Dynamic aperture ring that expands with frame index
      const apertureRadius = 60 + (frameIdx / TOTAL_FRAMES) * 50;
      ctx.strokeStyle = "rgba(255, 42, 85, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, apertureRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Precision crosshair tick marks
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.beginPath();
      // Left tick
      ctx.moveTo(centerX - apertureRadius - 15, centerY);
      ctx.lineTo(centerX - apertureRadius - 5, centerY);
      // Right tick
      ctx.moveTo(centerX + apertureRadius + 5, centerY);
      ctx.lineTo(centerX + apertureRadius + 15, centerY);
      // Top tick
      ctx.moveTo(centerX, centerY - apertureRadius - 15);
      ctx.lineTo(centerX, centerY - apertureRadius - 5);
      // Bottom tick
      ctx.moveTo(centerX, centerY + apertureRadius + 5);
      ctx.lineTo(centerX, centerY + apertureRadius + 15);
      ctx.stroke();

      // Digital coordinates & graphic metadata in monospace font
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.font = "10px monospace";
      ctx.fillText(
        `FRAME [${frameIdx.toString().padStart(3, "0")}/${TOTAL_FRAMES}]`,
        30,
        height - 30
      );
      ctx.fillText(
        `DPI 300 // CMYK OK // REC 60FPS`,
        width - 200,
        height - 30
      );
      ctx.restore();
    } else {
      // Loading screen on canvas
      ctx.fillStyle = "#070709";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#ff2a55";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.fillText(
        `INITIALIZING CANVAS EXPERIENCE ${Math.round((imagesLoaded / TOTAL_FRAMES) * 100)}%`,
        width / 2,
        height / 2
      );

      // Loading bar
      const barW = 200;
      const barH = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect((width - barW) / 2, height / 2 + 15, barW, barH);
      ctx.fillStyle = "#ff2a55";
      ctx.fillRect(
        (width - barW) / 2,
        height / 2 + 15,
        (barW * imagesLoaded) / TOTAL_FRAMES,
        barH
      );
    }

    ctx.restore();
    animationFrameId.current = requestAnimationFrame(render);
  }, [imagesLoaded, isPlayingAuto]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(render);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [render]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Film grain subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
