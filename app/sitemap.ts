import type { MetadataRoute } from "next";
import posts from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://matthewgann.com${post.path}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://matthewgann.com",
      lastModified: new Date("2026-07-08"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://matthewgann.com/research",
      lastModified: new Date("2026-07-12"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://matthewgann.com/resume",
      lastModified: new Date("2026-06-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://matthewgann.com/contact",
      lastModified: new Date("2026-06-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...postUrls,
  ];
}
