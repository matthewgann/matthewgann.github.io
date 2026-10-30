import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import posts from "@/lib/posts";
import StackedCards from "@/components/StackedCards";
import ImageBand from "@/components/ImageBand";
import { PERSON_ID, SITE_URL, WEBSITE_ID, WRITING_LABEL, WRITING_PATH, jsonLd } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const expertise = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    body:
      "Developing integrated brand platforms and comprehensive marketing strategies that give institutions a clear identity, a consistent voice, and the positioning to compete for students, talent, and reputation.",
    image: "/band-vision.jpg",
    imageAlt: "Matthew Gann at a CMO Lab event",
    imagePosition: "75% 30%",
  },
  {
    id: "organizational-intelligence",
    title: "Business & Organizational Intelligence",
    body:
      "Applying research and systems thinking to understand how institutions learn, adapt, and make decisions. Building marketing capability that is structural and durable, not dependent on any one leader or budget cycle.",
    image: "/band-conference.jpg",
    imageAlt: "Matthew Gann at a professional conference",
    imagePosition: "center 15%",
  },
  {
    id: "marketing-operations",
    title: "Marketing Operations",
    body:
      "Elevating marketing from a production function to a strategic business driver, with governance structures, measurement frameworks, and operating models that scale and sustain results.",
    image: "/band-ama.jpg",
    imageAlt: "Matthew Gann presenting at AMA 2025 Workshop",
    imagePosition: "center 20%",
  },
  {
    id: "reputation-crisis",
    title: "Reputation & Crisis Management",
    body:
      "Developing proactive reputation strategies, issues management frameworks, and crisis communications plans that protect institutional trust when it matters most.",
    image: "/broncos-panel.jpg",
    imageAlt:
      "Matthew Gann moderating a conversation with Hailey Sullivan and Sandy Young of the Denver Broncos at CASE 2026",
    imagePosition: "center 30%",
  },
  {
    id: "leadership",
    title: "Leadership & Organizational Development",
    body:
      "Building and leading high-performing teams, fostering cross-functional partnerships, and driving organizational change in complex, matrixed higher education institutions.",
    image: "/campus-run.jpg",
    imageAlt:
      "Matthew Gann with a group of colleagues on the lawn at the University of Denver before a campus run",
    imagePosition: "center 40%",
  },
  {
    id: "digital-analytics",
    title: "Digital Strategy & Analytics",
    body:
      "Connecting digital investment to institutional outcomes, from SEO, AEO, and GEO to paid media, analytics infrastructure, web governance, and data-informed campaign planning.",
    image: "/band-colorado.jpg",
    imageAlt: "Matthew Gann in Colorado",
    imagePosition: "center 30%",
  },
];

