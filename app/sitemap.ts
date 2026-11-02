import type { MetadataRoute } from "next";
import posts from "@/lib/posts";
import { SITE_URL, WRITING_PATH, absUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absUrl(post.path),
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(posts[0].dateISO),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absUrl(WRITING_PATH),
      lastModified: new Date(posts[0].dateISO),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absUrl("/experience"),
      lastModified: new Date("2026-10-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absUrl("/contact"),
      lastModified: new Date("2026-06-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...postUrls,
  ];
}
