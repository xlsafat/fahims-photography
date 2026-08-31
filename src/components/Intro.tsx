import Image from "next/image";
import { studio } from "@/lib/data";
import { unsplash } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { value: 11, suffix: "", label: "Years behind the lens" },
  { value: 240, suffix: "+", label: "Weddings told honestly" },
  { value: 18, suffix: "", label: "Countries, so far" },
];

const introImage = {
  id: "/images/fahim-portrait.jpg",
  alt: "Fahim standing by a railing at golden hour, sunglasses tucked into his collar, looking off into the distance",
};

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-ivory py-28 sm:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="relative order-2 lg:order-1 lg:col-span-7 lg:pr-10">
          <Reveal y={16}>
            <span className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
              <span className="h-px w-6 bg-terracotta" aria-hidden />
              Hello, I&rsquo;m {studio.firstName}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-serif-display text-3xl leading-[1.28] font-normal text-charcoal sm:text-4xl md:text-[2.6rem]">
              A photographer drawn to{" "}
              <em className="text-terracotta not-italic underline decoration-peach decoration-4 underline-offset-4">
                honest moments
              </em>
              , beautiful light, and the little things that make life feel
              extraordinary — the way someone laughs with their whole body, or
              the hour the sun forgets to set.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal-soft/80">
              I&rsquo;ve spent {studio.experience} learning that the best
              photographs are rarely arranged. My job, most days, is simply to
              be paying attention when they happen — then to get out of the way.
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["1524638431109-93d95c968f03", "1531746020798-e6953c6e8e04", "1508214751196-bcfd4ca60f91"].map(
                (id) => (
                  <span
                    key={id}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-ivory"
                  >
                    <Image src={unsplash(id, 80, 80)} alt="" fill className="object-cover" />
                  </span>
                )
              )}
            </div>
            <p className="text-sm text-charcoal-soft/70">
              Trusted by 240+ couples, families &amp; brands
            </p>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <Reveal y={24} className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="scroll-drive relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src={unsplash(introImage.id, 900, 1125)}
                alt={introImage.alt}
                fill
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[11rem] rotate-[-4deg] rounded-2xl bg-cream px-5 py-4 shadow-[0_12px_30px_-10px_rgba(38,34,29,0.25)] sm:block">
              <p className="font-serif-display text-sm text-charcoal italic">
                &ldquo;Still get nervous before every first look.&rdquo;
              </p>
            </div>
            <span
              aria-hidden
              className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-full border border-terracotta/30 sm:block"
            />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[1600px] border-t border-line px-6 pt-12 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-serif-display text-5xl font-medium text-terracotta sm:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm tracking-wide text-charcoal-soft/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
