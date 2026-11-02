
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Solutions in Action", href: "#projects" },
  { label: "Our Process", href: "#process" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 px-5 pt-4 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between rounded-2xl border border-[#E7E3DC] bg-white/90 px-5 py-4">
        {/* Brand */}
        <a
          href="#home"
          className="flex flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-lg font-semibold tracking-[0.16em] text-[#10264A]">
            ASCEND
          </span>
          <span className="text-[9px] tracking-[0.2em] text-[#626B78]">
            BUSINESS SYSTEMS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#626B78] transition hover:text-[#038DCA]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            style={{ backgroundColor: "#10264A", color: "#FFFFFF" }}
            className="rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-[#038DCA]!"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="rounded-lg border border-[#E7E3DC] bg-white px-3 py-2 text-sm text-[#10264A] transition hover:border-[#038DCA] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 flex w-full flex-col gap-1 border-t border-[#E7E3DC] pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-[#626B78] transition hover:bg-[#EAF5FA] hover:text-[#038DCA]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              style={{ backgroundColor: "#10264A", color: "#FFFFFF" }}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-medium transition hover:bg-[#038DCA]"
              onClick={() => setMenuOpen(false)}
            >
              Let’s Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
