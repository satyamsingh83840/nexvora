import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Map() {
  return (
    <section className="pb-24">
      <Container>
        <SectionHeading
          badge="Visit Our Office"
          title="Find Us"
          description="Meet our legal professionals at our office or schedule a consultation."
        />

        <div className="mt-16 overflow-hidden rounded-[32px] border border-border">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </Container>
    </section>
  );
}
