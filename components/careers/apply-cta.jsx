import Button from "@/components/primitives/button";
import Container from "@/components/primitives/container";

import careers from "@/data/careers";

export default function ApplyCTA() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[40px] border border-border bg-card p-12 text-center lg:p-20">
          <h2 className="font-serif text-4xl font-semibold lg:text-5xl">
            {careers.cta?.title || "Didn't Find the Right Role?"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {careers.cta?.description ||
              "We're always looking for talented legal professionals. Send us your profile and we'll keep in touch."}
          </p>

          <div className="mt-10 flex justify-center">
            <Button href={careers.cta?.href || "/contact"}>
              {careers.cta?.button || "Apply Now"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
