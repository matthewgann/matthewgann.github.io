"use client";

import { useEffect, useRef, useState } from "react";

export type Role = {
  id: string;
  org: string;
  title: string;
  highlight: string;
  /** Optional outbound link shown under the highlight. */
  link?: { label: string; href: string };
  /** Optional, e.g. "2024 to present". Shown large when present. */
  years?: string;
};

/**
 * Sticky employer list on the left, roles on the right. As the roles scroll,
 * the matching employer lights up, a marker slides down the list, the rail
 * fills in behind it, and a thin thread runs from that employer through the
 * gutter between the columns to the active role's title. Roles that are not
 * active sit back a little.
 */
export default function CareerRail({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const railColRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLOListElement>(null);
  const railRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const motionOk = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    let threadRaf = 0;

    // Thread geometry. It tracks scroll exactly (the rail is sticky, so the
    // start point moves against the container every frame) and only eases
    // when the active role changes, from where it was to where it should be.
    type Geo = { x1: number; y1: number; xv: number; x2: number; y2: number };
    const cur: Geo = { x1: 0, y1: 0, xv: 0, x2: 0, y2: 0 };
    const target: Geo = { x1: 0, y1: 0, xv: 0, x2: 0, y2: 0 };
    let from: Geo | null = null;
    let fromScroll = 0;
    let fromTime = 0;
    const HANDOFF = 650;
    let primed = false;
    let lastIndex = -1;

    const pathFor = ({ x1, y1, xv, x2, y2 }: Geo) => {
      const dy = y2 - y1;
      const s = dy > 0 ? 1 : -1;
      // corners: as round as the segments allow
      const r1 = Math.max(0, Math.min(12, Math.abs(dy) / 2, xv - x1));
      const r2 = Math.max(0, Math.min(12, Math.abs(dy) / 2, x2 - xv));
      if (Math.abs(dy) < 1) return `M ${x1} ${y1} H ${x2}`;
      const d = [`M ${x1} ${y1}`];
      if (xv - x1 > r1) d.push(`H ${xv - r1}`);
      d.push(r1 > 0 ? `Q ${xv} ${y1} ${xv} ${y1 + s * r1}` : `M ${xv} ${y1}`);
      d.push(`V ${y2 - s * r2}`);
      if (r2 > 0) d.push(`Q ${xv} ${y2} ${xv + r2} ${y2}`);
      else d.push(`V ${y2}`);
      if (x2 - xv > r2) d.push(`H ${x2}`);
      return d.join(" ");
    };

    const paint = () => {
      pathRef.current?.setAttribute("d", pathFor(cur));
      dotRef.current?.setAttribute("cx", String(cur.x2));
      dotRef.current?.setAttribute("cy", String(cur.y2));
    };

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    // blend from the previous geometry (carried along with the scroll) to the live target
    const settle = (now: number) => {
      if (!from) {
        Object.assign(cur, target);
        paint();
        return;
      }
      const t = Math.min(1, (now - fromTime) / HANDOFF);
      const k = easeOut(t);
      const shift = window.scrollY - fromScroll;
      const start: Geo = { ...from, y1: from.y1 + shift };
      (Object.keys(cur) as (keyof Geo)[]).forEach((key) => {
        cur[key] = start[key] + (target[key] - start[key]) * k;
      });
      paint();
      if (t >= 1) {
        from = null;
        threadRaf = 0;
      } else if (!threadRaf) {
        threadRaf = requestAnimationFrame((ts) => {
          threadRaf = 0;
          settle(ts);
        });
      }
    };

    const measureThread = () => {
      const i = activeRef.current;
      const label = railRefs.current[i]?.querySelector(".career-rail-label");
      const h = rowRefs.current[i]?.querySelector("h3");
      const railCol = railColRef.current;
      const rolesCol = rolesRef.current;
      if (!label || !h || !railCol || !rolesCol) return;
      const box = root.getBoundingClientRect();
      const lr = label.getBoundingClientRect();
      const hr = h.getBoundingClientRect();
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 64;

      // the thread lives in the gutter between the two columns and never
      // crosses either column's text
      const gutterL = railCol.getBoundingClientRect().right - box.left;
      const gutterR = rolesCol.getBoundingClientRect().left - box.left;
      const gutter = Math.max(0, gutterR - gutterL);
      target.xv = gutterR - Math.min(Math.max(gutter * 0.5, 10), 44);
      target.x2 = gutter > 30 ? gutterR - 12 : target.xv;
      target.x1 = Math.min(lr.right - box.left + 16, target.xv);
      target.y1 = lr.top + lr.height / 2 - box.top;
      // if the active title has slipped under the nav, hold the end just below it
      const headY = Math.max(hr.top + hr.height / 2, navH + 18);
      target.y2 = headY - box.top;

      const changed = i !== lastIndex;
      lastIndex = i;
      if (!primed || !motionOk.matches) {
        from = null;
        Object.assign(cur, target);
        primed = true;
        paint();
        return;
      }
      if (changed) {
        // begin a handoff from wherever the thread is right now
        from = { ...cur };
        fromScroll = window.scrollY;
        fromTime = performance.now();
      }
      settle(performance.now());
    };

    const update = () => {
      raf = 0;
      // the role whose top is closest to (but above) a line 40% down the viewport
      const line = window.innerHeight * 0.4;
      let idx = 0;
      rowRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
      measureThread();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      primed = false;
      onScroll();
    };

    // draw the thread in once the section arrives
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          root.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(root);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (threadRaf) cancelAnimationFrame(threadRaf);
    };
  }, []);

  const n = roles.length;

  return (
    <div ref={rootRef} className="career page-x grid md:grid-cols-12 gap-x-6">
      {/* Thread from the active employer to the active role */}
      <svg className="career-thread" aria-hidden>
        <path ref={pathRef} pathLength={1} />
        <circle ref={dotRef} r={3.5} />
      </svg>

      {/* Rail */}
      <div ref={railColRef} className="md:col-span-4 lg:col-span-4">
        <div className="md:sticky" style={{ top: "calc(var(--nav-h) + 2.5rem)" }}>
          <h2 id="roles-heading" className="t-headline mb-10">
            Where I&apos;ve worked.
          </h2>
          <ol className="career-rail list-none m-0 p-0 hidden md:block" aria-label="Employers" style={{ ["--rail-n" as string]: n }}>
            <span
              className="career-rail-progress"
              aria-hidden
              style={{ height: `calc(${active + 1} * 100% / ${n})` }}
            />
            <span
              className="career-rail-marker"
              aria-hidden
              style={{ transform: `translateY(calc(${active} * 100%))` }}
            />
            {roles.map((r, i) => (
              <li key={r.id} className={`career-rail-item${i === active ? " is-active" : ""}`}>
                <a
                  href={`#${r.id}`}
                  className="no-underline block py-2"
                  ref={(el) => {
                    railRefs.current[i] = el;
                  }}
                >
                  <span className="career-rail-label">{r.org}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Roles */}
      <ol ref={rolesRef} className="md:col-span-8 lg:col-span-7 lg:col-start-6 list-none m-0 p-0 hairline-t">
        {roles.map((r, i) => (
          <li
            key={r.id}
            id={r.id}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`career-row hairline-b py-10 md:py-12${i === active ? " is-active" : ""}`}
            style={{ scrollMarginTop: "calc(var(--nav-h) + 2rem)" }}
          >
            {r.years && <span className="date-mark block mb-4">{r.years}</span>}
            <h3 className="t-card m-0 career-row-title">{r.org}</h3>
            {r.title && (
              <p className="t-small font-medium mt-2 mb-0" style={{ color: "var(--accent)" }}>
                {r.title}
              </p>
            )}
            <p className="t-body mt-5 mb-0 max-w-[52ch]">{r.highlight}</p>
            {r.link && (
              <p className="mt-5 mb-0">
                <a
                  href={r.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link"
                  style={{ fontSize: "0.9375rem" }}
                >
                  <span className="dot" aria-hidden>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {r.link.label} ↗
                </a>
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
