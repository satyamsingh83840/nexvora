import Hero from "@/components/insights/hero";
import FeaturedPost from "@/components/insights/featured-post";
import Categories from "@/components/insights/categories";
import PostGrid from "@/components/insights/post-grid";
import Newsletter from "@/components/insights/newsletter";

export const metadata = {
  title: "Insights | NEXVORA LEGAL™",
  description:
    "Legal insights, articles and practical guidance from the professionals at NEXVORA LEGAL™.",
};

export default function InsightsPage() {
  return (
    <>
      <Hero />

      <FeaturedPost />

      <Categories />

      <PostGrid />

      <Newsletter />
    </>
  );
}
