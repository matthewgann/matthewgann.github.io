import { BLOG_ID, PERSON_ID, SITE_URL, WEBSITE_ID, WRITING_LABEL, WRITING_PATH, jsonLd } from "@/lib/site";

type Props = {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  section?: string;
};

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  image,
  section,
}: Props) {
  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: title,
      description,
      datePublished,
      dateModified: dateModified ?? datePublished,
      inLanguage: "en-US",
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      isPartOf: { "@id": BLOG_ID },
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(image ? { image: [`${SITE_URL}${image}`] } : {}),
      ...(section ? { articleSection: section } : {}),
    },
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: WRITING_LABEL, item: `${SITE_URL}${WRITING_PATH}` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
  );
}
