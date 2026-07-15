import Hero from "@/components/careers/hero";
import WhyJoin from "@/components/careers/why-join";
import Culture from "@/components/careers/culture";
import Openings from "@/components/careers/openings";
import Benefits from "@/components/careers/benefits";
import HiringProcess from "@/components/careers/hiring-process";
import ApplyCTA from "@/components/careers/apply-cta";

export const metadata = {
  title: "Careers | NEXVORA LEGAL™",
  description:
    "Explore career opportunities and build your legal career with NEXVORA LEGAL™.",
};

export default function CareersPage() {
  return (
    <>
      <Hero />
      <WhyJoin />
      <Culture />
      <Openings />
      <Benefits />
      <HiringProcess />
      <ApplyCTA />
    </>
  );
}
