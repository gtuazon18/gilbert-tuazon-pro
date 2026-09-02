import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink, Github, ShoppingBag, Bot, Activity, Video, Calendar, Plane,
  Trophy, Calculator, Layout, Wind, Hotel, Sword, AlertTriangle, Users,
  FlaskConical, Mic, AudioLines, FileText, ArrowLeft, Search, Home, TrendingUp, BookOpen, Wallet, Tag, MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Footer from "@/components/Footer";

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
  { title: "Juan AI", description: "Personalized developer mentor for choosing a path, completing focused tasks, and building practical evidence.", tech: ["Next.js", "React", "TypeScript"], color: "bg-orange-50", icon: BookOpen, live: "https://juan-ai.sabsi.sbs/" },
  { title: "Tarantula AI", description: "SwiftUI creator recording assistant for turning ideas into camera-ready scripts and natural teleprompter takes.", tech: ["SwiftUI", "AI", "Teleprompter"], color: "bg-amber-50", icon: Video, github: "https://github.com/gtuazon18/TaraPrompter", live: "https://tarantulaai.sabsi.sbs/" },
  { title: "Bree", description: "Private, offline-first breathing companion with gentle exercises, local reflections, and soundscapes.", tech: ["SwiftUI", "Offline-first", "StoreKit"], color: "bg-yellow-50", icon: Activity, github: "https://github.com/gtuazon18/bree-ios" },
  { title: "Fintelligence", description: "AI-powered fintech platform for broker management, financial advisory, and AI-driven financial analysis.", tech: ["React", "Python", "LangChain", "AI/ML"], color: "bg-green-50", icon: TrendingUp, live: "https://fintelligence.com.au/" },
  { title: "Zafari Booking", description: "Premium safari park booking platform with AI chat support, experience packages, ticketing, and adventure reservations.", tech: ["React", "TypeScript", "Tailwind CSS", "AI Chat"], color: "bg-stone-50", icon: MapPin, live: "https://zafari-booking.vercel.app/" },
  { title: "OneKita PH", description: "Smart finance platform for Filipino professionals — income tracking, expense management, and tax filing in one place.", tech: ["React", "TypeScript", "Laravel", "Fintech"], color: "bg-orange-50", icon: Wallet, live: "https://onekitaph.vercel.app/" },
  { title: "Listify", description: "AI platform for Etsy sellers — surfaces winning product ideas and generates SEO-optimized listings in minutes.", tech: ["React", "TypeScript", "AI", "SEO"], color: "bg-green-50", icon: Tag, live: "https://listify.agentco.cloud/" },
  { title: "MyMoovz", description: "Full-service cloud platform for Property Managers, Tenants & Landlords — connect utilities and discover local services.", tech: ["React", "Cloud Platform", "SaaS"], color: "bg-emerald-50", icon: Home, live: "https://www.muval.com.au/partners/mymoovz" },
  { title: "Waal", description: "Agentic InsightRun platform — capture stakeholder perspectives and turn signals into clear decisions.", tech: ["AI", "Agentic", "InsightRun"], color: "bg-amber-50", icon: Search, live: "https://waal.ai/" },
  { title: "GigaKnows E-Commerce", description: "Fully responsive and scalable e-commerce platform", tech: ["React", "Laravel", "MySQL", "AWS"], color: "bg-violet-50", icon: ShoppingBag },
  { title: "Serenite", description: "Luxury spa e-commerce — curated manicure, pedicure & spa products.", tech: ["React", "E-commerce", "Vercel"], color: "bg-rose-50", icon: ShoppingBag, live: "https://bloom-glow-boutique.vercel.app/" },
  { title: "AgentCo AI Agent", description: "Intelligent AI agent with LangChain and LangGraph", tech: ["Python", "LangChain", "LangGraph", "LLaMA"], color: "bg-cyan-50", icon: Bot, live: "https://www.agentco.cloud/" },
  { title: "Health Fitness App", description: "Comprehensive health and fitness tracking platform", tech: ["React", "Laravel", "MySQL", "Charts"], color: "bg-green-50", icon: Activity },
  { title: "Remarkable Vid AI", description: "AI-powered video generation and enhancement", tech: ["React", "TypeScript", "Python", "LangChain"], color: "bg-pink-50", icon: Video, live: "https://remarkablevid-gtuazon18s-projects.vercel.app/" },
  { title: "Health Booking System", description: "Doctor and patient management platform", tech: ["React", "Laravel", "PostgreSQL", "WebSocket"], color: "bg-red-50", icon: Calendar },
  { title: "Flight Booking System", description: "Integrated booking platform with airline APIs", tech: ["React", "Node.js", "Express", "REST APIs"], color: "bg-sky-50", icon: Plane },
  { title: "FootBaller Life", description: "Social media platform for football fans", tech: ["React", "Laravel", "Algolia", "Redux Saga"], color: "bg-fuchsia-50", icon: Trophy, live: "https://footballerlife.com/" },
  { title: "Accounting System", description: "Financial management with invoice tracking", tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"], color: "bg-yellow-50", icon: Calculator },
  { title: "Earn-Books", description: "SaaS accounting platform with invoicing, billing, and Stripe payment integration.", tech: ["Vue.js", "Laravel", "Stripe", "PostgreSQL"], color: "bg-emerald-50", icon: BookOpen, live: "https://v0-page-replica-tan.vercel.app/" },
  { title: "Landing Page Builder", description: "AI-powered prompt-based page generator", tech: ["React", "Next.js", "TypeScript", "AI"], color: "bg-lime-50", icon: Layout },
  { title: "Teko Aircon Booking", description: "Fast online booking for aircon, appliances & electrician services", tech: ["Laravel", "React", "RabbitMQ", "Elasticsearch"], color: "bg-blue-50", icon: Wind, live: "https://www.teko.ph" },
  { title: "Staycation Booking", description: "Hotel and accommodation booking platform", tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch"], color: "bg-teal-50", icon: Hotel },
  { title: "Game of Thrones Chess", description: "Themed chess game with multiplayer support", tech: ["React", "TypeScript", "WebSocket", "Canvas"], color: "bg-purple-50", icon: Sword, live: "https://chess.of.throne.agentco.cloud/" },
  { title: "Earthquake Tracker", description: "Real-time tracking with location notifications", tech: ["React", "Node.js", "WebSocket", "Geolocation"], color: "bg-orange-50", icon: AlertTriangle },
  { title: "IntelHouse", description: "Trusted partner in lead generation with cost-effective solutions for home improvement sales teams.", tech: ["React", "Laravel", "MySQL", "Elasticsearch"], color: "bg-indigo-50", icon: Users, live: "https://www.intelhouse.net/" },
  { title: "LMS Lab Management", description: "Lab Management System with lab resource tracking", tech: ["React", "Laravel", "PostgreSQL", "WebSocket"], color: "bg-emerald-50", icon: FlaskConical, live: "https://frontend.rxn3d.com/login" },
  { title: "Voice AI Assistant", description: "Intelligent voice assistant with VAPI, ElevenLabs TTS, and Whisper STT", tech: ["VAPI", "ElevenLabs", "Whisper", "React", "TypeScript"], color: "bg-blue-50", icon: Mic },
  { title: "AI Voice Clone Platform", description: "Voice cloning and synthesis platform using ElevenLabs API", tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"], color: "bg-purple-50", icon: AudioLines },
  { title: "Real-time Transcription", description: "Live audio transcription service powered by Whisper", tech: ["Whisper", "Python", "FastAPI", "WebSocket"], color: "bg-cyan-50", icon: FileText },
];

const projectColumns = [
  {
    title: "Current products",
    accent: "bg-orange-500",
    projects: ["Juan AI", "Tarantula AI", "Bree"],
  },
  {
    title: "AI & Intelligence",
    accent: "bg-violet-500",
    projects: ["Fintelligence", "Listify", "Waal", "AgentCo AI Agent", "Remarkable Vid AI", "Landing Page Builder", "Voice AI Assistant", "AI Voice Clone Platform", "Real-time Transcription"],
  },
  {
    title: "Platforms & SaaS",
    accent: "bg-emerald-500",
    projects: ["OneKita PH", "MyMoovz", "Health Fitness App", "FootBaller Life", "Accounting System", "Earn-Books", "IntelHouse", "LMS Lab Management"],
  },
  {
    title: "Commerce & Booking",
    accent: "bg-amber-500",
    projects: ["Zafari Booking", "GigaKnows E-Commerce", "Serenite", "Health Booking System", "Flight Booking System", "Teko Aircon Booking", "Staycation Booking"],
  },
  {
    title: "Experiments",
    accent: "bg-sky-500",
    projects: ["Game of Thrones Chess", "Earthquake Tracker"],
  },
].map(column => ({
  ...column,
  projects: column.projects.map(title => galleryProjects.find(project => project.title === title)).filter(Boolean) as GalleryProject[],
}));

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-5 pt-12 pb-16 md:px-8">
        <div className="max-w-[1500px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground mb-10">A complete collection of projects, organized by the kind of problem they solve.</p>

          <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projectColumns.map((column, columnIndex) => (
              <motion.section
                key={column.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: columnIndex * 0.08 }}
                className="rounded-2xl border border-border bg-secondary/40 p-3"
              >
                <div className="flex items-center justify-between px-2 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${column.accent}`} />
                    <h2 className="text-sm font-semibold">{column.title}</h2>
                  </div>
                  <span className="rounded-full bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{column.projects.length}</span>
                </div>

                <div className="mt-2 space-y-3">
                  {column.projects.map((project, projectIndex) => {
                    const Icon = project.icon;
                    return (
                      <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: columnIndex * 0.08 + projectIndex * 0.03 }}
                        className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl ${project.color}`}>
                            <Icon className="h-5 w-5 text-neutral-500" strokeWidth={1.5} />
                          </div>
                          <div className="flex items-center gap-2">
                            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="text-muted-foreground hover:text-foreground"><Github className="h-3.5 w-3.5" /></a>}
                            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="text-muted-foreground hover:text-foreground"><ExternalLink className="h-3.5 w-3.5" /></a>}
                          </div>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold">{project.title}</h3>
                        <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map(tech => <span key={tech} className="rounded-full bg-secondary px-2 py-1 text-[9px] font-medium text-muted-foreground">{tech}</span>)}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
