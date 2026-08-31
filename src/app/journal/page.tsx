import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { journalEntries } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on light, travel, and life behind the camera.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-ivory pt-40 pb-28 sm:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <Reveal y={12}>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
                <span className="h-px w-6 bg-terracotta" aria-hidden />
                Journal
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-serif-display text-5xl leading-[1.05] font-medium text-charcoal sm:text-6xl md:text-7xl">
                Notes from the field
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-soft/80">
                Loose thoughts on light, travel, and the small decisions
                behind a photograph — written between shoots, mostly.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 border-t border-line pt-16 sm:grid-cols-2">
            {journalEntries.map((entry, i) => (
              <Reveal key={entry.slug} delay={(i % 2) * 0.08} y={24}>
                <Link href={`/journal/${entry.slug}`} className="group block" data-cursor="Read">
                  <article>
                    <div className="scroll-drive relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand">
                      <Image
                        src={unsplash(entry.image.id, 900, 675)}
                        alt={entry.image.alt}
                        fill
                        sizes="(min-width: 640px) 45vw, 100vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-6 flex items-center gap-3 text-xs tracking-[0.2em] text-warmgray uppercase">
                      {entry.date}
                      <span aria-hidden>&middot;</span>
                      {entry.readTime}
                    </p>
                    <h2 className="font-serif-display mt-2 text-2xl leading-snug text-charcoal transition-colors group-hover:text-terracotta sm:text-3xl">
                      {entry.title}
                    </h2>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal-soft/75">
                      {entry.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                      Read the story
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
