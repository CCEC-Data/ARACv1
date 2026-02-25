"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import StoryCard from "@/components/StoryCard";
import stories from "@/data/stories.json";

const ALL_TAGS = ["Literacy", "Math", "Confidence", "Classroom Support"];

export default function StoriesPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredStories = useMemo(() => {
    if (!activeTag) return stories;
    return stories.filter((s) => s.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <PageHero
        headline="Spotlight Stories"
        subhead="Real outcomes from real partnerships between Whitman leaders and Walla Walla students."
        photoPlaceholder="Photo: Community tutoring session"
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 ${
                !activeTag
                  ? "bg-[#5b96f5] text-white"
                  : "bg-[#edf2fe] border border-[#cdd9fa] text-ink hover:border-[#5b96f5]"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 ${
                  activeTag === tag
                    ? "bg-[#5b96f5] text-white"
                    : "bg-[#edf2fe] border border-[#cdd9fa] text-ink hover:border-[#5b96f5]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, i) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <StoryCard
                  title={story.title}
                  anecdote={story.anecdote}
                  metric={story.metric}
                  tags={story.tags}
                  slug={story.slug}
                  index={i}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
