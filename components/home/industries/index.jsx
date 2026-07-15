import Image from "next/image";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import IndustryCard from "@/components/cards/industry-card";

import industries from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <div>
            <SectionHeading
              align="left"
              badge="Industries"
              title="Industry-Focused Legal Expertise"
              description="We understand every industry has unique legal challenges. Our advice is practical, commercially focused, and tailored to sector-specific requirements."
            />

            <div className="mt-10 overflow-hidden rounded-[32px] border border-border">
              <Image
                src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Industries"
                width={700}
                height={900}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
