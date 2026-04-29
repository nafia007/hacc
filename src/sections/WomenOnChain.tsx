import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const speakers = [
  {
    name: "Dr. Amina Kone",
    role: "Blockchain Strategist",
    org: "African Film DAO",
    image: "/images/speaker-1.jpg",
  },
  {
    name: "Leela Srinivasan",
    role: "AI Research Lead",
    org: "Mumbai Tech Collective",
    image: "/images/speaker-2.jpg",
  },
  {
    name: "Zara Mensah",
    role: "Film Director",
    org: "Accra Film Workshop",
    image: "/images/speaker-3.jpg",
  },
  {
    name: "Sofia Reyes",
    role: "Festival Programmer",
    org: "HACC Curatorial Board",
    image: "/images/speaker-4.jpg",
  },
];

const films = [
  "Indlu Yenkomo",
  "Crimson",
  "Two Hues",
  "Hey Friend",
  "V's Secret",
  "Hijra",
];

export default function WomenOnChain() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="women-on-chain"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-deep overflow-hidden"
      style={{
        borderTop: "2px solid rgba(201,168,76,0.4)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Warm radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 70%, rgba(196,84,42,0.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
            03 — Women on Chain
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Blockchain. Film.{" "}
            <em className="text-gold italic">Women leading.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-cream/80 leading-relaxed mb-6">
              Women on Chain is HACC&apos;s flagship sub-event exploring the
              intersection of blockchain technology, AI, and women in cinema.
              Held at the District Six Homecoming Centre, it brings together
              pioneers reshaping the industry.
            </p>

            <div className="mb-8">
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase mb-2">
                Event Date
              </p>
              <p className="font-mono text-2xl lg:text-3xl text-gold">
                30 January 2026
              </p>
              <p className="text-muted text-sm mt-1">
                District Six Homecoming Centre, Cape Town
              </p>
            </div>

            <a
              href="#"
              className="inline-block px-8 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-deep transition-all duration-300 mb-10"
            >
              Register for Women on Chain
            </a>

            {/* Films screened */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase mb-3">
                Films Screened
              </p>
              <div className="flex flex-wrap gap-2">
                {films.map((film) => (
                  <span
                    key={film}
                    className="px-3 py-1 border border-gold/20 text-cream/70 font-mono text-[11px] tracking-wider"
                  >
                    {film}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Speaker Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-1"
          >
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group bg-ink border border-gold/10 hover:border-gold/30 transition-all duration-300 p-4"
              >
                <div className="relative aspect-square overflow-hidden mb-3">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </div>
                <h4 className="font-display text-sm font-bold text-cream group-hover:text-gold-light transition-colors">
                  {speaker.name}
                </h4>
                <p className="font-mono text-[10px] text-gold/80 mt-1 tracking-wider uppercase">
                  {speaker.role}
                </p>
                <p className="text-muted text-xs mt-0.5">{speaker.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
