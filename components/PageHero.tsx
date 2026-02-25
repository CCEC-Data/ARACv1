"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  photoPlaceholder?: string;
  className?: string;
}

export default function PageHero({
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  photoPlaceholder,
  className = "",
}: PageHeroProps) {
  return (
    <motion.section
      className={`relative pt-20 pb-12 px-6 overflow-hidden ${className}`}
      style={{ background: "var(--off-white)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          {headline}
        </h1>
        {subhead && (
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            {subhead}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-[#5b96f5] hover:bg-[#86aff7] transition-colors"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-6 py-3 rounded-lg font-semibold text-ink border-2 border-[#cdd9fa] hover:border-[#5b96f5] hover:text-[#5b96f5] transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {photoPlaceholder && (
          <motion.div
            className="w-full h-64 rounded-2xl flex items-center justify-center my-8 overflow-hidden"
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(90deg, #edf2fe 25%, #cdd9fa 50%, #edf2fe 75%)",
              backgroundSize: "200% 100%",
              border: "1px solid #cdd9fa",
            }}
          >
            <span className="text-[#5b96f5] text-sm">{photoPlaceholder}</span>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
