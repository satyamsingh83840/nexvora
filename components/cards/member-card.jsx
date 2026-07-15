import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
export default function MemberCard({ member }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold">{member.name}</h3>

        <p className="mt-2 text-primary font-medium">{member.designation}</p>

        <p className="mt-4 text-sm text-muted-foreground">
          {member.experience}
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          {member.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a href={`mailto:${member.email}`}>
            <Mail className="h-5 w-5 transition hover:text-primary" />
          </a>

          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-5 w-5 transition hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
