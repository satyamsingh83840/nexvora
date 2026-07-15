export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="
        absolute
        inset-0
        -z-10
        opacity-[0.04]
        [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
        [background-size:64px_64px]
      "
    />
  );
}
