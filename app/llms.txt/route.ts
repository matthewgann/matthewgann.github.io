import posts from "@/lib/posts";
import {
  EMAIL,
  LINKEDIN,
  SITE_NAME,
  SITE_URL,
  WRITING_LABEL,
  WRITING_PATH,
  absUrl,
  personSchema,
} from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text summary of the site for AI crawlers, generated from the same data as the pages. */
export function GET() {
  const writing = posts.map((p) => `- [${p.title}](${absUrl(p.path)}): ${p.excerpt}`).join("\n");

  const text = `# ${SITE_NAME}

> Personal site of Matthew Gann, Ph.D., Associate Vice Chancellor, Chief Marketing Officer at the University of Denver. ${personSchema.description} Based in Denver, Colorado and Nashville, Tennessee.

Site: ${SITE_URL}
Contact: ${EMAIL}
LinkedIn: ${LINKEDIN}
RSS: ${SITE_URL}/feed.xml

## Pages

- [Home](${SITE_URL}): About, at-a-glance credentials, and areas of practice (brand strategy, business and organizational intelligence, marketing operations, reputation and crisis management, leadership and organizational development, content and social strategy, digital strategy and analytics).
- [Experience and Background](${absUrl("/experience")}): Career history (University of Denver; Tennessee Board of Regents; Tennessee Tech University; Wellness Healthcare; N2 The Net; WPF Management; independent consulting), education (Ph.D. and M.O.L., Trevecca Nazarene University; B.S., Tennessee Tech University), credentials (APR; Tennessee Certified Economic Developer), awards, memberships, and community roles.
- [${WRITING_LABEL}](${absUrl(WRITING_PATH)}): Writing on marketing, leadership, higher education, and purpose-driven work.
- [Get in Touch](${absUrl("/contact")}): Email, LinkedIn, and location.

## Writing

${writing}

## Notes

- The writing and ideas on this site are Matthew Gann's own. AI tools support brainstorming, literature surfacing, and proofreading; all suggestions are reviewed before publishing.
- Structured data: Person, WebSite, ProfilePage, Blog, and BlogPosting JSON-LD are embedded on the relevant pages.
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
