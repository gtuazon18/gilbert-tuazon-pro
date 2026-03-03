import { motion } from "framer-motion";

const highlights = [
  { label: "Experience", value: "10+ Years" },
  { label: "Projects", value: "50+" },
  { label: "Specialties", value: "Full-Stack & AI" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle section background tint */}
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-mono text-primary mb-3 text-sm">{"// About"}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who I Am
            </h2>
          </motion.div>

          {/* Stat highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-14"
          >
            {highlights.map((h) => (
              <div key={h.label} className="glass-card rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{h.value}</p>
                <p className="font-mono text-xs text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full glass-card glow-card overflow-hidden ring-2 ring-primary/20">
                  <img
                    src="/gt-pic.png"
                    alt="Gilbert Tuazon"
                    className="w-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/50 rounded-lg"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-primary/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3 space-y-5"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a senior full-stack software engineer with over 10 years of experience
                architecting and delivering enterprise-grade applications. Based in the Philippines,
                I specialize in building scalable, high-performance systems that drive business value
                and enhance user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Throughout my career I've led development teams, designed system architectures,
                and delivered complex solutions for clients across multiple industries — from
                high-traffic e-commerce to real-time booking systems and AI-powered voice
                applications. My expertise covers modern frontend frameworks, robust backend
                systems, cloud infrastructure, and AI/voice technologies including ElevenLabs,
                Whisper, and VAPI.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about mentoring developers, establishing best practices, and
                contributing to technical excellence. When I'm not architecting systems I enjoy
                exploring new technologies and staying current with industry trends.
              </p>

              <div className="pt-2">
                <p className="font-mono text-sm text-primary mb-2">{"// Current focus"}</p>
                <p className="text-muted-foreground">
                  Leading full-stack development initiatives, architecting scalable systems,
                  and building AI-powered voice applications with ElevenLabs, Whisper, and VAPI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
