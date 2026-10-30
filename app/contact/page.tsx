import type { Metadata } from "next";
import ImageBand from "@/components/ImageBand";
import { EMAIL, LINKEDIN, PERSON_ID, SITE_URL, WEBSITE_ID, jsonLd } from "@/lib/site";

const URL = `${SITE_URL}/contact`;
const DESCRIPTION =
  "Contact Matthew Gann, Ph.D., chief marketing officer at the University of Denver, about a project, a speaking opportunity, or just to connect.";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: "Get in Touch | Matthew Gann, Ph.D.",
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Matthew Gann, Ph.D." }],
  },
  twitter: { card: "summary_large_image", title: "Get in Touch | Matthew Gann, Ph.D.", description: DESCRIPTION, images: ["/og-image.png"] },
};

const schema = [
  {
    "@type": "ContactPage",
    "@id": URL,
    url: URL,
    name: "Get in Touch",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Get in Touch", item: URL },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <section className="hairline-b">
        <div className="page-x pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h1 className="t-display">Get in Touch</h1>
          </div>
          <p className="md:col-span-5 t-lead m-0 max-w-[40ch]">
            Whether you want to talk about a project, a speaking opportunity, or just connect, I&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 hairline-b">
        <div className="page-x py-10 md:py-14 hairline-b md:border-b-0">
          <span className="kicker block mb-3" style={{ color: "var(--ink-faint)" }}>
            Email
          </span>
          <a href={`mailto:${EMAIL}`} className="t-card no-underline [overflow-wrap:anywhere] hover:text-accent transition-colors">
            {EMAIL}
          </a>
        </div>
        <div className="page-x py-10 md:py-14 hairline-b md:border-b-0 md:hairline-l">
          <span className="kicker block mb-3" style={{ color: "var(--ink-faint)" }}>
            LinkedIn
          </span>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer me"
            className="t-card no-underline hover:text-accent transition-colors"
          >
            linkedin.com/in/matthewgann ↗
          </a>
        </div>
        <div className="page-x py-10 md:py-14 md:hairline-l">
          <span className="kicker block mb-3" style={{ color: "var(--ink-faint)" }}>
            Location
          </span>
          <p className="t-card m-0">
            Denver, Colorado &amp;
            <br />
            Nashville, Tennessee
          </p>
        </div>
      </section>

      <ImageBand
        src="/stage-door.jpg"
        alt="Matthew Gann standing under a Stage Door sign"
        position="center top"
        height="clamp(320px, 56vw, 720px)"
      />
    </>
  );
}
