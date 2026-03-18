import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, Mic, BarChart2, Terminal, Paintbrush, Cpu, Palette, Code2, AudioLines, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Serenite",
    description: "Luxury spa & beauty e-commerce. Discover our curated collection of luxury spa, manicure & pedicure products — crafted with botanical ingredients for radiant results.",
    tech: ["React", "E-commerce", "Vercel"],
    icon: ShoppingBag,
    live: "https://bloom-glow-boutique.vercel.app/",
    featured: true,
  },
  {
    title: "Voice AI Assistant",
    description: "Intelligent voice assistant powered by VAPI with ElevenLabs TTS and Whisper STT for natural conversations and real-time transcription.",
    tech: ["VAPI", "ElevenLabs", "Whisper", "React", "TypeScript"],
    icon: Mic,
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "CloudSync Dashboard",
    description: "A real-time cloud infrastructure monitoring dashboard with live metrics, alerts, and team collaboration features.",
    tech: ["React", "TypeScript", "GraphQL", "AWS"],
    icon: BarChart2,
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description: "Command-line tool for automating development workflows, from project scaffolding to deployment pipelines.",
    tech: ["Node.js", "TypeScript", "Commander.js"],
    icon: Terminal,
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Pixel Perfect",
    description: "Design-to-code comparison tool that overlays designs on live sites for pixel-perfect implementation.",
    tech: ["React", "Canvas API", "Chrome Extension"],
    icon: Paintbrush,
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "API Forge",
    description: "REST API generator that creates fully documented endpoints from database schemas.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    icon: Cpu,
    github: "https://github.com",
  },
  {
    title: "Theme Lab",
    description: "Interactive theme builder for developers to create and export custom color schemes.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    icon: Palette,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Code Canvas",
    description: "Beautiful code snippet generator with syntax highlighting and export to image.",
    tech: ["React", "Prism.js", "html2canvas"],
    icon: Code2,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Voice Transcription Service",
    description: "Real-time audio transcription service using OpenAI Whisper with multi-language support and speaker diarization.",
    tech: ["Whisper", "Python", "FastAPI", "WebSocket"],
    icon: FileText,
    github: "https://github.com",
  },
  {
    title: "AI Voice Clone Platform",
    description: "Platform for creating and managing AI voice clones using ElevenLabs API with custom voice training and synthesis.",
    tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"],
    icon: AudioLines,
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group p-4 rounded-xl border border-border hover:border-foreground/20 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-foreground transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Other Projects */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">Other Projects</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {otherProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{project.title}</h4>
                        <p className="text-xs text-muted-foreground truncate">{project.description}</p>
                      </div>
                      <div className="flex gap-1.5 flex-shrink-0">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
