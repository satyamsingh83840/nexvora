"use client";

const categories = [
  "All",
  "Corporate Law",
  "Intellectual Property",
  "Employment",
  "Arbitration",
];

export default function Categories() {
  return (
    <section className="pb-16">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              category === "All"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary hover:bg-primary/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
