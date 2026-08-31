"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workCategories, type GalleryImage } from "@/lib/data";
import { unsplash } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";

const BENTO: Record<number, string> = {
  0: "lg:col-span-4 lg:row-span-2",
  1: "lg:col-span-2 lg:row-span-1",
  2: "lg:col-span-2 lg:row-span-1",
  3: "lg:col-span-3 lg:row-span-1",
  4: "lg:col-span-3 lg:row-span-1",
  5: "lg:col-span-6 lg:row-span-1",
};

const ASPECT: Record<GalleryImage["size"], string> = {
  lg: "aspect-[4/5]",
  md: "aspect-[4/3]",
  sm: "aspect-[3/4]",
};

// Every category gets its own distinct, vivid mood (see the
// [data-theme] rules in globals.css).
const GALLERY_THEMES: Record<string, string> = {
  weddings: "wedding",
  portraits: "portraits",
  fashion: "fashion",
  travel: "travel",
  editorial: "editorial",
  lifestyle: "lifestyle",
};

export function FeaturedWork() {
  const [activeSlug, setActiveSlug] = useState(workCategories[0].slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const active = workCategories.find((c) => c.slug === activeSlug) ?? workCategories[0];

  return (
    <section
      id="work"
      data-theme={GALLERY_THEMES[active.slug]}
      className="bg-[var(--gallery-bg)] py-28 transition-colors duration-500 sm:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal y={12}>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-[var(--gallery-accent)] uppercase transition-colors duration-500">
                <span className="h-px w-6 bg-[var(--gallery-accent)] transition-colors duration-500" aria-hidden />
                Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl md:text-6xl">
                Stories, told six different ways
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-charcoal-soft/80">
              Every category is its own kind of story — same eye, different
              rhythm. Choose one to look closer.
            </p>
          </Reveal>
        </div>

        <div
          role="tablist"
          aria-label="Work categories"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-b border-line pb-6"
        >
          {workCategories.map((cat) => (
            <button
              key={cat.slug}
              role="tab"
              id={`tab-${cat.slug}`}
              data-theme={GALLERY_THEMES[cat.slug]}
              aria-selected={cat.slug === activeSlug}
              aria-controls={`panel-${cat.slug}`}
              onClick={() => setActiveSlug(cat.slug)}
              className={cn(
                "group flex items-baseline gap-2 pb-1 text-lg font-medium transition-colors duration-300 sm:text-xl",
                cat.slug === activeSlug
                  ? "text-[var(--gallery-accent)]"
                  : "text-charcoal-soft/50 hover:text-charcoal"
              )}
            >
              <span className="font-serif-display text-xs text-warmgray">{cat.count}</span>
              {cat.label}
              <span
                aria-hidden
                className={cn(
                  "block h-px bg-[var(--gallery-accent)] transition-all duration-300",
                  cat.slug === activeSlug ? "w-6" : "w-0 group-hover:w-3"
                )}
              />
            </button>
          ))}
        </div>

        <motion.p
          key={active.slug + "-desc"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-xl text-base text-charcoal-soft/70 italic"
        >
          {active.description}
        </motion.p>

        <div
          role="tabpanel"
          id={`panel-${active.slug}`}
          aria-labelledby={`tab-${active.slug}`}
          key={active.slug}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-6 lg:gap-6"
        >
          {active.images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              data-cursor="View"
              onClick={() => setLightboxIndex(i)}
              className={cn(
                "group relative overflow-hidden rounded-[1.25rem] bg-sand text-left focus-visible:outline-[var(--gallery-accent)]",
                ASPECT[img.size],
                BENTO[i] ?? "lg:col-span-3 lg:row-span-1",
                i === 1 && "sm:mt-10 lg:mt-0"
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0% -8% 0%" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-drive absolute inset-0"
              >
                <Image
                  src={unsplash(img.id, 900, 1100)}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  style={img.focal ? { objectPosition: img.focal } : undefined}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {img.caption ? (
                <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.caption}
                </span>
              ) : null}
              <span className="absolute top-4 right-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-ivory/90 text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={active.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
