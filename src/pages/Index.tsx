import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
