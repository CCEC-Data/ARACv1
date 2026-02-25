"use client";

interface StatCardProps {
  value: number | string;
  label: string;
  suffix?: string;
  context?: string;
  delta?: string;
  className?: string;
}

function formatDisplay(value: number | string, suffix: string): string {
  if (typeof value === "string") return value;
  return value.toLocaleString() + suffix;
}

export default function StatCard({
  value,
  label,
  suffix = "",
  context,
  delta,
  className = "",
}: StatCardProps) {
  const display = formatDisplay(value, suffix);

  return (
    <div
      className={`pt-4 border-t-2 border-blue-primary min-w-0 overflow-hidden ${className}`}
      style={{ borderTopColor: "var(--blue-primary)" }}
    >
      <div className="flex flex-col gap-1">
        <span className="stat-number text-ink tabular-nums">
          {display}
        </span>
        {delta && <span className="text-sm text-muted">{delta}</span>}
        <span className="text-sm text-muted font-body uppercase tracking-wide break-words">
          {label}
        </span>
        {context && (
          <span className="text-sm text-muted font-body mt-1 break-words">{context}</span>
        )}
      </div>
    </div>
  );
}
