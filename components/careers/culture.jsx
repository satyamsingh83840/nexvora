import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

const culture = [
  {
    title: "Mentorship",
    description:
      "Learn directly from experienced advocates and legal professionals.",
  },
  {
    title: "Growth",
    description:
      "Work on challenging matters that accelerate your professional development.",
  },
  {
    title: "Collaboration",
    description:
      "Success comes from teamwork, knowledge sharing and mutual respect.",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern legal technology and forward-thinking solutions.",
  },
];

export default function Culture() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading
          badge="Life at NEXVORA"
          title="A Culture Built Around Excellence"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {culture.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-border bg-card p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
