import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Maturity in Higher Education — Matthew Gann, Ph.D.",
};

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/research"
        className="text-sm font-medium mb-10 inline-block transition-colors duration-150"
        style={{ color: "var(--text-muted)", textDecoration: "none" }}
      >
        ← Research &amp; Thoughts
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4 mt-6">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          May 2025
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Higher Education
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        Marketing Maturity in Higher Education
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Most universities are still treating marketing as a production function. The ones winning
          the future are building it as a strategic capability.
        </p>

        <p className="leading-relaxed">
          Higher education has a marketing maturity problem. Most institutions still think about
          marketing as a service bureau — a team you send requests to when you need a brochure
          or a social media post. The marketing department is cost center, not strategy partner.
        </p>

        <p className="leading-relaxed">
          The institutions that are pulling ahead are the ones that have changed this equation.
          They&apos;ve built marketing as a capability — one that sits close to the provost, that
          owns the brand, that has a seat at the enrollment table, and that measures its work
          against institutional outcomes, not output volumes.
        </p>

        <p className="leading-relaxed">
          The shift requires two things: leadership that understands what marketing can do,
          and marketing leaders who can prove it. Both are in short supply. But the institutions
          that get there gain a real competitive advantage — especially now, when the demographic
          cliff is making every prospective student more valuable.
        </p>

        <p className="leading-relaxed">
          Building a five-year marketing maturity model is one of the first things I did at
          the University of Denver. Not because we needed a document. Because we needed a shared
          language for what we&apos;re building — and a way to hold ourselves accountable to it.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          — Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
