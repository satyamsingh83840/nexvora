import Hero from "@/components/contact/hero";
import ContactForm from "@/components/contact/contact-form";
import Map from "@/components/contact/map";

import Consultation from "@/components/contact/consultation";

export const metadata = {
  title: "Contact | NEXVORA LEGAL™",
  description:
    "Contact NEXVORA LEGAL™ for legal consultations, representation, and expert legal advice.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />

      <ContactForm />

      <Map />

      <Consultation />
    </>
  );
}
