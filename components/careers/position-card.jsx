import { MapPin, BriefcaseBusiness, Clock3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PositionCard({ job }) {
  return (
    <div className="group rounded-[28px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {job.department}
        </span>

        <span className="rounded-full border border-border px-3 py-1 text-xs">
          {job.type}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-3xl font-semibold">{job.title}</h3>

      <p className="mt-4 leading-7 text-muted-foreground">{job.description}</p>

      <div className="mt-8 space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {job.experience}
        </div>

        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4" />
          {job.type}
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center font-semibold text-primary"
      >
        Apply Now
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
