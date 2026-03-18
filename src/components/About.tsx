import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-card"
          >
            <h2 className="text-2xl font-bold mb-6">About</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a senior full-stack software engineer with over 10 years of experience
                architecting and delivering enterprise-grade applications. Based in the Philippines,
                I specialize in building scalable, high-performance systems that drive business value
                and enhance user experiences.
              </p>

              <p>
                Throughout my career I've led development teams, designed system architectures,
                and delivered complex solutions for clients across multiple industries — from
                high-traffic e-commerce to real-time booking systems and AI-powered voice
                applications. My expertise covers modern frontend frameworks, robust backend
                systems, cloud infrastructure, and AI/voice technologies including ElevenLabs,
                Whisper, and VAPI.
              </p>

              <p>
                I'm passionate about mentoring developers, establishing best practices, and
                contributing to technical excellence. When I'm not architecting systems I enjoy
                exploring new technologies and staying current with industry trends.
              </p>

              <p>
                Lately, I've been diving deeper into the world of artificial intelligence, focusing on
                integrating AI tools and techniques into modern applications. My work now
                includes developing AI-powered solutions, creating intelligent applications, and
                leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
