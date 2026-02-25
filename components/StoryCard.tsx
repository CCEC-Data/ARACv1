"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface StoryCardProps {
  title: string;
  anecdote: string;
  metric: string;
  tags: string[];
  slug: string;
  index?: number;
}

const TAG_COLORS: Record<string, string> = {
  Literacy: "bg-[#f2f786] text-[#1a1a2e]",
  Math: "bg-[#edf2fe] text-[#5b96f5]",
  Confidence: "bg-[#edf2fe] text-[#5b96f5]",
  "Classroom Support": "bg-[#f2f786] text-[#1a1a2e]",
};

export default function StoryCard({
  anecdote,
  metric,
  tags,
  slug,
}: StoryCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-[#cdd9fa]"
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(91,150,245,0.15)",
      }}
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="w-full h-48 flex items-center justify-center overflow-hidden"
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, #edf2fe 25%, #cdd9fa 50%, #edf2fe 75%)",
          backgroundSize: "200% 100%",
        }}
      >
        <span className="text-[#5b96f5] text-sm">Photo placeholder</span>
      </motion.div>
      <div className="p-6 flex flex-col gap-3 min-w-0 overflow-hidden">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-semibold rounded ${
                TAG_COLORS[tag] ?? "bg-[#edf2fe] text-[#5b96f5]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-display text-lg text-[#1a1a2e] leading-snug break-words">
          &ldquo;{anecdote.split(".")[0]}.&rdquo;
        </p>
        <p className="text-xs text-[#5a5a72] break-words">{metric}</p>
        <Link
          href={`/stories/${slug}`}
          className="text-sm text-[#5b96f5] font-semibold hover:underline mt-1"
        >
          Read story →
        </Link>
      </div>
    </motion.div>
  );
}
