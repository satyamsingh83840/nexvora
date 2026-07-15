import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Overview({ practice }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading badge="Overview" title={practice.title} />

        <div className="mx-auto mt-10 max-w-4xl">
          <p className="text-lg leading-9 text-muted-foreground">
            {practice.overview}
          </p>
        </div>
      </Container>
    </section>
  );
}
