import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Weaam Williams",
    role: "Festival Director",
    bio: "Award-winning filmmaker and cultural producer with over 15 years of experience in African cinema. Weaam founded HACC to bridge the gap between African storytellers and global audiences.",
    image: "https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglmK9S7nOocrbh0dnEqge8SpIsLY3zQDyj1f24",
  },
  {
    name: "Bheki Dlaldla",
    role: "Programmer",
    bio: "Experienced programmer and technologist supporting HACC’s digital infrastructure and innovation initiatives.",
    image: "https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglmkiuAsOocrbh0dnEqge8SpIsLY3zQDyj1f24",
  },
  {
    name: "Thandikaya Simelane",
    role: "Programme Curator",
    bio: "Film curator and critic specialising in emerging African cinema. Thandikaya has programmed for festivals across the continent and is passionate about discovering new voices.",
    image: "https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglmK9S7nOocrbh0dnEqge8SpIsLY3zQDyj1f24",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
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
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
            07 — The Team
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The people behind <em className="text-gold italic">HACC</em>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-1">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group bg-ink border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-cream group-hover:text-gold-light transition-colors">
                  {member.name}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.1em] text-gold uppercase mt-1">
                  {member.role}
                </p>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
