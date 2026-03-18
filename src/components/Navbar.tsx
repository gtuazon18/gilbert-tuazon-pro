import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => ({
        id: link.href.substring(1),
        element: document.querySelector(link.href)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-foreground"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              GT
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {isHome && navLinks.map(link => (
                <motion.button
                  key={link.name}
                  whileHover={{ y: -1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div whileHover={{ y: -1 }}>
                <Link
                  to="/blog"
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === "/blog"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/90 backdrop-blur-lg border-t border-border">
          <div className="container px-4 py-3">
            <div className="flex items-center justify-around gap-1">
              {isHome && navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.button
                    key={link.name}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-xs px-3 py-2 rounded-full transition-all font-medium ${
                      isActive
                        ? "bg-foreground text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/blog"
                  className={`text-xs px-3 py-2 rounded-full transition-all block font-medium ${
                    location.pathname === "/blog"
                      ? "bg-foreground text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
