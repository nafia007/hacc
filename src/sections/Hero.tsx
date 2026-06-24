import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

export default function Hero() {
  const festivalDate = new Date("2026-10-30T20:00:00+02:00");
  const { days, hours, minutes, seconds } = useCountdown(festivalDate);
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Film grain animation - random background position shifts
    let frame = 0;
    const animateGrain = () => {
      frame++;
      if (grainRef.current && frame % 3 === 0) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        grainRef.current.style.backgroundPosition = `${x}% ${y}%`;
      }
      requestAnimationFrame(animateGrain);
    };
    const id = requestAnimationFrame(animateGrain);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-deep"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />

      {/* Radial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(201,168,76,0.08), transparent)",
        }}
      />

      {/* Film Grain Overlay */}
      <div
        ref={grainRef}
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(13,11,10,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8 pt-20 lg:pt-24 pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-base sm:text-lg font-black tracking-[0.12em] uppercase text-gold mb-6"
            >
              Third Edition · 30th October<span className="sm:hidden"><br />to 2nd November 2026</span><span className="hidden sm:inline"> to 2nd November 2026</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-black leading-[0.95] text-cream"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              Hollywood African
              <br />
              Cinema{" "}
              <em className="text-gold italic">Connection</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-lg lg:text-xl text-muted max-w-[520px] leading-relaxed"
            >
              Cape Town&apos;s festival at the intersection of African, Middle Eastern and Asian cinema,
              emerging technology, and global storytelling.
            </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8"
              >
                <a
                  href="#tickets"
                  className="px-8 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-deep transition-all duration-300"
                >
                  Get Tickets
                </a>
              </motion.div>
          </div>

          {/* Right: Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-shrink-0"
          >
            <div className="grid grid-cols-4 gap-4 lg:gap-6 text-center">
              {[
                { value: days, label: "DAYS" },
                { value: hours, label: "HRS" },
                { value: minutes, label: "MIN" },
                { value: seconds, label: "SEC" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="font-mono text-3xl lg:text-4xl text-cream font-medium tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[0.12em] text-gold/60 mt-4 text-center uppercase">
              Until Opening Night
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gold/50"
        />
      </motion.div>
    </section>
  );
}
