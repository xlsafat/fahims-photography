import Image from "next/image";
import { personality } from "@/lib/data";
import { unsplash, cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];
const LIFTS = ["", "sm:translate-y-6", "sm:-translate-y-3", "sm:translate-y-8", "sm:translate-y-1"];

export function Personality() {
  return (
    <section className="relative overflow-hidden bg-sand py-28 sm:py-36">
      <span
        aria-hidden
        className="font-serif-display pointer-events-none absolute -top-10 left-1/2 -z-0 -translate-x-1/2 text-[16rem] leading-none font-medium text-ivory/50 select-none sm:text-[22rem]"
      >
        joy
      </span>

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal y={12}>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
              <span className="h-px w-6 bg-terracotta" aria-hidden />
              {personality.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif-display text-4xl leading-[1.1] font-medium text-charcoal sm:text-5xl md:text-6xl">
              {personality.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-charcoal-soft/80 sm:text-lg">
              {personality.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-wrap items-start justify-center gap-x-6 gap-y-14 sm:gap-x-4">
          {personality.images.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.08}
              y={36}
              className={cn(
                "group w-[13rem] shrink-0 sm:w-[15rem]",
                LIFTS[i % LIFTS.length]
              )}
            >
              <div
                className={cn(
                  "rounded-sm bg-ivory p-3 pb-6 shadow-[0_18px_36px_-16px_rgba(38,34,29,0.35)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-0",
                  ROTATIONS[i % ROTATIONS.length]
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={unsplash(img.id, 500, 625)}
                    alt={img.alt}
                    fill
                    sizes="240px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif-display mt-3 text-center text-sm text-charcoal-soft italic">
                  {img.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
