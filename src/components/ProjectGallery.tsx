import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const galleryProjects = [
  {
    title: "GigaKnows E-Commerce",
    description: "Fully responsive and scalable e-commerce platform",
    tech: ["React", "Laravel", "MySQL", "AWS"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Serenité",
    description: "Luxury spa e-commerce — curated manicure, pedicure & spa products crafted with botanical ingredients for radiant results.",
    tech: ["React", "E-commerce", "Vercel"],
    color: "from-rose-400/20 to-amber-500/20",
    live: "https://bloom-glow-boutique.vercel.app/",
  },
  {
    title: "AgentCo AI Agent",
    description: "Intelligent AI agent with LangChain and LangGraph",
    tech: ["Python", "LangChain", "LangGraph", "LLaMA"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Health Fitness App",
    description: "Comprehensive health and fitness tracking platform",
    tech: ["React", "Laravel", "MySQL", "Charts"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Remarkable Vid AI",
    description: "AI-powered video generation and enhancement",
    tech: ["React", "TypeScript", "Python", "LangChain"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Health Booking System",
    description: "Doctor and patient management platform",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    title: "Flight Booking System",
    description: "Integrated booking platform with airline APIs",
    tech: ["React", "Node.js", "Express", "REST APIs"],
    color: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "FootBaller Life",
    description: "Social media platform for football fans",
    tech: ["React", "Laravel", "Algolia", "Redux Saga"],
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Accounting System",
    description: "Financial management with invoice tracking",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Landing Page Builder",
    description: "AI-powered prompt-based page generator",
    tech: ["React", "Next.js", "TypeScript", "AI"],
    color: "from-lime-500/20 to-green-500/20",
  },
  {
    title: "Teko Aircon Booking",
    description: "Fast online booking for aircon, appliances & electrician services",
    tech: ["Laravel", "React", "RabbitMQ", "Elasticsearch"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Staycation Booking",
    description: "Hotel and accommodation booking platform",
    tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Game of Thrones Chess",
    description: "Themed chess game with multiplayer support",
    tech: ["React", "TypeScript", "WebSocket", "Canvas"],
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    title: "Earthquake Tracker",
    description: "Real-time tracking with location notifications",
    tech: ["React", "Node.js", "WebSocket", "Geolocation"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Lead Generation Platform",
    description: "Comprehensive CRM with lead scoring and automation",
    tech: ["React", "Laravel", "MySQL", "Elasticsearch"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "LMS Lab Management",
    description: "Lab Management System with lab resource tracking",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Voice AI Assistant",
    description: "Intelligent voice assistant with VAPI, ElevenLabs TTS, and Whisper STT",
    tech: ["VAPI", "ElevenLabs", "Whisper", "React", "TypeScript"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "AI Voice Clone Platform",
    description: "Voice cloning and synthesis platform using ElevenLabs API",
    tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Real-time Transcription",
    description: "Live audio transcription service powered by Whisper",
    tech: ["Whisper", "Python", "FastAPI", "WebSocket"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const ProjectCard = ({ project }: { project: typeof galleryProjects[0] }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    className="flex-shrink-0 w-72 glass-card rounded-xl overflow-hidden group cursor-pointer"
  >
    {/* Image/Icon Area */}
    <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        {"github" in project && project.github && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        )}
        {"live" in project && project.live && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        )}
        {!(("github" in project && project.github) || ("live" in project && project.live)) && (
          <>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/gtuazon18/gtuazon18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
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
              className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectGallery = () => {
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...galleryProjects, ...galleryProjects];

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
    </section>
  );
};

export default ProjectGallery;
