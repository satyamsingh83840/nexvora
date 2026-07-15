import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as: Component = "section",
}) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
