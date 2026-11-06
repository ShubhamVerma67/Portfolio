import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#060608",
          900: "#0b0c10",
          850: "#101217",
          800: "#171922",
          750: "#1e212d",
          700: "#272b3a",
          600: "#373c4f",
        },
        crimson: {
          300: "#ff6b8b",
          400: "#ff436b",
          500: "#ff2a55",
          600: "#e01844",
          700: "#b50e32",
        },
        electric: {
          cyan: "#00f0ff",
          purple: "#7b2cbf",
          magenta: "#ff007f",
          lime: "#10b981",
        },
        brand: {
          photoshop: "#31A8FF",
          illustrator: "#FF9A00",
          xd: "#FF61F6",
          coreldraw: "#10B981",
          indesign: "#FF3366",
          premiere: "#EA77FF",
          aftereffects: "#9999FF",
          canva: "#00C4CC",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
