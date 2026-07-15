import { cn } from "@/lib/utils";
import SectionBadge from "./section-badge";

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {badge && <SectionBadge className="mb-5">{badge}</SectionBadge>}

      <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
