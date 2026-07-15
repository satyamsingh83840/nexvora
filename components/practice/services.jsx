import { CheckCircle2 } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Services({ practice }) {
  if (!practice.services || practice.services.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="What's Included"
          description="Comprehensive legal services tailored to your specific requirements."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {practice.services.map((service) => (
            <div
              key={service}
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">{service}</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Professional legal assistance delivered with strategic
                  planning and practical business insight.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
