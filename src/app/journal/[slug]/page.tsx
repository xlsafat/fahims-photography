import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { journalEntries, getJournalEntry } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: "article",
    },
  };
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();

  const index = journalEntries.findIndex((e) => e.slug === slug);
  const next = journalEntries[(index + 1) % journalEntries.length];

  return (
    <>
      <Navbar />
      <main id="main" className="bg-ivory pt-40 pb-28 sm:pt-48">
        <article className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal y={12}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-terracotta uppercase"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Journal
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] text-warmgray uppercase">
              {entry.date}
              <span aria-hidden>&middot;</span>
              {entry.readTime}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif-display mt-4 text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl md:text-6xl">
              {entry.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-soft/80">
              {entry.excerpt}
            </p>
          </Reveal>
        </article>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl px-6 sm:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-sand">
            <Image
              src={unsplash(entry.image.id, 1600, 900)}
              alt={entry.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-2xl px-6 sm:px-10">
          {entry.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="mb-6 text-lg leading-[1.85] text-charcoal-soft/90">
                {paragraph}
              </p>
              {i === 1 && entry.pullQuote ? (
                <blockquote className="my-10 border-l-2 border-terracotta/40 pl-6">
                  <p className="font-serif-display text-2xl leading-snug text-terracotta italic sm:text-3xl">
                    &ldquo;{entry.pullQuote}&rdquo;
                  </p>
                </blockquote>
              ) : null}
            </Reveal>
          ))}

          {entry.secondaryImage ? (
            <Reveal delay={0.1} className="my-4">
              <div className="scroll-drive relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={unsplash(entry.secondaryImage.id, 800, 1000)}
                  alt={entry.secondaryImage.alt}
                  fill
                  sizes="500px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ) : null}
        </div>

        <div className="mx-auto mt-20 max-w-2xl border-t border-line px-6 pt-10 sm:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs tracking-[0.2em] text-warmgray uppercase">Next in the journal</p>
                <Link
                  href={`/journal/${next.slug}`}
                  className="font-serif-display group mt-2 inline-block text-2xl text-charcoal transition-colors hover:text-terracotta"
                >
                  {next.title}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
              <Link
                href="/#contact"
                className="shrink-0 rounded-full border border-charcoal/20 px-5 py-2 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
