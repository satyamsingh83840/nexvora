import Image from "next/image";

import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";
import Button from "@/components/primitives/button";

export default function DetailHero({ industry }) {
  return (
    <section className="py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionBadge>Industry</SectionBadge>

            <h1 className="mt-6 font-serif text-5xl font-semibold lg:text-7xl">
              {industry.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {industry.description}
            </p>

            <div className="mt-10">
              <Button href="/contact">Book Consultation</Button>
            </div>
          </div>

          <Image
            src={industry.heroImage}
            alt={industry.title}
            width={900}
            height={700}
            className="rounded-[32px] border border-border object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
