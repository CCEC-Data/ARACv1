"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "For Leaders", href: "/leaders" },
  { label: "For Teachers", href: "/teachers" },
  { label: "Methods", href: "/methods" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "#1a1a2e",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      className="w-full sticky top-0 z-50 px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-tight"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          ARAC<span style={{ color: "#5b96f5" }}>×</span>Whitman
        </Link>

        {/* Desktop links - CENTER */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.82rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f2f786")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/impact"
            className="hidden md:inline-flex px-5 py-2 rounded text-sm font-semibold transition-colors hover:opacity-90"
            style={{
              background: "#5b96f5",
              color: "#1a1a2e",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.9rem",
            }}
          >
            View Impact →
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              style={{
                background: "white",
                height: "2px",
                width: "24px",
                display: "block",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
                transition: "0.3s",
              }}
            />
            <span
              style={{
                background: "white",
                height: "2px",
                width: "24px",
                display: "block",
                opacity: open ? 0 : 1,
                transition: "0.3s",
              }}
            />
            <span
              style={{
                background: "white",
                height: "2px",
                width: "24px",
                display: "block",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
                transition: "0.3s",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="pt-3 text-sm uppercase tracking-widest transition-colors"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/impact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 rounded text-sm font-semibold text-center"
            style={{
              background: "#5b96f5",
              color: "#1a1a2e",
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            View Impact →
          </Link>
        </div>
      )}
    </nav>
  );
}
