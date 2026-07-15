"use client";

import { CheckCircle2 } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

const commitments = [
  "Full-service legal solutions across diverse practice areas.",
  "Business-focused legal strategies tailored to client objectives.",
  "Research-driven legal advice supported by statutory and judicial analysis.",
  "Ethical, transparent and confidential professional practice.",
  "Excellence in litigation, advisory and dispute resolution.",
  "Long-term partnerships built on trust, reliability and accountability.",
];

export default function Commitment() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          badge="Our Commitment"
          title="Committed to Delivering Lasting Legal Value"
          description="Every engagement reflects our dedication to integrity, strategic thinking and client success."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {commitments.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <p className="leading-7 text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
