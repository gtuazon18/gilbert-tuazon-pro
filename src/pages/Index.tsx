import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LightWavesBackground } from "@/components/ui/light-waves";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Light Waves Background */}
      <LightWavesBackground
        colors={["#20e3b2", "#0ea5e9", "#06b6d4", "#8b5cf6", "#0284c7"]}
        speed={0.8}
        intensity={0.4}
        className="fixed inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <ProjectGallery />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
