import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

import Container from "@/components/primitives/container";

const companyLinks = [
  { title: "About", href: "/about" },
  { title: "Team", href: "#" },
  { title: "Careers", href: "/careers" },
  { title: "Insights", href: "/insights" },
  { title: "Contact", href: "/contact" },
];

const practiceLinks = [
  {
    title: "Corporate Law",
    href: "/practice-areas/corporate-commercial-law",
  },
  {
    title: "Civil Litigation",
    href: "/practice-areas/civil-litigation",
  },
  {
    title: "Criminal Litigation",
    href: "/practice-areas/criminal-litigation",
  },
  {
    title: "Arbitration",
    href: "/practice-areas/arbitration",
  },
  {
    title: "Employment Law",
    href: "/practice-areas/employment-law",
  },
];

const legalLinks = [
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Disclaimer",
    href: "/disclaimer",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(35,75,122,.06),transparent_30%)]" />

      <Container className="relative py-24">
        {/* CTA */}
        <div className="mb-24 rounded-[40px] border border-border bg-card p-10 lg:p-14">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Ready to Get Started?
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight lg:text-5xl">
                Let's Build Confidence Into Every Legal Decision.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Strategic legal advice tailored to businesses, startups,
                institutions and individuals.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                NEXVORA<span className="text-primary">LEGAL</span>
              </span>
            </Link>

            <p className="mt-8 max-w-md leading-8 text-muted-foreground">
              NEXVORA LEGAL™ is a modern, full-service law firm delivering
              strategic, ethical and client-focused legal solutions for
              businesses, institutions and individuals.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>New Delhi, India</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 97735 22065</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>nexvoralegal@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold">Practice Areas</h3>

            <ul className="mt-6 space-y-4">
              {practiceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold">Legal</h3>

            <ul className="mt-6 space-y-4">
              {legalLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons using bulletproof native SVGs */}
            <div className="mt-10 flex gap-4">
              {/* LinkedIn */}
              <Link
                href="#"
                className="rounded-full border border-border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link
                href="#"
                className="rounded-full border border-border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="rounded-full border border-border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} NEXVORA LEGAL™. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>

            <Link href="/disclaimer" className="hover:text-primary">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
