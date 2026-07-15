import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/primitives/container";
import insights from "@/data/insights";

export default function FeaturedPost() {
  const featured = insights.find((post) => post.featured);

  if (!featured) return null;

  return (
    <section className="pb-24">
      <Container>
        <Link
          href={`/insights/${featured.slug}`}
          className="group grid overflow-hidden rounded-[32px] border border-border bg-card lg:grid-cols-2"
        >
          <div className="relative min-h-[350px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-10 lg:p-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Article
            </span>

            <h2 className="mt-6 font-serif text-4xl font-semibold">
              {featured.title}
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              {featured.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span>{featured.category}</span>

              <span>{featured.date}</span>

              <span>{featured.readTime}</span>
            </div>

            <div className="mt-10 inline-flex items-center font-semibold text-primary">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
