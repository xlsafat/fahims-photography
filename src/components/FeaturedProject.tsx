"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProject } from "@/lib/data";
import { unsplash } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="project" className="relative bg-charcoal py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-ivory/15 pb-10 sm:flex-row sm:items-end">
          <div>
            <Reveal y={12}>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-peach uppercase">
                <span className="h-px w-6 bg-peach" aria-hidden />
                {featuredProject.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-serif-display max-w-2xl text-5xl leading-[1.02] font-medium italic sm:text-6xl md:text-7xl">
                {featuredProject.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex gap-10 text-sm text-ivory/60 sm:text-right">
              <div>
                <p className="text-xs tracking-[0.2em] text-ivory/40 uppercase">Location</p>
                <p className="mt-1 text-ivory">{featuredProject.location}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-ivory/40 uppercase">Date</p>
                <p className="mt-1 text-ivory">{featuredProject.date}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-2xl">
          <p className="text-lg leading-relaxed text-ivory/75">
            {featuredProject.description}
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 h-[60vh] min-h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[75vh]">
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src={unsplash(featuredProject.heroImage.id, 2000, 2400)}
              alt={featuredProject.heroImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProject.gallery.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.08}
              className={
                img.size === "md"
                  ? "sm:col-span-1 lg:col-span-2"
                  : "sm:col-span-1 lg:col-span-1"
              }
            >
              <figure
                data-cursor="View"
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal-soft"
              >
                <Image
                  src={unsplash(img.id, 900, 1100)}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {img.caption ? (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-4 py-3 text-xs text-ivory/80">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
