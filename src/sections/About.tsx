import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  target: number;
  suffix: string;
  label: string;
}

function AnimatedStat({ target, suffix, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <span className="font-display text-4xl lg:text-5xl text-gold font-bold">
        {value}
        {suffix}
      </span>
      <p className="font-mono text-[11px] tracking-[0.12em] text-muted mt-2 uppercase">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-deep"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
              01 — About
            </p>
            <h2
              className="font-display font-bold text-cream leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Where African cinema{" "}
              <em className="text-gold italic">meets</em> the future
            </h2>
          </motion.div>

          {/* Right: Description + Stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/80 leading-relaxed mb-4"
            >
              The Hollywood African Cinema Connection is Cape Town&apos;s
              festival at the intersection of African and Asian cinema,
              emerging technology, and global storytelling. Now entering its
              third edition, HACC features curated feature films, short films,
              animation, panel discussions on blockchain and AI, and its
              flagship sub-event Women on Chain.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cream/80 leading-relaxed mb-12"
            >
              From magic realism to documentaries exploring the African
              diaspora, HACC is where stories find their audience and
              filmmakers find their community.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
              style={{
                borderTop: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <AnimatedStat target={100} suffix="+" label="Films" />
              <AnimatedStat target={25} suffix="+" label="Countries" />
              <AnimatedStat target={3} suffix="rd" label="Edition" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