const glance = [
  { label: "Current Role", value: "Associate Vice Chancellor & CMO, University of Denver" },
  { label: "Based In", value: "Denver, CO & Nashville, TN" },
  { label: "Experience", value: "Two decades spanning higher education, healthcare, agency, and consulting" },
  {
    label: "Education",
    value:
      "Ph.D., Leadership & Organizational Intelligence · B.S., Business Administration / Management Information Systems",
  },
  { label: "Credentials", value: "Accredited in Public Relations (APR) · Tennessee Certified Economic Developer" },
  { label: "Research", value: "Marketing Operations · Organizational Intelligence · Leadership Effectiveness" },
  {
    label: "Recognition",
    value: "Otis Floyd Jr. Award for Excellence in Higher Education Administration · Charles Holmes Award",
  },
];

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Matthew Gann, Ph.D.",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
  about: { "@id": PERSON_ID },
  inLanguage: "en-US",
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([profilePage]) }} />

      {/* ── Hero: split, text left / portrait right ───────────── */}
      <section className="grid md:grid-cols-2 hairline-b" style={{ minHeight: "calc(100svh - var(--nav-h))" }}>
        <div className="page-x flex flex-col justify-center py-14 md:py-16 order-2 md:order-1">
          <h1 className="t-display m-0 max-w-[12ch]">
            <span className="scrawl">
              Purpose-driven
              <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                <path d="M4 14 C 60 4, 120 20, 190 10 S 320 6, 396 15" />
              </svg>
            </span>{" "}
            marketing and storytelling.
          </h1>
          <p className="t-lead mt-10 max-w-[46ch]">
            Building intelligent marketing operations that help higher education institutions
            connect strategy, story, and service to students and their communities.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-12">
            <Link href={WRITING_PATH} className="btn btn-accent">
              <span>{WRITING_LABEL}</span>
              <span aria-hidden>↗</span>
            </Link>
            <Link href="/experience" className="btn">
              <span>Experience</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2 hairline-b md:border-b-0 md:hairline-l min-h-[62vw] md:min-h-0">
          <Image
            src="/headshot.jpg"
            alt="Matthew Gann, Ph.D."
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-(--gutter) pointer-events-none">
            <span className="mono hidden md:inline" style={{ color: "rgba(255,255,255,0.85)" }}>
              Scroll to explore ↓
            </span>
            <span
              className="mono text-right ml-auto"
              style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Denver, CO
              <br />
              39.6766° N 104.9619° W
            </span>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="guides hairline-b">
        <div className="page-x pt-24 pb-20 md:pt-32 md:pb-28">
          <h2 className="t-statement text-center max-w-[34ch] mx-auto mb-16 md:mb-24 font-semibold">
            I&apos;ve spent more than two decades at the intersection of strategy, storytelling, and
            leadership, helping institutions find their voice, build their brand, and connect with the
            people who matter most to them.
          </h2>

          <div className="grid md:grid-cols-12 gap-x-10 gap-y-10 items-start">
            <div className="md:col-span-7 lg:col-span-6 lg:col-start-2 t-body flex flex-col gap-5">
              <p>
                My career has taken me from early-stage digital work in the early 2000s through
                executive marketing roles in healthcare and agency work, to leading systemwide
                marketing for Tennessee&apos;s largest higher education system, and now serving as
                associate vice chancellor and chief marketing officer at the University of Denver.
                Along the way, I&apos;ve also consulted for organizations across the legal,
                healthcare, nonprofit, and retirement sectors.
              </p>
              <p>
                Beyond the professional work, I&apos;ve spent two decades mentoring students toward
                college access through tnAchieves and UT Achieves, coached capstone teams at the
                University of Tennessee, and served as president of both the Tennessee College Public
                Relations Association and Open Nashville. I currently serve on the national executive
                committee for PRSA&apos;s Counselors to Higher Education, and previously served on the
                Middle Tennessee Advisory Board of Youth Villages, a national nonprofit helping
                children and families facing serious emotional and behavioral challenges build
                successful lives. That connection to community matters as much to me as anything I do
                professionally.
              </p>
              <p>
                Everything I do is anchored in a simple belief. Purpose-driven work, rooted in clear
                values, honest communication, and a genuine commitment to the people you serve,
                produces better results and leaves the world a little better than you found it.
              </p>
            </div>

            <dl className="md:col-span-5 lg:col-span-4 lg:col-start-9 m-0 hairline-t">
              {glance.map(({ label, value }) => (
                <div key={label} className="py-4 hairline-b grid grid-cols-[7.5rem_1fr] gap-4">
                  <dt className="mono" style={{ color: "var(--accent)" }}>
                    {label}
                  </dt>
                  <dd className="m-0 t-small font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Expertise, stacked ────────────────────────────────── */}
      <section id="work" aria-labelledby="work-heading">
        <div className="page-x pt-20 pb-12 md:pt-28 md:pb-16">
          <span className="mono block mb-6" style={{ color: "var(--ink-faint)" }}>
            What I do
          </span>
          <h2 id="work-heading" className="t-headline max-w-[16ch]">
            Where strategy, story, and service meet.
          </h2>
        </div>
        <StackedCards items={expertise} headingLevel="h3" />
      </section>

      <ImageBand src="/band-ama.jpg" alt="Matthew Gann presenting at AMA 2025 Workshop" position="center 20%" />

      {/* ── Recent writing ────────────────────────────────────── */}
      <section id="writing" aria-labelledby="writing-heading">
        <div className="page-x pt-20 pb-10 md:pt-28 md:pb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mono block mb-6" style={{ color: "var(--ink-faint)" }}>
              {WRITING_LABEL}
            </span>
            <h2 id="writing-heading" className="t-headline">
              Recent writing.
            </h2>
          </div>
          <Link href={WRITING_PATH} className="btn">
            <span>All posts</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
        <ul className="list-none m-0 p-0 hairline-t">
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug} className="hairline-b">
              <Link
                href={post.path}
                className="page-x py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-6 no-underline group"
              >
                <time dateTime={post.dateISO} className="md:col-span-2 mono" style={{ color: "var(--ink-faint)" }}>
                  {post.date}
                </time>
                <span className="md:col-span-6">
                  <span className="t-card block group-hover:text-accent transition-colors">{post.title}</span>
                </span>
                <span className="md:col-span-4 flex flex-col gap-4">
                  <span className="t-small" style={{ color: "var(--ink-soft)" }}>
                    {post.excerpt}
                  </span>
                  <span className="arrow-link">
                    <Arrow />
                    Read
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section style={{ background: "var(--bg-raised)" }} className="hairline-t">
        <div className="page-x py-20 md:py-28 grid md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 t-headline max-w-[18ch]">
            Whether you want to talk about a project, a speaking opportunity, or just connect, I&apos;d
            love to hear from you.
          </h2>
          <div className="md:col-span-4 flex md:justify-end">
            <Link href="/contact" className="btn btn-accent">
              <span>Get in Touch</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
