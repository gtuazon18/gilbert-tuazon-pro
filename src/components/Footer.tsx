import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="font-mono text-primary text-lg font-bold">{"<GT />"}</p>

          <p className="text-sm text-muted-foreground font-mono text-center">
            © {new Date().getFullYear()} Gilbert Tuazon. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/gtuazon18/gtuazon18", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gilbert-t-20a96213a/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tuazon548@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
