import careers from "@/data/careers";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import PositionCard from "./position-card";

export default function Openings() {
  if (!careers.openings?.length) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Current Opportunities"
          title="Open Positions"
          description="Join our growing team of legal professionals."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {careers.openings.map((job) => (
            <PositionCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}
