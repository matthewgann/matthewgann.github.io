type Props = {
  title: string;
  description: string;
  datePublished: string;
  url: string;
};

export default function ArticleSchema({ title, description, datePublished, url }: Props) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      datePublished,
      author: {
        "@type": "Person",
        name: "Matthew Gann",
        honorificSuffix: "Ph.D.",
        url: "https://matthewgann.com",
      },
      publisher: {
        "@type": "Person",
        name: "Matthew Gann",
        url: "https://matthewgann.com",
      },
      url,
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://matthewgann.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research & Thoughts",
          item: "https://matthewgann.com/research",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
