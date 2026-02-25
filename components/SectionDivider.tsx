interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div
      className={`w-full py-8 border-t-2 ${className}`}
      style={{ borderTopColor: "rgba(134, 175, 247, 0.5)" }}
      aria-hidden="true"
    />
  );
}
