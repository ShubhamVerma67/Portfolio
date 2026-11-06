import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FreelanceSection from "@/components/sections/FreelanceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950 text-zinc-100 flex flex-col overflow-x-hidden selection:bg-crimson-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <FreelanceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
