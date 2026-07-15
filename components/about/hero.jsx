"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";
import PrimaryButton from "@/components/primitives/button";

import about from "@/data/about";

// Animation Variants for staggered loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent dark:from-amber-500/2" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[128px]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Content Column (Takes up 7 cols on large screens for an editorial feel) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            <motion.div variants={itemVariants}>
              <SectionBadge className="backdrop-blur-sm">
                {about.hero.badge}
              </SectionBadge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 whitespace-pre-line font-serif text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
            >
              {about.hero.title}
            </motion.h1>

            {/* Accent divider line for premium branding */}
            <motion.div
              variants={itemVariants}
              className="mt-6 h-[2px] w-20 bg-gradient-to-r from-primary to-transparent"
            />

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              {about.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <PrimaryButton
                href="/contact"
                className="shadow-lg shadow-primary/20"
              >
                Book Consultation
              </PrimaryButton>

              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-7 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-muted"
              >
                <span>Explore Practice Areas</span>
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column (Takes up 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            {/* Decorative background frame effect */}
            <div className="absolute -inset-4 rounded-[40px] border border-primary/10 bg-gradient-to-tr from-primary/5 to-transparent [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-border bg-card shadow-2xl">
              <Image
                src={about.hero.image}
                alt="NEXVORA LEGAL Office"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-1000 ease-out hover:scale-105"
              />

              {/* Gradient vignette for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Enhanced Floating Micro-Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-black/50"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400/90">
                    Established Legacy
                  </p>
                </div>

                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  Trusted Legal Partnership
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  Delivering strategic legal solutions with integrity,
                  professionalism, and commercial insight.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
