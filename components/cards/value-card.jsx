"use client";

import { ArrowUpRight } from "lucide-react";

export default function ValueCard({ value }) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
      <div className="flex items-start justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          0{value.id}
        </span>

        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
      </div>

      <h3 className="mt-10 font-serif text-2xl font-semibold">{value.title}</h3>

      <p className="mt-5 leading-8 text-muted-foreground">
        {value.description}
      </p>
    </div>
  );
}
