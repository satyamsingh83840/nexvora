// @/components/home/faq/index.jsx (or wherever this FAQ component lives)
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";
import faqs from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="py-28">
      <Container className="max-w-4xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our legal services."
        />

        {/* ❌ REMOVED: type="single" collapsible */}
        <Accordion className="mt-16">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
