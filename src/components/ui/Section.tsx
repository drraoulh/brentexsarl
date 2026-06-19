import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "cream" | "navy" | "sky";
}

const backgrounds = {
  white: "bg-white",
  cream: "bg-cream",
  navy: "bg-primary text-white",
  sky: "bg-sky",
};

export function Section({
  children,
  className,
  id,
  background = "cream",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", backgrounds[background], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-display font-bold",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-sky" : "text-slate"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 bg-accent rounded",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
