import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Vortex } from "@/components/ui/vortex";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Vortex Background */}
      <div className="fixed inset-0 -z-10">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Hero />
          <Skills />
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
