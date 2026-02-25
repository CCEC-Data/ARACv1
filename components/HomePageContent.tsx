"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import InsightStrip from "@/components/InsightStrip";
import StoryCard from "@/components/StoryCard";
import metrics from "@/data/metrics.json";
import stories from "@/data/stories.json";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const HOURS = 2847;

export default function HomePageContent() {
  return (
    <div>
      <section
        style={{ background: "#1a1a2e", minHeight: "88vh" }}
        className="w-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-8 w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={itemVariants}
                className="uppercase tracking-widest text-xs"
                style={{
                  color: "#86aff7",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                America Reads America Counts · Whitman College
              </motion.p>
              <motion.h1
                variants={itemVariants}
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  color: "white",
                  maxWidth: "560px",
                }}
              >
                The America Reads America Counts Program at Whitman College delivered over{" "}
                <span style={{ color: "#5b96f5" }}>{HOURS.toLocaleString()} hours</span> of literacy and math support across Walla Walla schools - over the last 3 years.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.15rem",
                  maxWidth: "480px",
                  lineHeight: 1.7,
                }}
              >
                Student leaders from Whitman work alongside WWPS teachers to build reading confidence, math fluency, and meaningful community connection.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4 flex-wrap mt-2">
                <Link
                  href="/impact"
                  className="px-6 py-3 rounded font-semibold transition-colors hover:opacity-90"
                  style={{
                    background: "#5b96f5",
                    color: "#1a1a2e",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1rem",
                  }}
                >
                  View Impact →
                </Link>
                <Link
                  href="/stories"
                  className="px-6 py-3 rounded font-semibold border transition-colors hover:opacity-90"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "white",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1rem",
                  }}
                >
                  Read Stories
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1f2347 0%, #252545 100%)",
                border: "1px solid rgba(91,150,245,0.2)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(91,150,245,0.15) 50%, transparent 100%)",
                  animation: "shimmer 3s infinite linear",
                  backgroundSize: "200% 100%",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(91,150,245,0.15)",
                    border: "1px solid rgba(91,150,245,0.3)",
                  }}
                >
                  <span style={{ color: "#5b96f5", fontSize: "1.5rem" }}>⬜</span>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.85rem",
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  Program photo
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InsightStrip items={metrics.insightStrip} />

      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-2">
            Spotlight Stories
          </h2>
          <p className="text-muted mb-12 max-w-2xl">
            Real outcomes from real partnerships between Whitman leaders and
            Walla Walla students.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.slice(0, 3).map((story, i) => (
              <StoryCard
                key={story.id}
                title={story.title}
                anecdote={story.anecdote}
                metric={story.metric}
                tags={story.tags}
                slug={story.slug}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/stories"
              className="text-[#5b96f5] font-semibold hover:underline"
            >
              View all stories →
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
