import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Reveal y={12}>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
              <span className="h-px w-6 bg-terracotta" aria-hidden />
              Kind Words
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif-display text-4xl leading-[1.1] font-medium text-charcoal sm:text-5xl md:text-6xl">
              From the people I&rsquo;ve worked with
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08} y={24}>
              <figure
                className={
                  "relative h-full border-l-2 border-terracotta/30 pl-8 " +
                  (i % 2 === 1 ? "md:border-l-0 md:border-r-2 md:pr-8 md:pl-0 md:text-right" : "")
                }
              >
                <span className="font-serif-display block text-6xl leading-none text-peach" aria-hidden>
                  &ldquo;
                </span>
                <blockquote>
                  <p className="font-serif-display -mt-4 text-2xl leading-[1.4] font-normal text-charcoal sm:text-[1.75rem]">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm text-charcoal-soft/70">
                  <span className="font-semibold text-charcoal">{t.name}</span>
                  <span className="mx-2 text-warmgray">&middot;</span>
                  {t.context}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
