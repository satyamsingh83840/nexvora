import Link from "next/link";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import PracticeCard from "@/components/cards/practice-card";

import practiceAreas from "@/data/practiceAreas";

export default function PracticeSection() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          badge="Practice Areas"
          title="Comprehensive Legal Services"
          description="We provide strategic legal solutions across a wide spectrum of practice areas for businesses, institutions and individuals."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center rounded-full border border-border px-8 py-4 font-semibold transition hover:border-primary hover:bg-primary hover:text-white"
          >
            View All Practice Areas
          </Link>
        </div>
      </Container>
    </section>
  );
}
