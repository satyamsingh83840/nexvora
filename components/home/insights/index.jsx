import Link from "next/link";
import Image from "next/image";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import ArticleCard from "@/components/cards/article-card";

import insights from "@/data/insights";

export default function InsightsSection() {
  const featured = insights.find((a) => a.featured);
  const others = insights.filter((a) => !a.featured);

  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          badge="Insights"
          title="Perspectives & Legal Intelligence"
          description="Articles, legal updates, and practical insights from our team."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Featured */}

          <Link
            href={`/insights/${featured.slug}`}
            className="group overflow-hidden rounded-[32px] border border-border bg-card"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-10">
              <span className="text-sm uppercase tracking-[0.3em] text-accent">
                {featured.category}
              </span>

              <h2 className="mt-5 font-serif text-4xl font-semibold">
                {featured.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {featured.excerpt}
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                {featured.date} • {featured.readTime}
              </p>
            </div>
          </Link>

          {/* Sidebar */}

          <div className="space-y-8">
            {others.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/insights"
            className="inline-flex rounded-full border border-border px-8 py-4 font-semibold transition hover:bg-primary hover:text-white"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
