import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust";
import PracticeSection from "@/components/home/practice";
import WhySection from "@/components/home/why";
import IndustriesSection from "@/components/home/industries";
import ProcessSection from "@/components/home/process";
import InsightsSection from "@/components/home/insights";
import FAQSection from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustSection />

      <PracticeSection />

      <WhySection />

      <IndustriesSection />

      <ProcessSection />

      <InsightsSection />

      <FAQSection />
    </>
  );
}
