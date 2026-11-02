import type { Metadata } from "next";
import posts, { shortDate } from "@/lib/posts";
import StackedCards from "@/components/StackedCards";
import ImageBand from "@/components/ImageBand";
import ContactCta from "@/components/ContactCta";
import AiNote from "@/components/AiNote";
import { BLOG_ID, PERSON_ID, SITE_URL, WEBSITE_ID, WRITING_LABEL, WRITING_PATH, absUrl, jsonLd } from "@/lib/site";

const DESCRIPTION =
  "Essays by Matthew Gann, Ph.D., on marketing, brand strategy, and leadership in higher education and purpose-driven organizations.";
const URL = absUrl(WRITING_PATH);

export const metadata: Metadata = {
  title: WRITING_LABEL,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `${WRITING_LABEL} | Matthew Gann, Ph.D.`,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/band-doorway.jpg", width: 1920, height: 947, alt: "Matthew Gann in a gothic archway" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${WRITING_LABEL} | Matthew Gann, Ph.D.`,
    description: DESCRIPTION,
    images: ["/band-doorway.jpg"],
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
      "@id": `${absUrl(p.path)}#article`,
      headline: p.title,
      url: absUrl(p.path),
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
    meta: shortDate(p.dateISO),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />

      {/* Header: dark band, title and intro side by side */}
      <section style={{ background: "var(--dark)", color: "var(--on-dark)" }}>
        <div className="page-x pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
          <h1 className="md:col-span-6 t-display m-0" style={{ color: "var(--on-dark)" }}>
            <span className="scrawl" style={{ color: "var(--on-dark)" }}>
              Research
              <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                <path d="M4 14 C 60 4, 120 20, 190 10 S 320 6, 396 15" />
              </svg>
            </span>
            <br />
            and Musings
          </h1>
          <p className="md:col-span-6 t-lead m-0" style={{ color: "rgba(244,242,238,0.78)" }}>
            These posts are about the work of marketing inside purpose-driven organizations and
            about leading the people who do it. Most of them come out of the day job: how
            organizations decide what they stand for, why brand is an investment rather than an
            expense, and how to measure whether a strategy did what it set out to do. Some are about
            leadership more broadly, including developing people and telling them the truth.
          </p>
        </div>
      </section>

      <ImageBand src="/band-doorway.jpg" alt="Matthew Gann in a gothic archway" position="center 20%" priority />

      <StackedCards items={items} headingLevel="h2" />

      <AiNote />
      <ContactCta />
    </>
  );
}
