import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-deep"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-6">
            Partnership Opportunities
          </h3>
          <p className="text-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Interested in partnering with HACC? We welcome collaborations with brands, organizations, and institutions that share our vision for African cinema and emerging technology.
          </p>
          <a
            href="https://form.jotform.com/260992508874067"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-deep transition-all duration-300"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
