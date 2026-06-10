import Image from "next/image";
import Link from "next/link";
import posts from "@/lib/posts";

const expertise = [
  {
    title: "Brand Strategy",
    description:
      "Building brand platforms that give institutions a clear identity, a consistent voice, and the strategic foundation to compete for students, talent, and reputation.",
  },
  {
    title: "Organizational Intelligence",
    description:
      "Applying systems thinking and organizational research to understand how institutions learn, adapt, and make decisions. The goal is building marketing capability that is durable, not dependent on any one person or cycle.",
  },
  {
    title: "Marketing Operations",
    description:
      "Elevating marketing from a production function to a core business driver, with the governance, measurement frameworks, and operating models that make it sustainable.",
  },
  {
    title: "Reputation & Crisis Management",
    description:
      "Developing proactive reputation strategies and crisis communications frameworks that protect institutional trust when it matters most.",
  },
  {
    title: "Leadership & Organizational Development",
    description:
      "Building and developing high-performing teams, designing organizational structures that scale, and leading change in complex, matrixed institutions.",
  },
  {
    title: "Digital Strategy & Analytics",
    description:
      "Connecting digital investment to institutional outcomes, from SEO and paid media to analytics infrastructure, web strategy, and data-informed campaign planning.",
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: "#FFFEF9" }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
          <div
            className="w-72 h-72 rounded-full overflow-hidden mb-8"
            style={{ outline: "4px solid var(--border)" }}
          >
            <Image
              src="/headshot.jpg"
              alt="Matthew Gann, Ph.D."
              width={288}
              height={288}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

          <h1
            className="text-5xl sm:text-6xl mb-3"
            style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
          >
            Matthew Gann, Ph.D.
          </h1>

          <p
            className="text-2xl sm:text-3xl mb-6"
            style={{ color: "var(--accent)", fontFamily: "var(--font-calistoga), serif" }}
          >
            Purpose-Driven.
          </p>

          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Building intelligent marketing operations that help higher education
            institutions connect strategy, story, and service to students and
            their communities.
          </p>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section style={{ background: "#F2E9DC" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
          >
            About Me
          </h2>
          <div className="grid sm:grid-cols-5 gap-10 items-start">
            <div className="sm:col-span-3 space-y-4">
              <p style={{ color: "var(--foreground)" }}>
                I&apos;ve spent more than two decades at the intersection of strategy,
                storytelling, and leadership, helping institutions find their
                voice, build their brand, and connect with the people who matter
                most to them.
              </p>
              <p style={{ color: "var(--foreground)" }}>
                My career has taken me from early-stage digital work in the early
                2000s through executive marketing roles in healthcare and agency
                to leading systemwide marketing for Tennessee&apos;s largest higher
                education system, and now serving as the chief marketing officer
                for the University of Denver.
              </p>
              <p style={{ color: "var(--foreground)" }}>
                Everything I do is anchored in a simple belief. Purpose-driven
                work, rooted in clear values, honest communication, and a
                genuine commitment to the people you serve, produces better
                results and leaves the world a little better than you found it.
              </p>
            </div>
            <div
              className="sm:col-span-2 p-6 space-y-3"
              style={{ background: "#FFFEF9", border: "1px solid #E0D5C8" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                At a Glance
              </p>
              <ul className="space-y-2 text-sm list-none p-0 m-0" style={{ color: "var(--foreground)" }}>
                <li>Denver, Colorado</li>
                <li>Ph.D., Leadership &amp; Organizational Intelligence</li>
                <li>Accredited in Public Relations (APR)</li>
                <li>CMO, University of Denver</li>
                <li>20+ years in higher education marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ───────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2
            className="text-3xl mb-10"
            style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
          >
            Areas of Expertise
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research & Thoughts ─────────────────────────────── */}
      <section style={{ background: "#1C1917" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-calistoga), serif", color: "#F5F0EB" }}
            >
              Research &amp; Thoughts
            </h2>
            <Link
              href="/research"
              className="text-sm font-medium cursor-pointer"
              style={{ color: "#D4853A", textDecoration: "none" }}
            >
              All posts →
            </Link>
          </div>

          <div className="space-y-10">
            {posts.slice(0, 2).map((post) => (
              <article key={post.slug}>
                <Link href={`/research/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div className="flex flex-col gap-1 cursor-pointer">
                    <span
                      className="text-xs font-medium tracking-widest uppercase"
                      style={{ color: "#8A7B6E" }}
                    >
                      {post.date}
                    </span>
                    <h3
                      className="text-xl transition-colors duration-150 hover:text-amber-500"
                      style={{ fontFamily: "var(--font-calistoga), serif", color: "#F5F0EB" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: "#A8998C" }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
