import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface ScheduleEvent {
  time: string;
  title: string;
  type: "Screening" | "Panel" | "Special";
  venue: string;
  description: string;
}

const scheduleData: Record<string, ScheduleEvent[]> = {
  "Day 1": [
    {
      time: "10:00",
      title: "Opening Ceremony",
      type: "Special",
      venue: "Main Hall",
      description: "Welcome address by festival director and opening remarks from special guests.",
    },
    {
      time: "12:00",
      title: "Indlu Yenkomo Screening",
      type: "Screening",
      venue: "Screening Hall A",
      description: "Premiere screening followed by Q&A with director Nomusa Dlamini.",
    },
    {
      time: "14:30",
      title: "Blockchain in African Cinema",
      type: "Panel",
      venue: "Panel Room",
      description: "Exploring how blockchain technology is transforming film financing and distribution.",
    },
    {
      time: "18:00",
      title: "Opening Night Gala",
      type: "Special",
      venue: "Rooftop Terrace",
      description: "Networking reception with filmmakers, sponsors, and festival guests.",
    },
  ],
  "Day 2": [
    {
      time: "10:00",
      title: "Short Film Block: Voices",
      type: "Screening",
      venue: "Screening Hall B",
      description: "A curated selection of short films exploring African voices and perspectives.",
    },
    {
      time: "13:00",
      title: "Women on Chain Panel",
      type: "Panel",
      venue: "Panel Room",
      description: "Women leaders in blockchain and film discuss the future of the industry.",
    },
    {
      time: "16:00",
      title: "Crimson + Two Hues Double Bill",
      type: "Screening",
      venue: "Screening Hall A",
      description: "Back-to-back screenings with filmmaker discussion between films.",
    },
  ],
  "Day 3": [
    {
      time: "11:00",
      title: "Animation Showcase",
      type: "Screening",
      venue: "Screening Hall B",
      description: "The best in African animation, from emerging and established studios.",
    },
    {
      time: "14:00",
      title: "AI and Storytelling",
      type: "Panel",
      venue: "Panel Room",
      description: "How artificial intelligence is reshaping narrative filmmaking in Africa.",
    },
    {
      time: "19:00",
      title: "Awards Night",
      type: "Special",
      venue: "Main Hall",
      description: "Celebrating the best of HACC 2026. Formal attire encouraged.",
    },
  ],
  "Day 4": [
    {
      time: "10:00",
      title: "Documentary Morning",
      type: "Screening",
      venue: "Screening Hall A",
      description: "Hijra and other documentary features exploring African realities.",
    },
    {
      time: "13:00",
      title: "Closing Brunch",
      type: "Special",
      venue: "Garden Terrace",
      description: "Final gathering with filmmakers, jury, and festival team.",
    },
  ],
};

const typeColors: Record<string, string> = {
  Screening: "border-l-gold",
  Panel: "border-l-rust",
  Special: "border-l-muted",
};

export default function Programme() {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const days = Object.keys(scheduleData);
  const currentSchedule = scheduleData[activeDay];

  return (
    <section
      id="programme"
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
            04 — Programme
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Your festival <em className="text-gold italic">schedule</em>
          </h2>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-0 mb-10 border-b border-gold/15"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => {
                setActiveDay(day);
                setExpandedEvent(null);
              }}
              className={`px-6 py-4 font-mono text-xs tracking-[0.1em] uppercase transition-all duration-300 border-b-2 ${
                activeDay === day
                  ? "text-gold border-gold"
                  : "text-muted border-transparent hover:text-cream/70"
              }`}
            >
              {day}
              <span className="block text-[10px] text-muted/60 mt-1 normal-case">
                {day === "Day 1" && "15 Oct"}
                {day === "Day 2" && "16 Oct"}
                {day === "Day 3" && "17 Oct"}
                {day === "Day 4" && "18 Oct"}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1"
          >
            {currentSchedule.map((event, i) => (
              <motion.div
                key={`${activeDay}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`bg-ink border border-gold/10 hover:border-gold/20 transition-all duration-300 border-l-2 ${typeColors[event.type]}`}
              >
                <button
                  onClick={() =>
                    setExpandedEvent(expandedEvent === i ? null : i)
                  }
                  className="w-full flex items-center gap-4 lg:gap-6 p-4 lg:p-6 text-left"
                >
                  <span className="font-mono text-lg text-gold tabular-nums flex-shrink-0 w-14">
                    {event.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-base font-bold text-cream">
                        {event.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase border ${
                          event.type === "Screening"
                            ? "border-gold/30 text-gold"
                            : event.type === "Panel"
                            ? "border-rust/30 text-rust"
                            : "border-muted/30 text-muted"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-muted mt-1">
                      {event.venue}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-muted">
                    {expandedEvent === i ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedEvent === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0 lg:pl-24">
                        <p className="text-cream/70 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
