const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tickets", href: "#tickets" },
  { label: "Submit", href: "#submit" },
  { label: "Contact", href: "mailto:info@holocenefilms.xyz" },
];

export default function Footer() {
  return (
    <footer className="bg-deep pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8 mb-12">
          {/* Brand with Logo */}
          <div className="flex flex-col items-start lg:mb-0">
            <img
              src="https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglKKCcWcqTcHNzG3mksEIFDuUihCbaRL60rxoW"
              alt="HACC Logo"
              className="h-[40px] w-auto mb-2"
            />
            <p className="font-mono text-gold text-sm tracking-[0.15em] uppercase font-medium mb-1">
              HACC
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Hollywood African Cinema Connection
            </p>
            <p className="text-muted text-xs mt-1">
              Cape Town, South Africa
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:mt-0">
            <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 pt-6">
          <p className="font-mono text-[11px] tracking-[0.08em] text-muted text-center">
            HACC Film Festival · Third Edition · Cape Town 2026
          </p>
        </div>
      </div>
    </footer>
  );
}