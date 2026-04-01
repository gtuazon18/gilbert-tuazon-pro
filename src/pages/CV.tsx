import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Globe, Github, Linkedin, Download, Printer } from "lucide-react";
import Footer from "@/components/Footer";

const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Teko Philippines",
    period: "May 2024 – Present",
    bullets: [
      "Led backend development of the Teko booking system using CodeIgniter and Laravel.",
      "Integrated AMQP (RabbitMQ) for asynchronous messaging to enhance booking processing and notifications.",
      "Implemented Elasticsearch for advanced search and analytics in the admin dashboard and booking system.",
      "Designed and optimized RESTful APIs to support high-traffic booking transactions.",
      "Developed a real-time booking system with dynamic service availability and secure payment integrations.",
    ],
  },
  {
    role: "Full-Stack Backend Software Engineer",
    company: "Multisys Technologies Corporation",
    period: "May 2020 – May 2024",
    bullets: [
      "Led backend development in the DMS project with Smart PLDT as a client.",
      "Spearheaded the DST Boss project — a fast-paced initiative requiring scalable architecture.",
      "Developed and maintained microservices to ensure modularity and efficient system performance.",
      "Implemented AMQP (RabbitMQ) for message brokering and asynchronous processing across services.",
      "Integrated Elasticsearch for advanced search functionality and analytics.",
      "Conducted code reviews to maintain high coding standards and best practices.",
    ],
  },
  {
    role: "Mid Full-Stack Software Engineer",
    company: "W-Tech Solutions",
    period: "April 2018 – May 2020",
    bullets: [
      "Developed backend services using Node.js and Laravel, focusing on performance and scalability.",
      "Designed and implemented RESTful APIs to support various client applications.",
      "Built and maintained microservices architecture for scalable backend systems.",
      "Handled data cashflows and multiple transactions using Laravel.",
    ],
  },
  {
    role: "Junior Full-Stack Software Engineer",
    company: "Ingram Micro",
    period: "April 2014 – May 2018",
    bullets: [
      "Assisted in designing, developing, and maintaining software applications and systems.",
      "Utilized PHP, Laravel, Node.js, and various databases.",
      "Collaborated with cross-functional teams to identify and solve problems.",
      "Contributed to the improvement of existing systems and kept up with latest trends.",
    ],
  },
];

const skills = {
  "Frontend": "React, Next.js, TypeScript, Tailwind CSS, Vue.js, Redux",
  "Backend": "Node.js, Laravel, Python, GraphQL, REST APIs, FastAPI",
  "AI & LLM": "LangChain, LangGraph, RAG, OpenAI, Groq, Ollama, ChromaDB, Pinecone, HuggingFace",
  "Voice AI": "ElevenLabs, Whisper, VAPI, OpenVoice",
  "Database & Cloud": "PostgreSQL, MySQL, MongoDB, AWS, Docker, Redis",
  "Mobile": "React Native, Expo",
  "Integrations": "OpenClaw, WhatsApp Business API, Twilio, Stripe, Google Calendar",
};

const projects = [
  { name: "AgentCo AI Agent", desc: "AI agent platform with LangChain & LangGraph", tech: "Python, LangChain, LangGraph, LLaMA", url: "agentco.cloud" },
  { name: "Waal", desc: "Agentic InsightRun platform for stakeholder decisions", tech: "AI, Agentic, InsightRun", url: "waal.ai" },
  { name: "MyMoovz", desc: "Cloud platform for property managers & tenants", tech: "React, Cloud Platform, SaaS", url: "muval.com.au/partners/mymoovz" },
  { name: "IntelHouse", desc: "Lead generation platform for home improvement sales teams", tech: "React, Laravel, MySQL, Elasticsearch", url: "intelhouse.net" },
  { name: "Teko Aircon Booking", desc: "Online booking for aircon & electrician services", tech: "Laravel, React, RabbitMQ, Elasticsearch", url: "teko.ph" },
  { name: "LMS Lab Management", desc: "Lab resource tracking and experiment workflows", tech: "React, Laravel, PostgreSQL, WebSocket", url: "rxn3d.com" },
  { name: "FootBaller Life", desc: "Social media platform for football fans", tech: "React, Laravel, Algolia, Redux Saga", url: "footballerlife.com" },
  { name: "Serenite", desc: "Luxury spa e-commerce", tech: "React, E-commerce, Vercel", url: "bloom-glow-boutique.vercel.app" },
];

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Actions bar - hidden on print */}
      <div className="print:hidden container px-6 pt-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      <main className="container px-6 pt-8 pb-16 print:pt-0 print:px-0">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-8 md:p-12 print:border-none print:shadow-none print:p-0 print:rounded-none"
          >
            {/* Header */}
            <div className="mb-8 pb-6 border-b border-border">
              <div className="flex items-start gap-5">
                <img
                  src="/gt-pic.png"
                  alt="Gilbert Tuazon"
                  className="w-20 h-20 rounded-full object-cover border-2 border-border print:w-16 print:h-16"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-1 print:text-2xl">Gilbert Tuazon</h1>
                  <p className="text-lg text-muted-foreground mb-3 print:text-base">Full-Stack Software Engineer</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Philippines
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      gtuazon18@gmail.com
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      gilbert-tuazon-pro.vercel.app
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" />
                      github.com/gtuazon18
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Linkedin className="w-3.5 h-3.5" />
                      linkedin.com/in/gilbert-tuazon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Professional Summary</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-Stack Software Engineer with 10+ years of experience building scalable web applications,
                AI-powered platforms, and enterprise systems. Proficient in React, Laravel, Node.js, Python,
                and modern AI/LLM technologies including LangChain, RAG pipelines, and voice AI. Experienced
                in leading backend architecture, integrating messaging systems (RabbitMQ), search engines
                (Elasticsearch), and building real-time applications. Passionate about leveraging AI to solve
                real-world problems.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Work Experience</h2>
              <div className="space-y-6">
                {experience.map((job, i) => (
                  <div key={i} className={i !== experience.length - 1 ? "pb-5 border-b border-border/50" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
                      <div>
                        <h3 className="font-semibold text-sm">{job.role}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{job.period}</span>
                    </div>
                    <ul className="space-y-1 ml-4">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="text-xs text-muted-foreground leading-relaxed list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Technical Skills</h2>
              <div className="space-y-2.5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="text-xs font-semibold text-foreground w-32 flex-shrink-0">{category}</span>
                    <span className="text-xs text-muted-foreground">{items}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Key Projects</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {projects.map((project, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/50 print:border-border">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-xs">{project.name}</h3>
                      <span className="text-[10px] text-muted-foreground flex-shrink-0">{project.url}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mb-1.5">{project.desc}</p>
                    <p className="text-[10px] text-muted-foreground/70">{project.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Education</h2>
              <div>
                <h3 className="font-semibold text-sm">Bachelor of Science in Information Technology</h3>
                <p className="text-xs text-muted-foreground">Graduated 2014</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default CV;
