import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { addDays, format, isBefore, startOfDay } from "date-fns";
import { ArrowRight, BrainCircuit, CalendarDays, Check, CheckCircle2, Clock, Code2, Loader2, Mail, ShieldCheck, MessageSquareText, Rocket, Smartphone, Workflow } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CONTACT_EMAIL = "tuazon548@gmail.com";

const services = [
  { icon: BrainCircuit, title: "AI features & agents", copy: "Chatbots, RAG over your docs, voice agents, and AI workflows that solve a real business problem — not demos.", points: ["LLM integration & prompt design", "RAG / knowledge-base assistants", "Voice & chat agents"], tools: "LangChain · LangGraph · OpenAI · ElevenLabs · VAPI" },
  { icon: Code2, title: "Web apps & MVPs", copy: "From idea to launched product: architecture, backend, dashboard, and a polished interface your team can maintain.", points: ["React / Next.js / Node / Laravel", "Auth, payments, admin panels", "Launch-ready in weeks"], tools: "React · TypeScript · Node.js · Laravel · PostgreSQL" },
  { icon: Smartphone, title: "iOS & mobile apps", copy: "Native-feeling apps shipped to the App Store — I’ve launched several of my own, so I know the whole path.", points: ["SwiftUI & React Native", "Subscriptions & StoreKit", "App Store submission"], tools: "SwiftUI · React Native · Expo · SwiftData" },
  { icon: Workflow, title: "Automation & booking systems", copy: "Save hours every week with automated booking, lead capture, notifications, and internal tools.", points: ["n8n / Make / custom APIs", "Booking & scheduling flows", "CRM & email integrations"], tools: "n8n · Twilio · WhatsApp API · Google Calendar" },
];

const steps = [
  { title: "Free discovery call", copy: "30 minutes to understand your goal, users, and constraints. No pressure, no cost." },
  { title: "Clear plan & quote", copy: "A scoped proposal with timeline, milestones, and a fixed or flexible price." },
  { title: "Build in the open", copy: "Weekly demos and a shared board, so you always see real progress." },
  { title: "Launch & support", copy: "Deployment, handover, and ongoing support so the product keeps growing." },
];

const faqs = [
  { q: "What kind of projects do you take on?", a: "MVPs for startups, AI features for existing products, iOS/mobile apps, web platforms, and automation for small businesses. If it involves turning a fuzzy idea into a working product, it’s a good fit." },
  { q: "How much does a project cost?", a: "It depends on scope. Small automations and landing pages start from a few days of work; MVPs typically run a few weeks. After the discovery call you’ll get a clear quote before any work begins." },
  { q: "Do you work with international clients?", a: "Yes. I’m based in Cavite, Philippines and work with teams worldwide, with overlap across Asia, Australia, Europe, and US time zones." },
  { q: "How fast will you reply?", a: "Usually within 24 hours. Booking requests are confirmed by email with a calendar invite and meeting link." },
  { q: "Can you join my existing team?", a: "Yes — as a contract senior engineer, technical lead, or AI specialist working alongside your developers." },
];

