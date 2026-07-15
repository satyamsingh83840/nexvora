import Container from "@/components/primitives/container";

import PracticeCard from "@/components/cards/practice-card";

import practiceAreas from "@/data/practiceAreas";

export default function PracticeGrid() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>
      </Container>
    </section>
  );
}
