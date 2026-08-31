import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal y={12}>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
            <span aria-hidden className="h-px w-6 bg-terracotta" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-serif-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl md:text-6xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft/80 sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
