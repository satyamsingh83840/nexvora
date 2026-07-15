import Hero from "@/components/industry/hero";
import IndustryGrid from "@/components/industry/industry-grid";

export const metadata = {
  title: "Industries | NEXVORA LEGAL™",
  description:
    "Discover how NEXVORA LEGAL™ delivers industry-specific legal solutions across technology, healthcare, manufacturing, financial services and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <Hero />

      <IndustryGrid />
    </>
  );
}
