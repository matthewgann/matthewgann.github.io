import type { Metadata } from "next";
import Image from "next/image";
import posts from "@/lib/posts";
import StackedCards from "@/components/StackedCards";
import { BLOG_ID, PERSON_ID, SITE_URL, WEBSITE_ID, WRITING_LABEL, WRITING_PATH, jsonLd } from "@/lib/site";

const DESCRIPTION =
  "Writing on marketing, leadership, higher education, and purpose-driven work by Matthew Gann, Ph.D., chief marketing officer at the University of Denver.";
const URL = `${SITE_URL}${WRITING_PATH}`;

export const metadata: Metadata = {
  title: WRITING_LABEL,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `${WRITING_LABEL} | Matthew Gann, Ph.D.`,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/band-car.jpg", width: 1600, height: 1200, alt: "Matthew Gann at an automotive show" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${WRITING_LABEL} | Matthew Gann, Ph.D.`,
    description: DESCRIPTION,
    images: ["/band-car.jpg"],
  },
};

const blogSchema = [
  {
    "@type": "Blog",
    "@id": BLOG_ID,
    url: URL,
    name: `${WRITING_LABEL} by Matthew Gann, Ph.D.`,
    description: DESCRIPTION,
    inLanguage: "en-US",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${p.path}#article`,
      headline: p.title,
      url: `${SITE_URL}${p.path}`,
      datePublished: p.dateISO,
      description: p.excerpt,
      author: { "@id": PERSON_ID },
    })),
  },
  {
    "@type": "CollectionPage",
    "@id": URL,
    url: URL,
    name: WRITING_LABEL,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": BLOG_ID },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: WRITING_LABEL, item: URL },
    ],
  },
];

export default function ResearchPage() {
  const items = posts.map((p) => ({
    id: p.slug,
    title: p.title,
    body: p.excerpt,
    image: p.image,
    imageAlt: p.imageAlt,
    imagePosition: p.imagePosition,
    href: p.path,
    linkLabel: "Read the post",
    meta: p.date,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />

      {/* Hero */}
      <section className="relative hairline-b" style={{ minHeight: "min(78svh, 720px)" }}>
        <Image
          src="/band-car.jpg"
          alt="Matthew Gann at an automotive show"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "28% 38%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,19,17,0.72) 0%, rgba(20,19,17,0.15) 55%, rgba(20,19,17,0.05) 100%)",
          }}
        />
        <div
          className="relative page-x flex flex-col justify-end pb-8 md:pb-10"
          style={{ minHeight: "min(78svh, 720px)" }}
        >
          <h1 className="t-display m-0" style={{ color: "#fff" }}>
            {WRITING_LABEL}
          </h1>
        </div>
      </section>

      <section className="hairline-b">
        <div className="page-x py-8 md:py-10">
          <p className="t-lead m-0 max-w-[44ch]">
            Musings on marketing strategy, leadership, higher education, and what it means to do
            purpose-driven.
          </p>
        </div>
      </section>

      <StackedCards items={items} headingLevel="h2" />

      {/* AI note */}
      <section className="hairline-t" style={{ background: "var(--bg-raised)" }}>
        <div className="page-x py-14 grid md:grid-cols-12 gap-6">
          <h2 className="md:col-span-3 t-small font-semibold m-0">A note on AI</h2>
          <p className="md:col-span-7 lg:col-span-6 t-small m-0" style={{ color: "var(--ink-soft)" }}>
            The writing and ideas on this site are my own. I use AI tools to support the process:
            brainstorming concepts, surfacing relevant literature to substantiate my points, and
            proofreading for grammar, spelling, and punctuation, and suggesting ways to improve clarity
            and flow. All suggestions are reviewed before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
