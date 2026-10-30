"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type StackItem = {
  id: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  href?: string;
  linkLabel?: string;
  meta?: string;
};

type Props = {
  items: StackItem[];
  /** Heading level for each card title. Use "h2" on listing pages, "h3" under a section heading. */
  headingLevel?: "h2" | "h3";
};

function Arrow() {
  return (
    <span className="dot" aria-hidden>
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/**
 * Sticky, stacking cards. Each card pins at a slightly larger top offset than
 * the one before it, so earlier cards peek out above later ones like a deck.
 * When a later card covers an earlier one, the earlier card's content dims.
 */
export default function StackedCards({ items, headingLevel = "h3" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const Heading = headingLevel;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>(".stack-card"));
    let raf = 0;

    const update = () => {
      raf = 0;
      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i].getBoundingClientRect();
        const next = cards[i + 1].getBoundingClientRect();
        const covered = next.top < current.top + current.height * 0.45;
        cards[i].classList.toggle("is-covered", covered);
      }
      cards[cards.length - 1]?.classList.remove("is-covered");
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
  }, [items]);

  return (
    <div ref={rootRef} className="stack" style={{ ["--n" as string]: items.length - 1 }}>
      {items.map((item, i) => {
        const title = (
          <Heading className="t-card m-0">{item.title}</Heading>
        );
        const copy = (
          <>
            {item.meta && (
              <span className="mono" style={{ color: "var(--ink-faint)" }}>
                {item.meta}
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="no-underline hover:text-accent transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
            <p className="t-lead max-w-[38ch] m-0">{item.body}</p>
            {item.href && (
              <Link href={item.href} className="arrow-link mt-auto pt-4 self-start">
                <Arrow />
                {item.linkLabel ?? "Read more"}
              </Link>
            )}
          </>
        );

        return (
          <article key={item.id} id={item.id} className="stack-card" style={{ ["--i" as string]: i }}>
            {item.image ? (
              <div className="stack-card-inner grid md:grid-cols-2 min-h-[inherit]">
                <div className="hairline-b md:border-b-0 md:hairline-r p-(--gutter)">
                  <div className="img-frame w-full aspect-[16/10] md:aspect-[4/3] max-h-[68vh]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: item.imagePosition ?? "center" }}
                    />
                  </div>
                </div>
                <div className="p-(--gutter) md:pl-[calc(var(--gutter)*1.25)] flex flex-col gap-5">{copy}</div>
              </div>
            ) : (
              <div className="stack-card-inner grid md:grid-cols-12 min-h-[inherit]">
                <div className="md:col-span-8 md:col-start-5 p-(--gutter) md:pl-[calc(var(--gutter)*1.25)] md:hairline-l flex flex-col gap-5">
                  {copy}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
