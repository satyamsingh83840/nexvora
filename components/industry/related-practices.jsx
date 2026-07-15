import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import practiceAreas from "@/data/practiceAreas";

export default function RelatedPractices({ industry }) {
  const related = practiceAreas.filter((practice) =>
    industry.related?.includes(practice.slug),
  );

  if (!related.length) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Related Practice Areas"
          title="Legal Services for This Industry"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((practice) => (
            <Link
              key={practice.id}
              href={`/practice-areas/${practice.slug}`}
              className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
            >
              <h3 className="font-serif text-2xl font-semibold">
                {practice.title}
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                {practice.description}
              </p>

              <div className="mt-8 flex items-center font-semibold text-primary">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
