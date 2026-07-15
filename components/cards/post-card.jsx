import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
      <Link href={`/insights/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-primary">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-semibold transition group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{post.date}</span>

            <span className="inline-flex items-center font-semibold text-primary">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
