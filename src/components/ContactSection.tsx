"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { shootTypes, socialLinks, studio } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire this up to your form handler / email service of choice.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-peach uppercase">
                <span className="h-px w-6 bg-peach" aria-hidden />
                Let&rsquo;s talk
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-serif-display text-5xl leading-[1.02] font-medium italic sm:text-6xl md:text-7xl">
                Have a story
                <br />
                worth telling?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-ivory/70">
                Tell me a little about what you have in mind. I read every
                message myself and reply within two days.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-ivory/40 uppercase">Email</p>
                <a
                  href={`mailto:${studio.email}`}
                  className="font-serif-display mt-1 block text-2xl text-ivory transition-colors hover:text-peach"
                >
                  {studio.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-ivory/40 uppercase">Based in</p>
                <p className="mt-1 text-ivory/80">{studio.location}</p>
              </div>
              <div className="flex gap-6 pt-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm tracking-wide text-ivory/60 underline decoration-ivory/20 underline-offset-4 transition-colors hover:text-peach hover:decoration-peach"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[1.5rem] border border-ivory/15 bg-ivory/[0.04] px-8 text-center">
                  <p className="font-serif-display text-3xl italic text-peach">Thank you.</p>
                  <p className="mt-4 max-w-sm text-ivory/70">
                    Your message is in — I&rsquo;ll be in touch within two
                    days. In the meantime, feel free to explore more of the
                    work above.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2" noValidate>
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Shoot type" htmlFor="shootType">
                    <select id="shootType" name="shootType" defaultValue="" required className={inputClass}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {shootTypes.map((type) => (
                        <option key={type} value={type} className="text-charcoal">
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred date" htmlFor="date">
                    <input id="date" name="date" type="date" className={inputClass} />
                  </Field>
                  <Field label="Message" htmlFor="message" className="sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about the day, the people, the vision..."
                      className={inputClass + " resize-none"}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Magnetic className="inline-block" strength={0.2}>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 rounded-full bg-peach px-8 py-4 text-sm font-semibold tracking-wide text-charcoal uppercase transition-colors hover:bg-ivory"
                      >
                        Send message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-ivory/20 bg-ivory/[0.04] px-4 py-3 text-ivory placeholder:text-ivory/30 transition-colors focus:border-peach focus:bg-ivory/[0.06] focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs tracking-[0.2em] text-ivory/50 uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}
