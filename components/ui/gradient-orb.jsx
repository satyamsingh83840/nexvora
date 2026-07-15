export default function GradientOrb({ className = "" }) {
  return (
    <div
      className={`
        absolute
        rounded-full
        bg-primary/15
        blur-[120px]
        ${className}
      `}
    />
  );
}
