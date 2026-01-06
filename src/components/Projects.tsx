import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "GigaKnows E-Commerce Website",
    description: "A fully responsive and scalable e-commerce platform designed for seamless shopping experiences across all devices.",
    tech: ["React", "Laravel", "MySQL", "AWS"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "FootBaller Life Social Media",
    description: "A dynamic social media platform tailored for football fans, featuring real-time updates, player profiles, and interactive content. Fully responsive with engaging UI components and animations.",
    tech: ["React", "Laravel", "Algolia", "Redux Saga"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "MyMoovz",
    description: "A secure cloud platform that automates the moving process, making it easier to manage and organize every detail when relocating. From tracking inventory to scheduling logistics, MyMoovz takes the stress out of moving.",
    tech: ["Laravel", "React", "PostgreSQL", "AWS"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "AgentCo (AI Agent)",
    description: "An intelligent AI agent platform built with LangChain and LangGraph using LLaMA models. Enables sophisticated AI-powered automation and decision-making workflows for complex business processes.",
    tech: ["Python", "LangChain", "LangGraph", "LLaMA", "React"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Teko Aircon Booking Platform",
    description: "Fast and scalable online booking system for air conditioning, refrigerator, washer, heater, TV, and electrician services. Features immediate confirmation, real-time availability, and seamless payment processing with satisfaction guarantee.",
    tech: ["Laravel", "React", "RabbitMQ", "Elasticsearch", "MySQL"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Proqual Aircon Booking Platform",
    description: "A comprehensive booking platform with marketplace features for air conditioning services. Connects customers with freelance technicians through a mobile app, enabling seamless service booking and management.",
    tech: ["React", "Laravel", "RabbitMQ", "Mobile App", "MySQL"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Health Booking System",
    description: "A complete healthcare management platform connecting doctors and patients. Features appointment scheduling, patient records management, and telemedicine capabilities for modern healthcare delivery.",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Flight Booking System",
    description: "An integrated flight booking platform connected with multiple airline APIs. Enables real-time flight search, booking, and management with seamless airline connectivity and payment processing.",
    tech: ["React", "Node.js", "Express", "REST APIs", "MongoDB"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Staycation Booking Platform",
    description: "A hotel and accommodation booking platform for staycations. Features real-time availability, booking management, payment processing, and comprehensive hotel administration tools.",
    tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "Redis"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Job Seeker Platform",
    description: "An online platform connecting job seekers with companies and clients looking for talented employees. Features advanced job matching, resume management, and recruitment tools.",
    tech: ["React", "Next.js", "Laravel", "PostgreSQL", "Elasticsearch"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Remarkable Vid AI",
    description: "An advanced AI-powered video generation and enhancement platform designed to create high-quality, engaging content effortlessly. Leverages cutting-edge machine learning algorithms for automated editing, scene detection, and intelligent enhancements.",
    tech: ["React", "TypeScript", "Python", "LangChain", "Ollama"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Modern DST Dashboard",
    description: "A comprehensive Dealer Management System integrated with e-commerce features, enabling seamless inventory tracking, sales analytics, and customer management. Optimized for all devices with a sleek, user-friendly interface.",
    tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Bidding Painting Website",
    description: "A marketplace platform for buying and selling paintings through a bidding system. Connects artists and collectors with secure transactions, real-time bidding, and comprehensive artwork management.",
    tech: ["React", "Laravel", "WebSocket", "MySQL", "Redis"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Accounting System",
    description: "A comprehensive accounting and financial management system with invoice management, expense tracking, financial reports, and automated bookkeeping features for businesses of all sizes.",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Appliance Booking Platform",
    description: "A booking platform for appliances with freelance technician services, featuring a mobile app. Enables customers to book repair services, track appointments, and manage service requests seamlessly.",
    tech: ["React", "Laravel", "Mobile App", "RabbitMQ", "MySQL"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Landing Page Builder",
    description: "An AI-powered online landing page builder with prompt-based generation. Enables users to create professional landing pages quickly using natural language prompts and AI assistance.",
    tech: ["React", "Next.js", "TypeScript", "AI Integration", "Tailwind"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Mortgage Tech Platform",
    description: "A modern mortgage technology platform for the future of home financing. Features loan application processing, document management, and automated mortgage workflows with advanced analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Document Processing"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Heat Traffic Advisory",
    description: "A web application tracker for heat traffic advisories. Provides real-time heat index monitoring, traffic analysis, and public safety alerts with location-based notifications.",
    tech: ["React", "Node.js", "MongoDB", "Real-time APIs", "Maps"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Earthquake Advisory Tracker",
    description: "An earthquake advisory web application with real-time tracking and location-based notifications. Features seismic activity monitoring, alert systems, and safety recommendations.",
    tech: ["React", "Node.js", "WebSocket", "Geolocation", "MongoDB"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Game of Thrones Chess",
    description: "A themed chess game web application inspired by Game of Thrones. Features beautiful UI, multiplayer support, and immersive gameplay with character-themed pieces and animations.",
    tech: ["React", "TypeScript", "WebSocket", "Canvas API", "Node.js"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Christmas Countdown App",
    description: "A festive Christmas countdown and New Year application with greetings and goal-setting features. Enables users to set holiday goals, send greetings, and track countdown timers.",
    tech: ["React", "TypeScript", "LocalStorage", "Animations"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Health Fitness Web App",
    description: "A comprehensive health and fitness tracking web application. Features workout planning, nutrition tracking, progress monitoring, and personalized fitness recommendations.",
    tech: ["React", "Laravel", "MySQL", "Charts", "Mobile Responsive"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Painting Buy & Sell Platform",
    description: "An online marketplace for buying and selling paintings. Features artist profiles, artwork listings, secure transactions, and comprehensive gallery management tools.",
    tech: ["React", "Laravel", "MySQL", "Payment Gateway", "Image Processing"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Home Improvement Platform",
    description: "A lead generation and CRM platform for home improvement projects. Connects homeowners with contractors, manages project leads, and streamlines the home improvement process.",
    tech: ["Angular", "Vue", "React", "Laravel", "Express.js"],
    github: "https://github.com/gtuazon18/gtuazon18",
  },
  {
    title: "Lead Generation Platform",
    description: "A comprehensive lead generation and CRM platform designed to capture, manage, and convert leads effectively. Features advanced lead scoring, automated workflows, and seamless integration with sales pipelines.",
    tech: ["React", "Laravel", "MySQL", "Elasticsearch", "RabbitMQ"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "LMS Lab Management System",
    description: "A comprehensive Lab Management System with integrated lab management features. Enables educational institutions to manage courses, student progress, lab resources, equipment tracking, and scheduling.",
    tech: ["React", "Laravel", "PostgreSQL", "WebSocket", "Redis"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Korean Times Mobile Application",
    description: "A mobile application for Korean Times, delivering news and content to users on-the-go with a seamless mobile experience.",
    tech: ["React Native", "Mobile App", "iOS", "Android"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "RLT Luxaire Aircon Web App",
    description: "A comprehensive web application for RLT Luxaire air conditioning services, featuring booking, service management, and customer engagement features.",
    tech: ["React", "Laravel", "MySQL", "Web App"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Dosan Org Website",
    description: "A modern website for Dosan organization, featuring responsive design, content management, and engaging user experience.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "Mercel Bulk File Merger",
    description: "A micro SaaS platform for merging bulk files efficiently. Streamlines file management workflows with an intuitive interface and powerful merging capabilities.",
    tech: ["React", "Node.js", "File Processing", "Micro SaaS"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
  {
    title: "AI Bug Report API - Bugfly AI",
    description: "An intelligent AI-powered bug reporting API that automates bug detection and reporting. Leverages AI to analyze, categorize, and generate comprehensive bug reports for faster issue resolution.",
    tech: ["Python", "AI/ML", "API", "FastAPI", "Bugfly AI"],
    github: "https://github.com/gtuazon18/gtuazon18",
    featured: true,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllOther, setShowAllOther] = useState(false);
  
  const initialFeaturedCount = 6;
  const initialOtherCount = 6;
  
  const displayedFeatured = showAllFeatured ? featuredProjects : featuredProjects.slice(0, initialFeaturedCount);
  const displayedOther = showAllOther ? otherProjects : otherProjects.slice(0, initialOtherCount);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedFeatured.map((project, index) => (
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

        {/* See More Button for Featured Projects */}
        {featuredProjects.length > initialFeaturedCount && (
          <div className="flex justify-center mb-16">
            <Button
              variant="outline"
              onClick={() => setShowAllFeatured(!showAllFeatured)}
              className="font-mono border-primary/50 text-foreground hover:bg-primary/10"
            >
              {showAllFeatured ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  See Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  See More ({featuredProjects.length - initialFeaturedCount} more)
                </>
              )}
            </Button>
          </div>
        )}

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

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {displayedOther.map((project, index) => (
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

        {/* See More Button for Other Projects */}
        {otherProjects.length > initialOtherCount && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAllOther(!showAllOther)}
              className="font-mono border-primary/50 text-foreground hover:bg-primary/10"
            >
              {showAllOther ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  See Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  See More ({otherProjects.length - initialOtherCount} more)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
