import posts from "@/lib/posts";
import { DEFAULT_DESCRIPTION, EMAIL, SITE_NAME, SITE_URL, WRITING_LABEL, WRITING_PATH } from "@/lib/site";

export const dynamic = "force-static";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}${p.path}`;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.dateISO + "T12:00:00Z").toUTCString()}</pubDate>
      <description>${escape(p.excerpt)}</description>
      <author>${EMAIL} (Matthew Gann)</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_NAME)} | ${escape(WRITING_LABEL)}</title>
    <link>${SITE_URL}${WRITING_PATH}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(DEFAULT_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(posts[0].dateISO + "T12:00:00Z").toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
