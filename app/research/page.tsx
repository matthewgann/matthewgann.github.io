import type { Metadata } from "next";
import Link from "next/link";
import posts from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import ImageBand from "@/components/ImageBand";

export const metadata: Metadata = {
  title: "Research & Thoughts | Matthew Gann, Ph.D.",
  description: "Writing on marketing, leadership, higher education, and purpose-driven work.",
};

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#FFFEF9" }}>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <h1 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
            Research &amp; Thoughts
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Musings on marketing strategy, leadership, higher education, and what it means to do purpose-driven.
          </p>
        </div>
      </section>

      <ImageBand src="/band-car.jpg" alt="Matthew Gann at an automotive show" position="28% 38%" />

      {/* Post list */}
      <section style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <div className="space-y-0">
              {posts.map((post, i) => (
                <article key={post.slug} className={i > 0 ? "pt-12 border-t" : ""} style={i > 0 ? { borderColor: "var(--border)" } : {}}>
                  <Link href={post.path} style={{ textDecoration: "none" }}>
                    <div className="group cursor-pointer">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                          {post.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 font-medium tracking-wide"
                          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl mb-3 transition-colors duration-150"
                        style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                        {post.title}
                      </h2>
                      <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                        {post.excerpt}
                      </p>
                      <span className="inline-block text-sm font-medium" style={{ color: "var(--accent)" }}>
                        Read more →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Coming soon */}
      <section style={{ background: "#F2E9DC" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14 text-center">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              More writing coming soon. Have a topic you&apos;d like to see covered?{" "}
              <a href="mailto:matthew@matthewgann.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
                Get in touch.
              </a>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
