import Image from "next/image";

import Container from "@/components/primitives/container";

export default function ArticleHero({ post }) {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {post.category}
          </span>

          <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight lg:text-7xl">
            {post.title}
          </h1>

          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <span>{post.date}</span>

            <span>{post.readTime}</span>

            <span>{post.author}</span>
          </div>
        </div>

        <div className="relative mt-16 aspect-[16/8] overflow-hidden rounded-[40px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
