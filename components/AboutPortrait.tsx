"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Circular portrait with a teal ring set 10px off the image. Two scroll-driven
 * variables: --reveal (0 to 1) draws the ring and eases the photo up to size as
 * the figure enters the viewport, then reverses as it leaves at the top; --drift (-1 to 1) gives the photo a slow
 * parallax against the text while the section passes. Reduced motion renders
 * the finished state.
 */
export default function AboutPortrait({
  src,
  alt,
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--reveal", "1");
      el.style.setProperty("--drift", "0");
      return;
    }
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // ease in: from the figure's top entering at the bottom of the viewport
      // to its center reaching 55% of the way up
      const start = vh;
      const end = vh * 0.55 - r.height / 2;
      const enter = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
      // ease out: mirror of the entry. From the center passing 45% of the way
      // up to the figure's bottom leaving the top of the viewport
      const outStart = vh * 0.45 + r.height / 2;
      const outEnd = 0;
      const exit = Math.min(1, Math.max(0, (outStart - r.bottom) / (outStart - outEnd)));
      const reveal = Math.min(enter, 1 - exit);
      // drift: -1 when the figure is just below the viewport, +1 when just above
      const mid = r.top + r.height / 2;
      const drift = Math.min(1, Math.max(-1, (vh / 2 - mid) / (vh / 2 + r.height / 2)));
      el.style.setProperty("--reveal", ease(reveal).toFixed(4));
      el.style.setProperty("--drift", drift.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <figure ref={ref} className={`about-portrait m-0 ${className}`}>
      <div className="about-portrait-circle">
        <div className="about-portrait-photo img-frame">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 33vw, 80vw"
            className="object-cover"
            style={{ objectPosition: position }}
          />
        </div>
        <svg className="about-portrait-ring" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="49" pathLength={100} />
        </svg>
      </div>
    </figure>
  );
}
