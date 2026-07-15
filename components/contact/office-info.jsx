import { MapPin, Phone, Mail, Clock } from "lucide-react";

import contact from "@/data/contact";

import OfficeCard from "./office-card";

export default function OfficeInfo() {
  const { office } = contact;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl font-semibold">
          Office Information
        </h2>

        <p className="mt-3 text-muted-foreground">
          We'd love to hear from you.
        </p>
      </div>

      <OfficeCard icon={MapPin} title="Address">
        {office.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </OfficeCard>

      <OfficeCard icon={Phone} title="Phone">
        <p>{office.phone}</p>
      </OfficeCard>

      <OfficeCard icon={Mail} title="Email">
        <p>{office.email}</p>
      </OfficeCard>

      <OfficeCard icon={Clock} title="Working Hours">
        {office.workingHours.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </OfficeCard>
    </div>
  );
}
