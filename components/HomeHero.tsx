"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { WRITING_LABEL, WRITING_PATH } from "@/lib/site";

/**
 * Pinned hero. While the section is pinned, scroll progress (0 to 1) drives
 * three things through a CSS variable: the portrait sweeps left from its half
 * panel to fill the stage and slowly zooms, the headline lifts and fades ahead
 * of it, and a soft shade grows at the bottom so the handoff to the next
 * section reads cleanly. Under 768px and with reduced motion it is a static
 * split, no pin.
 */
export default function HomeHero() {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;

    const ease = (t: number) => t * t * (3 - 2 * t); // smoothstep

    const update = () => {
      raf = 0;
      if (!mq.matches) {
        stage.style.setProperty("--p", "0");
        return;
      }
      const rect = stage.getBoundingClientRect();
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 64;
      const pinH = window.innerHeight - navH;
      const travel = Math.max(1, rect.height - pinH);
      const raw = Math.min(1, Math.max(0, (navH - rect.top) / travel));
      stage.style.setProperty("--p", ease(raw).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={stageRef} className="hero-stage hairline-b" aria-label="Introduction">
      <div className="hero-pin">
        {/* Text panel */}
        <div className="hero-text page-x">
          <h1 className="t-display m-0 max-w-[12ch]">
            <span className="hero-line block" style={{ ["--i" as string]: 0 }}>
              <span className="scrawl">
                Purpose-driven
                <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                  <path d="M4 14 C 60 4, 120 20, 190 10 S 320 6, 396 15" />
                </svg>
              </span>
            </span>
            <span className="hero-line block" style={{ ["--i" as string]: 1 }}>
              marketing and
            </span>
            <span className="hero-line block" style={{ ["--i" as string]: 2 }}>
              storytelling.
            </span>
          </h1>
          <p className="hero-after t-lead mt-10 max-w-[46ch]">
            Building intelligent marketing operations that help higher education and nonprofit
            organizations connect strategy, story, and service to the people they serve.
          </p>
          <div className="hero-after flex flex-wrap items-center gap-3 mt-12">
            <Link href={WRITING_PATH} className="btn btn-accent">
              <span>{WRITING_LABEL}</span>
              <span aria-hidden>↗</span>
            </Link>
            <Link href="/experience" className="btn">
              <span>Experience and Background</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        {/* Portrait panel: half width at rest, full bleed at the end of the pin */}
        <div className="hero-photo">
          <Image
            src="/headshot.jpg"
            alt="Matthew Gann, Ph.D."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-shade" aria-hidden />
        </div>
      </div>
    </section>
  );
}
