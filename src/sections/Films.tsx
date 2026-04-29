import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Film {
  id: number;
  title: string;
  director: string;
  country: string;
  runtime: string;
  category: string;
  theme: string;
  poster: string;
}

const films: Film[] = [
  {
    id: 1,
    title: "Indlu Yenkomo",
    director: "Nomusa Dlamini",
    country: "South Africa",
    runtime: "94 min",
    category: "Features",
    theme: "Magic Realism",
    poster: "/images/film-poster-1.jpg",
  },
  {
    id: 2,
    title: "Crimson",
    director: "Amara Okafor",
    country: "Nigeria",
    runtime: "18 min",
    category: "Shorts",
    theme: "Horror",
    poster: "/images/film-poster-2.jpg",
  },
  {
    id: 3,
    title: "Two Hues",
    director: "Elara Chen",
    country: "Kenya",
    runtime: "76 min",
    category: "Features",
    theme: "Coming of Age",
    poster: "/images/film-poster-3.jpg",
  },
  {
    id: 4,
    title: "Hey Friend",
    director: "Tunde Bakare",
    country: "Ghana",
    runtime: "12 min",
    category: "Shorts",
    theme: "Friendship",
    poster: "/images/film-poster-4.jpg",
  },
  {
    id: 5,
    title: "V's Secret",
    director: "Priya Naidoo",
    country: "South Africa",
    runtime: "82 min",
    category: "Features",
    theme: "Noir Mystery",
    poster: "/images/film-poster-5.jpg",
  },
  {
    id: 6,
    title: "Hijra",
    director: "Anwar Khan",
    country: "Somalia",
    runtime: "68 min",
    category: "Documentary",
    theme: "Migration",
    poster: "/images/film-poster-6.jpg",
  },
];

const categories = ["All", "Features", "Shorts", "Animation", "Documentary"];

export default function Films() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredFilms =
    activeFilter === "All"
      ? films
      : films.filter((f) => f.category === activeFilter);

  return (
    <section
      id="films"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-deep"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
            02 — Films
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The <em className="text-gold italic">programme</em>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase border transition-all duration-300 ${
                activeFilter === cat
                  ? "border-gold text-gold"
                  : "border-gold/20 text-muted hover:border-gold/50 hover:text-cream/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Film Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
          >
            {filteredFilms.map((film, i) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-ink border border-gold/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Poster */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Theme Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 border border-gold/30 text-gold font-mono text-[10px] tracking-wider uppercase bg-deep/60 backdrop-blur-sm">
                      {film.theme}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-cream group-hover:text-gold-light transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    {film.director}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-[11px] text-muted/70">
                      {film.country}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-mono text-[11px] text-muted/70">
                      {film.runtime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
