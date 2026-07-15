import { notFound } from "next/navigation";

import industries from "@/data/industries";

import DetailHero from "@/components/industry/detail-hero";
import Overview from "@/components/industry/overview";
import Challenges from "@/components/industry/challenges";
import Solutions from "@/components/industry/solutions";
import RelatedPractices from "@/components/industry/related-practices";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} | NEXVORA LEGAL™`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <DetailHero industry={industry} />

      <Overview industry={industry} />

      <Challenges industry={industry} />

      <Solutions industry={industry} />

      <RelatedPractices industry={industry} />
    </>
  );
}
