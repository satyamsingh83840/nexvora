import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { industryIcons } from "@/lib/icons";

export default function IndustryCard({ industry }) {
  const Icon = industryIcons[industry.icon];

  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group rounded-[32px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
      </div>

      <h3 className="mt-8 font-serif text-2xl font-semibold">
        {industry.title}
      </h3>

      <p className="mt-5 leading-8 text-muted-foreground">
        {industry.description}
      </p>

      <div className="mt-8 inline-flex items-center font-semibold text-primary">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
