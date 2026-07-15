import Container from "@/components/primitives/container";

export default function ArticleContent({ post }) {
  return (
    <section className="pb-24">
      <Container>
        <div className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
          <p className="text-lg leading-9 text-muted-foreground whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </Container>
    </section>
  );
}
