import Link from "next/link";

import Container from "@/components/primitives/container";
import Button from "@/components/primitives/button";

export default function JoinTeam() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[40px] border border-border bg-card p-12 text-center lg:p-20">
          <h2 className="font-serif text-4xl font-semibold lg:text-5xl">
            Interested in Joining NEXVORA?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            We are always looking for talented legal professionals who are
            passionate about delivering exceptional client service.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button href="/careers">View Careers</Button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-semibold transition hover:border-primary hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
