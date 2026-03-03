import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "May 2024 – Present",
    role: "Full-Stack Software Engineer",
    company: "Teko Philippines",
    companyDesc: "Fast & easy online booking for home services — aircon, ref, washer, heater, TV & electrician.",
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
    year: "May 2020 – May 2024",
    role: "Full-Stack Backend Software Engineer",
    company: "Multisys Technologies Corporation",
    companyDesc: "One of the leading software solutions companies in the Philippines.",
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
    year: "April 2018 – May 2020",
    role: "Mid Full-Stack Software Engineer",
    company: "W-Tech Solutions",
    companyDesc: "One of the fastest-growing IT Companies in Asia providing software solutions.",
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
    year: "April 2014 – May 2018",
    role: "Junior Full-Stack Software Engineer",
    company: "Ingram Micro",
    companyDesc: "Helping businesses fully realize the promise of technology™.",
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
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Timeline line draw
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Timeline items stagger from alternating sides
      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      items?.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Dot pulse in
        const dot = item.querySelector(".timeline-dot");
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        // Tags pop in
        const tags = item.querySelectorAll(".exp-tag");
        gsap.from(tags, {
          opacity: 0,
          scale: 0.7,
          duration: 0.35,
          stagger: 0.06,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: item,
            start: "top 83%",
            toggleActions: "play none none none",
          },
        });
      });

      // Ambient orb parallax
      gsap.to(".exp-orb", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="exp-orb absolute top-1/3 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div ref={headingRef} className="text-center mb-20">
          <p className="font-mono text-primary mb-3 text-sm">{"// Experience"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Career Timeline</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            10+ years across enterprise, startups, and product companies in the Philippines & globally
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/25 -translate-x-1/2" />

          <div className="space-y-14">
            {timeline.map((entry, i) => (
              <div
                key={entry.year}
                className={`timeline-item relative flex gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="timeline-dot absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30 z-10 top-1" />

                {/* Card — offset to correct side */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-xl p-6 ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <p className="font-mono text-xs text-primary/70 mb-1">{entry.year}</p>
                  <h3 className="font-bold text-lg mb-0.5">{entry.role}</h3>
                  <p className="font-mono text-sm text-primary/80 mb-1">{entry.company}</p>
                  <p className="text-xs text-muted-foreground italic mb-4">{entry.companyDesc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {entry.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="exp-tag font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
