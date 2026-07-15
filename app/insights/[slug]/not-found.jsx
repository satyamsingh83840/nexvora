import Link from "next/link";

import Button from "@/components/primitives/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-5xl font-semibold">Article Not Found</h1>

        <p className="mt-6 text-muted-foreground">
          The article you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button href="/insights">Back to Insights</Button>

          <Link
            href="/"
            className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-primary"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
