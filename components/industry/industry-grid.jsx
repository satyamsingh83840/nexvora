import Container from "@/components/primitives/container";

import industries from "@/data/industries";
import IndustryCard from "@/components/cards/industry-card";

export default function IndustryGrid() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
