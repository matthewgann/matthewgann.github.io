import type { Metadata } from "next";
import posts, { shortDate } from "@/lib/posts";
import StackedCards from "@/components/StackedCards";
import ImageBand from "@/components/ImageBand";
import ContactCta from "@/components/ContactCta";
import AiNote from "@/components/AiNote";
import { BLOG_ID, PERSON_ID, SITE_URL, WEBSITE_ID, WRITING_LABEL, WRITING_PATH, jsonLd } from "@/lib/site";

const DESCRIPTION =
  "Essays on higher education marketing, brand strategy, and leadership by Matthew Gann, Ph.D., chief marketing officer at the University of Denver: marketing maturity, brand as investment, return on objectives, and developing people.";
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
    meta: shortDate(p.dateISO),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />

      {/* Header, matching the Experience page */}
      <section className="hairline-b">
        <div className="page-x pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className="t-display">{WRITING_LABEL}</h1>
            <p className="kicker mt-6 mb-0" style={{ color: "var(--ink-soft)" }}>
              Marketing · Leadership · Higher Education
            </p>
            <p className="t-lead mt-8 mb-0 max-w-[58ch]">
              These posts are about the work of marketing inside higher education and about leading
              the people who do it. Most of them come out of the day job: how universities decide
              what they stand for, why brand is an investment rather than an expense, and how to
              measure whether a strategy did what it set out to do. Some are about leadership more
              broadly, including developing people and telling them the truth.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-2 items-start md:items-end md:justify-end t-small">
            <a href="/feed.xml" className="font-medium no-underline hover:text-accent transition-colors">
              Subscribe by RSS ↗
            </a>
          </div>
        </div>
      </section>

      <ImageBand src="/band-doorway.jpg" alt="Matthew Gann in a gothic archway" position="center 20%" priority />

      <StackedCards items={items} headingLevel="h2" />

      <AiNote />
      <ContactCta />
    </>
  );
}
