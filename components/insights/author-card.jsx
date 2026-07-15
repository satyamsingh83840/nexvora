import Container from "@/components/primitives/container";

export default function AuthorCard({ post }) {
  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-card p-10">
          <p className="text-sm uppercase tracking-widest text-primary">
            Author
          </p>

          <h3 className="mt-4 font-serif text-3xl font-semibold">
            {post.author}
          </h3>

          <p className="mt-4 leading-8 text-muted-foreground">
            Legal professionals at NEXVORA LEGAL™ regularly publish practical
            insights and guidance to help businesses and individuals navigate
            complex legal matters with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
