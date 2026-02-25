import { cn } from "@/lib/utils";

interface TagChipProps {
  label: string;
  className?: string;
}

export default function TagChip({ label, className = "" }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full",
        "bg-yellow-accent/80 text-ink border border-border/50",
        className
      )}
    >
      {label}
    </span>
  );
}
