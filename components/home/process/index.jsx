import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import ProcessCard from "@/components/cards/process-card";

import process from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="bg-muted/20 py-32">
      <Container>
        <SectionHeading
          badge="Our Process"
          title="A Structured Approach to Legal Excellence"
          description="Every engagement follows a transparent and strategic process designed to deliver clarity, efficiency, and measurable legal outcomes."
        />

        <div className="mx-auto mt-24 max-w-4xl space-y-10">
          {process.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              last={index === process.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
