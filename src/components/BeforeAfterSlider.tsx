"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import { unsplash } from "@/lib/utils";

type BeforeAfterSliderProps = {
  id: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * A single photograph, shown two ways: the flat capture straight off the
 * sensor, and the graded final edit. Dragging (or arrow keys, once focused)
 * reveals how much of the mood is actually built afterwards at the desk.
 *
 * The "before" look is a CSS filter standing in for an unedited RAW —
 * swap in a real SOOC frame later; the interaction stays the same.
 */
export function BeforeAfterSlider({
  id,
  alt,
  beforeLabel = "Straight out of camera",
  afterLabel = "Final edit",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [percent, setPercent] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, pct)));
  }, []);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }
  function endDrag() {
    draggingRef.current = false;
  }
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPercent(0);
    if (e.key === "End") setPercent(100);
  }

  const src = unsplash(id, 1400, 1000);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      data-native-cursor
      className="group relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-[1.5rem] bg-charcoal select-none sm:aspect-[16/9]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        sizes="(min-width: 1024px) 70vw, 100vw"
        className="pointer-events-none object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
          style={{
            filter:
              "grayscale(0.4) contrast(0.8) saturate(0.5) brightness(1.1) sepia(0.08)",
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory/80 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${percent}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Reveal amount between the unedited capture and the final edit"
        aria-valuenow={Math.round(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${Math.round(percent)}% toward final edit`}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-ivory/70 bg-ivory/90 text-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-150 group-hover:scale-105 focus-visible:outline-2 focus-visible:outline-terracotta"
        style={{ left: `${percent}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 7l-5 5 5 5M16 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className="pointer-events-none absolute top-5 left-5 rounded-full bg-charcoal/60 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-ivory uppercase backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-5 right-5 rounded-full bg-charcoal/60 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-ivory uppercase backdrop-blur-sm">
        {afterLabel}
      </span>
    </div>
  );
}
