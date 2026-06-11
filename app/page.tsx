import Image from "next/image";
import Link from "next/link";
import posts from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";
import ImageBand from "@/components/ImageBand";

const expertise = [
  {
    title: "Brand Strategy",
    description:
      "Developing integrated brand platforms and comprehensive marketing strategies that give institutions a clear identity, a consistent voice, and the positioning to compete for students, talent, and reputation.",
  },
  {
    title: "Business & Organizational Intelligence",
    description:
      "Applying research and systems thinking to understand how institutions learn, adapt, and make decisions. Building marketing capability that is structural and durable, not dependent on any one leader or budget cycle.",
  },
  {
    title: "Marketing Operations",
    description:
      "Elevating marketing from a production function to a strategic business driver, with governance structures, measurement frameworks, and operating models that scale and sustain results.",
  },
  {
    title: "Reputation & Crisis Management",
    description:
      "Developing proactive reputation strategies, issues management frameworks, and crisis communications plans that protect institutional trust when it matters most.",
  },
  {
    title: "Leadership & Organizational Development",
    description:
      "Building and leading high-performing teams, fostering cross-functional partnerships, and driving organizational change in complex, matrixed higher education institutions.",
  },
  {
    title: "Digital Strategy & Analytics",
    description:
      "Connecting digital investment to institutional outcomes, from SEO, AEO, and GEO to paid media, analytics infrastructure, web governance, and data-informed campaign planning.",
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden">
        <HeroVideo />
        {/* Warm parchment overlay — keeps dark text readable, ties to brand palette */}
        <div className="absolute inset-0" style={{ background: "rgba(248, 240, 222, 0.72)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
          <div
            className="rounded-full mb-8 shrink-0"
            style={{ padding: "20px", border: "2px solid var(--accent)" }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden">
              <Image
                src="/headshot.jpg"
                alt="Matthew Gann, Ph.D."
                width={288}
                height={288}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          <h1
            className="text-[clamp(1.6rem,8.5vw,3.75rem)] mb-3"
            style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
          >
            Matthew Gann, Ph.D.
          </h1>

          <p
            className="text-[clamp(1.25rem,5.5vw,1.875rem)] mb-6"
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
        <ScrollReveal>
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
                work, to leading systemwide marketing for Tennessee&apos;s largest
                higher education system, and now serving as associate vice
                chancellor and chief marketing officer at the University of Denver.
                Along the way, I&apos;ve also consulted for organizations across the
                legal, healthcare, nonprofit, and retirement sectors.
              </p>
              <p style={{ color: "var(--foreground)" }}>
                Beyond the professional work, I&apos;ve spent two decades mentoring
                students toward college access through tnAchieves and UT Achieves,
                coached capstone teams at the University of Tennessee, and served
                as president of both the Tennessee College Public Relations
                Association and Open Nashville. I currently serve on the national
                executive committee for PRSA&apos;s Counselors to Higher Education,
                and previously served on the Middle Tennessee Advisory Board of
                Youth Villages, a national nonprofit helping children and families
                facing serious emotional and behavioral challenges build
                successful lives. That connection to community matters as much to
                me as anything I do professionally.
              </p>
              <p style={{ color: "var(--foreground)" }}>
                Everything I do is anchored in a simple belief. Purpose-driven
                work, rooted in clear values, honest communication, and a
                genuine commitment to the people you serve, produces better
                results and leaves the world a little better than you found it.
              </p>
            </div>
            <div
              className="sm:col-span-2 p-6 space-y-5"
              style={{ background: "#1C1917" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8A7B6E" }}>
                At a Glance
              </p>
              {[
                { label: "Current Role", value: "Associate Vice Chancellor & CMO, University of Denver" },
                { label: "Based In", value: "Denver, CO & Nashville, TN" },
                { label: "Experience", value: "Two decades spanning higher education, healthcare, agency, and consulting" },
                { label: "Education", value: "Ph.D., Leadership & Organizational Intelligence" },
                { label: "Credentials", value: "Accredited in Public Relations (APR) · Tennessee Certified Economic Developer" },
                { label: "Research", value: "Marketing Operations · Organizational Intelligence · Leadership Effectiveness" },
                { label: "Recognition", value: "Otis Floyd Jr. Award for Excellence in Higher Education Administration · Charles Holmes Award" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#D4853A" }}>
                    {label}
                  </p>
                  <p className="text-sm leading-snug" style={{ color: "#F5F0EB" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <ImageBand src="/band-colorado.jpg" alt="Matthew Gann walking near Chapel on the Rock, Colorado" position="15% 65%" />

      {/* ── Expertise ───────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
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
        </ScrollReveal>
      </section>

      <ImageBand src="/band-ama.jpg" alt="Matthew Gann presenting at AMA 2025 Workshop" position="center 20%" />

      {/* ── Research & Thoughts ─────────────────────────────── */}
      <section style={{ background: "#1C1917" }}>
        <ScrollReveal>
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
                <Link href={post.path} style={{ textDecoration: "none" }}>
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
        </ScrollReveal>
      </section>
    </>
  );
}
