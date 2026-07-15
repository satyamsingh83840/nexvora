import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import practiceAreas from "@/data/practiceAreas";

export default function RelatedPractices({ practice }) {
  const related = practiceAreas.filter((item) =>
    practice.related?.includes(item.slug),
  );

  if (!related.length) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading badge="Related Services" title="You May Also Need" />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/practice-areas/${item.slug}`}
              className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
            >
              <h3 className="font-serif text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-8 flex items-center text-primary font-semibold">
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
