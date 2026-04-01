import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2025",
    role: "Senior Full Stack AI Software Engineer",
    company: "Fintelligence",
    period: "Dec 2025 – Present",
    bullets: [
      "Building AI-driven financial tools for broker management and client advisory using LangChain, RAG pipelines, and LLM integrations.",
      "Developing full-stack features for the fintech platform with React, TypeScript, and Python backend services.",
      "Implementing AI-powered financial analysis and decision-support systems for brokers and financial advisors.",
      "Integrating machine learning models for risk assessment, portfolio optimization, and market insights.",
      "Designing scalable APIs and data pipelines to process real-time financial data and generate actionable insights.",
    ],
    tags: ["React", "TypeScript", "Python", "LangChain", "RAG", "AI/ML", "Fintech"],
  },
  {
    year: "2024",
    role: "Senior Fullstack Software Engineer",
    company: "Teko Philippines",
    period: "May 2024 – May 2025",
    bullets: [
      "Led backend development of the Teko booking system using CodeIgniter and Laravel.",
      "Integrated AMQP (RabbitMQ) for asynchronous messaging to enhance booking processing and notifications.",
      "Implemented Elasticsearch for advanced search and analytics in the admin dashboard and booking system.",
      "Designed and optimized RESTful APIs to support high-traffic booking transactions.",
      "Developed a real-time booking system with dynamic service availability, secure payment integrations, and seamless user interactions.",
      "Ensured high availability and scalability of backend services through efficient architecture and deployment strategies.",
    ],
    tags: ["Laravel", "CodeIgniter", "RabbitMQ", "Elasticsearch", "REST APIs", "MySQL"],
  },
  {
    year: "2020",
    role: "Full-Stack Backend Software Engineer",
    company: "Multisys Technologies Corporation",
    period: "May 2020 – May 2024",
    bullets: [
      "Led backend development in the DMS project with Smart PLDT as a client.",
      "Spearheaded the DST Boss project — a fast-paced initiative requiring scalable architecture.",
      "Developed and maintained microservices to ensure modularity and efficient system performance.",
      "Implemented AMQP (RabbitMQ) for message brokering and asynchronous processing across services.",
      "Integrated Elasticsearch for advanced search functionality and analytics.",
      "Provided backend support for PowerApps integration in other departments.",
      "Conducted code reviews to maintain high coding standards and best practices.",
    ],
    tags: ["Node.js", "Laravel", "RabbitMQ", "Elasticsearch", "Microservices", "PowerApps", "Docker"],
  },
  {
    year: "2018",
    role: "Mid Full-Stack Software Engineer",
    company: "W-Tech Solutions",
    period: "April 2018 – May 2020",
    bullets: [
      "Developed backend services using Node.js and Laravel, focusing on performance and scalability.",
      "Designed and implemented RESTful APIs to support various client applications.",
      "Built and maintained microservices architecture for scalable and modular backend systems.",
      "Utilized Docker for containerization and efficient deployment of services.",
      "Handled data cashflows and multiple transactions using Laravel, ensuring secure and efficient processing.",
      "Built real-time web applications for client services and internal dashboards.",
    ],
    tags: ["Node.js", "Laravel", "Docker", "Microservices", "REST APIs", "MySQL", "Redis"],
  },
  {
    year: "2014",
    role: "Junior Full-Stack Software Engineer",
    company: "Ingram Micro",
    period: "April 2014 – May 2018",
    bullets: [
      "Assisted in designing, developing, and maintaining software applications and systems.",
      "Wrote and tested code with the guidance of senior developers.",
      "Utilized PHP, Laravel, Node.js, and various databases.",
      "Collaborated with cross-functional teams to identify and solve problems.",
      "Contributed to the improvement of existing systems and kept up with latest trends.",
    ],
    tags: ["PHP", "Laravel", "Node.js", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-card"
      id="experience"
    >
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      <div className="space-y-0">
        {timeline.map((entry, index) => (
          <motion.div
            key={entry.period}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className={`flex gap-4 py-4 ${
              index !== timeline.length - 1 ? "border-b border-border" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                index === 0 ? "bg-foreground text-white" : "bg-secondary text-muted-foreground"
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-semibold text-foreground text-sm">{entry.role}</h3>
                <span className="text-xs text-muted-foreground flex-shrink-0">{entry.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{entry.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
