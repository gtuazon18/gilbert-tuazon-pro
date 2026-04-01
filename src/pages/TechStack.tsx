import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const skillCategories = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"] },
  { label: "Backend", skills: ["Node.js", "Laravel", "Python", "GraphQL", "REST APIs", "Fastify"] },
  { label: "Database & Cloud", skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "Git", "Redis"] },
  { label: "AI & LLM", skills: ["LangChain", "LangGraph", "RAG", "OpenAI", "Groq", "Ollama", "Grok AI", "ChromaDB", "Pinecone", "HuggingFace"] },
  { label: "Voice AI", skills: ["ElevenLabs", "Whisper", "VAPI", "OpenVoice"] },
  { label: "Mobile", skills: ["React Native", "Expo", "iOS", "Android"] },
  { label: "Integrations", skills: ["OpenClaw", "WhatsApp Business API", "Twilio", "Stripe", "Google Calendar", "Webhooks"] },
  { label: "Design & Tools", skills: ["Figma", "Storybook", "Vitest", "Jest", "CI/CD"] },
];

const TechStack = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h1>
          <p className="text-muted-foreground mb-8">Technologies I work with to bring ideas to life</p>

          <div className="space-y-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.08 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="font-bold text-lg mb-4">{category.label}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: catIndex * 0.08 + i * 0.03 }}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechStack;
