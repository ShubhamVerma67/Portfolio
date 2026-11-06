import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SHUBHAM VERMA — Graphic Designer",
  description:
    "Official portfolio of Shubham Verma. Specializing in branding, editorial book cover design, packaging, streetwear apparel, and digital advertising with 3+ years of professional craft.",
  keywords: [
    "Shubham Verma",
    "Graphic Designer",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "CorelDRAW",
    "Book Cover Design",
    "Branding",
    "Packaging Design",
    "New Delhi Graphic Designer",
  ],
  authors: [{ name: "Shubham Verma" }],
  creator: "Shubham Verma",
  openGraph: {
    title: "SHUBHAM VERMA — Graphic Designer",
    description:
      "Award-level personal portfolio showcasing editorial covers, brand systems, packaging, and digital art.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${jakarta.variable} ${spaceMono.variable} font-sans bg-dark-950 text-zinc-100 antialiased selection:bg-crimson-500 selection:text-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
