import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  "African Film DAO",
  "Hollywoodland Film",
  "Cape Town Film Office",
  "District Six Museum",
];

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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-8 text-center"
        >
          Partners
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex items-center justify-center p-6 border border-gold/10 hover:border-gold/40 transition-all duration-300 group bg-ink"
            >
              <span className="font-mono text-[11px] tracking-wider text-muted group-hover:text-cream/70 transition-colors text-center uppercase">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
