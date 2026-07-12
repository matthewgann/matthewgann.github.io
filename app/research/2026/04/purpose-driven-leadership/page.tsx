import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "What Purpose-Driven Leadership Actually Looks Like | Matthew Gann, Ph.D.",
  description:
    "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
  openGraph: {
    title: "What Purpose-Driven Leadership Actually Looks Like | Matthew Gann, Ph.D.",
    description:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
    url: "https://matthewgann.com/research/2026/04/purpose-driven-leadership",
    type: "article",
  },
};

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <ArticleSchema
        title="What Purpose-Driven Leadership Actually Looks Like"
        description="Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy."
        datePublished="2026-04-01"
        url="https://matthewgann.com/research/2026/04/purpose-driven-leadership"
      />
      <Link
        href="/research"
        className="text-sm font-medium mb-10 inline-block transition-colors duration-150"
        style={{ color: "var(--text-muted)", textDecoration: "none" }}
      >
        ← Research &amp; Thoughts
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4 mt-6">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          April 2026
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

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A mission statement on a wall is decoration. Purpose is the filter through which every
          decision gets made.
        </p>

        <p className="leading-relaxed">
          I&apos;ve spent a lot of time in rooms where people talk about purpose. Retreats, strategy
          sessions, brand workshops. The language is almost always right. The follow-through is where
          things fall apart.
        </p>

        <p className="leading-relaxed">
          The gap is an operationalization problem. Saying your organization
          is purpose-driven and actually building systems, teams, and decision frameworks around that
          purpose are two different things. Most organizations do the first and skip the second.
        </p>

        <p className="leading-relaxed">
          In my experience, purpose-driven leadership shows up in the small decisions, not the big
          ones. It&apos;s how you run a hiring process. How you prioritize competing projects. Whether
          you&apos;re willing to say no to a campaign that would perform well but doesn&apos;t reflect what
          you actually stand for. The big declarations are easy. The daily alignment is hard.
        </p>

        <p className="leading-relaxed">
          Teams feel the difference. When people understand why the work matters, not just what
          they&apos;re supposed to produce, they make better judgment calls without being told. They push
          back when something doesn&apos;t fit. They bring ideas that go beyond their job description.
          That kind of engagement doesn&apos;t come from a good onboarding deck. It comes from leadership
          that actually means what it says.
        </p>

        <p className="leading-relaxed">
          I&apos;ve seen this play out in institutional branding, enrollment marketing, and internal
          communications work across some of the most complex higher education environments in the
          country. The organizations that get it right aren&apos;t necessarily the ones with the biggest
          budgets or the best talent. They&apos;re the ones where leadership and mission are genuinely
          aligned, and where that alignment is visible in how decisions get made every day.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
