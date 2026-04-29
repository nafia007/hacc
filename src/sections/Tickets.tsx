import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ticketTiers = [
  {
    name: "Early Bird Opening Night",
    price: "300",
    description: "Opening night film screening & after party access",
    features: ["Early bird pricing", "Red carpet entry", "Opening film premiere", "After party access"],
    popular: false,
    paymentLink: "https://page.peachpayments.com/holocene-films",
    reference: "OPENING-NIGHT-EB",
  },
  {
    name: "Full Weekend Pass",
    price: "800",
    description: "Festival full weekend pass including opening night",
    features: [
      "All screenings",
      "All panel discussions",
      "Networking events",
      "Opening Night included",
    ],
    popular: true,
    paymentLink: "https://page.peachpayments.com/holocene-films",
    reference: "WEEKEND-PASS",
  },
  {
    name: "Awards Night",
    price: "300",
    description: "Gala awards night ceremony and reception",
    features: ["Awards ceremony", "Gala reception", "Meet the winners"],
    popular: false,
    paymentLink: "https://page.peachpayments.com/holocene-films",
    reference: "AWARDS-NIGHT",
  },
];

const faqs = [
  {
    question: "What is the age policy?",
    answer:
      "Most screenings are 16+. Some films may have an 18+ rating — this will be clearly indicated on the film page. Children under 12 are welcome at family-friendly animation screenings when accompanied by an adult.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Tickets are non-refundable but can be transferred to another person up to 48 hours before the event. In the event of a cancellation, full refunds will be issued automatically.",
  },
  {
    question: "Is the venue accessible?",
    answer:
      "All HACC venues are wheelchair accessible with ramps, accessible restrooms, and designated seating areas. Please contact us 48 hours in advance if you require specific accommodations.",
  },
  {
    question: "Is parking available?",
    answer:
      "Limited street parking is available near the venues. We recommend using Uber or Bolt. A Park & Ride service operates from the V&A Waterfront on all festival days.",
  },
];

export default function Tickets() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="tickets"
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
            05 — Tickets
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Secure your <em className="text-gold italic">seat</em>
          </h2>
        </motion.div>

        {/* Ticket Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 mb-16"
        >
          {ticketTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`relative bg-ink p-6 border transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "border-gold/50"
                  : "border-gold/10 hover:border-gold/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-px left-6 px-3 py-1 bg-gold text-deep font-mono text-[9px] tracking-wider uppercase font-medium">
                  Most Popular
                </span>
              )}
              <p className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">
                {tier.name}
              </p>
              <p className="font-display text-3xl lg:text-4xl text-cream font-bold mb-2">
                R{tier.price}
              </p>
              <p className="text-muted text-sm mb-4">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-cream/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-gold mt-1 text-xs">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={tier.paymentLink} target="_blank" rel="noopener noreferrer" className={`block text-center px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase border transition-all duration-300 ${
      tier.popular ? "bg-gold text-deep border-gold hover:bg-gold-light" : "border-gold/30 text-gold hover:bg-gold hover:text-deep"
    }`}>
  Pay Now
</a>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-display text-xl font-bold text-cream mb-6">
            Frequently Asked Questions
          </h3>
          <div className="border border-gold/10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gold/10 last:border-b-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 lg:p-5 text-left hover:bg-ink/50 transition-colors"
                >
                  <span className="font-display text-sm text-cream pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-muted"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 lg:px-5 pb-4 lg:pb-5 text-cream/70 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
