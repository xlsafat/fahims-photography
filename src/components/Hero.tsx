"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage, studio } from "@/lib/data";
import { unsplash } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-linked (not merely scroll-triggered) parallax + fade,
  // driven continuously by scrollYProgress rather than a one-shot animation.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <Image
          src={unsplash(heroImage.id, 2400, 3000)}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/30"
          aria-hidden
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto max-w-[1600px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.32em] text-peach uppercase sm:text-sm"
          >
            <span className="h-px w-8 bg-peach" aria-hidden />
            {studio.role} &middot; {studio.location}
          </motion.p>

          <h1 className="font-serif-display max-w-4xl text-[3.4rem] leading-[0.98] font-medium text-ivory italic sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Finding joy
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block pl-[10%] not-italic text-peach sm:pl-[14%]"
            >
              in the in-between.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-ivory/20 pt-8 sm:flex-row sm:items-end"
          >
            <p className="max-w-sm text-base leading-relaxed text-ivory/75">
              {studio.subTagline}
            </p>
            <Magnetic className="shrink-0">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-ivory uppercase"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/50 transition-colors duration-300 group-hover:border-ivory group-hover:bg-ivory">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-ivory transition-colors duration-300 group-hover:text-charcoal"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Explore the work
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute right-6 bottom-10 z-10 hidden flex-col items-center gap-3 sm:right-10 sm:flex"
      >
        <span
          style={{ writingMode: "vertical-rl" }}
          className="text-xs tracking-[0.3em] text-ivory/60 uppercase"
        >
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/25">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
          />
        </span>
      </motion.div>
    </section>
  );
}
