const WORDS = [
  "Weddings",
  "Portraits",
  "Fashion",
  "Travel",
  "Editorial",
  "Lifestyle",
];

export function Marquee() {
  const items = [...WORDS, ...WORDS];

  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line bg-ivory py-5"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((word, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-serif-display text-2xl text-charcoal-soft/30 italic sm:text-3xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
