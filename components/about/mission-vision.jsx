"use client";

import { motion } from "framer-motion";

import Container from "@/components/primitives/container";

export default function MissionVision() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-border bg-card p-10"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Mission
            </span>

            <h2 className="mt-6 font-serif text-4xl font-semibold">
              Delivering Strategic Legal Excellence
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              To provide comprehensive, dependable and commercially sound legal
              solutions while maintaining the highest standards of integrity,
              professionalism and client service.
            </p>

            <ul className="mt-8 space-y-4 text-muted-foreground">
              <li>• Practical legal solutions</li>
              <li>• Ethical professional practice</li>
              <li>• Transparent communication</li>
              <li>• Long-term client relationships</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-border bg-card p-10"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Vision
            </span>

            <h2 className="mt-6 font-serif text-4xl font-semibold">
              A Trusted Modern Law Firm
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              To become one of India's most respected modern law firms,
              recognised for legal excellence, innovation, integrity, and
              long-term strategic partnerships with our clients.
            </p>

            <ul className="mt-8 space-y-4 text-muted-foreground">
              <li>• Excellence in legal practice</li>
              <li>• Innovation through technology</li>
              <li>• Sustainable client partnerships</li>
              <li>• National and international growth</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
