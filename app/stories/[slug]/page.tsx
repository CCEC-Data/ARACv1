import Link from "next/link";
import { notFound } from "next/navigation";
import stories from "@/data/stories.json";
import TagChip from "@/components/TagChip";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <article className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/impact"
          className="text-[#5b96f5] font-medium hover:text-[#86aff7] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded mb-8 inline-block"
        >
          ← Back to Impact Overview
        </Link>

        <h1 className="font-display text-5xl md:text-6xl text-ink mb-4">
          {story.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {story.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>

        <aside
          className="rounded-lg p-4 border border-border mb-8"
          style={{ backgroundColor: "var(--card-bg)" }}
          aria-label="Context metrics"
        >
          <p className="font-mono text-sm text-ink">
            {story.sessions} sessions · {story.subject} · {story.duration}
          </p>
        </aside>

        <div className="prose prose-instrument max-w-none">
          {story.narrative.split("\n\n").map((para, i) => (
            <p key={i} className="text-muted mb-4">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-3xl text-ink mb-2">
            What this illustrates
          </h2>
          <p className="text-muted">{story.synthesis}</p>
        </div>

        <Link
          href="/impact"
          className="mt-8 text-blue-primary font-medium hover:text-blue-soft transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded inline-block"
        >
          ← Back to Impact Overview
        </Link>
      </div>
    </article>
  );
}
