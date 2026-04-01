import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  MapPin, Calendar, Mail, Github, Linkedin, ExternalLink, BookOpen,
  Briefcase, ShoppingBag, Mic, Paintbrush,
  Cpu, Palette, Code2, AudioLines, FileText, Bot, Activity, Video,
  Plane, Trophy, Calculator, Layout, Wind, Hotel, Sword, AlertTriangle,
  Users, FlaskConical, Moon, Sun, Lightbulb, UsersRound, CloudRain, CloudSun, Cloud, Snowflake, CloudLightning, Droplets, Thermometer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BadgeVerifiedIcon from "@/components/BadgeVerifiedIcon";
import QRCode from "react-qr-code";

/* ─── Data ─── */
const skillCategories = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"] },
  { label: "Backend", skills: ["Node.js", "Laravel", "Python", "GraphQL", "REST APIs", "Fastify"] },
  { label: "AI & LLM", skills: ["LangChain", "LangGraph", "RAG", "OpenAI", "Groq", "Ollama", "Grok AI", "ChromaDB", "Pinecone", "HuggingFace"] },
  { label: "Voice AI", skills: ["ElevenLabs", "Whisper", "VAPI", "OpenVoice"] },
  { label: "Database & Cloud", skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "Git", "Redis"] },
  { label: "Mobile", skills: ["React Native", "Expo", "iOS", "Android"] },
  { label: "Integrations", skills: ["OpenClaw", "WhatsApp Business API", "Twilio", "Stripe", "Google Calendar", "Webhooks"] },
  { label: "Design & Tools", skills: ["Figma", "Storybook", "Vitest", "Jest", "CI/CD"] },
];

const timeline = [
  { year: "2024", role: "Full-Stack Software Engineer", company: "Teko Philippines", period: "May 2024 – Present" },
  { year: "2020", role: "Full-Stack Backend Software Engineer", company: "Multisys Technologies Corporation", period: "May 2020 – May 2024" },
  { year: "2018", role: "Mid Full-Stack Software Engineer", company: "W-Tech Solutions", period: "April 2018 – May 2020" },
  { year: "2014", role: "Junior Full-Stack Software Engineer", company: "Ingram Micro", period: "April 2014 – May 2018" },
];

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
  { title: "Serenite", description: "Luxury spa & beauty e-commerce. Discover our curated collection of luxury spa, manicure & pedicure products — crafted with botanical ingredients for radiant results.", tech: ["React", "E-commerce", "Vercel"], icon: ShoppingBag, live: "https://bloom-glow-boutique.vercel.app/", featured: true },
  { title: "AgentCo AI Agent", description: "Intelligent AI agent platform with LangChain and LangGraph for building custom AI agents across various industries.", tech: ["Python", "LangChain", "LangGraph", "LLaMA"], icon: Bot, live: "https://www.agentco.cloud/", featured: true },
  { title: "LMS Lab Management", description: "Lab Management System with resource tracking and experiment workflows.", tech: ["React", "Laravel", "PostgreSQL", "WebSocket"], icon: FlaskConical, live: "https://frontend.rxn3d.com/login", featured: true },
  { title: "FootBaller Life", description: "Social media platform for football fans with real-time feeds and community features.", tech: ["React", "Laravel", "Algolia", "Redux Saga"], icon: Trophy, live: "https://footballerlife.com/", featured: true },
  { title: "Pixel Perfect", description: "Design-to-code comparison tool that overlays designs on live sites for pixel-perfect implementation.", tech: ["React", "Canvas API", "Chrome Extension"], icon: Paintbrush, github: "https://github.com", live: "https://example.com", featured: true },
  { title: "API Forge", description: "REST API generator that creates fully documented endpoints from database schemas.", tech: ["Python", "FastAPI", "PostgreSQL"], icon: Cpu, github: "https://github.com" },
  { title: "Theme Lab", description: "Interactive theme builder for developers to create and export custom color schemes.", tech: ["Next.js", "Tailwind", "Framer Motion"], icon: Palette, github: "https://github.com", live: "https://example.com" },
  { title: "Code Canvas", description: "Beautiful code snippet generator with syntax highlighting and export to image.", tech: ["React", "Prism.js", "html2canvas"], icon: Code2, github: "https://github.com", live: "https://example.com" },
  { title: "Voice Transcription Service", description: "Real-time audio transcription service using OpenAI Whisper with multi-language support and speaker diarization.", tech: ["Whisper", "Python", "FastAPI", "WebSocket"], icon: FileText, github: "https://github.com" },
  { title: "AI Voice Clone Platform", description: "Platform for creating and managing AI voice clones using ElevenLabs API with custom voice training and synthesis.", tech: ["ElevenLabs", "React", "Node.js", "PostgreSQL"], icon: AudioLines, github: "https://github.com", live: "https://example.com" },
];

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

