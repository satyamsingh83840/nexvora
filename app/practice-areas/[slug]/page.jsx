import { notFound } from "next/navigation";

import practiceAreas from "@/data/practiceAreas";

import DetailHero from "@/components/practice/detail-hero";
import Overview from "@/components/practice/overview";
import Services from "@/components/practice/services";
import Benefits from "@/components/practice/benefits";
import FAQ from "@/components/practice/faq";
import RelatedPractices from "@/components/practice/related-practices";

export async function generateStaticParams() {
  return practiceAreas.map((practice) => ({
    slug: practice.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const practice = practiceAreas.find((item) => item.slug === slug);

  if (!practice) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: `${practice.title} | NEXVORA LEGAL™`,
    description: practice.description,
  };
}

export default async function PracticeDetailPage({ params }) {
  const { slug } = await params;

  const practice = practiceAreas.find((item) => item.slug === slug);

  if (!practice) {
    notFound();
  }

  return (
    <>
      <DetailHero practice={practice} />

      <Overview practice={practice} />

      <Services practice={practice} />

      <Benefits practice={practice} />

      <FAQ practice={practice} />

      <RelatedPractices practice={practice} />
    </>
  );
}
