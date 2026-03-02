import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Serenité",
    description: "Luxury spa & beauty e-commerce. Discover our curated collection of luxury spa, manicure & pedicure products — crafted with botanical ingredients for radiant results.",
    tech: ["React", "E-commerce", "Vercel"],
    live: "https://bloom-glow-boutique.vercel.app/",
    featured: true,
  },
  {
    title: "Voice AI Assistant",
    description: "Intelligent voice assistant powered by VAPI with ElevenLabs TTS and Whisper STT for natural conversations and real-time transcription.",
    tech: ["VAPI", "ElevenLabs", "Whisper", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "CloudSync Dashboard",
    description: "A real-time cloud infrastructure monitoring dashboard with live metrics, alerts, and team collaboration features.",
    tech: ["React", "TypeScript", "GraphQL", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description: "Command-line tool for automating development workflows, from project scaffolding to deployment pipelines.",
    tech: ["Node.js", "TypeScript", "Commander.js"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Pixel Perfect",
    description: "Design-to-code comparison tool that overlays designs on live sites for pixel-perfect implementation.",
    tech: ["React", "Canvas API", "Chrome Extension"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "API Forge",
    description: "REST API generator that creates fully documented endpoints from database schemas.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "Theme Lab",
    description: "Interactive theme builder for developers to create and export custom color schemes.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Code Canvas",
    description: "Beautiful code snippet generator with syntax highlighting and export to image.",
    tech: ["React", "Prism.js", "html2canvas"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Voice Transcription Service",
    description: "Real-time audio transcription service using OpenAI Whisper with multi-language support and speaker diarization.",
    tech: ["Whisper", "Python", "FastAPI", "WebSocket"],
    github: "https://github.com",
  },
  {
    title: "AI Voice Clone Platform",
    description: "Platform for creating and managing AI voice clones using ElevenLabs API with custom voice training and synthesis.",
    tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-3 text-sm">{"// Portfolio"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built and contributed to
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl p-6 flex flex-col h-full group glow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
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
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold text-muted-foreground">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-lg p-5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}{project.tech.indexOf(tech) < project.tech.length - 1 && " •"}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
