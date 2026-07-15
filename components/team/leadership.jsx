import team from "@/data/team";

import MemberCard from "@/components/cards/member-card";
import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Leadership() {
  const leaders = team.filter(
    (member) =>
      member.designation === "Managing Partner" ||
      member.designation === "Partner",
  );

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Leadership"
          title="Leading the Firm"
          description="Experienced legal professionals guiding every engagement with strategic thinking and exceptional client service."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {leaders.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
