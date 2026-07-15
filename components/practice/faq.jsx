"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function FAQ({ practice }) {
  if (!practice.faqs || practice.faqs.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions"
          description="Answers to some of the most frequently asked questions about this practice area."
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {practice.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="leading-8 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