const serviceOptions = ["AI feature / agent", "Web app or MVP", "iOS / mobile app", "Automation / booking system", "Full-time or contract role", "Speaking / community", "Something else"];
const budgetOptions = ["Not sure yet", "Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];
const timelineOptions = ["ASAP", "Within a month", "1–3 months", "Just exploring"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "7:00 PM", "8:00 PM"];

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const fieldClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10";
const labelClass = "mb-1.5 block text-xs font-semibold text-muted-foreground";

type Mode = "booking" | "message";
type Status = { state: "idle" | "sending" | "sent" | "error"; note?: string };

export const ServicesSection = () => (
  <section id="services" className="scroll-mt-20 border-t border-border bg-secondary/40 py-16 md:py-24">
    <span id="expertise" className="block scroll-mt-20" aria-hidden="true" />
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Services</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">How I can help your business.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">One partner across product, systems, and delivery — from the first question to launch.</p>
        </div>
        <a href="#book" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">Book a free call <ArrowRight className="h-4 w-4" /></a>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, copy, points, tools }) => (
          <Reveal key={title} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{copy}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {points.map(point => <li key={point} className="flex items-start gap-2 text-xs leading-5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{point}</li>)}
              </ul>
              <p className="mt-5 text-[11px] leading-5 text-muted-foreground">{tools}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 rounded-3xl border border-border bg-background p-6 md:p-8">
        <div className="flex items-center gap-3"><Rocket className="h-5 w-5" strokeWidth={1.6} /><p className="section-kicker">How we’ll work together</p></div>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  </section>
);

export const BookingSection = () => {
  const [mode, setMode] = useState<Mode>("booking");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const timezone = useMemo(() => {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { return ""; }
  }, []);
  const today = startOfDay(new Date());

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (mode === "booking" && (!date || !time)) {
      setStatus({ state: "error", note: "Please pick a date and a time for your call." });
      return;
    }
    const payload: Record<string, string> = { ...data, kind: mode, date: date ? format(date, "EEEE, MMMM d, yyyy") : "", time: mode === "booking" ? time : "", timezone };
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Request failed");
      setStatus({ state: "sent" });
      form.reset();
      setDate(undefined);
      setTime("");
    } catch {
      // Fallback so no lead is ever lost: open a prefilled email.
      const subject = mode === "booking" ? `Call request — ${payload.date} ${payload.time}` : `Project inquiry from ${payload.name || "your website"}`;
      const body = [
        `Name: ${payload.name || ""}`, `Email: ${payload.email || ""}`, payload.company && `Company: ${payload.company}`,
        payload.service && `Service: ${payload.service}`, payload.budget && `Budget: ${payload.budget}`, payload.timeline && `Timeline: ${payload.timeline}`,
        mode === "booking" ? `Requested: ${payload.date} at ${payload.time} (${timezone})` : false, "", payload.message || "",
      ].filter((line): line is string => typeof line === "string").join("\n");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ state: "error", note: "Couldn’t send automatically, so your email app was opened with everything filled in." });
    }
  };

  return (
    <section id="book" className="scroll-mt-20 border-t border-border bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="section-kicker">Book a call · Hire me</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Let’s talk about your project.</h2>
          <p className="mt-6 leading-7 text-muted-foreground">Pick a time for a free 30-minute discovery call, or send a message. It goes straight to my inbox and I reply within 24 hours.</p>
          <ul className="mt-8 space-y-4 text-sm">
            {["Free, no-obligation 30-minute call", "Clear scope, timeline, and quote after we talk", "Worldwide clients · flexible time zones", "10+ years shipping AI, web & mobile products"].map(item => (
              <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}</li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="font-semibold">Prefer email?</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-flex items-center gap-2 break-all text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4 shrink-0" />{CONTACT_EMAIL}</a>
            </div>
            <a href="https://www.linkedin.com/in/gilbert-tuazon/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground/30">
              <p className="inline-flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Check my background</p>
              <p className="mt-1 text-muted-foreground">Verified work history on LinkedIn <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></p>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-xl shadow-black/5 md:p-8">
            {status.state === "sent" ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <h3 className="mt-6 text-2xl font-semibold">{mode === "booking" ? "Request received!" : "Message sent!"}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Thanks for reaching out. I’ll reply within 24 hours{mode === "booking" ? " to confirm your call with a calendar invite" : ""}.</p>
                <button type="button" onClick={() => setStatus({ state: "idle" })} className="mt-8 text-sm font-semibold hover:underline">Send another</button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 rounded-full border border-border bg-background p-1" role="tablist" aria-label="Contact type">
                  {([["booking", "Book a call", CalendarDays], ["message", "Send a message", MessageSquareText]] as const).map(([value, label, Icon]) => (
                    <button key={value} type="button" role="tab" aria-selected={mode === value} onClick={() => { setMode(value); setStatus({ state: "idle" }); }} className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${mode === value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>
                      <Icon className="h-4 w-4" />{label}
                    </button>
                  ))}
                </div>

                <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate={false}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {mode === "booking" && (
                    <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                      <div>
                        <span className={labelClass}>1. Pick a date</span>
                        <div className="rounded-2xl border border-border bg-background">
                          <Calendar mode="single" selected={date} onSelect={setDate} disabled={day => isBefore(day, addDays(today, 1)) || isBefore(addDays(today, 60), day)} />
                        </div>
                      </div>
                      <div>
                        <span className={labelClass}>2. Pick a time {timezone && <span className="font-normal">({timezone})</span>}</span>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
                          {timeSlots.map(slot => (
                            <button key={slot} type="button" onClick={() => setTime(slot)} disabled={!date} className={`inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${time === slot ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground/40"}`}>
                              <Clock className="h-3.5 w-3.5" />{slot}
                            </button>
                          ))}
                        </div>
                        <p className="mt-3 text-xs leading-5 text-muted-foreground">{date ? (time ? `${format(date, "EEE, MMM d")} at ${time}` : "Now choose a time.") : "Choose a date first."} I’ll confirm by email.</p>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label><span className={labelClass}>Your name *</span><input name="name" required maxLength={120} autoComplete="name" placeholder="Jane Doe" className={fieldClass} /></label>
                    <label><span className={labelClass}>Email *</span><input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="jane@company.com" className={fieldClass} /></label>
                    <label><span className={labelClass}>Company (optional)</span><input name="company" maxLength={160} autoComplete="organization" placeholder="Acme Inc." className={fieldClass} /></label>
                    <label><span className={labelClass}>What do you need?</span>
                      <select name="service" className={fieldClass} defaultValue={serviceOptions[0]}>{serviceOptions.map(o => <option key={o}>{o}</option>)}</select>
                    </label>
                    <label><span className={labelClass}>Budget</span>
                      <select name="budget" className={fieldClass} defaultValue={budgetOptions[0]}>{budgetOptions.map(o => <option key={o}>{o}</option>)}</select>
                    </label>
                    <label><span className={labelClass}>Timeline</span>
                      <select name="timeline" className={fieldClass} defaultValue={timelineOptions[1]}>{timelineOptions.map(o => <option key={o}>{o}</option>)}</select>
                    </label>
                  </div>
                  <label className="block"><span className={labelClass}>{mode === "booking" ? "What would you like to discuss? (optional)" : "Tell me about your project *"}</span>
                    <textarea name="message" required={mode === "message"} minLength={mode === "message" ? 10 : undefined} maxLength={4000} rows={4} placeholder="A short description of your idea, goals, or the problem you want solved…" className={`${fieldClass} resize-y`} />
                  </label>

                  {status.state === "error" && <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm" role="alert">{status.note}</p>}

                  <button type="submit" disabled={status.state === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-85 disabled:opacity-60">
                    {status.state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : mode === "booking" ? <>Request this call <CalendarDays className="h-4 w-4" /></> : <>Send message <ArrowRight className="h-4 w-4" /></>}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">Your details are only used to reply to you.</p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const FaqSection = () => (
  <section id="faq" className="scroll-mt-20 py-16 md:py-24">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      <Reveal>
        <p className="section-kicker">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Questions clients usually ask.</h2>
        <a href="#book" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline">Still curious? Book a free call <ArrowRight className="h-4 w-4" /></a>
      </Reveal>
      <Reveal>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

