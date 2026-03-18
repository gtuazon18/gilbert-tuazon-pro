import { motion } from "framer-motion";
import { MapPin, Calendar, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
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
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
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
      <span className="animate-pulse text-muted-foreground">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/gt-pic.png"
                  alt="Gilbert Tuazon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  Gilbert Tuazon
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Cavite, Philippines</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-muted-foreground mb-1"
              >
                Full-Stack Developer &{" "}
                <span className="text-foreground font-medium">
                  <TypingText
                    words={[
                      "Software Engineer",
                      "AI Systems Engineer",
                      "SaaS Architect",
                      "Product Engineer",
                      "Tech Innovator",
                    ]}
                  />
                </span>
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for opportunities
                </span>
                <span className="tag-pill text-xs">10+ Years Experience</span>
                <span className="tag-pill text-xs">50+ Projects</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6"
              >
                <Button
                  size="sm"
                  className="bg-foreground text-white hover:bg-foreground/90 rounded-full px-5"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full px-5"
                  asChild
                >
                  <a href="mailto:tuazon548@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full px-5"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center md:justify-start gap-3 mt-5"
              >
                {[
                  { icon: Github, href: "https://github.com/gtuazon18/gtuazon18", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gilbert-t-20a96213a/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:tuazon548@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
