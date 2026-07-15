import { ShieldCheck } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Benefits({ practice }) {
  if (!practice.benefits || practice.benefits.length === 0) {
    return null;
  }

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Why Choose NEXVORA"
          title="Our Advantages"
          description="We combine legal expertise with practical business insight to deliver strategic and effective legal solutions."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {practice.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">{benefit}</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Our team delivers practical legal strategies focused on
                  protecting your interests and achieving your objectives.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
