import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import ValueCard from "@/components/cards/value-card";

import whyNexvora from "@/data/why-nexvora";

export default function WhySection() {
  return (
    <section className="bg-muted/30 py-28">
      <Container>
        <SectionHeading
          badge="Why NEXVORA"
          title="Legal Excellence Built on Trust, Strategy & Integrity"
          description="We believe effective legal counsel goes beyond solving disputes. It means protecting opportunities, enabling growth, and building lasting relationships."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {whyNexvora.map((item) => (
            <ValueCard key={item.id} value={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
