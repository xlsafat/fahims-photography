import Image from "next/image";
import { about } from "@/lib/data";
import { unsplash } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <Reveal y={24} className="relative mx-auto max-w-md lg:max-w-none">
            <div className="scroll-drive relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src={unsplash(about.portrait.id, 1000, 1300)}
                alt={about.portrait.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 85vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-8 -bottom-10 hidden aspect-[4/3] w-48 overflow-hidden rounded-2xl border-4 border-ivory shadow-[0_20px_40px_-16px_rgba(38,34,29,0.4)] sm:block">
              <Image
                src={unsplash(about.secondaryImage.id, 400, 300)}
                alt={about.secondaryImage.alt}
                fill
                sizes="200px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6 lg:pl-6">
          <Reveal y={12}>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
              <span className="h-px w-6 bg-terracotta" aria-hidden />
              {about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif-display max-w-xl text-4xl leading-[1.1] font-medium text-charcoal sm:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5">
            {about.bio.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="text-base leading-relaxed text-charcoal-soft/85 sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs tracking-[0.2em] text-warmgray uppercase">{f.label}</dt>
                  <dd className="font-serif-display mt-1 text-lg text-charcoal">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
