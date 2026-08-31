"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A restrained cursor companion for pointer devices: a small dot that
 * widens into a soft "View" / "Read" pill when hovering anything tagged
 * with data-cursor. No-ops entirely on touch/coarse pointers.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = e.target as HTMLElement | null;
      // Elements that need their own native cursor (e.g. the ew-resize
      // drag handle on the before/after slider) opt out of the dot
      // entirely rather than showing both at once.
      if (el?.closest("[data-native-cursor]")) {
        setVisible(false);
        return;
      }

      setVisible(true);
      const target = el?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.25 } }}
      className="pointer-events-none fixed top-0 left-0 z-[110] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: label ? 88 : 10,
          height: label ? 88 : 10,
          marginLeft: label ? -44 : -5,
          marginTop: label ? -44 : -5,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        className="flex items-center justify-center rounded-full bg-ivory text-charcoal"
      >
        {label ? (
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
