import { motion } from "framer-motion";
import { Github, Linkedin, Calendar, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-card"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-sm mb-4">Social Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/gilbert-t-20a96213a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/gtuazon18/gtuazon18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Speaking */}
              <div>
                <h3 className="font-semibold text-sm mb-4">Speaking</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Available for speaking at events about software development and emerging technologies.
                </p>
                <a
                  href="mailto:tuazon548@gmail.com?subject=Speaking Inquiry"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium mt-3 hover:underline"
                >
                  Get in touch
                  <span>&rarr;</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-semibold text-sm mb-4">Email</h3>
                <a
                  href="mailto:tuazon548@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  tuazon548@gmail.com
                </a>

                <h3 className="font-semibold text-sm mt-6 mb-3">Let's Talk</h3>
                <a
                  href="mailto:tuazon548@gmail.com?subject=Let's Talk"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                  <span>&rarr;</span>
                </a>
              </div>

              {/* Blog */}
              <div>
                <h3 className="font-semibold text-sm mb-4">Blog</h3>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Read my blog
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
