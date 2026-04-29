import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deadlines = [
  { date: "17 Nov 2025", label: "Submissions Open", active: true },
  { date: "15 Jan 2026", label: "Early Deadline", active: false },
  { date: "15 Feb 2026", label: "Regular Deadline", active: false },
  { date: "15 Mar 2026", label: "Late Deadline", active: false },
];

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
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
              06 — Submit a Film
            </p>
            <h2
              className="font-display font-bold text-cream leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Share your <em className="text-gold italic">story</em> with the
              world
            </h2>

            <p className="text-cream/80 leading-relaxed mb-8">
              HACC programmers seek bold, original voices telling stories at the
              intersection of African cinema and emerging technology. Whether
              you&apos;re a first-time filmmaker or a seasoned director, we want
              to see your work.
            </p>

            {/* Categories */}
            <div className="mb-8">
              <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-3">
                Submission Categories
              </p>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="text-cream/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-gold text-xs mt-1">—</span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="mb-10">
              <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-3">
                Eligibility Criteria
              </p>
              <ul className="space-y-2">
                {criteria.map((c) => (
                  <li
                    key={c}
                    className="text-cream/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-gold text-xs mt-1">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://filmfreeway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-deep transition-all duration-300"
              >
                Submit via FilmFreeway
              </a>
              <a
                href="https://afd-platform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gold/30 text-cream font-mono text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                Submit via AFD Platform
              </a>
            </div>
          </motion.div>

          {/* Right: Deadline Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pt-16"
          >
            <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-6">
              Submission Timeline
            </p>
            <div className="relative pl-6">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/15" />

              {deadlines.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-6 top-1 w-[15px] h-[15px] border-2 rounded-full bg-deep ${
                      d.active ? "border-gold" : "border-gold/20"
                    }`}
                  />
                  <p className="font-mono text-lg text-gold">{d.date}</p>
                  <p className="text-cream/80 text-sm mt-1">{d.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <div
              className="mt-10 p-4 border border-gold/10 bg-ink"
            >
              <p className="text-muted text-sm">
                Early deadline submissions receive priority consideration and a
                reduced fee. Submit early for the best chance of selection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
