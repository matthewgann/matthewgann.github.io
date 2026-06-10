import Image from "next/image";
import Link from "next/link";

const expertise = [
  {
    title: "Brand Strategy",
    description:
      "Translating organizational vision into compelling brand platforms that build trust, drive engagement, and strengthen institutional reputation.",
  },
  {
    title: "Marketing & Communications",
    description:
      "Designing integrated, data-driven campaigns across digital and traditional channels — from national awareness to enrollment and community engagement.",
  },
  {
    title: "Leadership & Team Building",
    description:
      "Building and leading high-performing marketing organizations, managing multi-million-dollar budgets, and fostering cultures of creativity and accountability.",
  },
];

const recentPosts = [
  {
    slug: "purpose-driven-leadership",
    title: "What Purpose-Driven Leadership Actually Looks Like",
    date: "2025",
    excerpt:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made — from hiring to campaign strategy.",
  },
  {
    slug: "marketing-maturity-in-higher-ed",
    title: "Marketing Maturity in Higher Education",
    date: "2025",
    excerpt:
      "Most universities are still treating marketing as a production function. The ones winning the future are building it as a strategic capability.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 ring-4 ring-offset-2" style={{ outline: "4px solid var(--border)" }}>
          <Image
            src="/headshot.jpg"
            alt="Matthew Gann, Ph.D."
            width={160}
            height={160}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <h1 className="text-5xl sm:text-6xl mb-3" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
          Matthew Gann, Ph.D.
        </h1>

        <p className="text-2xl sm:text-3xl mb-6" style={{ color: "var(--accent)", fontFamily: "var(--font-calistoga), serif" }}>
          Purpose-Driven.
        </p>

        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Marketing and communications executive building brands that move
          higher education forward. Chief Marketing Officer at the University
          of Denver.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/resume"
            className="px-6 py-3 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80 cursor-pointer"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            View Resume
          </Link>
          <Link
            href="/research"
            className="px-6 py-3 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-70 cursor-pointer"
            style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "transparent" }}
          >
            Read My Writing
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)" }} />
      </div>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
          About Me
        </h2>
        <div className="grid sm:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-3 space-y-4">
            <p style={{ color: "var(--foreground)" }}>
              I&apos;ve spent more than two decades at the intersection of strategy,
              storytelling, and leadership — helping institutions find their
              voice, build their brand, and connect with the people who matter
              most to them.
            </p>
            <p style={{ color: "var(--foreground)" }}>
              My career has taken me from early-stage digital work in the early
              2000s, through executive marketing roles in healthcare and agency,
              to leading systemwide marketing for Tennessee&apos;s largest higher
              education system — and now serving as the chief marketing officer
              for the University of Denver.
            </p>
            <p style={{ color: "var(--foreground)" }}>
              Everything I do is anchored in a simple belief: purpose-driven
              work — rooted in clear values, honest communication, and a
              genuine commitment to the people you serve — produces better
              results and leaves the world a little better than you found it.
            </p>
          </div>
          <div
            className="sm:col-span-2 p-6 space-y-3"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              At a Glance
            </p>
            <ul className="space-y-2 text-sm list-none p-0 m-0" style={{ color: "var(--foreground)" }}>
              <li>Denver, Colorado</li>
              <li>Ph.D., Leadership &amp; Organizational Intelligence</li>
              <li>APR — Accredited in Public Relations</li>
              <li>CMO, University of Denver</li>
              <li>20+ years in higher education marketing</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)" }} />
      </div>

      {/* Expertise */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-10" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
          Areas of Expertise
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
              <h3 className="text-xl" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)" }} />
      </div>

      {/* Recent Writing */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
            Recent Writing
          </h2>
          <Link href="/research" className="text-sm font-medium cursor-pointer" style={{ color: "var(--accent)", textDecoration: "none" }}>
            All posts →
          </Link>
        </div>

        <div className="space-y-10">
          {recentPosts.map((post) => (
            <article key={post.slug}>
              <Link href={`/research/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="flex flex-col gap-1 group cursor-pointer">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                    {post.date}
                  </span>
                  <h3 className="text-xl transition-colors duration-150" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--text-muted)" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
