import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Overview({ industry }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading badge="Overview" title={industry.title} />

        <div className="mx-auto mt-10 max-w-4xl">
          <p className="text-lg leading-9 text-muted-foreground">
            {industry.overview}
          </p>
        </div>
      </Container>
    </section>
  );
}
