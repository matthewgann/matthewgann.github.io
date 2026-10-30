import type { Metadata } from "next";
import posts from "@/lib/posts";
import StackedCards from "@/components/StackedCards";
import ImageBand from "@/components/ImageBand";
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

      {/* Header, matching the Experience page */}
      <section className="hairline-b">
        <div className="page-x pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className="t-display">{WRITING_LABEL}</h1>
            <p className="t-lead mt-8 mb-0 max-w-[58ch]">
              On marketing strategy, leadership, higher education, and what it means to do
              purpose-driven.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-2 items-start md:items-end md:justify-end t-small">
            <a href="/feed.xml" className="font-medium no-underline hover:text-accent transition-colors">
              Subscribe by RSS ↗
            </a>
          </div>
        </div>
      </section>

      <ImageBand src="/band-car.jpg" alt="Matthew Gann at an automotive show" position="28% 38%" />

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
