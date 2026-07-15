"use client";

import { useState } from "react";

import Container from "@/components/primitives/container";
import Button from "@/components/primitives/button";

import contact from "@/data/contact";
import OfficeInfo from "./office-info";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    subject: "",
    message: "",
  });

  // State to manage form submission status and messages
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "info", message: "Sending your message..." });

    // Construct the payload for Web3Forms
    const formData = {
      // TODO: Replace with your actual Web3Forms Access Key
      access_key: "6568ab54-1559-4fe5-8ec6-0e90d68e2afc",
      subject: form.subject || `New Contact Form Submission from ${form.name}`,
      ...form,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! We'll get back to you shortly.",
        });
        // Reset form fields
        setForm({
          name: "",
          email: "",
          phone: "",
          practiceArea: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}

          <div className="rounded-[32px] border border-border bg-card p-8 lg:p-10">
            <h2 className="font-serif text-3xl font-semibold">
              Send Us a Message
            </h2>

            <p className="mt-3 text-muted-foreground">
              Complete the form below and our team will contact you.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="h-14 w-full rounded-xl border border-border bg-background px-5 outline-none focus:border-primary"
              />

              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="h-14 w-full rounded-xl border border-border bg-background px-5 outline-none focus:border-primary"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="h-14 w-full rounded-xl border border-border bg-background px-5 outline-none focus:border-primary"
              />

              <select
                name="practiceArea"
                value={form.practiceArea}
                onChange={handleChange}
                className="h-14 w-full rounded-xl border border-border bg-background px-5 outline-none focus:border-primary"
              >
                <option value="">Select Practice Area</option>

                {contact.practiceAreas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="h-14 w-full rounded-xl border border-border bg-background px-5 outline-none focus:border-primary"
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your legal matter..."
                className="w-full rounded-xl border border-border bg-background p-5 outline-none focus:border-primary"
              />

              {/* Status Message Display */}
              {status.message && (
                <div
                  className={`text-sm font-medium ${
                    status.type === "success"
                      ? "text-green-600"
                      : status.type === "error"
                        ? "text-red-600"
                        : "text-amber-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Office */}

          <OfficeInfo />
        </div>
      </Container>
    </section>
  );
}
