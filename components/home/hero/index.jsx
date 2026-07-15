"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";

import HeroStats from "./hero-stats";
import HeroScroll from "./hero-scroll";
import GridBackground from "@/components/ui/grid-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <GridBackground />
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(35,75,122,0.08),transparent_35%)]" />

      <Container className="flex min-h-[calc(100svh-80px)] items-center py-24">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <SectionBadge>Premium Legal Advisory</SectionBadge>
            </motion.div>

            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-8 font-serif text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Precision.
              <br />
              Integrity.
              <br />
              Results.
            </motion.h1>

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              NEXVORA LEGAL™ provides modern legal solutions for businesses,
              corporations, institutions, startups, entrepreneurs, and
              individuals across India.
            </motion.p>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all hover:bg-accent hover:text-black"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center rounded-full border border-border px-7 py-4 font-semibold transition hover:border-primary hover:bg-card"
              >
                Explore Practice Areas
              </Link>
            </motion.div>

            <HeroStats />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-border bg-card shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="NEXVORA LEGAL Office"
                width={900}
                height={1200}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl dark:bg-black/20">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                  Excellence
                </p>

                <p className="mt-2 font-serif text-2xl">
                  Trusted Legal
                  <br />
                  Advisory
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <HeroScroll />
      </Container>
    </section>
  );
}
