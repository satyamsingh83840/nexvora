import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import insights from "@/data/insights";
import PostCard from "@/components/cards/post-card";

export default function PostGrid() {
  const posts = insights.filter((post) => !post.featured);

  return (
    <section className="pb-24">
      <Container>
        <SectionHeading
          badge="Latest Articles"
          title="Explore Our Legal Insights"
          description="Stay informed with expert commentary, practical legal guidance, and the latest developments across key practice areas."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
