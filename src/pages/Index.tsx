import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CalendarDays, Facebook, BriefcaseBusiness, ExternalLink, FileText, Github, Linkedin, Mail, Menu, Minus, Moon, Plus, RotateCcw, Sparkles, Sun, UsersRound, X } from "lucide-react";
import { VisitorCount } from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import { BookingSection, FaqSection, ServicesSection } from "@/components/HireSection";

const featuredWork = [
  { number: "01", name: "Sabsi", eyebrow: "AI product · iOS", description: "An AI-powered subscription manager that helps people track renewals, understand spending, and add subscriptions through chat or voice.", role: "Product design, mobile engineering, AI integration", tech: ["React Native", "AI Chat", "Voice", "iOS"], href: "https://www.sabsi.sbs/", linkLabel: "Visit product", appStoreHref: "https://apps.apple.com/ph/app/subscription-tracker-sabsi/id6785761583", image: "/Sabsi/logo.webp", tone: "from-[#5d44d8] to-[#a994ff]" },
  { number: "02", name: "Pocket Piggy", eyebrow: "Local-first product · iOS", description: "A private, playful savings companion for setting goals and building momentum without connecting a bank account.", role: "Product strategy, SwiftUI development, local-first architecture", tech: ["SwiftUI", "SwiftData", "Local-first", "iOS"], href: "https://pocket-piggy.sabsi.sbs/", linkLabel: "Visit product", appStoreHref: "https://apps.apple.com/ph/app/pocket-piggy-money-goals/id6801859419", image: "/PocketPiggy/logo.webp", tone: "from-[#e9578d] to-[#ffb2c9]" },
  { number: "03", name: "PreviewMyApp", eyebrow: "Creator tool · Web", description: "A focused workspace for turning app screenshots into polished store graphics, device mockups, and preview videos.", role: "Product engineering, editor architecture, media workflows", tech: ["React", "TanStack", "Remotion", "Supabase"], href: "https://previewmyapp.sabsi.sbs/", linkLabel: "Visit product", image: "/PreviewMyApp/logo.webp", tone: "from-[#111827] to-[#52617a]" },
  { number: "04", name: "Juan AI", eyebrow: "Developer mentor · Web", description: "A personalized developer mentor that turns a broad career goal into one clear task, useful help, and real evidence of progress.", role: "Product design, web engineering, learning systems", tech: ["Next.js", "React", "TypeScript"], href: "https://juan-ai.sabsi.sbs/", linkLabel: "Visit product", image: "/JuanAI/logo.png", tone: "from-[#f4512c] to-[#ff9a78]" },
  { number: "05", name: "Telezi AI", eyebrow: "Creator assistant · iOS", description: "A SwiftUI creator recording assistant that turns an idea into a camera-ready script and helps creators deliver it naturally with an intelligent teleprompter.", role: "Product strategy, SwiftUI development, AI workflow design", tech: ["SwiftUI", "AI", "Teleprompter"], href: "https://tarantulaai.sabsi.sbs/", linkLabel: "Visit product", appStoreHref: "https://apps.apple.com/ph/app/telezi-teleprompter-no-ads/id6804414952", image: "/TeleziAI/logo.png", tone: "from-[#111111] to-[#737373]" },
  { number: "06", name: "Bree", eyebrow: "Wellbeing companion · iOS", description: "A private, offline-first breathing companion that helps people pause, try one small practice, and find a gentler next step.", role: "Product design, SwiftUI development, local-first architecture", tech: ["SwiftUI", "Offline-first", "StoreKit"], href: "http://bree.sabsi.sbs/", linkLabel: "Visit product", appStoreHref: "https://apps.apple.com/ph/app/bree-sleep-meditation/id6806787179", image: "/Bree/logo.png", tone: "from-[#ffd122] to-[#fff1a6]" },
  { number: "07", name: "mePace", eyebrow: "Wellbeing at work · iOS", description: "A cheerful break buddy for long workdays: a desk mascot that nudges you to move, drink water, rest your eyes with the 20-20-20 rule, and reset your mind.", role: "Product design, SwiftUI development, habit design", tech: ["SwiftUI", "Wellbeing", "iOS"], href: "https://apps.apple.com/ph/app/mepace/id6833041310", linkLabel: "View on App Store", image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e4/81/43/e48143cc-4db5-6e61-927b-ba852c630323/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg", tone: "from-[#5ccf3a] to-[#c6f2a8]" },
  { number: "08", name: "MoonTales", eyebrow: "Kids bedtime stories · iOS", description: "A calm bedtime storytelling app: illustrated stories with recorded narration and page-turning read-along, child profiles, and parent controls.", role: "Product design, SwiftUI development, local-first architecture", tech: ["SwiftUI", "Audio", "StoreKit", "iOS"], href: "https://apps.apple.com/ph/app/moontales-storytime/id6816791271", linkLabel: "View on App Store", image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3c/d1/1a/3cd11af1-6762-ed59-f779-33237835a629/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg", tone: "from-[#2b2f7a] to-[#f3c64b]" },
  { number: "09", name: "Lollibong PH", eyebrow: "Ecommerce · Web", description: "A Philippine storefront for Korean-inspired honey-and-herb candies and lollipops, with bundle pricing, COD and GCash checkout, and a direct-order flow.", role: "Product engineering, storefront design, checkout and payments", tech: ["Next.js", "TypeScript", "Ecommerce"], href: "https://www.lollibongph.com/", linkLabel: "Visit store", image: "/Lollibong/logo.jpg", tone: "from-[#e8a03a] to-[#f7d9a0]" },
];

const experience = [
  { period: "2025", role: "AI Booking Automation Engineer", company: "Freelance / Consulting", image: "/experience/ai-booking-automation.png" },
  { period: "2025—Now", role: "Senior Full Stack AI Software Engineer", company: "Fintelligence" },
  { period: "2024—2025", role: "Senior Fullstack Software Engineer", company: "Teko Philippines" },
  { period: "2020—2024", role: "Full-Stack Backend Software Engineer", company: "Multisys Technologies" },
  { period: "2014—2020", role: "Full-Stack Software Engineer", company: "W-Tech Solutions · Ingram Micro" },
];

const galleryHighlights = [
  { src: "/ShowAndTellMeetup/personal-apps/portfolio-show-and-tell.webp", alt: "Gilbert Tuazon presenting his personal app portfolio" },
  { src: "/ShowAndTellMeetup/personal-apps/telezi-ai-demo.webp", alt: "Telezi AI product demo" },
  { src: "/ShowAndTellMeetup/personal-apps/telezi-ai-teleprompter.webp", alt: "Telezi AI teleprompter workflow" },
  { src: "/ShowAndTellMeetup/personal-apps/telezi-ai-creator-workflow.webp", alt: "Telezi AI creator workflow" },
  { src: "/ShowAndTellMeetup/personal-apps/huawei-visit.webp", alt: "Gilbert Tuazon at the Huawei venue" },
  { src: "/ShowAndTellMeetup/personal-apps/meetup-room.webp", alt: "AppBuildersPH Show and Tell meetup room" },
  { src: "/Lollibong/products.jpg", alt: "Lollibong PH canister and honey-and-herb candy pouches" },
  { src: "/Lollibong/packaging.jpg", alt: "Lollibong PH candy box and individually packed treats" },
  { src: "/Lollibong/logo.jpg", alt: "Lollibong PH amber heart-shaped lollipops" },
  { src: "/Fintel/download.webp", alt: "Fintelligence product interface" },
  { src: "/Fintel/download (1).webp", alt: "Fintelligence platform screen" },
  { src: "/Fintel/download (2).webp", alt: "Fintelligence dashboard" },
  { src: "/Fintel/download (3).webp", alt: "Fintelligence product detail" },
  { src: "/Fintel/download (4).webp", alt: "Fintelligence workflow screen" },
  { src: "/Fintel/download (5).webp", alt: "Fintelligence analytics view" },
  { src: "/Fintel/download (6).webp", alt: "Fintelligence platform view" },
  { src: "/Fintel/download (7).webp", alt: "Fintelligence interface detail" },
];

const featuredTikTok = "7646806939032112405";

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
  const [galleryZoom, setGalleryZoom] = useState(1);
  const [showAllWork, setShowAllWork] = useState(false);
  const [beyondTab, setBeyondTab] = useState<"gallery" | "tiktok" | "community">("gallery");
  const visibleWork = showAllWork ? featuredWork : featuredWork.slice(0, 3);
  const nav = [["Work", "#work"], ["Services", "#services"], ["Experience", "#experience"], ["FAQ", "#faq"]];
  const galleryTileWidth = Math.round(176 * galleryZoom);
  const galleryTileHeight = Math.round(148 * galleryZoom);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Gilbert Tuazon, home"><span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-xs font-bold text-background">GT</span><span className="hidden whitespace-nowrap sm:inline">Gilbert Tuazon</span></a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
            <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Writing</Link><Link to="/community" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Community</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary" aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <a href="https://www.facebook.com/gat.mgb.2011" target="_blank" rel="noreferrer" className="hidden h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:grid" aria-label="Facebook"><Facebook className="h-4 w-4" /></a><a href="#book" className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm whitespace-nowrap font-semibold text-background transition-opacity hover:opacity-80 sm:inline-flex"><CalendarDays className="h-4 w-4" /> Book a call</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-6xl flex-col gap-1">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">{label}</a>)}<Link to="/blog" className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">Writing</Link><Link to="/community" className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">Community</Link><a href="https://www.facebook.com/gat.mgb.2011" target="_blank" rel="noreferrer" className="rounded-xl px-3 py-3 text-sm hover:bg-secondary">Facebook</a><a href="#book" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"><CalendarDays className="h-4 w-4" /> Book a free call</a></div></nav>}
      </header>

      <main id="top">
        <section className="relative border-b border-border pt-28 md:pt-36">
          <div className="portfolio-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-7 flex items-center gap-3 text-sm text-muted-foreground"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>Available for new projects · Replies within 24h</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl xl:text-7xl">I build products where <span className="text-muted-foreground">engineering meets intelligence.</span></motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">I’m Gilbert Tuazon, a product engineer with 10+ years turning complex ideas into dependable AI, web, and mobile experiences—from architecture to launch.</motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-10 flex flex-wrap gap-3"><a href="#book" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"><CalendarDays className="h-4 w-4" /> Book a free call</a><a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary">Explore selected work <ArrowRight className="h-4 w-4" /></a><Link to="/cv" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary"><FileText className="h-4 w-4" /> View résumé</Link></motion.div>
              <motion.dl initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10 grid max-w-xl grid-cols-3 gap-4">{[["10+", "Years shipping software"], [String(featuredWork.length), "Products launched"], [String(featuredWork.filter(w => w.appStoreHref || w.href.includes("apps.apple.com")).length), "Apps on the App Store"]].map(([value, label]) => <div key={label}><dt className="sr-only">{label}</dt><dd className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{value}</dd><p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p></div>)}</motion.dl>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-52 lg:w-full">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl shadow-black/10">
                <img src="/gt-pic.webp" alt="Gilbert Tuazon" className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${dark ? "opacity-0" : "opacity-100"}`} width="700" height="991" />
                <img src="/nightscene.webp" alt="Gilbert Tuazon at night" className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${dark ? "opacity-100" : "opacity-0"}`} width="700" height="991" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg"><p className="text-xs text-muted-foreground">Based in</p><p className="mt-0.5 text-sm font-semibold">Cavite, Philippines</p></div>
            </motion.div>
            </div>
            <div className="mt-12 grid gap-7 border-t border-border pt-7 text-sm sm:grid-cols-3 md:mt-16"><div><p className="font-semibold">Based in Cavite, Philippines</p><p className="mt-1 text-muted-foreground">Working with teams worldwide</p></div><div><p className="font-semibold">Full product ownership</p><p className="mt-1 text-muted-foreground">Strategy · Design · Engineering</p></div><div><p className="font-semibold">Currently at Fintelligence</p><p className="mt-1 text-muted-foreground">Senior Full Stack AI Engineer</p></div></div>
            <ClientLogos />
          </div>
        </section>

        <section id="work" className="scroll-mt-20 py-16 md:py-24"><div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end"><div><p className="section-kicker">Selected work</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Products shaped from first question to final detail.</h2></div><Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">View all projects <ArrowRight className="h-4 w-4" /></Link></Reveal>
          <div className="grid gap-5 md:grid-cols-3">{visibleWork.map(project => <Reveal key={project.name} className="h-full"><article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            <div className="flex items-start justify-between"><img src={project.image} alt={`${project.name} icon`} className="h-16 w-16 rounded-2xl object-cover shadow-sm" loading="lazy" /><span className="font-mono text-xs text-muted-foreground">{project.number}</span></div>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{project.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{project.name}</h3><p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-6 border-t border-border pt-5"><p className="text-[10px] uppercase tracking-wider text-muted-foreground">My role</p><p className="mt-2 text-xs leading-5">{project.role}</p></div>
            <div className="mt-5 flex flex-wrap gap-1.5">{project.tech.slice(0, 3).map(item => <span key={item} className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">{item}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2"><a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">{project.linkLabel} <ExternalLink className="h-4 w-4" /></a>{project.appStoreHref && <a href={project.appStoreHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">View on App Store <ExternalLink className="h-4 w-4" /></a>}</div>
          </article></Reveal>)}</div>
          {featuredWork.length > 3 && <div className="mt-8 flex justify-center"><button type="button" onClick={() => setShowAllWork(v => !v)} aria-expanded={showAllWork} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">{showAllWork ? <>Show fewer <Minus className="h-4 w-4" /></> : <>Show all {featuredWork.length} products <Plus className="h-4 w-4" /></>}</button></div>}
        </div></section>

        <ServicesSection />


        <section id="experience" className="scroll-mt-20 border-t border-border py-16 md:py-24"><div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><Reveal><p className="section-kicker">Experience</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">A decade of shipping, learning, and leading.</h2><p className="mt-6 leading-7 text-muted-foreground">I work best with founders and engineering teams who need someone to clarify the problem, own the hard decisions, and carry the product through delivery.</p><Link to="/cv" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline">Full experience and CV <ArrowRight className="h-4 w-4" /></Link><figure className="mt-10 rounded-3xl bg-[#171717] p-7 text-white dark:bg-[#ece8df] dark:text-[#171717]"><Sparkles className="h-5 w-5 opacity-60" /><p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">How I work</p><blockquote className="mt-4 text-xl font-medium leading-snug tracking-[-0.02em]">Clarify the real problem. Make the hard decisions visible. Build the simplest system that can carry the product forward.</blockquote></figure></Reveal><Reveal className="border-t border-border">{experience.map(entry => <div key={entry.period} className="grid gap-4 border-b border-border py-5 sm:grid-cols-[110px_1fr]">{entry.image ? <a href={entry.image} target="_blank" rel="noreferrer" className="order-2 overflow-hidden rounded-xl border border-border bg-secondary sm:order-3 sm:col-span-2"><img src={entry.image} alt="n8n AI booking automation workflow" className="h-36 w-full object-cover object-center transition-transform hover:scale-[1.02]" loading="lazy" /></a> : null}<p className="font-mono text-xs text-muted-foreground">{entry.period}</p><div><h3 className="font-semibold">{entry.role}</h3><p className="mt-1 text-sm text-muted-foreground">{entry.company}</p>{entry.image && <p className="mt-2 text-xs leading-5 text-muted-foreground">Conversational booking workflow with availability checks, booking actions, confirmations, and error handling.</p>}</div></div>)}</Reveal></div></section>

        <section id="beyond" className="scroll-mt-20 border-t border-border py-16 md:py-24"><div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Beyond the build</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">The work, the people, and the things I share along the way.</h2></div><div className="flex shrink-0 rounded-full border border-border bg-background p-1" role="tablist" aria-label="Beyond the build">{([["gallery", "Gallery"], ["tiktok", "TikTok"], ["community", "Community"]] as const).map(([value, label]) => <button key={value} type="button" role="tab" aria-selected={beyondTab === value} onClick={() => setBeyondTab(value)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${beyondTab === value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>{label}</button>)}</div></Reveal>
          <div className="mt-8" role="tabpanel">
          {beyondTab === "gallery" && <div className="min-w-0 rounded-3xl border border-border bg-card p-5 md:p-7"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">Gallery</p><h3 className="mt-3 text-2xl font-semibold">Projects, demos, and community moments</h3></div><div className="flex flex-wrap items-center gap-3"><div className="flex items-center rounded-full border border-border bg-background p-1" role="group" aria-label="Gallery zoom controls"><button type="button" onClick={() => setGalleryZoom(zoom => Math.max(0.75, Number((zoom - 0.25).toFixed(2))))} disabled={galleryZoom <= 0.75} className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-35" aria-label="Zoom out" title="Zoom out"><Minus className="h-3.5 w-3.5" /></button><span className="min-w-12 text-center font-mono text-[10px] text-muted-foreground">{Math.round(galleryZoom * 100)}%</span><button type="button" onClick={() => setGalleryZoom(zoom => Math.min(1.75, Number((zoom + 0.25).toFixed(2))))} disabled={galleryZoom >= 1.75} className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-35" aria-label="Zoom in" title="Zoom in"><Plus className="h-3.5 w-3.5" /></button><button type="button" onClick={() => setGalleryZoom(1)} className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary" aria-label="Reset gallery zoom" title="Reset zoom"><RotateCcw className="h-3.5 w-3.5" /></button></div><Link to="/gallery" className="hidden items-center gap-2 text-sm font-semibold hover:underline sm:inline-flex">Project archive <ArrowRight className="h-4 w-4" /></Link></div></div><div className="mt-6 min-w-0 overflow-hidden rounded-2xl border border-border bg-secondary/40"><div className="flex items-center justify-between border-b border-border px-4 py-3 text-xs text-muted-foreground"><span>Scroll inside the gallery to explore</span><span className="font-mono">{galleryHighlights.length} images</span></div><div className="max-h-[390px] min-w-0 overflow-auto p-3" role="region" aria-label="Scrollable project and community gallery"><div className="grid w-max grid-flow-col gap-3" style={{ gridAutoColumns: `${galleryTileWidth}px`, gridTemplateRows: `repeat(2, ${galleryTileHeight}px)` }}>{galleryHighlights.map(image => <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl bg-secondary" title={`Open ${image.alt}`}><img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></a>)}</div></div></div><Link to="/gallery" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:underline sm:hidden">Project archive <ArrowRight className="h-4 w-4" /></Link></div>}
          {beyondTab === "tiktok" && <div className="mx-auto min-w-0 max-w-md overflow-hidden rounded-3xl border border-border bg-card"><div className="flex items-center justify-between border-b border-border p-5 md:p-6"><div><p className="section-kicker">TikTok</p><h3 className="mt-2 text-2xl font-semibold">Build notes in motion</h3></div><Link to="/tiktok" className="text-sm font-semibold hover:underline" aria-label="View all TikTok content">View all</Link></div><div className="bg-black"><iframe src={`https://www.tiktok.com/embed/v2/${featuredTikTok}`} className="h-[430px] w-full" style={{ border: "none" }} allowFullScreen allow="encrypted-media" loading="lazy" title="Featured TikTok video" /></div><div className="p-5 md:p-6"><p className="text-sm leading-6 text-muted-foreground">Behind-the-scenes product work, tech experiments, and lessons from shipping.</p><Link to="/tiktok" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline">See all content <ArrowRight className="h-4 w-4" /></Link></div></div>}
          {beyondTab === "community" && <a href="https://appbuildersph.com/blog/appbuildersph-holds-its-first-ever-show-tell" target="_blank" rel="noreferrer" className="group grid overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:grid-cols-[0.9fr_1.1fr]"><div className="min-h-56 overflow-hidden bg-secondary md:min-h-64"><img src="/ShowAndTellMeetup/758793846_4315085988755472_2795391048776258519_n.jpg" alt="AppBuildersPH Show and Tell meetup" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div><div className="flex flex-col justify-center p-7 md:p-10"><p className="section-kicker">Community highlight</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">AppBuildersPH Show &amp; Tell</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">Participated in AppBuildersPH&apos;s first-ever Show &amp; Tell meetup with Filipino app builders, developers, and founders.</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Read the event recap <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></a>}
          </div>
        <Reveal className="mt-6 grid gap-4 md:grid-cols-3">{[
          { to: "/blog", icon: BookOpen, label: "Writing", title: "Notes on building software that lasts.", action: "Read the blog" },
          { to: "/community", icon: UsersRound, label: "Community", title: "Sharing ideas beyond the codebase.", action: "See community work" },
          { to: "/gallery", icon: BriefcaseBusiness, label: "Archive", title: "More products across industries.", action: "Browse all projects" },
        ].map(({ to, icon: Icon, label, title, action }) => <Link key={to} to={to} className="group flex items-start gap-4 rounded-2xl border border-border p-5 transition-colors hover:bg-secondary"><Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p><h3 className="mt-1.5 font-semibold">{title}</h3><span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">{action} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</Reveal>
        </div></section>

        <BookingSection />

        <FaqSection />

        <section id="contact" className="border-t border-border py-16 md:py-24"><div className="mx-auto max-w-6xl px-5 md:px-8"><Reveal><p className="section-kicker">Start a conversation</p><div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl">Have a difficult product idea? Let&apos;s make it real.</h2><div className="flex shrink-0 flex-wrap gap-3"><a href="#book" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-85">Book a free call <CalendarDays className="h-4 w-4" /></a><a href="mailto:tuazon548@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">Send me an email <Mail className="h-4 w-4" /></a><a href="https://www.facebook.com/gat.mgb.2011" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">Facebook <Facebook className="h-4 w-4" /></a></div></div></Reveal></div></section>
      </main>

      <footer className="border-t border-border pb-28 pt-8 md:py-8"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8"><div className="flex flex-wrap items-center gap-x-5 gap-y-2"><p>© {new Date().getFullYear()} Gilbert Tuazon</p><VisitorCount /></div><div className="flex items-center gap-5"><a href="https://github.com/gtuazon18/gtuazon18" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a><a href="https://www.linkedin.com/in/gilbert-tuazon/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a><a href="https://www.facebook.com/gat.mgb.2011" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><Facebook className="h-4 w-4" /> Facebook</a><a href="mailto:tuazon548@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground"><Mail className="h-4 w-4" /> Email</a></div></div></footer>

      <a href="#book" className="fixed bottom-6 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-semibold text-background shadow-xl shadow-black/20 md:hidden"><CalendarDays className="h-4 w-4" /> Book a call</a>
    </div>
  );
};

export default Index;
