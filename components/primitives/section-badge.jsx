import { cn } from "@/lib/utils";

export default function SectionBadge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
