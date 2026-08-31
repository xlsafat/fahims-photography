"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, socialLinks, studio } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const dark = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        dark ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 sm:px-10"
      >
        <Link
          href="/"
          className={cn(
            "font-serif-display text-lg tracking-wide transition-colors",
            dark ? "text-charcoal" : "text-ivory"
          )}
        >
          {studio.firstName}
          <span className={cn("ml-2 text-xs align-top", dark ? "text-terracotta" : "text-peach")}>
            &mdash; Photography
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-wide transition-colors",
                  dark ? "text-charcoal-soft hover:text-terracotta" : "text-ivory/90 hover:text-ivory"
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                    dark ? "bg-terracotta" : "bg-ivory"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Magnetic className="hidden md:block" strength={0.25}>
          <Link
            href="/#contact"
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              dark
                ? "border-charcoal/20 text-charcoal hover:border-terracotta hover:text-terracotta"
                : "border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal"
            )}
          >
            Book a session
          </Link>
        </Magnetic>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300",
              dark ? "bg-charcoal" : "bg-ivory",
              menuOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300",
              dark ? "bg-charcoal" : "bg-ivory",
              menuOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-50 flex h-dvh flex-col justify-between bg-ivory px-6 pt-28 pb-10 sm:px-10 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif-display block py-3 text-4xl text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-line pt-6 text-sm text-charcoal-soft/70">
              <span>{studio.location}</span>
              <div className="flex gap-4">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} className="hover:text-terracotta" target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
