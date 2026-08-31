import Link from "next/link";
import { navLinks, socialLinks, studio } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-12 border-b border-ivory/15 pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="font-serif-display text-3xl italic sm:text-4xl">
              {studio.tagline}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-peach uppercase underline underline-offset-4"
            >
              Start a conversation
            </Link>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-ivory/70 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ivory/70">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
