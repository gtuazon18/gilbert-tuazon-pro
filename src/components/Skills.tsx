import { motion } from "framer-motion";

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

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-card"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
      </div>

      <div className="space-y-5">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tag-pill text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
