import Link from "next/link";

import Button from "@/components/primitives/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          404
        </span>

        <h1 className="mt-6 font-serif text-5xl font-semibold">
          Practice Area Not Found
        </h1>

        <p className="mt-6 leading-8 text-muted-foreground">
          The legal service you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button href="/practice-areas">All Practice Areas</Button>

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border px-7 py-3 font-semibold transition hover:border-primary"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
