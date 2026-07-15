export default function Loading() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl animate-pulse px-6">
        <div className="h-10 w-56 rounded bg-muted" />

        <div className="mt-8 h-16 w-full max-w-xl rounded bg-muted" />

        <div className="mt-6 h-6 w-full max-w-3xl rounded bg-muted" />

        <div className="mt-20 h-[450px] rounded-3xl bg-muted" />
      </div>
    </section>
  );
}
