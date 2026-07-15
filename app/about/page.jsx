import Hero from "@/components/about/hero";
import Story from "@/components/about/story";
import Values from "@/components/about/values";
import MissionVision from "@/components/about/mission-vision";
import Stats from "@/components/about/stats";
import Commitment from "@/components/about/commitment";

export const metadata = {
  title: "About | NEXVORA LEGAL™",
  description:
    "Learn more about NEXVORA LEGAL™, our values, mission, vision and commitment to delivering strategic legal solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />

      <Story />

      <Values />

      <MissionVision />

      <Stats />

      <Commitment />
    </>
  );
}
