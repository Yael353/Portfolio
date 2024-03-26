import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import NavSection from "@/components/NavSection";
import ProjectSection from "@/components/ProjectSection";
import ThemeSwitcher from "@/components/ThemeSwithcher";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <NavSection />
      <HeroSection />
      <ProjectSection />
      <Contact />
    </>
  );
}
