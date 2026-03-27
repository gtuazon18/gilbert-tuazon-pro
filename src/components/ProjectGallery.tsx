import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, Bot, Activity, Video, Calendar, Plane, Trophy, Calculator, Layout, Wind, Hotel, Sword, AlertTriangle, Users, FlaskConical, Mic, AudioLines, FileText, Search, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface GalleryProject {
  title: string;
  description: string;
  tech: string[];
  color: string;
  icon: LucideIcon;
  github?: string;
  live?: string;
}

const galleryProjects: GalleryProject[] = [
  {
    title: "MyMoovz",
    description: "Full-service cloud platform for Property Managers, Tenants & Landlords — connect utilities and discover local services.",
    tech: ["React", "Cloud Platform", "SaaS"],
    color: "bg-emerald-50",
    icon: Home,
    live: "https://www.muval.com.au/partners/mymoovz",
  },
  {
    title: "Waal",
    description: "Agentic InsightRun platform — capture stakeholder perspectives and turn signals into clear decisions.",
    tech: ["AI", "Agentic", "InsightRun"],
    color: "bg-amber-50",
    icon: Search,
    live: "https://waal.ai/",
  },
  {
    title: "GigaKnows E-Commerce",
    description: "Fully responsive and scalable e-commerce platform",
    tech: ["React", "Laravel", "MySQL", "AWS"],
    color: "bg-violet-50",
    icon: ShoppingBag,
  },
  {
    title: "Serenite",
    description: "Luxury spa e-commerce — curated manicure, pedicure & spa products crafted with botanical ingredients for radiant results.",
    tech: ["React", "E-commerce", "Vercel"],
    color: "bg-rose-50",
    icon: ShoppingBag,
    live: "https://bloom-glow-boutique.vercel.app/",
  },
  {
    title: "AgentCo AI Agent",
    description: "Intelligent AI agent with LangChain and LangGraph",
    tech: ["Python", "LangChain", "LangGraph", "LLaMA"],
    color: "bg-cyan-50",
    icon: Bot,
  },
  {
    title: "Health Fitness App",
    description: "Comprehensive health and fitness tracking platform",
    tech: ["React", "Laravel", "MySQL", "Charts"],
    color: "bg-green-50",
    icon: Activity,
  },
  {
    title: "Remarkable Vid AI",
    description: "AI-powered video generation and enhancement",
    tech: ["React", "TypeScript", "Python", "LangChain"],
    color: "bg-pink-50",
    icon: Video,
  },
  {
    title: "Health Booking System",
    description: "Doctor and patient management platform",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    color: "bg-red-50",
    icon: Calendar,
  },
  {
    title: "Flight Booking System",
    description: "Integrated booking platform with airline APIs",
    tech: ["React", "Node.js", "Express", "REST APIs"],
    color: "bg-sky-50",
    icon: Plane,
  },
  {
    title: "FootBaller Life",
    description: "Social media platform for football fans",
    tech: ["React", "Laravel", "Algolia", "Redux Saga"],
    color: "bg-fuchsia-50",
    icon: Trophy,
  },
  {
    title: "Accounting System",
    description: "Financial management with invoice tracking",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
    color: "bg-yellow-50",
    icon: Calculator,
  },
  {
    title: "Landing Page Builder",
    description: "AI-powered prompt-based page generator",
    tech: ["React", "Next.js", "TypeScript", "AI"],
    color: "bg-lime-50",
    icon: Layout,
  },
  {
    title: "Teko Aircon Booking",
    description: "Fast online booking for aircon, appliances & electrician services",
    tech: ["Laravel", "React", "RabbitMQ", "Elasticsearch"],
    color: "bg-blue-50",
    icon: Wind,
  },
  {
    title: "Staycation Booking",
    description: "Hotel and accommodation booking platform",
    tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch"],
    color: "bg-teal-50",
    icon: Hotel,
  },
  {
    title: "Game of Thrones Chess",
    description: "Themed chess game with multiplayer support",
    tech: ["React", "TypeScript", "WebSocket", "Canvas"],
    color: "bg-purple-50",
    icon: Sword,
    live: "https://chess.of.throne.agentco.cloud/",
  },
  {
    title: "Earthquake Tracker",
    description: "Real-time tracking with location notifications",
    tech: ["React", "Node.js", "WebSocket", "Geolocation"],
    color: "bg-orange-50",
    icon: AlertTriangle,
  },
  {
    title: "Lead Generation Platform",
    description: "Comprehensive CRM with lead scoring and automation",
    tech: ["React", "Laravel", "MySQL", "Elasticsearch"],
    color: "bg-indigo-50",
    icon: Users,
  },
  {
    title: "LMS Lab Management",
    description: "Lab Management System with lab resource tracking",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    color: "bg-emerald-50",
    icon: FlaskConical,
  },
  {
    title: "Voice AI Assistant",
    description: "Intelligent voice assistant with VAPI, ElevenLabs TTS, and Whisper STT",
    tech: ["VAPI", "ElevenLabs", "Whisper", "React", "TypeScript"],
    color: "bg-blue-50",
    icon: Mic,
  },
  {
    title: "AI Voice Clone Platform",
    description: "Voice cloning and synthesis platform using ElevenLabs API",
    tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"],
    color: "bg-purple-50",
    icon: AudioLines,
  },
  {
    title: "Real-time Transcription",
    description: "Live audio transcription service powered by Whisper",
    tech: ["Whisper", "Python", "FastAPI", "WebSocket"],
    color: "bg-cyan-50",
    icon: FileText,
  },
];

const ProjectCard = ({ project }: { project: GalleryProject }) => {
  const Icon = project.icon;

  return (
    <div className="flex-shrink-0 w-64 rounded-xl border border-border overflow-hidden bg-white hover:shadow-md transition-shadow group">
      {/* Icon area */}
      <div className={`h-36 ${project.color} flex items-center justify-center relative`}>
        <Icon className="w-12 h-12 text-muted-foreground/40" strokeWidth={1.2} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {"github" in project && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-foreground text-white hover:bg-foreground/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {"live" in project && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-foreground text-white hover:bg-foreground/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {!(project.github || project.live) && (
            <a
              href="https://github.com/gtuazon18/gtuazon18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-foreground text-white hover:bg-foreground/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectGallery = () => {
  const duplicatedProjects = [...galleryProjects, ...galleryProjects];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p className="text-muted-foreground text-sm mt-1">
            A collection of diverse projects across different domains
          </p>
        </div>
      </div>

      {/* Auto-scrolling row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 py-2"
          animate={{ x: [0, -280 * galleryProjects.length] }}
          transition={{ x: { duration: 60, repeat: Infinity, ease: "linear" } }}
          style={{ width: "fit-content" }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Auto-scrolling row 2 (reversed) */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 py-2"
          animate={{ x: [-280 * galleryProjects.length, 0] }}
          transition={{ x: { duration: 60, repeat: Infinity, ease: "linear" } }}
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
