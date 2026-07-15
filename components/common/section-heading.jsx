export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
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
