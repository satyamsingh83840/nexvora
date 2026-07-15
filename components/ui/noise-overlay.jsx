export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.02]
        mix-blend-soft-light
        bg-[url('/images/noise.png')]
      "
    />
  );
}
