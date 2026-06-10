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
          Most universities are still treating marketing as a production function. The ones getting
          ahead are building it as a core business capability.
        </p>

        <p className="leading-relaxed">
          This isn&apos;t a new observation, but it&apos;s one that keeps proving true. Walk into the marketing
          department at most colleges and universities and you&apos;ll find a team organized around
          deliverables: brochures, social posts, website updates, event support. The work gets done.
          The requests get fulfilled. But the strategic questions — Who are we trying to reach? What do
          we want them to believe? How do we know if it&apos;s working? — often don&apos;t have clear owners.
        </p>

        <p className="leading-relaxed">
          Marketing maturity is about closing that gap. It&apos;s the degree to which an institution has
          built marketing as a function that can do more than execute — one that informs strategy,
          allocates resources intelligently, measures outcomes that matter, and earns a seat at the
          table where decisions about enrollment, reputation, and competitive positioning actually
          get made.
        </p>

        <p className="leading-relaxed">
          One of the first things I did at the University of Denver was build a five-year marketing
          maturity model. Not because we needed another planning document, but because we needed a
          shared language. A way for the marketing team, senior leadership, and academic partners to
          talk about where we are, where we&apos;re going, and what it will take to get there. Maturity
          models make the gap visible. And visible gaps are the ones that get closed.
        </p>

        <p className="leading-relaxed">
          The institutions that have made this shift share a few traits. Marketing has consistent
          access to institutional data. There are defined processes for how marketing work gets
          prioritized. The team has clear accountability for outcomes, not just outputs. And
          leadership — above and beyond the CMO — understands what good marketing actually requires.
        </p>

        <p className="leading-relaxed">
          That last point is often the hardest. Marketing maturity isn&apos;t primarily a marketing
          problem. It&apos;s an organizational one. You can build the best team in higher education, but
          if the institution doesn&apos;t understand the function, doesn&apos;t give it access to the right
          information, and doesn&apos;t hold it accountable to real outcomes, the ceiling is low. This is
          why organizational intelligence matters. Sustainable marketing capability is an
          organizational design problem as much as it is a talent or technology problem.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          — Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
