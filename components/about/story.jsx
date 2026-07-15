"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import about from "@/data/about";

export default function Story() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src={about.story.image}
              alt="Office"
              width={800}
              height={900}
              className="rounded-[32px] border border-border object-cover"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              align="left"
              badge="Our Story"
              title={about.story.title}
            />

            <div className="mt-8 space-y-6">
              {about.story.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
