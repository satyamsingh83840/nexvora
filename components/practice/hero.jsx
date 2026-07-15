import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-28">
      {/* Premium Architectural Background Grid & Light Effects */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(120,119,198,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Radial soft ambient glow tailored to match gold/blue palettes */}
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/5 via-amber-500/5 to-transparent blur-[80px]" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Section Badge with fine decorative horizontal lines on either side */}
          <div className="flex items-center justify-center gap-4">
            <div className="hidden h-[1px] w-12 bg-gradient-to-r from-transparent to-border sm:block" />
            <SectionBadge className="px-5 py-1.5 backdrop-blur-sm bg-muted/40 tracking-wider">
              {/* Optional: Add a small micro-dot inside your badge wrapper if needed */}
              {/* <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-primary" /> */}
              Practice Areas
            </SectionBadge>
            <div className="hidden h-[1px] w-12 bg-gradient-to-l from-transparent to-border sm:block" />
          </div>

          {/* Typography with asymmetric line height and gradient styling accent */}
          <h1 className="mt-8 font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Comprehensive <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Legal Services
            </span>
          </h1>

          {/* Structural separator dot */}
          <div className="mx-auto mt-6 h-1 w-1 rounded-full bg-primary/40" />

          {/* Subtext description with refined editorial leading & text size scale */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-loose">
            We provide strategic legal solutions across corporate, commercial,
            litigation, regulatory, dispute resolution and advisory matters for
            businesses and individuals.
          </p>
        </div>
      </Container>

      {/* Elegant, clean section baseline rule */}
      <div className="absolute bottom-0 left-1/2 h-[1px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
