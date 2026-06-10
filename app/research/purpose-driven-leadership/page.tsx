import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Purpose-Driven Leadership Actually Looks Like — Matthew Gann, Ph.D.",
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
          June 2025
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Leadership
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        What Purpose-Driven Leadership Actually Looks Like
      </h1>

      <div className="prose-custom space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Purpose isn&apos;t a mission statement on a wall. It&apos;s the filter through which every decision
          gets made — from hiring to campaign strategy.
        </p>

        <p className="leading-relaxed">
          I&apos;ve led marketing teams across some of the most complex institutions in higher education.
          And the thing I keep coming back to — the thing that separates teams that do great work from
          teams that just produce output — is whether the people doing the work understand <em>why</em> it matters.
        </p>

        <p className="leading-relaxed">
          Purpose-driven leadership isn&apos;t soft. It&apos;s one of the most practical tools you have. When your
          team knows what they&apos;re trying to accomplish and why, they make better decisions without
          being told. They push back when something doesn&apos;t fit. They show up differently.
        </p>

        <p className="leading-relaxed">
          That shows up in the work. In the campaigns that land. In the brands that feel true.
          In the organizations that people actually want to be part of.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          — Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
