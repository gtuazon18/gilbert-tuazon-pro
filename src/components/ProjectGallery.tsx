import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const galleryProjects = [
  {
    title: "GigaKnows E-Commerce",
    description: "Fully responsive and scalable e-commerce platform",
    tech: ["React", "Laravel", "MySQL", "AWS"],
  },
  {
    title: "AgentCo AI Agent",
    description: "Intelligent AI agent with LangChain and LangGraph",
    tech: ["Python", "LangChain", "LangGraph", "LLaMA"],
  },
  {
    title: "Health Fitness App",
    description: "Comprehensive health and fitness tracking platform",
    tech: ["React", "Laravel", "MySQL", "Charts"],
  },
  {
    title: "Remarkable Vid AI",
    description: "AI-powered video generation and enhancement",
    tech: ["React", "TypeScript", "Python", "LangChain"],
  },
  {
    title: "Health Booking System",
    description: "Doctor and patient management platform",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
  },
  {
    title: "Flight Booking System",
    description: "Integrated booking platform with airline APIs",
    tech: ["React", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "FootBaller Life",
    description: "Social media platform for football fans",
    tech: ["React", "Laravel", "Algolia", "Redux Saga"],
  },
  {
    title: "Accounting System",
    description: "Financial management with invoice tracking",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
  },
  {
    title: "Landing Page Builder",
    description: "AI-powered prompt-based page generator",
    tech: ["React", "Next.js", "TypeScript", "AI"],
  },
  {
    title: "Teko Aircon Booking",
    description: "Fast online booking for aircon, appliances & electrician services",
    tech: ["Laravel", "React", "RabbitMQ", "Elasticsearch"],
  },
  {
    title: "Staycation Booking",
    description: "Hotel and accommodation booking platform",
    tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch"],
  },
  {
    title: "Game of Thrones Chess",
    description: "Themed chess game with multiplayer support",
    tech: ["React", "TypeScript", "WebSocket", "Canvas"],
  },
  {
    title: "Earthquake Tracker",
    description: "Real-time tracking with location notifications",
    tech: ["React", "Node.js", "WebSocket", "Geolocation"],
  },
  {
    title: "Lead Generation Platform",
    description: "Comprehensive CRM with lead scoring and automation",
    tech: ["React", "Laravel", "MySQL", "Elasticsearch"],
  },
  {
    title: "LMS Lab Management",
    description: "Lab Management System with lab resource tracking",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
  },
];

const ProjectCard = ({ project }: { project: typeof galleryProjects[0] }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    className="flex-shrink-0 w-72 bg-black rounded-xl overflow-hidden group cursor-pointer"
  >
    {/* Image/Icon Area */}
    <div className="h-40 bg-black flex items-center justify-center relative overflow-hidden border-b border-gray-800">
      <span className="text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
        {project.title.charAt(0).toUpperCase()}
      </span>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/gtuazon18/gtuazon18"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 bg-black">
      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-gray-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-white bg-gray-900 border border-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectGallery = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialProjectCount = 6;
  const displayedProjects = showAllProjects ? galleryProjects : galleryProjects.slice(0, initialProjectCount);
  
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = showAllProjects 
    ? [...galleryProjects, ...galleryProjects]
    : [...displayedProjects, ...displayedProjects];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-primary mb-3 text-sm">{"// Gallery"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Project Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of diverse projects across different domains
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: [0, -50 * galleryProjects.length * 6],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "fit-content" }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Bottom row - scrolling opposite direction */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: [-50 * galleryProjects.length * 6, 0],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {[...duplicatedProjects].reverse().map((project, index) => (
            <ProjectCard key={`${project.title}-reverse-${index}`} project={project} />
          ))}
        </motion.div>
      </div>

      {/* See More Button */}
      {galleryProjects.length > initialProjectCount && (
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="font-mono border-primary/50 text-foreground hover:bg-primary/10"
          >
            {showAllProjects ? (
              <>
                <ChevronUp className="w-4 h-4" />
                See Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                See More ({galleryProjects.length - initialProjectCount} more)
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
