import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whatToSubmit = [
  "Your draft script",
  "A logline",
  "A synopsis",
  "A document outlining your story's major turning points",
];

export default function WritersLab() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="writers-lab"
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
          <p className="font-mono text-[18px] tracking-[0.2em] uppercase text-gold mb-3">
            07 — Origin Writers Lab
          </p>
          <h2
            className="font-display font-bold text-cream leading-[1.2] mb-5"
            style={{ fontSize: "clamp(3.5rem, 10vw, 5rem)" }}
          >
            Introducing the <em className="text-gold italic">Origin Writers Lab</em> — now open for
            applications
          </h2>

          <p className="text-cream/80 text-base leading-relaxed mb-5">
            We&apos;re selecting 6 screenwriters from across sub-Saharan Africa for an 8 week
            intensive development programme, taking each project from draft to final draft.
          </p>

          <p className="text-cream/80 text-base leading-relaxed mb-10">
            This isn&apos;t a workshop for ideas still finding their shape. It&apos;s for writers who
            already have a complete draft script in hand and are ready to sharpen it into something
            ready for the industry — with structure, rigour, and a community of peers doing the same.
          </p>

          {/* Who we're looking for */}
          <div className="mb-10">
            <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-3">
              Who we&apos;re looking for
            </p>
            <p className="text-cream/70 text-[15px] leading-relaxed">
              Screenwriters based in sub-Saharan Africa with a completed draft script for a feature
              or series.
            </p>
          </div>

          {/* What to submit */}
          <div className="mb-10">
            <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-3">
              What to submit
            </p>
            <ul className="space-y-1">
              {whatToSubmit.map((item) => (
                <li
                  key={item}
                  className="text-cream/70 text-[15px] flex items-start gap-1.5"
                >
                  <span className="text-gold text-[11px] mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What you get */}
          <div className="mb-10">
            <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-3">
              What you get
            </p>
            <p className="text-cream/70 text-[15px] leading-relaxed">
              8 weeks of dedicated development support, working alongside a small cohort of writers
              from across the continent, and expert mentors who will take your draft to a final
              draft.
            </p>
            <ul className="mt-4 space-y-1">
              <li className="text-cream/70 text-[15px] flex items-start gap-1.5">
                <span className="text-gold text-[11px] mt-0.5">—</span>
                who will take your current draft to the final draft
              </li>
              <li className="text-cream/70 text-[15px] flex items-start gap-1.5">
                <span className="text-gold text-[11px] mt-0.5">—</span>
                Your script will be included in the African Film DAO&apos;s first slate of
                tokenised screenplays
              </li>
            </ul>
          </div>

          {/* Beyond the Lab */}
          <div className="mb-10 p-6 border border-gold/15 bg-warmgray/30">
            <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-3">
              Beyond the Lab
            </p>
            <p className="text-cream/70 text-[15px] leading-relaxed mb-4">
              Every screenplay that completes the programme becomes part of African Film DAO&apos;s
              tokenised screenplay slate. In practice, this means your finished script is registered
              on-chain as an IP asset, with transparent, automated revenue-sharing built in from the
              outset — so if your project attracts funding, gets optioned, or moves into production,
              your ownership stake and any resulting revenue are tracked and distributed on-chain
              rather than buried in a contract you have to chase.
            </p>
            <p className="text-cream/70 text-[15px] leading-relaxed">
              African Film DAO is actively fundraising for this slate alongside our partners and
              investors, working to bring real capital behind African stories at the development
              stage. Writers joining this cohort are stepping into that pipeline from day one.
            </p>
          </div>

          {/* Key facts + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-1">
                  Call opens
                </p>
                <p className="font-display text-cream text-xl">9 July</p>
              </div>
              <div>
                <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-1">
                  Call closes
                </p>
                <p className="font-display text-cream text-xl">23 July</p>
              </div>
              <div>
                <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-1">
                  Spots
                </p>
                <p className="font-display text-cream text-xl">6</p>
              </div>
              <div>
                <p className="font-mono text-[18px] tracking-[0.15em] text-gold uppercase mb-1">
                  Region
                </p>
                <p className="font-display text-cream text-xl">Sub-Saharan Africa</p>
              </div>
            </div>

            <a
              href="https://form.jotform.com/261892802053053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gold text-deep font-mono text-sm tracking-[0.15em] uppercase hover:bg-cream transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          <p className="font-mono text-[20px] tracking-[0.15em] text-gold uppercase">
            Draft script required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
