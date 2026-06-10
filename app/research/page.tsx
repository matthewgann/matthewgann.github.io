import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Thoughts | Matthew Gann, Ph.D.",
  description: "Writing on marketing, leadership, higher education, and purpose-driven work.",
};

const posts = [
  {
    slug: "purpose-driven-leadership",
    title: "What Purpose-Driven Leadership Actually Looks Like",
    date: "June 2025",
    category: "Leadership",
    excerpt:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
  },
  {
    slug: "marketing-maturity-in-higher-ed",
    title: "Marketing Maturity in Higher Education",
    date: "May 2025",
    category: "Higher Education",
    excerpt:
      "Most universities are still treating marketing as a production function. The ones winning the future are building it as a strategic capability.",
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
          Research &amp; Thoughts
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Writing on marketing strategy, leadership, higher education, and what it means to do
          purpose-driven work in complex institutions.
        </p>
      </div>

      <hr className="mb-12" style={{ borderColor: "var(--border)" }} />

      {/* Post list */}
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/research/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="group cursor-pointer">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {post.date}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 font-medium tracking-wide"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <h2
                  className="text-2xl mb-2 transition-colors duration-150"
                  style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
                >
                  {post.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>
                <span
                  className="inline-block mt-3 text-sm font-medium transition-colors duration-150"
                  style={{ color: "var(--accent)" }}
                >
                  Read more →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-16 p-6 text-center" style={{ border: "1px solid var(--border)" }}>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          More writing coming soon. Have a topic you&apos;d like to see covered?{" "}
          <a href="mailto:matthew@matthewgann.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
            Get in touch.
          </a>
        </p>
      </div>
    </div>
  );
}
