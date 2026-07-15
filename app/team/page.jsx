import Hero from "@/components/team/hero";
import Leadership from "@/components/team/leadership";
import TeamGrid from "@/components/team/team-grid";
import Values from "@/components/team/values";
import JoinTeam from "@/components/team/join-team";

export const metadata = {
  title: "Our Team | NEXVORA LEGAL™",
  description:
    "Meet the experienced advocates and legal professionals behind NEXVORA LEGAL™.",
};

export default function TeamPage() {
  return (
    <>
      <Hero />

      <Leadership />

      <TeamGrid />

      <Values />

      <JoinTeam />
    </>
  );
}
