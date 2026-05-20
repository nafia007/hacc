import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  "Feature Films (60+ min)",
  "Short Films (under 30 min)",
  "Documentary",
  "Animation",
];

const criteria = [
  "Films must be directed by filmmakers of African or Asian descent",
  "Completed after January 2024",
  "English subtitles required for non-English dialogue",
  "No prior Cape Town theatrical release",
];

export default function Submit() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="submit"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-deep"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
    >
       <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
               <div className="mb-4">
                 <img
                   src="https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglKKCcWcqTcHNzG3mksEIFDuUihCbaRL60rxoW"
                   alt="HACC Logo"
                   className="h-[48px] w-auto"
                 />
               </div>
               <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold mb-3">
                 06 — Submit a Film
               </p>
               <h2
                 className="font-display font-bold text-cream leading-[1.2] mb-5"
                 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
               >
                 Share your <em className="text-gold italic">story</em> with the
                 world
               </h2>

              <p className="text-cream/80 text-base leading-relaxed mb-6">
                HACC programmers seek bold, original voices telling stories at the
                intersection of African cinema and emerging technology. Whether
                you&apos;re a first-time filmmaker or a seasoned director, we want
                to see your work.
              </p>

              {/* Categories */}
              <div className="mb-6">
                <p className="font-mono text-[9px] tracking-[0.15em] text-gold uppercase mb-2">
                  Submission Categories
                </p>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      className="text-cream/70 text-[14px] flex items-start gap-1.5"
                    >
                      <span className="text-gold text-[11px] mt-0.5">—</span>
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div className="mb-8">
                <p className="font-mono text-[9px] tracking-[0.15em] text-gold uppercase mb-2">
                  Eligibility Criteria
                </p>
                <ul className="space-y-1">
                  {criteria.map((c) => (
                    <li
                      key={c}
                      className="text-cream/70 text-[14px] flex items-start gap-1.5"
                    >
                      <span className="text-gold text-[11px] mt-0.5">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://filmfreeway.com/HACC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-deep transition-all duration-300"
                >
                  Submit via FilmFreeway
                </a>
                <a
                  href="https://afd-submissions.uwu.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 border border-gold/30 text-cream font-mono text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
                >
                  JOIN AFD
                </a>
                <a
                  href="https://chat.whatsapp.com/ECjYph5hNY8EQpgCDFmG1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 border border-gold/30 text-cream font-mono text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
                >
                  WhatsApp Community
                </a>
              </div>
          </motion.div>
       </div>
     </section>
  );
}