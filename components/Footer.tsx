export default function Footer() {
  const links = [
    { label: "Impact Overview", href: "/impact" },
    { label: "Spotlight Stories", href: "/stories" },
    { label: "For Leaders", href: "/leaders" },
    { label: "For Teachers", href: "/teachers" },
    { label: "Methods & Transparency", href: "/methods" },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-10 px-8 mt-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <p
              className="text-2xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              ARAC<span style={{ color: "#5b96f5" }}>×</span>Whitman
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              America Reads America Counts at Whitman College. Building literacy,
              math confidence, and community - one session at a time.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/whitmanccec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#5b96f5] hover:text-[#5b96f5] transition-colors text-white/60 text-sm"
              >
                IG
              </a>
              <a
                href="mailto:ccec@whitman.edu"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#5b96f5] hover:text-[#5b96f5] transition-colors text-white/60 text-sm"
              >
                @
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-white/40 mb-2">Explore</p>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-[#f2f786] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-white/40 mb-2">Contact</p>
            <p className="text-white/60 text-sm">Center for Civic Engagement</p>
            <p className="text-white/60 text-sm">Whitman College</p>
            <p className="text-white/60 text-sm">345 Boyer Ave</p>
            <p className="text-white/60 text-sm">Walla Walla, WA 99362</p>
            <a
              href="mailto:ccec@whitman.edu"
              className="text-[#5b96f5] hover:text-[#86aff7] transition-colors text-sm mt-1"
            >
              ccec@whitman.edu
            </a>
            <a
              href="tel:+15095275996"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              (509) 527-5996
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-white/40 mb-2">Program</p>
            <p className="text-white/60 text-sm leading-relaxed">
              ARAC is a federally-funded work-study program placing Whitman
              student leaders in Walla Walla Public Schools classrooms.
            </p>
            <a
              href="/methods"
              className="text-[#5b96f5] text-sm hover:underline mt-2"
            >
              Learn about our methods →
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/60 transition-colors mt-1"
            >
              Data last updated: Spring 2025
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} Whitman College Center for Civic
            Engagement · America Reads America Counts
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/accessibility"
              className="hover:text-white/60 transition-colors"
            >
              Accessibility
            </a>
            <a
              href="https://www.whitman.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Whitman College
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
