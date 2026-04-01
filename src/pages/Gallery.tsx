import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink, Github, ShoppingBag, Bot, Activity, Video, Calendar, Plane,
  Trophy, Calculator, Layout, Wind, Hotel, Sword, AlertTriangle, Users,
  FlaskConical, Mic, AudioLines, FileText, ArrowLeft, Search, Home, TrendingUp,
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
  { title: "Fintelligence", description: "AI-powered fintech platform for broker management and financial advisory.", tech: ["React", "Python", "LangChain", "AI/ML"], color: "bg-green-50", icon: TrendingUp, live: "https://fintelligence.com.au/" },
  { title: "MyMoovz", description: "Full-service cloud platform for Property Managers, Tenants & Landlords — connect utilities and discover local services.", tech: ["React", "Cloud Platform", "SaaS"], color: "bg-emerald-50", icon: Home, live: "https://www.muval.com.au/partners/mymoovz" },
  { title: "Waal", description: "Agentic InsightRun platform — capture stakeholder perspectives and turn signals into clear decisions.", tech: ["AI", "Agentic", "InsightRun"], color: "bg-amber-50", icon: Search, live: "https://waal.ai/" },
  { title: "GigaKnows E-Commerce", description: "Fully responsive and scalable e-commerce platform", tech: ["React", "Laravel", "MySQL", "AWS"], color: "bg-violet-50", icon: ShoppingBag },
  { title: "Serenite", description: "Luxury spa e-commerce — curated manicure, pedicure & spa products.", tech: ["React", "E-commerce", "Vercel"], color: "bg-rose-50", icon: ShoppingBag, live: "https://bloom-glow-boutique.vercel.app/" },
  { title: "AgentCo AI Agent", description: "Intelligent AI agent with LangChain and LangGraph", tech: ["Python", "LangChain", "LangGraph", "LLaMA"], color: "bg-cyan-50", icon: Bot, live: "https://www.agentco.cloud/" },
  { title: "Health Fitness App", description: "Comprehensive health and fitness tracking platform", tech: ["React", "Laravel", "MySQL", "Charts"], color: "bg-green-50", icon: Activity },
  { title: "Remarkable Vid AI", description: "AI-powered video generation and enhancement", tech: ["React", "TypeScript", "Python", "LangChain"], color: "bg-pink-50", icon: Video },
  { title: "Health Booking System", description: "Doctor and patient management platform", tech: ["React", "Laravel", "PostgreSQL", "WebSocket"], color: "bg-red-50", icon: Calendar },
  { title: "Flight Booking System", description: "Integrated booking platform with airline APIs", tech: ["React", "Node.js", "Express", "REST APIs"], color: "bg-sky-50", icon: Plane },
  { title: "FootBaller Life", description: "Social media platform for football fans", tech: ["React", "Laravel", "Algolia", "Redux Saga"], color: "bg-fuchsia-50", icon: Trophy, live: "https://footballerlife.com/" },
  { title: "Accounting System", description: "Financial management with invoice tracking", tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"], color: "bg-yellow-50", icon: Calculator },
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

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Project Gallery</h1>
          <p className="text-muted-foreground mb-8">A complete collection of diverse projects across different domains</p>

          <div className="divide-y divide-border bg-card rounded-2xl border border-border p-6">
            {galleryProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-muted-foreground/40" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 pt-1">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
