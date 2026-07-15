import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";

import careers from "@/data/careers";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge>Careers</SectionBadge>

          <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            {careers.title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            {careers.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
