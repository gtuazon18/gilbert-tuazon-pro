import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const TypingText = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }: { words: string[]; typingSpeed?: number; deletingSpeed?: number; pauseTime?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then delete
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          // Randomly select next word (avoiding immediate repeat)
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * words.length);
          } while (nextIndex === currentWordIndex && words.length > 1);
          setCurrentWordIndex(nextIndex);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dot-pattern">
      {/* Gradient overlay - more transparent to show Vortex */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40" />
      
      {/* Animated glow orb */}
      <motion.div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Code comment intro */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="font-mono text-primary mb-4 text-sm md:text-base">
            {"// Hello World, I'm"}
          </motion.p>

          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white font-mono">Gilbert Tuazon</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-mono text-white">
            Full-Stack Developer & <TypingText words={[ " Full-Stack Builder",
                " Software Engineer",
                " AI Systems Engineer",
                " AI Enthusiast",
                " SaaS Architect",
                " Product Engineer",
                " Tech Innovator"]} />
          </motion.h2>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-muted-foreground text-white text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft elegant digital experiences with clean code and thoughtful design. 
            Specializing in React, TypeScript, AI automations, and fullstack webapp development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-mono px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-mono px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex items-center justify-center gap-6">
            {[{
            icon: Github,
            href: "https://github.com/gtuazon18/gtuazon18",
            label: "GitHub"
          }, {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/gilbert-t-20a96213a/",
            label: "LinkedIn"
          }, {
            icon: Mail,
            href: "mailto:tuazon548@gmail.com",
            label: "Email"
          }].map(({
            icon: Icon,
            href,
            label
          }) => <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
                <Icon className="w-5 h-5" />
              </motion.a>)}
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-muted-foreground">
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;