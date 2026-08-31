"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { unsplash, getExif } from "@/lib/utils";

export type LightboxItem = {
  id: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const [showInfo, setShowInfo] = useState(false);

  const goTo = useCallback(
    (delta: number) => {
      if (index === null) return;
      const next = (index + delta + items.length) % items.length;
      onNavigate(next);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "i" || e.key === "I") setShowInfo((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goTo]);

  if (typeof document === "undefined") return null;

  const current = index !== null ? items[index] : null;
  const exif = current ? getExif(current.id) : null;

  return createPortal(
    <AnimatePresence>
      {isOpen && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 px-4 py-10 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo((v) => !v);
            }}
            aria-pressed={showInfo}
            aria-label="Toggle photo details"
            className="absolute top-6 left-6 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            <span className="font-serif-display text-base italic">i</span>
          </button>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10 sm:left-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(1);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10 sm:right-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          ) : null}

          <motion.figure
            key={current.id + index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[78vh] w-full">
              <Image
                src={unsplash(current.id, 1600, 2000)}
                alt={current.alt}
                width={1600}
                height={2000}
                sizes="90vw"
                className="max-h-[78vh] w-auto rounded-sm object-contain"
              />
            </div>
            {current.caption ? (
              <figcaption className="mt-4 text-sm text-ivory/70">
                {current.caption}
                <span className="ml-3 text-ivory/40">
                  {index !== null ? index + 1 : 0} / {items.length}
                </span>
              </figcaption>
            ) : (
              <span className="mt-4 text-sm text-ivory/40">
                {index !== null ? index + 1 : 0} / {items.length}
              </span>
            )}

            <AnimatePresence>
              {showInfo && exif ? (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -6, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 w-full max-w-md overflow-hidden"
                >
                  <div className="grid grid-cols-3 gap-x-6 gap-y-3 rounded-lg border border-ivory/15 bg-ivory/[0.04] px-5 py-4 sm:grid-cols-5">
                    <ExifField label="Camera" value={exif.camera} />
                    <ExifField label="Lens" value={exif.lens} />
                    <ExifField label="Aperture" value={exif.aperture} />
                    <ExifField label="Shutter" value={exif.shutter} />
                    <ExifField label="ISO" value={String(exif.iso)} />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

function ExifField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] text-ivory/40 uppercase">{label}</p>
      <p className="mt-0.5 text-sm text-ivory">{value}</p>
    </div>
  );
}
