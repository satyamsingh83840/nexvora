import { notFound } from "next/navigation";

import insights from "@/data/insights";

import ArticleHero from "@/components/insights/article-hero";
import ArticleContent from "@/components/insights/article-content";
import AuthorCard from "@/components/insights/author-card";
import RelatedPosts from "@/components/insights/related-posts";
import Newsletter from "@/components/insights/newsletter";

export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;

  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleHero post={post} />

      <ArticleContent post={post} />

      <AuthorCard post={post} />

      <RelatedPosts post={post} />

      <Newsletter />
    </>
  );
}
