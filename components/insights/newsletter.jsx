"use client";

import { useState } from "react";

import Container from "@/components/primitives/container";
import Button from "@/components/primitives/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[40px] border border-border bg-card p-10 text-center lg:p-20">
          <h2 className="font-serif text-4xl font-semibold lg:text-5xl">
            Stay Updated
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Subscribe to receive the latest legal insights, regulatory updates,
            and practical guidance directly in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 flex-1 rounded-full border border-border bg-background px-6 outline-none focus:border-primary"
            />

            <Button>Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
