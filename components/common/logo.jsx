import Link from "next/link";

import company from "@/data/company";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col"
      aria-label={company.name}
    >
      <span className="font-serif text-2xl font-semibold tracking-wide text-primary transition-colors duration-300 group-hover:text-accent">
        NEXVORA
      </span>

      <span className="-mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        LEGAL™
      </span>
    </Link>
  );
}
