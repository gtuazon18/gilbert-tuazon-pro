import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary mb-3 text-sm">{"// Contact"}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of something amazing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 glow-card"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                  <a
                    className="font-mono text-foreground hover:text-primary transition-colors text-sm"
                    href="mailto:tuazon548@gmail.com"
                  >
                    tuazon548@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-0.5">Location</p>
                  <p className="font-mono text-foreground text-sm">Cavite, Philippines</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-mono px-10"
              asChild
            >
              <a href="mailto:tuazon548@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/gtuazon18/gtuazon18",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/gilbert-t-20a96213a/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:tuazon548@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
