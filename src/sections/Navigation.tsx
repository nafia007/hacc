import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  
  { label: "Tickets", href: "#tickets" },
  { label: "Submit", href: "#submit" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-deep/90 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        }`}
        style={{ height: 64 }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6 lg:px-8">
          <a
            href="#"
            className="font-mono text-gold text-sm tracking-[0.15em] uppercase font-medium"
          >
            HACC
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-[0.12em] uppercase text-cream/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col gap-[6px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-gold"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-gold"
            />
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-gold"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-warmgray flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="font-display text-3xl text-cream hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#tickets"
              onClick={handleLinkClick}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              className="mt-4 px-8 py-3 bg-gold text-deep font-mono text-sm tracking-wider uppercase"
            >
              Get Tickets
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
