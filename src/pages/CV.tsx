import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Globe, Github, Linkedin, Printer, Phone } from "lucide-react";
import Footer from "@/components/Footer";

const experience = [
  {
    role: "Fullstack Software Developer",
    company: "RXN3D - Digital Dental Lab Case Management Platform",
    period: "May 2025 – Present",
    bullets: [
      "Developed full-stack features using React, Vue, Next.js, and Laravel 10, delivering a smooth and intuitive user experience for dental labs and offices.",
      "Built and maintained backend modules in Laravel 10, ensuring robust case management workflows and secure data processing.",
      "Integrated AMQP (RabbitMQ) for asynchronous messaging to support real-time updates, technician notifications, and workflow automation.",
      "Implemented Elasticsearch to enhance search accuracy and case retrieval performance across large dental data sets.",
      "Designed and optimized RESTful APIs supporting lab workflows, digital case submissions, technician tracking, and admin tools.",
      "Improved platform performance through optimized database queries, caching strategies, and scalable backend architecture.",
      "Ensured system reliability, high availability, and maintainability using modern development practices and clean code standards.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Teko Philippines",
    period: "May 2024 – Present",
    bullets: [
      "Led the backend development of a fast, scalable online booking system using Laravel.",
      "Integrated AMQP (RabbitMQ) for asynchronous messaging to enhance booking processing and notifications.",
      "Implemented Elasticsearch for advanced search and analytics in the admin dashboard and booking system.",
      "Designed and optimized RESTful APIs to support high-traffic booking transactions.",
      "Developed a real-time booking system with dynamic service availability, secure payment integrations, and seamless user interactions.",
      "Ensured high availability and scalability of backend services through efficient architecture and deployment strategies.",
    ],
  },
  {
    role: "Senior Fullstack Engineer",
    company: "Multisys Technologies Corporation",
    period: "May 2020 – May 2024",
    bullets: [
      "Led full-stack development projects using Node.js, React, and MongoDB, implementing scalable and high-performance applications.",
      "Built intuitive user interfaces with React, incorporating Redux Saga for complex asynchronous flows.",
      "Designed and developed RESTful APIs using Express.js for enterprise systems, ensuring performance, scalability, and security.",
      "Mentored junior developers, promoting best practices and improving deliverable quality.",
      "Integrated complex systems for data management, reporting, and real-time processing.",
      "Optimized database performance, ensuring scalability to handle high-volume transactions.",
    ],
  },
  {
    role: "Mid FullStack Software Engineer",
    company: "W-Tech Solutions",
    period: "April 2018 – May 2020",
    bullets: [
      "Developed backend services using Node.js and Express.js, and responsive, real-time front-end interfaces with React.",
      "Enhanced front-end functionality with dynamic UI/UX features, incorporating Redux Saga for efficient state management.",
      "Created reusable and styled components with Styled Components, ensuring consistency in design and responsiveness.",
      "Designed and developed real-time web applications for client services and internal dashboards.",
      "Collaborated with designers, QA teams, and product managers to ensure seamless and timely project delivery.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Ingram Micro",
    period: "April 2014 – May 2018",
    bullets: [
      "Assisted in designing, developing, and maintaining software applications and systems.",
      "Wrote and tested code with the guidance of senior developers.",
      "Utilized PHP, Laravel, Node.js, and various databases.",
      "Collaborated with cross-functional teams to identify and solve problems.",
      "Contributed to the improvement of existing systems and kept up with latest trends.",
    ],
  },
];

const freelance = [
  {
    role: "Full Stack AI Software Engineer",
    company: "Waal.ai",
    period: "Sept 2025 – Nov 2025",
    bullets: [
      "Built a React-based interview guide generation platform using TypeScript, Vite, and Zustand for state management.",
      "Implemented real-time data synthesis using Azure Web PubSub for live interview insights and participant analysis.",
      "Developed authentication with Supabase (OTP email verification and LinkedIn OAuth) with rate limiting and session persistence.",
      "Created billing and credits management system with subscription plans and payment processing integrated with Azure API Management.",
      "Integrated Azure Functions API endpoints for interview guide generation, synthesis, and transcript management.",
      "API built with Python, LangChain, LangGraph, and Ollama with Vertex.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Earn-Books (SaaS Accounting Platform)",
    period: "June 2025 – Sept 2025",
    bullets: [
      "Developed a full-stack SaaS accounting application using Vue 3 + Vite for the frontend and Laravel 10 for backend APIs.",
      "Built financial modules including invoice management, expense tracking, transaction logs, and financial reports.",
      "Integrated Stripe for subscription billing, automated renewals, and webhook-driven payment event handling.",
      "Implemented state management using Pinia and high-performance API communication using Vue Query.",
      "Designed and optimized accounting database structures for ledgers, transactions, and financial summaries.",
      "Ensured accuracy of financial computations using Laravel service classes, validation rules, and transaction-safe DB writes.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "MyMoovz (RealMarket Pty Ltd)",
    period: "Oct 2021 – Oct 2022",
    bullets: [
      "Refactored code from Laravel 7 to Laravel 8, optimizing speed and scalability.",
      "Restructured the database to improve system performance during high traffic.",
      "Built a platform that automates the management of home moving processes for customers and service providers.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "FootballerLife",
    period: "April 2021 – Oct 2021",
    bullets: [
      "Refactored the codebase from Laravel 7 to Laravel 8, improving system stability and functionality.",
      "Integrated Algolia for search optimization, enhancing speed and relevance of content retrieval.",
      "Developed dynamic front-end components using React with Redux Saga for state management.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Dav.IO (E-Commerce Platform)",
    period: "Feb 2020 – Feb 2021",
    bullets: [
      "Managed AWS infrastructure to support a scalable e-commerce platform with high availability.",
      "Built and optimized React-based front-end interfaces, integrating Redux Saga for complex state management.",
      "Integrated secure payment systems and ensured smooth data flow between front-end and back-end.",
    ],
  },
  {
    role: "Fullstack Software Engineer",
    company: "IntelHouse",
    period: "July 2023 – Nov 2023",
    bullets: [
      "Developed systems using Angular, Vue, React, Next.js, Laravel, and Express.js, ensuring scalability and high performance.",
      "Designed and developed a lead generation and CRM platform to manage home improvement projects and sales leads.",
      "Built a responsive, high-performance platform that effectively supported sales operations and customer management.",
    ],
  },
];

const skills = {
  "Frontend": "JavaScript (ES6+), React (TypeScript), Vue.js, Next.js, Redux Saga, Styled Components, Tailwind CSS",
  "Backend": "PHP (Laravel 5–10), CodeIgniter, Node.js, NestJS, Adonis.js, Python, FastAPI",
  "AI & LLM": "LangChain, LangGraph, RAG, OpenAI, Groq, Ollama, ChromaDB, Pinecone, HuggingFace, Vertex",
  "Voice AI": "ElevenLabs, Whisper, VAPI, OpenVoice",
  "Database & Cloud": "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, AWS (S3), Docker, Kubernetes",
  "API & Integration": "REST APIs, WebSocket, Socket.IO, RabbitMQ (AMQP), Azure Web PubSub",
  "Mobile": "React Native, Expo",
  "Integrations": "OpenClaw, WhatsApp Business API, Twilio, Stripe, Google Calendar, Supabase",
  "Tools & CI/CD": "Git, GitHub, GitLab, JIRA, ClickUp, Docker, Kubernetes",
  "Methodologies": "Agile (Scrum), Code Review, Test-Driven Development",
};

const projects = [
  { name: "AgentCo AI Agent", desc: "AI agent platform with LangChain & LangGraph", tech: "Python, LangChain, LangGraph, LLaMA", url: "agentco.cloud" },
  { name: "Waal.ai", desc: "Conversation-to-insight SaaS platform with AI-powered interview guides", tech: "React, TypeScript, Python, LangChain, Azure", url: "waal.ai" },
  { name: "RXN3D", desc: "Digital dental lab case management platform", tech: "React, Vue, Next.js, Laravel 10, RabbitMQ", url: "rxn3d.com" },
  { name: "MyMoovz", desc: "Cloud platform for property managers & tenants", tech: "Laravel, React, Cloud Platform", url: "muval.com.au/partners/mymoovz" },
  { name: "IntelHouse", desc: "Lead generation & CRM platform for home improvement", tech: "Angular, Vue, React, Next.js, Laravel", url: "intelhouse.net" },
  { name: "Teko Philippines", desc: "Online booking for aircon & electrician services", tech: "Laravel, React, RabbitMQ, Elasticsearch", url: "teko.ph" },
  { name: "Earn-Books", desc: "SaaS accounting platform with Stripe billing", tech: "Vue 3, Laravel 10, Stripe, Pinia", url: "" },
  { name: "FootBaller Life", desc: "Football-focused social media platform", tech: "React, Laravel, Algolia, Redux Saga", url: "footballerlife.com" },
  { name: "LMS Lab Management", desc: "Lab resource tracking and experiment workflows", tech: "React, Laravel, PostgreSQL, WebSocket", url: "rxn3d.com" },
  { name: "Serenite", desc: "Luxury spa e-commerce", tech: "React, E-commerce, Vercel", url: "bloom-glow-boutique.vercel.app" },
];

const competencies = [
  { title: "Project Leadership", desc: "Successfully led software projects, applying skills gained through continuous learning. Certified in project management methodologies." },
  { title: "Scalable System Design", desc: "Designed and developed scalable software systems using Node.js, MongoDB, and cloud infrastructure. Certified in advanced web development technologies." },
  { title: "Code Quality Assurance", desc: "Implemented robust testing strategies and coding standards. Certified in software quality assurance for code reliability and maintainability." },
  { title: "Cross-Functional Collaboration", desc: "Facilitated effective collaboration between teams. Certified in agile methodologies, aligning technical solutions with business objectives." },
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
                  <p className="text-lg text-muted-foreground mb-3 print:text-base">Software Engineer</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Philippines
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      +639479654440
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      tuazon548@gmail.com
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
                      linkedin.com/in/gilbert-tuazon-20a96213a
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">About Me</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am a skilled full-stack software developer with 10+ years of experience in building and maintaining
                high-quality web and mobile applications. Specializing in both frontend and backend development, I
                work with modern frameworks such as Vue.js, React, and Next.js, alongside backend technologies
                like PHP, CodeIgniter, Laravel, Node.js, Python, and databases including MySQL and PostgreSQL.
                I have collaborated with clients across various industries to deliver custom, scalable, and user-friendly
                software solutions tailored to their needs. With strong problem-solving skills, attention to detail, and a
                commitment to clean, functional code, I am confident in my ability to help you achieve your goals
                through innovative and reliable technology.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Work Experience</h2>
              <div className="space-y-6">
                {experience.map((job, i) => (
                  <div key={i} className={i !== experience.length - 1 ? "pb-5 border-b border-border/50" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
                      <div>
                        <h3 className="font-semibold text-sm">{job.role}</h3>
                        <p className="text-xs text-muted-foreground">{job.company}</p>
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

            {/* Freelance Experience */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Freelance Experience</h2>
              <div className="space-y-6">
                {freelance.map((job, i) => (
                  <div key={i} className={i !== freelance.length - 1 ? "pb-5 border-b border-border/50" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
                      <div>
                        <h3 className="font-semibold text-sm">{job.role}</h3>
                        <p className="text-xs text-muted-foreground">{job.company}</p>
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
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Relevant Skills</h2>
              <div className="space-y-2.5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="text-xs font-semibold text-foreground w-36 flex-shrink-0">{category}</span>
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
                      {project.url && <span className="text-[10px] text-muted-foreground flex-shrink-0">{project.url}</span>}
                    </div>
                    <p className="text-[11px] text-muted-foreground mb-1.5">{project.desc}</p>
                    <p className="text-[10px] text-muted-foreground/70">{project.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Competencies */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Core Competencies</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {competencies.map((item, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/50 print:border-border">
                    <h3 className="font-semibold text-xs mb-1">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Education</h2>
              <div>
                <h3 className="font-semibold text-sm">Bachelor of Science in Computer Science</h3>
                <p className="text-xs text-muted-foreground mb-2">University of Muntinlupa — Graduated 2014</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Best Application on Thesis</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Dean's Lister 2012</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Dean's Lister 2013</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Dean's Lister 2014</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Choir Member of UM</span>
                </div>
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
