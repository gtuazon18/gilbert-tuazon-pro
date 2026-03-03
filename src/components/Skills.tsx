import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Laravel", "Python", "GraphQL", "REST APIs", "Fastify"],
  },
  {
    label: "Database & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "Git", "Redis"],
  },
  {
    label: "AI & Voice",
    skills: ["ElevenLabs", "Whisper", "VAPI", "LangChain", "OpenAI", "Pinecone"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    label: "Design & Tools",
    skills: ["Figma", "Storybook", "Vitest", "Jest", "CI/CD"],
  },
];

const stats = [
  { cmd: "years_of_experience", flag: "--output", value: "10+", unit: "years" },
  { cmd: "projects_completed", flag: "--count", value: "50+", unit: "projects" },
  { cmd: "clients_served", flag: "--global", value: "30+", unit: "clients" },
  { cmd: "lines_of_code", flag: "--estimate", value: "500k+", unit: "lines" },
  { cmd: "coffee_consumed", flag: "--daily", value: "∞", unit: "cups" },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statLinesRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // — Heading label typewriter
      gsap.from(".skills-label", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // — Heading word-by-word split reveal
      const h2 = headingRef.current?.querySelector("h2");
      if (h2) {
        const words = h2.textContent?.split(" ") ?? [];
        h2.innerHTML = words
          .map((w) => `<span class="inline-block overflow-hidden"><span class="word-inner inline-block">${w}</span></span>`)
          .join(" ");
        gsap.from(h2.querySelectorAll(".word-inner"), {
          y: "110%",
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // — Tagline fade + slide
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // — Divider line width reveal
      if (dividerRef.current) {
        gsap.from(dividerRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }

      // — Category rows stagger from left
      const categoryRows = categoriesRef.current?.querySelectorAll(".category-row");
      if (categoryRows) {
        gsap.from(categoryRows, {
          opacity: 0,
          x: -50,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // — Category label underline expand
      const catLabels = categoriesRef.current?.querySelectorAll(".cat-label");
      catLabels?.forEach((label) => {
        const line = label.querySelector(".cat-underline");
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: label,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        }
      });

      // — Skill pills scale pop per group
      const allPillGroups = categoriesRef.current?.querySelectorAll(".pill-group");
      allPillGroups?.forEach((group) => {
        const pills = group.querySelectorAll(".skill-pill");
        gsap.from(pills, {
          opacity: 0,
          scale: 0.65,
          y: 12,
          duration: 0.45,
          stagger: { each: 0.05, from: "start" },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: group,
            start: "top 87%",
            toggleActions: "play none none none",
          },
        });
      });

      // — Stats card slide from right + subtle rotation
      gsap.from(statsRef.current, {
        opacity: 0,
        x: 60,
        rotationY: 8,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // — Stat lines typewriter stagger
      const statLines = statLinesRef.current?.querySelectorAll(".stat-line");
      if (statLines) {
        gsap.from(statLines, {
          opacity: 0,
          x: -15,
          duration: 0.4,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statLinesRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }

      // — Stat values count up (for numeric ones)
      const statValues = statLinesRef.current?.querySelectorAll(".stat-value[data-count]");
      statValues?.forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.count ?? "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `→ ${Math.round(obj.val)}+`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // — Ambient glow orb parallax
      gsap.to(".skills-orb-1", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".skills-orb-2", {
        y: 40,
        x: 20,
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
    <section ref={sectionRef} id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="skills-orb-1 absolute top-20 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="skills-orb-2 absolute bottom-20 -right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-4">
          <p className="skills-label font-mono text-primary mb-3 text-sm">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="max-w-24 mx-auto h-px bg-primary/40 mb-6" />

        <p ref={taglineRef} className="text-muted-foreground max-w-2xl mx-auto text-center mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Tech stack + stats side by side */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          {/* Categorized skills */}
          <div ref={categoriesRef} className="flex-1 space-y-8">
            {skillCategories.map((category) => (
              <div key={category.label} className="category-row">
                <div className="cat-label mb-3">
                  <p className="font-mono text-xs text-primary/70 uppercase tracking-wider">
                    {category.label}
                  </p>
                  <div className="cat-underline h-px w-full bg-primary/20 mt-1" />
                </div>
                <div className="pill-group flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-pill px-5 py-2.5 glass-card rounded-full cursor-default group hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200"
                    >
                      <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal-style stats */}
          <div
            ref={statsRef}
            className="lg:w-80 w-full glass-card rounded-xl p-6 glow-card lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-muted-foreground text-sm font-mono">stats.sh</span>
            </div>

            <div ref={statLinesRef} className="font-mono text-sm space-y-3">
              {stats.map((s) => (
                <div key={s.cmd} className="stat-line">
                  <p>
                    <span className="text-primary">$</span>{" "}
                    <span className="text-foreground">{s.cmd}</span>{" "}
                    <span className="text-muted-foreground">{s.flag}</span>
                  </p>
                  {s.cmd === "years_of_experience" ? (
                    <p className="stat-value text-foreground pl-4" data-count="10">
                      → 10+ {s.unit}
                    </p>
                  ) : s.cmd === "projects_completed" ? (
                    <p className="stat-value text-foreground pl-4" data-count="50">
                      → 50+ {s.unit}
                    </p>
                  ) : s.cmd === "clients_served" ? (
                    <p className="stat-value text-foreground pl-4" data-count="30">
                      → 30+ {s.unit}
                    </p>
                  ) : (
                    <p className="text-foreground pl-4">
                      → {s.value}{" "}
                      <span className="text-muted-foreground text-xs">{s.unit}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
