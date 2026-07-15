import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({ article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">
          {article.category}
        </span>

        <h3 className="mt-4 font-serif text-2xl font-semibold transition group-hover:text-primary">
          {article.title}
        </h3>

        <p className="mt-4 leading-7 text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {article.date} • {article.readTime}
          </span>

          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
