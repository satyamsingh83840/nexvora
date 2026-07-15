import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="NEXVORA LEGAL" className="group flex flex-col">
      <span className="font-serif text-2xl font-semibold tracking-wide text-primary transition-colors duration-300 group-hover:text-accent">
        NEXVORA
      </span>

      <span className="-mt-1 text-[10px] font-medium uppercase tracking-[0.45em] text-muted-foreground">
        LEGAL™
      </span>
    </Link>
  );
}
