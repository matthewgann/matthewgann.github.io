"use client";

import { useEffect, useRef, useState } from "react";

export type Role = {
  id: string;
  org: string;
  location: string;
  title: string;
  highlight: string;
  /** Optional, e.g. "2024 to present". Shown large when present. */
  years?: string;
};

/**
 * Sticky employer list on the left, roles on the right. As the roles scroll,
 * the matching employer lights up and a marker slides down the list.
 */
export default function CareerRail({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // the role whose top is closest to (but above) a line 40% down the viewport
      const line = window.innerHeight * 0.4;
      let idx = 0;
      rowRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setActive(idx);
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
    <div className="page-x grid md:grid-cols-12 gap-x-6">
      {/* Rail */}
      <div className="md:col-span-4 lg:col-span-4">
        <div className="md:sticky" style={{ top: "calc(var(--nav-h) + 2.5rem)" }}>
          <h2 id="roles-heading" className="t-headline mb-10">
            Where I&apos;ve worked.
          </h2>
          <ol className="career-rail list-none m-0 p-0 hidden md:block" aria-label="Employers" style={{ ["--rail-n" as string]: roles.length }}>
            <span
              className="career-rail-marker"
              aria-hidden
              style={{ transform: `translateY(calc(${active} * 100%))` }}
            />
            {roles.map((r, i) => (
              <li key={r.id} className={`career-rail-item${i === active ? " is-active" : ""}`}>
                <a href={`#${r.id}`} className="no-underline block py-2">
                  {r.org}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Roles */}
      <ol className="md:col-span-8 lg:col-span-7 lg:col-start-6 list-none m-0 p-0 hairline-t">
        {roles.map((r, i) => (
          <li
            key={r.id}
            id={r.id}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className="career-row hairline-b py-10 md:py-12"
            style={{ scrollMarginTop: "calc(var(--nav-h) + 2rem)" }}
          >
            {r.years && <span className="date-mark block mb-4">{r.years}</span>}
            <h3 className="t-card m-0">{r.org}</h3>
            {r.title && (
              <p className="t-small font-medium mt-2 mb-0" style={{ color: "var(--accent)" }}>
                {r.title}
              </p>
            )}
            <p className="t-body mt-5 mb-0 max-w-[52ch]">{r.highlight}</p>
            <p className="kicker mt-5 mb-0" style={{ color: "var(--ink-faint)" }}>
              {r.location}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
