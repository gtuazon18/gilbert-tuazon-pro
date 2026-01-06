import { motion } from "framer-motion";
const skills = [{
  name: "React",
  category: "Frontend"
}, {
  name: "TypeScript",
  category: "Language"
}, {
  name: "Next.js",
  category: "Framework"
},{
  name: "Laravel",
  category: "Framework"
}, {
  name: "Node.js",
  category: "Backend"
}, {
  name: "PostgreSQL",
  category: "Database"
}, {
  name: "Tailwind CSS",
  category: "Styling"
}, {
  name: "GraphQL",
  category: "API"
}, {
  name: "Docker",
  category: "DevOps"
}, {
  name: "AWS",
  category: "Cloud"
}, {
  name: "Git",
  category: "Tools"
}, {
  name: "Figma",
  category: "Design"
}, {
  name: "Python",
  category: "Language"
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  show: {
    opacity: 1,
    scale: 1
  }
};
const Skills = () => {
  return <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <p className="font-mono text-primary mb-3 text-sm">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map(skill => <motion.div key={skill.name} variants={item} whileHover={{
          scale: 1.05,
          y: -2
        }} className="px-5 py-3 glass-card rounded-full cursor-default group">
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>)}
        </motion.div>

        {/* Terminal-style stats */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="mt-20 max-w-2xl mx-auto glass-card rounded-xl p-6 glow-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-muted-foreground text-sm font-mono">stats.sh</span>
          </div>
          <div className="font-mono text-sm space-y-2">
            <p><span className="text-primary">$</span> years_of_experience <span className="text-muted-foreground">--output</span></p>
            <p className="text-foreground pl-4">→ 10+ years</p>
            <p><span className="text-primary">$</span> projects_completed <span className="text-muted-foreground">--count</span></p>
            <p className="text-foreground pl-4">→ 50+ projects</p>
            <p><span className="text-primary">$</span> coffee_consumed <span className="text-muted-foreground">--daily</span></p>
            <p className="text-foreground pl-4">→ ∞ cups ☕</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;