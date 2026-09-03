import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BrainCircuit, BriefcaseBusiness, Code2, ExternalLink, FileText, Github, Linkedin, Mail, Menu, Moon, Smartphone, Sparkles, Sun, UsersRound, X } from "lucide-react";
import { VisitorCount } from "@/components/Footer";

const featuredWork = [
  { number: "01", name: "Sabsi", eyebrow: "AI product · iOS", description: "An AI-powered subscription manager that helps people track renewals, understand spending, and add subscriptions through chat or voice.", role: "Product design, mobile engineering, AI integration", tech: ["React Native", "AI Chat", "Voice", "iOS"], href: "https://www.sabsi.sbs/", linkLabel: "Visit product", appStoreHref: "https://apps.apple.com/ph/app/subscription-tracker-sabsi/id6785761583", image: "/Sabsi/logo.webp", tone: "from-[#5d44d8] to-[#a994ff]" },
  { number: "02", name: "Pocket Piggy", eyebrow: "Local-first product · iOS", description: "A private, playful savings companion for setting goals and building momentum without connecting a bank account.", role: "Product strategy, SwiftUI development, local-first architecture", tech: ["SwiftUI", "SwiftData", "Local-first", "iOS"], href: "https://pocket-piggy.sabsi.sbs/", linkLabel: "Visit product", image: "/PocketPiggy/logo.webp", tone: "from-[#e9578d] to-[#ffb2c9]" },
  { number: "03", name: "PreviewMyApp", eyebrow: "Creator tool · Web", description: "A focused workspace for turning app screenshots into polished store graphics, device mockups, and preview videos.", role: "Product engineering, editor architecture, media workflows", tech: ["React", "TanStack", "Remotion", "Supabase"], href: "https://previewmyapp.sabsi.sbs/", linkLabel: "Visit product", image: "/PreviewMyApp/logo.webp", tone: "from-[#111827] to-[#52617a]" },
  { number: "04", name: "Juan AI", eyebrow: "Developer mentor · Web", description: "A personalized developer mentor that turns a broad career goal into one clear task, useful help, and real evidence of progress.", role: "Product design, web engineering, learning systems", tech: ["Next.js", "React", "TypeScript"], href: "https://juan-ai.sabsi.sbs/", linkLabel: "Visit product", image: "/JuanAI/logo.png", tone: "from-[#f4512c] to-[#ff9a78]" },
  { number: "05", name: "Tarantula AI", eyebrow: "Creator assistant · iOS", description: "A SwiftUI creator recording assistant that turns an idea into a camera-ready script and helps creators deliver it naturally with an intelligent teleprompter.", role: "Product strategy, SwiftUI development, AI workflow design", tech: ["SwiftUI", "AI", "Teleprompter"], href: "https://tarantulaai.sabsi.sbs/", linkLabel: "Visit product", image: "/TarantulaAI/logo.webp", tone: "from-[#2b2627] to-[#efa14f]" },
  { number: "06", name: "Bree", eyebrow: "Wellbeing companion · iOS", description: "A private, offline-first breathing companion that helps people pause, try one small practice, and find a gentler next step.", role: "Product design, SwiftUI development, local-first architecture", tech: ["SwiftUI", "Offline-first", "StoreKit"], href: "http://bree.sabsi.sbs/", linkLabel: "Visit product", image: "/Bree/logo.png", tone: "from-[#ffd122] to-[#fff1a6]" },
];

const capabilities = [
  { icon: BrainCircuit, title: "Applied AI systems", copy: "Production-minded AI features, agents, RAG workflows, and voice experiences built around a real user problem.", tools: "LangChain · LangGraph · OpenAI · ElevenLabs · VAPI" },
  { icon: Code2, title: "Full-stack products", copy: "End-to-end ownership from system architecture and APIs to polished, responsive interfaces that teams can maintain.", tools: "React · TypeScript · Node.js · Laravel · PostgreSQL" },
  { icon: Smartphone, title: "Mobile experiences", copy: "Native-feeling iOS and cross-platform apps with thoughtful onboarding, offline behavior, and reliable data flows.", tools: "SwiftUI · React Native · Expo · SwiftData" },
];

