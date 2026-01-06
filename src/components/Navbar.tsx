import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card border-b border-border" : ""}`}>
      <nav className="container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="font-mono text-xl font-bold text-primary" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
            {"<GT />"}
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <motion.button key={link.name} whileHover={{
            y: -2
          }} onClick={() => handleNavClick(link.href)} className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </motion.button>)}
            <motion.a href="/Gilbert Tuazon CV.pdf" download="Gilbert Tuazon CV.pdf" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              Download My CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.href)} className="font-mono text-left text-muted-foreground hover:text-primary transition-colors py-2">
                {link.name}
              </button>)}
            <a href="/Gilbert Tuazon CV.pdf" download="Gilbert Tuazon CV.pdf" className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-center">
              Resume
            </a>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Navbar;