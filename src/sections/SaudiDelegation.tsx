import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SaudiDelegation() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="saudi-delegation"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-deep"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
            Saudi Delegation
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Saudi Arabia: Join Us in{" "}
            <span className="text-gold italic">Cape Town</span> This October
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-cream/80 leading-relaxed">
              HACC 2026 is extending a special invitation to Saudi producers,
              investors, studio executives and creatives to join us in Cape Town
              from 30 October to 2 November 2026 for the Third Edition of the
              Hollywood African Cinema Connection Festival.
            </p>
            <p className="text-cream/80 leading-relaxed">
              This is a first step — an opportunity to meet South African
              producers, studios, facilities and industry stakeholders in
              person, explore co-production possibilities, and take a guided
              tour of Cape Town&apos;s world-class filming locations and studios.
              We also welcome Saudi studios and creatives to showcase their own
              locations and capabilities to our international audience.
            </p>
            <p className="text-cream/80 leading-relaxed">
              Selected delegates receive a complimentary full-access festival
              pass and location &amp; studio tour. Travel and accommodation are
              the responsibility of each delegate. Cape Town&apos;s thriving
              Halaal hospitality and cultural ecosystem ensures a welcoming
              environment for all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-ink/50 border border-gold/10 p-8 lg:p-10">
              <p className="text-cream/80 leading-relaxed mb-8">
                Interested in joining the Saudi delegation at HACC 2026? Fill in
                our short expression of interest form — spaces are limited.
              </p>
              <p className="font-mono text-xs tracking-[0.12em] text-gold mb-6">
                Submissions close: 15th July 2026
              </p>
              <a
                href="https://form.jotform.com/261741725598064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gold text-deep font-mono text-sm tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Submit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
