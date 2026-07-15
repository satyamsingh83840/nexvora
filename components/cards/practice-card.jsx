"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Scale,
  Shield,
  Copyright,
  Users,
  Handshake,
} from "lucide-react";
import { practiceIcons } from "@/lib/icons";

export default function PracticeCard({ practice }) {
  const Icon = practiceIcons[practice.icon];
  return (
    <Link
      href={`/practice-areas/${practice.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mt-8 font-serif text-2xl font-semibold">
          {practice.title}
        </h3>

        <p className="mt-4 leading-7 text-muted-foreground">
          {practice.description}
        </p>

        <div className="mt-8 flex items-center gap-2 font-medium text-primary">
          Learn More
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
