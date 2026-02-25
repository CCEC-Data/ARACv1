"use client";

import { motion } from "framer-motion";

interface OutcomeItem {
  label: string;
  value: number;
  suffix?: string;
}

interface OutcomeGridProps {
  items: OutcomeItem[];
  title?: string;
}

export default function OutcomeGrid({ items, title }: OutcomeGridProps) {
  return (
    <div>
      {title && (
        <h3 className="font-display text-xl text-ink mb-4">{title}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
            className="rounded-lg p-4 border border-border pt-4 min-w-0 overflow-hidden"
            style={{
              backgroundColor: "var(--card-bg)",
              borderTopWidth: "2px",
              borderTopColor: "var(--blue-primary)",
            }}
          >
            <p className="font-mono text-5xl font-semibold text-ink">
              {item.value}%
            </p>
            <p className="text-sm text-muted mt-1 font-sans uppercase tracking-wide break-words">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
