import team from "@/data/team";
import MemberCard from "@/components/cards/member-card";
import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function TeamGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Our Professionals"
          title="Experienced Legal Experts"
          description="A multidisciplinary team dedicated to delivering exceptional legal services."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