const recommendations = [
  {
    quote: "Gilbert is an exceptional full-stack engineer who consistently delivers high-quality work. His ability to architect scalable systems and mentor junior developers makes him an invaluable team member. He led our booking system rewrite and the results exceeded all expectations.",
    name: "Mark Santos",
    role: "Engineering Manager at Teko Philippines",
  },
  {
    quote: "Working with Gilbert on the DMS project was a great experience. He has deep expertise in backend systems, microservices, and message queuing. His code reviews were thorough and helped elevate the entire team's standards.",
    name: "Angela Cruz",
    role: "Senior Developer at Multisys Technologies",
  },
  {
    quote: "Gilbert is a reliable and skilled engineer who takes ownership of complex problems. His work on our Elasticsearch integration and API optimization significantly improved system performance. Highly recommended for any full-stack role.",
    name: "Jason Reyes",
    role: "CTO at W-Tech Solutions",
  },
  {
    quote: "I've had the pleasure of collaborating with Gilbert on multiple AI voice projects. His technical depth in integrating ElevenLabs, Whisper, and VAPI is impressive, and he always finds elegant solutions to challenging problems.",
    name: "Patricia Lim",
    role: "AI Product Lead at Multisys Technologies",
  },
];

/* ─── Recommendations Carousel ─── */
const RecommendationsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % recommendations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="min-h-[140px]">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            "{recommendations[current].quote}"
          </p>
          <p className="font-semibold text-sm">{recommendations[current].name}</p>
          <p className="text-xs text-muted-foreground">{recommendations[current].role}</p>
        </motion.div>
      </div>
      {/* Dots */}
      <div className="flex gap-1.5 mt-4">
        {recommendations.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-foreground" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Gallery Section with View All ─── */
const GALLERY_INITIAL_COUNT = 6;

const GallerySection = () => {
  const visible = galleryProjects.slice(0, GALLERY_INITIAL_COUNT);

  return (
    <section className="py-4 md:py-6">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Gallery</h2>
              <Link to="/gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                View All &rsaquo;
              </Link>
            </div>

            <div className="divide-y divide-border">
              {visible.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={`${project.title}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    className="flex items-center gap-4 py-3 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-muted-foreground/40" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{project.title}</h3>
                      <p className="text-xs text-muted-foreground truncate">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 flex-shrink-0 hidden sm:flex">
                      {project.tech.slice(0, 2).map(tech => (
                        <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Tip of the Day ─── */
const TipOfTheDay = () => {
  const [tip, setTip] = useState<{ text: string; author: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const cached = localStorage.getItem("tip-of-the-day");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.date === today) {
          setTip(parsed.tip);
          setLoading(false);
          return;
        }
      } catch { /* ignore */ }
    }

    fetch("https://programming-quotesapi.vercel.app/api/random")
      .then(res => res.json())
      .then(data => {
        const newTip = { text: data.quote, author: data.author };
        setTip(newTip);
        localStorage.setItem("tip-of-the-day", JSON.stringify({ date: today, tip: newTip }));
      })
      .catch(() => {
        setTip({ text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card flex-1">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-bold">Tip of the Day</h2>
      </div>
      {loading ? (
        <div className="h-12 flex items-center">
          <div className="w-6 h-6 border-2 border-border border-t-foreground rounded-full animate-spin" />
        </div>
      ) : tip && (
        <div>
          <p className="text-muted-foreground text-sm leading-relaxed italic">&ldquo;{tip.text}&rdquo;</p>
          <p className="text-xs text-muted-foreground/70 mt-2 font-medium">— {tip.author}</p>
        </div>
      )}
    </motion.div>
  );
};

/* ─── Weather Widget ─── */
interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
  city: string;
  country: string;
  windSpeed: number;
}

const getWeatherIcon = (iconCode: string) => {
  if (iconCode.startsWith("09") || iconCode.startsWith("10")) return <CloudRain className="w-8 h-8 text-blue-400" />;
  if (iconCode.startsWith("11")) return <CloudLightning className="w-8 h-8 text-yellow-400" />;
  if (iconCode.startsWith("13")) return <Snowflake className="w-8 h-8 text-sky-300" />;
  if (iconCode.startsWith("50")) return <Cloud className="w-8 h-8 text-zinc-400" />;
  if (iconCode === "01d") return <Sun className="w-8 h-8 text-yellow-400" />;
  if (iconCode === "01n") return <Moon className="w-8 h-8 text-blue-300" />;
  if (iconCode.startsWith("02")) return <CloudSun className="w-8 h-8 text-amber-400" />;
  return <Cloud className="w-8 h-8 text-zinc-400" />;
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("weather-data");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const age = Date.now() - parsed.timestamp;
        if (age < 30 * 60 * 1000) {
          setWeather(parsed.data);
          setLoading(false);
          return;
        }
      } catch { /* ignore */ }
    }

    const getWeatherDescription = (code: number): { description: string; icon: string } => {
      if (code === 0) return { description: "clear sky", icon: "01d" };
      if (code <= 3) return { description: "partly cloudy", icon: "02d" };
      if (code <= 48) return { description: "foggy", icon: "50d" };
      if (code <= 57) return { description: "drizzle", icon: "09d" };
      if (code <= 67) return { description: "rainy", icon: "10d" };
      if (code <= 77) return { description: "snowy", icon: "13d" };
      if (code <= 82) return { description: "rain showers", icon: "09d" };
      if (code <= 86) return { description: "snow showers", icon: "13d" };
      if (code <= 99) return { description: "thunderstorm", icon: "11d" };
      return { description: "cloudy", icon: "03d" };
    };

    const getCityName = async (lat: number, lon: number): Promise<{ city: string; country: string }> => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en`);
        const data = await res.json();
        const city = data.address?.city || data.address?.town || data.address?.municipality || data.address?.village || "Unknown";
        const country = data.address?.country_code?.toUpperCase() || "";
        return { city, country };
      } catch {
        return { city: "Unknown", country: "" };
      }
    };

    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const [weatherRes, location] = await Promise.all([
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`),
          getCityName(lat, lon),
        ]);
        const data = await weatherRes.json();
        const current = data.current;
        const { description, icon } = getWeatherDescription(current.weather_code);
        const w: WeatherData = {
          temp: Math.round(current.temperature_2m),
          feelsLike: Math.round(current.apparent_temperature),
          humidity: current.relative_humidity_2m,
          description,
          icon,
          city: location.city,
          country: location.country,
          windSpeed: Math.round(current.wind_speed_10m),
        };
        setWeather(w);
        localStorage.setItem("weather-data", JSON.stringify({ data: w, timestamp: Date.now() }));
      } catch {
        setWeather({
          temp: 32,
          feelsLike: 35,
          humidity: 72,
          description: "partly cloudy",
          icon: "02d",
          city: "Cavite",
          country: "PH",
          windSpeed: 12,
        });
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(14.4791, 120.8970),
        { timeout: 5000 }
      );
    } else {
      fetchWeather(14.4791, 120.8970);
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-card flex-1 min-w-0">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-border border-t-foreground rounded-full animate-spin" />
        </div>
      ) : weather && (
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            {getWeatherIcon(weather.icon)}
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold">{weather.temp}°</span>
                <span className="text-xs text-muted-foreground capitalize">{weather.description}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                <MapPin className="w-3 h-3" />
                <span>{weather.city}, {weather.country}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-center">
            <div>
              <Thermometer className="w-3.5 h-3.5 text-muted-foreground mx-auto mb-0.5" />
              <p className="text-xs font-medium">{weather.feelsLike}°</p>
              <p className="text-[10px] text-muted-foreground">Feels</p>
            </div>
            <div>
              <Droplets className="w-3.5 h-3.5 text-muted-foreground mx-auto mb-0.5" />
              <p className="text-xs font-medium">{weather.humidity}%</p>
              <p className="text-[10px] text-muted-foreground">Humidity</p>
            </div>
            <div>
              <Wind className="w-3.5 h-3.5 text-muted-foreground mx-auto mb-0.5" />
              <p className="text-xs font-medium">{weather.windSpeed}</p>
              <p className="text-[10px] text-muted-foreground">km/h</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ─── Dark Mode Toggle ─── */
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, () => setIsDark(prev => !prev)] as const;
};

/* ─── Card Color Themes ─── */
interface CardTheme {
  name: string;
  gradient: string;
  gradientBack: string;
  button: string;
  buttonHover: string;
  swatch: string;
}

const cardThemes: CardTheme[] = [
  { name: "Teal", gradient: "linear-gradient(135deg, #0d4f4f 0%, #0a7373 25%, #11998e 50%, #0d6b6b 75%, #064040 100%)", gradientBack: "linear-gradient(135deg, #064040 0%, #0a7373 30%, #11998e 60%, #0d6b6b 85%, #0d4f4f 100%)", button: "#0a7373", buttonHover: "#0d5f5f", swatch: "#0a7373" },
  { name: "Black", gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #3a3a3a 50%, #2d2d2d 75%, #111111 100%)", gradientBack: "linear-gradient(135deg, #111111 0%, #2d2d2d 30%, #3a3a3a 60%, #2d2d2d 85%, #1a1a1a 100%)", button: "#2d2d2d", buttonHover: "#1a1a1a", swatch: "#2d2d2d" },
  { name: "Red", gradient: "linear-gradient(135deg, #4a0e0e 0%, #8b1a1a 25%, #c0392b 50%, #8b1a1a 75%, #3d0c0c 100%)", gradientBack: "linear-gradient(135deg, #3d0c0c 0%, #8b1a1a 30%, #c0392b 60%, #8b1a1a 85%, #4a0e0e 100%)", button: "#8b1a1a", buttonHover: "#6b1414", swatch: "#8b1a1a" },
  { name: "Purple", gradient: "linear-gradient(135deg, #2d1052 0%, #5b2d8e 25%, #8e44ad 50%, #5b2d8e 75%, #1f0a38 100%)", gradientBack: "linear-gradient(135deg, #1f0a38 0%, #5b2d8e 30%, #8e44ad 60%, #5b2d8e 85%, #2d1052 100%)", button: "#5b2d8e", buttonHover: "#4a2474", swatch: "#5b2d8e" },
  { name: "Blue", gradient: "linear-gradient(135deg, #0a1a4a 0%, #1a3a8a 25%, #2563eb 50%, #1a3a8a 75%, #071240 100%)", gradientBack: "linear-gradient(135deg, #071240 0%, #1a3a8a 30%, #2563eb 60%, #1a3a8a 85%, #0a1a4a 100%)", button: "#1a3a8a", buttonHover: "#142d6e", swatch: "#1a3a8a" },
  { name: "Silver", gradient: "linear-gradient(135deg, #6b6b6b 0%, #9e9e9e 25%, #bdbdbd 50%, #9e9e9e 75%, #5a5a5a 100%)", gradientBack: "linear-gradient(135deg, #5a5a5a 0%, #9e9e9e 30%, #bdbdbd 60%, #9e9e9e 85%, #6b6b6b 100%)", button: "#6b6b6b", buttonHover: "#555555", swatch: "#9e9e9e" },
];

/* ─── Main Page ─── */
const Index = () => {
  const [isDark, toggleDark] = useDarkMode();
  const [cardThemeIndex, setCardThemeIndex] = useState(() => {
    const saved = localStorage.getItem("card-theme");
    return saved ? parseInt(saved, 10) : 4;
  });
  const theme = cardThemes[cardThemeIndex];

  const cycleTheme = (index: number) => {
    setCardThemeIndex(index);
    localStorage.setItem("card-theme", String(index));
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <main className="pb-10 md:pb-0">

        {/* ═══ PROFILE HEADER ═══ */}
        <section className="pt-8 pb-2 md:pt-12 md:pb-3">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto relative">
              {/* Dark mode toggle — inside content area */}
              <div className="absolute top-0 right-0 z-10">
                <button onClick={toggleDark} className="p-2 rounded-lg bg-secondary border border-border text-foreground hover:bg-accent transition-all flex items-center gap-1.5" aria-label="Toggle dark mode">
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex-shrink-0">
                    <div className="w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden border-4 border-card shadow-lg relative">
                      <img src="/gt-pic.png" alt="Gilbert Tuazon" className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${isDark ? "opacity-0" : "opacity-100"}`} />
                      <img src="/nightscene.png" alt="Gilbert Tuazon" className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${isDark ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 inline-flex items-center gap-2">
                        Gilbert Tuazon
                        <span className="flex-shrink-0"><BadgeVerifiedIcon size={28} /></span>
                      </h1>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Cavite, Philippines</span>
                      </div>
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-muted-foreground mb-1">
                      Software Engineer \ Content Creator \ AI Enthusiast
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        Available for opportunities
                      </span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                      <Button size="sm" className="text-white rounded-full px-5 transition-colors duration-300" style={{ backgroundColor: theme.button }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = theme.buttonHover)} onMouseLeave={e => (e.currentTarget.style.backgroundColor = theme.button)} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                        <Calendar className="w-4 h-4 mr-2" />Schedule a Call
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full px-5" asChild>
                        <a href="mailto:tuazon548@gmail.com"><Mail className="w-4 h-4 mr-2" />Send Email</a>
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full px-5" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                        View Projects
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full px-5" asChild>
                        <Link to="/community"><UsersRound className="w-4 h-4 mr-2" />Community</Link>
                      </Button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center justify-center md:justify-start gap-3 mt-4">
                      {[
                        { icon: Github, href: "https://github.com/gtuazon18/gtuazon18", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/gilbert-t-20a96213a/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:tuazon548@gmail.com", label: "Email" },
                      ].map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" aria-label={label}>
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </motion.div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TIP OF THE DAY + DEV CARD ═══ */}
        <section className="py-2 md:py-3">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 items-stretch">
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <TipOfTheDay />
                  <WeatherWidget />
                </div>

                {/* Dev Card — Landscape with Flip */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0 hidden lg:block group"
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative w-96 aspect-[16/10] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>
                    {/* Front */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden text-white shadow-2xl transition-all duration-500" style={{ backfaceVisibility: "hidden", background: theme.gradient }}>
                      {/* Zigzag polygon shapes */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250" preserveAspectRatio="none">
                        {/* Large zigzag band — top left to bottom right */}
                        <polygon points="0,0 60,0 100,40 60,80 100,120 60,160 100,200 60,240 0,250 0,200 40,160 0,120 40,80 0,40" fill="rgba(255,255,255,0.05)" />
                        {/* Mid zigzag band */}
                        <polygon points="80,0 140,0 180,40 140,80 180,120 140,160 180,200 140,240 80,250 80,200 120,160 80,120 120,80 80,40" fill="rgba(255,255,255,0.035)" />
                        {/* Right zigzag band */}
                        <polygon points="260,0 320,0 360,40 320,80 360,120 320,160 360,200 320,240 260,250 260,200 300,160 260,120 300,80 260,40" fill="rgba(0,0,0,0.06)" />
                        {/* Far right zigzag */}
                        <polygon points="340,0 400,0 400,50 370,80 400,120 370,160 400,200 400,250 340,250 340,200 370,160 340,120 370,80 340,40" fill="rgba(0,0,0,0.08)" />
                        {/* Small zigzag accent — center */}
                        <polygon points="180,30 210,60 180,90 210,120 180,150 210,180 180,210 160,210 160,180 190,150 160,120 190,90 160,60 160,30" fill="rgba(255,255,255,0.025)" />
                      </svg>
                      {/* Light shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.08] to-transparent pointer-events-none rounded-bl-full" />

                      <div className="relative h-full flex flex-col justify-between p-8">
                        <div>
                          <p className="text-xl font-bold tracking-wide uppercase text-white leading-tight drop-shadow-sm">Gilbert Tuazon</p>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-1.5 font-mono">Software Engineer</p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-mono mb-0.5">Professional Card</p>
                            <p className="text-[10px] tracking-[0.15em] text-white/40 font-mono">tuazon548@gmail.com</p>
                          </div>
                          <QRCode value="https://gilbert-tuazon-pro.vercel.app/" size={72} bgColor="transparent" fgColor="rgba(255,255,255,0.5)" level="L" />
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden text-white shadow-2xl flex flex-col items-center justify-center transition-all duration-500" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: theme.gradientBack }}>
                      {/* Zigzag polygon shapes (mirrored) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250" preserveAspectRatio="none">
                        <polygon points="400,0 340,0 300,40 340,80 300,120 340,160 300,200 340,240 400,250 400,200 360,160 400,120 360,80 400,40" fill="rgba(255,255,255,0.05)" />
                        <polygon points="320,0 260,0 220,40 260,80 220,120 260,160 220,200 260,240 320,250 320,200 280,160 320,120 280,80 320,40" fill="rgba(255,255,255,0.035)" />
                        <polygon points="140,0 80,0 40,40 80,80 40,120 80,160 40,200 80,240 140,250 140,200 100,160 140,120 100,80 140,40" fill="rgba(0,0,0,0.06)" />
                        <polygon points="60,0 0,0 0,50 30,80 0,120 30,160 0,200 0,250 60,250 60,200 30,160 60,120 30,80 60,40" fill="rgba(0,0,0,0.08)" />
                        <polygon points="220,30 190,60 220,90 190,120 220,150 190,180 220,210 240,210 240,180 210,150 240,120 210,90 240,60 240,30" fill="rgba(255,255,255,0.025)" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent pointer-events-none" />

                      <div className="relative text-center px-4">
                        <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-mono mb-3">&ldquo;</p>
                        <p className="text-sm text-white/80 leading-relaxed italic">
                          Code is like humor. When you have to explain it, it's bad.
                        </p>
                        <p className="text-[10px] text-white/40 mt-4 font-mono tracking-wider uppercase">— Cory House</p>
                      </div>
                    </div>
                  </div>
                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    {cardThemes.map((t, i) => (
                      <button
                        key={t.name}
                        onClick={() => cycleTheme(i)}
                        title={t.name}
                        className={`w-5 h-5 rounded-full transition-all duration-200 ${
                          i === cardThemeIndex ? "ring-2 ring-offset-2 ring-offset-background ring-foreground/30 scale-110" : "hover:scale-110 opacity-70 hover:opacity-100"
                        }`}
                        style={{ background: t.swatch }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section id="about" className="py-2 md:py-3">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>I'm a senior full-stack software engineer with over 10 years of experience architecting and delivering enterprise-grade applications. Based in the Philippines, I specialize in building scalable, high-performance systems that drive business value and enhance user experiences.</p>
                  <p>Throughout my career I've led development teams, designed system architectures, and delivered complex solutions for clients across multiple industries — from high-traffic e-commerce to real-time booking systems and AI-powered voice applications. My expertise covers modern frontend frameworks, robust backend systems, cloud infrastructure, and AI/voice technologies including ElevenLabs, Whisper, and VAPI.</p>
                  <p>I'm passionate about mentoring developers, establishing best practices, and contributing to technical excellence. When I'm not architecting systems I enjoy exploring new technologies and staying current with industry trends.</p>
                  <p>Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK + EXPERIENCE ═══ */}
        <section className="py-4 md:py-6" id="skills-experience">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-4">
                <div className="lg:col-span-3">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Tech Stack</h2>
                      <Link to="/tech-stack" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">View All &rsaquo;</Link>
                    </div>
                    <div className="space-y-4">
                      {skillCategories.slice(0, 3).map((category, index) => (
                        <motion.div key={category.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{category.label}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {category.skills.map(skill => <span key={skill} className="tag-pill text-xs">{skill}</span>)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-2">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card h-full" id="experience">
                    <h2 className="text-2xl font-bold mb-4">Experience</h2>
                    <div className="space-y-0">
                      {timeline.map((entry, index) => (
                        <motion.div key={entry.period} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.08 }}
                          className={`flex gap-3 py-3 ${index !== timeline.length - 1 ? "border-b border-border" : ""}`}>
                          <div className="flex-shrink-0 mt-0.5">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${index === 0 ? "bg-foreground text-white" : "bg-secondary text-muted-foreground"}`}>
                              <Briefcase className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                              <h3 className="font-semibold text-foreground text-sm leading-tight">{entry.role}</h3>
                              <span className="text-xs text-muted-foreground flex-shrink-0">{entry.year}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{entry.company}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" className="py-4 md:py-6">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Recent Projects</h2>
                  <Link to="/gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">View All &rsaquo;</Link>
                </div>

                <div>
                  {Array.from({ length: Math.ceil(projects.slice(0, 4).length / 2) }).map((_, rowIndex) => (
                    <div key={rowIndex} className={`grid md:grid-cols-2 gap-3 py-3 ${rowIndex !== Math.ceil(projects.slice(0, 4).length / 2) - 1 ? "border-b border-border" : ""}`}>
                      {projects.slice(0, 4).slice(rowIndex * 2, rowIndex * 2 + 2).map((project, index) => {
                        const Icon = project.icon;
                        return (
                          <motion.div key={project.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: (rowIndex * 2 + index) * 0.05 }} className="group p-4 rounded-xl hover:bg-secondary/50 transition-all">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm">{project.title}</h3>
                              </div>
                              <div className="flex gap-2">
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>}
                                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" /></a>}
                              </div>
                            </div>
                            <p className="text-muted-foreground text-xs mb-2 leading-relaxed line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.slice(0, 3).map(tech => <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tech}</span>)}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ GALLERY (list) ═══ */}
        <GallerySection />

        {/* ═══ RECOMMENDATIONS ═══ */}
        <section className="py-4 md:py-6">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card">
                <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
                <RecommendationsCarousel />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="py-4 md:py-6">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Social Links</h3>
                    <div className="space-y-2">
                      <a href="https://www.linkedin.com/in/gilbert-t-20a96213a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />LinkedIn
                      </a>
                      <a href="https://github.com/gtuazon18/gtuazon18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Speaking</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Available for speaking at events about software development and emerging technologies.</p>
                    <a href="mailto:tuazon548@gmail.com?subject=Speaking Inquiry" className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium mt-2 hover:underline">Get in touch &rarr;</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Email</h3>
                    <a href="mailto:tuazon548@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">tuazon548@gmail.com</a>
                    <h3 className="font-semibold text-sm mt-4 mb-2">Let's Talk</h3>
                    <a href="mailto:tuazon548@gmail.com?subject=Let's Talk" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Calendar className="w-4 h-4" />Schedule a Call &rarr;
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Blog</h3>
                    <a href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <BookOpen className="w-4 h-4" />Read my blog &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ IMAGE GALLERY ═══ */}
        <section className="py-4 md:py-6">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-card overflow-hidden">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
                  {/* Placeholder slots — replace src with real images */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0 snap-start">
                      <span className="text-xs text-muted-foreground">Image {i + 1}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="py-6 border-t border-border">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Gilbert Tuazon. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Index;
