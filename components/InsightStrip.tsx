"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface InsightItem {
  value: number | string;
  label: string;
  suffix?: string;
  context?: string;
}

interface InsightStripProps {
  items: InsightItem[];
}

function CountUp({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const INSIGHT_CONTEXT: Record<number, string> = {
  0: "Across 3 academic years",
  1: "Across 14 WWPS classrooms",
  2: "Literacy-first focus",
  3: "Per session average",
  4: "Based on end-of-term rubrics",
};

export default function InsightStrip({ items }: InsightStripProps) {
  return (
    <motion.section
      className="py-12 px-8"
      style={{ backgroundColor: "#f2f786" }}
      aria-label="Key metrics"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {items.map((item, i) => {
          const isNumeric = typeof item.value === "number";
          const numValue = typeof item.value === "number" ? item.value : 0;
          const display =
            isNumeric
              ? null
              : String(item.value) + (item.suffix || "");
          const context = item.context ?? INSIGHT_CONTEXT[i];
          return (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm min-w-0 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="stat-number text-[#1a1a2e]">
                {isNumeric ? (
                  <CountUp
                    target={numValue}
                    suffix={item.suffix || ""}
                    duration={2000}
                  />
                ) : (
                  display
                )}
              </span>
              <span className="eyebrow text-[#5a5a72] text-xs break-words">
                {item.label}
              </span>
              {context && (
                <span className="text-xs text-[#5a5a72] mt-1 break-words">
                  {context}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
