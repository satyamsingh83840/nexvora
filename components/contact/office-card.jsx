export default function OfficeCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>

          <div className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
