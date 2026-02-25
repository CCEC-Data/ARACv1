import { cn } from "@/lib/utils";

interface QuotePullProps {
  quote: string;
  className?: string;
}

export default function QuotePull({ quote, className = "" }: QuotePullProps) {
  return (
    <blockquote
      className={cn(
        "pl-6 py-4 border-l-4 my-6 font-display italic text-lg text-ink",
        "border-yellow-accent",
        className
      )}
      style={{ backgroundColor: "var(--yellow-accent)" }}
    >
      {quote}
    </blockquote>
  );
}
