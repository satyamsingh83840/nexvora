import Link from "next/link";
import { ArrowRight } from "lucide-react";

import insights from "@/data/insights";
import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function RelatedPosts({ post }) {
  const related =
    insights.filter((item) => post.related?.includes(item.slug)) || [];

  if (!related.length) return null;

  return (
    <section className="pb-24">
      <Container>
        <SectionHeading badge="Related Articles" title="Continue Reading" />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/insights/${item.slug}`}
              className="group rounded-[28px] border border-border bg-card p-8 transition hover:-translate-y-2 hover:border-primary/40"
            >
              <h3 className="font-serif text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                {item.excerpt}
              </p>

              <div className="mt-8 inline-flex items-center font-semibold text-primary">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
