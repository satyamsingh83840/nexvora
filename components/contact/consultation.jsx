import Button from "@/components/primitives/button";
import Container from "@/components/primitives/container";

export default function Consultation() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[40px] border border-border bg-card px-8 py-16 text-center lg:px-20">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Consultation
          </span>

          <h2 className="mt-6 font-serif text-4xl font-semibold lg:text-5xl">
            Need Immediate Legal Assistance?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Schedule a confidential consultation with our legal team and receive
            practical advice tailored to your legal matter.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Book Consultation</Button>

            <Button
              href="/practice-areas"
              className="bg-transparent border border-border text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
