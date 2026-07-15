import Hero from "@/components/practice/hero";
import PracticeGrid from "@/components/practice/practice-grid";

export const metadata = {
  title: "Practice Areas | NEXVORA LEGAL™",
  description:
    "Explore our comprehensive legal services across corporate, litigation, arbitration, employment, intellectual property and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Hero />

      <PracticeGrid />
    </>
  );
}