const experience = [
  ["2025—Now", "Senior Full Stack AI Software Engineer", "Fintelligence"],
  ["2024—2025", "Senior Fullstack Software Engineer", "Teko Philippines"],
  ["2020—2024", "Full-Stack Backend Software Engineer", "Multisys Technologies"],
  ["2014—2020", "Full-Stack Software Engineer", "W-Tech Solutions · Ingram Micro"],
];

function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark] as const;
}

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const Index = () => {
  const [dark, setDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["Work", "#work"], ["Expertise", "#expertise"], ["Experience", "#experience"]];

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Gilbert Tuazon, home"><span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-xs font-bold text-background">GT</span><span className="hidden sm:inline">Gilbert Tuazon</span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
            <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Writing</Link><Link to="/community" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Community</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary" aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <a href="mailto:tuazon548@gmail.com" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80 sm:inline-flex">Let&apos;s talk</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-6xl flex-col gap-1">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">{label}</a>)}<Link to="/blog" className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">Writing</Link><Link to="/community" className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">Community</Link></div></nav>}
      </header>

      <main id="top">
        <section className="relative border-b border-border pt-32 md:pt-44">
          <div className="portfolio-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-7 flex items-center gap-3 text-sm text-muted-foreground"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>Available for ambitious product work</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl xl:text-7xl">I build products where <span className="text-muted-foreground">engineering meets intelligence.</span></motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Senior product engineer with 10+ years turning complex ideas into dependable AI, web, and mobile experiences—from architecture to launch.</motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-10 flex flex-wrap gap-3"><a href="#work" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">Explore selected work <ArrowRight className="h-4 w-4" /></a><Link to="/cv" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary"><FileText className="h-4 w-4" /> View résumé</Link></motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-52 lg:w-full">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl shadow-black/10">
                <img src="/gt-pic.webp" alt="Gilbert Tuazon" className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${dark ? "opacity-0" : "opacity-100"}`} width="700" height="991" />
                <img src="/nightscene.webp" alt="Gilbert Tuazon at night" className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${dark ? "opacity-100" : "opacity-0"}`} width="700" height="991" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg"><p className="text-xs text-muted-foreground">Based in</p><p className="mt-0.5 text-sm font-semibold">Cavite, Philippines</p></div>
            </motion.div>
            </div>
            <div className="mt-20 grid gap-7 border-t border-border pt-7 text-sm sm:grid-cols-3 md:mt-28"><div><p className="font-semibold">Based in Cavite, Philippines</p><p className="mt-1 text-muted-foreground">Working with teams worldwide</p></div><div><p className="font-semibold">Full product ownership</p><p className="mt-1 text-muted-foreground">Strategy · Design · Engineering</p></div><div><p className="font-semibold">Currently at Fintelligence</p><p className="mt-1 text-muted-foreground">Senior Full Stack AI Engineer</p></div></div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 py-20 md:py-32"><div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end"><div><p className="section-kicker">Selected work</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Products shaped from first question to final detail.</h2></div><Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">View all projects <ArrowRight className="h-4 w-4" /></Link></Reveal>
          <div className="grid gap-5 md:grid-cols-3">{featuredWork.map(project => <Reveal key={project.name} className="h-full"><article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            <div className="flex items-start justify-between"><img src={project.image} alt={`${project.name} icon`} className="h-16 w-16 rounded-2xl object-cover shadow-sm" loading="lazy" /><span className="font-mono text-xs text-muted-foreground">{project.number}</span></div>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{project.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{project.name}</h3><p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-6 border-t border-border pt-5"><p className="text-[10px] uppercase tracking-wider text-muted-foreground">My role</p><p className="mt-2 text-xs leading-5">{project.role}</p></div>
            <div className="mt-5 flex flex-wrap gap-1.5">{project.tech.slice(0, 3).map(item => <span key={item} className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">{item}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2"><a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">{project.linkLabel} <ExternalLink className="h-4 w-4" /></a>{project.appStoreHref && <a href={project.appStoreHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">View on App Store <ExternalLink className="h-4 w-4" /></a>}</div>
          </article></Reveal>)}</div>
        </div></section>

        <section id="expertise" className="scroll-mt-20 border-y border-border bg-secondary/40 py-20 md:py-28"><div className="mx-auto max-w-6xl px-5 md:px-8"><Reveal><p className="section-kicker">What I bring</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">One partner across product, systems, and delivery.</h2></Reveal><div className="mt-14 grid border-y border-border md:grid-cols-3">{capabilities.map(({ icon: Icon, title, copy, tools }, index) => <Reveal key={title} className={`py-9 md:px-8 md:py-12 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}><Icon className="h-6 w-6" strokeWidth={1.5} /><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p><p className="mt-8 text-xs leading-6 text-muted-foreground">{tools}</p></Reveal>)}</div></div></section>

        <section id="experience" className="scroll-mt-20 py-20 md:py-32"><div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><Reveal><p className="section-kicker">Experience</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">A decade of shipping, learning, and leading.</h2><p className="mt-6 leading-7 text-muted-foreground">I work best with founders and engineering teams who need someone to clarify the problem, own the hard decisions, and carry the product through delivery.</p><Link to="/cv" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline">Full experience and CV <ArrowRight className="h-4 w-4" /></Link></Reveal><Reveal className="border-t border-border">{experience.map(([period, role, company]) => <div key={period} className="grid gap-2 border-b border-border py-6 sm:grid-cols-[110px_1fr]"><p className="font-mono text-xs text-muted-foreground">{period}</p><div><h3 className="font-semibold">{role}</h3><p className="mt-1 text-sm text-muted-foreground">{company}</p></div></div>)}</Reveal></div></section>

        <section className="bg-[#171717] py-20 text-white dark:bg-[#ece8df] dark:text-[#171717] md:py-28"><div className="mx-auto max-w-5xl px-5 text-center md:px-8"><Reveal><Sparkles className="mx-auto h-6 w-6 opacity-60" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">How I work</p><p className="mx-auto mt-8 max-w-4xl text-balance text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">Clarify the real problem. Make the hard decisions visible. Build the simplest system that can carry the product forward.</p></Reveal></div></section>

        <section className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-5 md:px-8"><Reveal className="grid gap-5 md:grid-cols-3">{[
          { to: "/blog", icon: BookOpen, label: "Writing", title: "Notes on building software that lasts.", action: "Read the blog" },
          { to: "/community", icon: UsersRound, label: "Community", title: "Sharing ideas beyond the codebase.", action: "See community work" },
          { to: "/gallery", icon: BriefcaseBusiness, label: "Archive", title: "More products across industries.", action: "Browse all projects" },
        ].map(({ to, icon: Icon, label, title, action }) => <Link key={to} to={to} className="group rounded-3xl border border-border p-7 transition-colors hover:bg-secondary"><Icon className="h-6 w-6" strokeWidth={1.5} /><p className="mt-12 text-xs uppercase tracking-wider text-muted-foreground">{label}</p><h3 className="mt-3 text-2xl font-semibold">{title}</h3><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">{action} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</Reveal></div></section>

        <section id="contact" className="border-t border-border py-20 md:py-32"><div className="mx-auto max-w-6xl px-5 md:px-8"><Reveal><p className="section-kicker">Start a conversation</p><div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">Have a difficult product idea? Let&apos;s make it real.</h2><a href="mailto:tuazon548@gmail.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background">Send me an email <Mail className="h-4 w-4" /></a></div></Reveal></div></section>
      </main>

      <footer className="border-t border-border py-8"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8"><div className="flex flex-wrap items-center gap-x-5 gap-y-2"><p>© {new Date().getFullYear()} Gilbert Tuazon</p><VisitorCount /></div><div className="flex items-center gap-5"><a href="https://github.com/gtuazon18/gtuazon18" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a><a href="https://www.linkedin.com/in/gilbert-t-20a96213a/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a><a href="mailto:tuazon548@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground"><Mail className="h-4 w-4" /> Email</a></div></div></footer>
    </div>
  );
};

export default Index;
