import { HeroSection } from "@/sections/HeroSection";
import { MarqueeSection } from "@/sections/MarqueeSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#0C0C0C] font-sans"
      style={{ overflowX: "clip" }}
      data-testid="home-page"
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
