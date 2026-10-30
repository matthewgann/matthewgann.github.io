import type { Metadata } from "next";
import { SITE_URL } from "./site";

export type Post = {
  slug: string;
  path: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  excerpt: string;
  /** Optional lead photo. Shown on the post page and in the stacked list. */
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

const posts: Post[] = [
  {
    slug: "an-amazing-employee-just-quit",
    path: "/research/2026/10/an-amazing-employee-just-quit",
    title: "An Amazing Employee Just Quit. I Couldn't Be Prouder.",
    date: "October 2026",
    dateISO: "2026-10-26",
    category: "Leadership",
    excerpt:
      "A few thoughts on developing people, supporting their ambitions, and remembering that we work to live.",
    image: "/campus-run.jpg",
    imageAlt:
      "Matthew Gann with a group of colleagues on the lawn at the University of Denver before a campus run",
    imagePosition: "center 40%",
  },
  {
    slug: "when-marketing-is-invited-too-late",
    path: "/research/2026/10/when-marketing-is-invited-too-late",
    title: "When Marketing Is Invited Too Late",
    date: "October 2026",
    dateISO: "2026-10-07",
    category: "Higher Education",
    excerpt:
      "The best marketing strategy in the world can't always rescue a poorly conceived organizational strategy. And yet we keep asking it to try.",
  },
  {
    slug: "great-players-want-the-truth",
    path: "/research/2026/07/great-players-want-the-truth",
    title: "Great Players Want the Truth",
    date: "July 2026",
    dateISO: "2026-07-12",
    category: "Leadership",
    excerpt:
      "The coaches who built women's basketball didn't protect their best players from hard coaching. They gave them more of it. Most organizations do the opposite, and it's costing them.",
  },
  {
    slug: "return-on-objectives",
    path: "/research/2026/07/return-on-objectives",
    title: "The Real ROO",
    date: "July 2026",
    dateISO: "2026-07-08",
    category: "Higher Education",
    excerpt:
      "ROI tells you the money came back. ROO asks whether you did what you set out to do. In higher education, the gap between those two questions is where most strategy breaks down.",
    image: "/broncos-panel.jpg",
    imageAlt:
      "Matthew Gann moderating a conversation with Hailey Sullivan and Sandy Young of the Denver Broncos at CASE 2026",
    imagePosition: "center 30%",
  },
  {
    slug: "one-year-in",
    path: "/research/2026/06/one-year-in",
    title: "One Year In",
    date: "June 2026",
    dateISO: "2026-06-15",
    category: "Leadership",
    excerpt:
      "One year at the University of Denver. On making hard decisions on purpose, why brand marketing is an investment the sector keeps getting wrong, and what commencement makes undeniably clear.",
    image: "/maroon-bells.jpg",
    imageAlt: "Matthew Gann at Maroon Bells near Aspen, Colorado",
    imagePosition: "center 30%",
  },
  {
    slug: "future-of-higher-ed-websites",
    path: "/research/2026/06/future-of-higher-ed-websites",
    title: "The Higher Ed Website Is Dead. We Just Haven't Buried It Yet.",
    date: "June 2026",
    dateISO: "2026-06-10",
    category: "Higher Education",
    excerpt:
      "Higher education websites are still built like org charts with a search bar. What comes next looks nothing like that.",
  },
  {
    slug: "responsibility-without-authority",
    path: "/research/2026/06/responsibility-without-authority",
    title: "Responsible for the Sale, Not the Product",
    date: "June 2026",
    dateISO: "2026-06-10",
    category: "Higher Education",
    excerpt:
      "Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse.",
  },
  {
    slug: "data-driven-differentiation",
    path: "/research/2026/05/data-driven-differentiation",
    title: "Data-Driven Differentiation in Higher Education",
    date: "May 2026",
    dateISO: "2026-05-01",
    category: "Higher Education",
    excerpt:
      "Most institutions know they need to stand out. Few have a repeatable system for figuring out what they actually stand out for.",
  },
  {
    slug: "purpose-driven-leadership",
    path: "/research/2026/04/purpose-driven-leadership",
    title: "What Purpose-Driven Leadership Actually Looks Like",
    date: "April 2026",
    dateISO: "2026-04-01",
    category: "Leadership",
    excerpt:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
  },
  {
    slug: "marketing-maturity-in-higher-ed",
    path: "/research/2026/03/marketing-maturity-in-higher-ed",
    title: "Marketing Maturity in Higher Education",
    date: "March 2026",
    dateISO: "2026-03-01",
    category: "Higher Education",
    excerpt:
      "Most universities are still treating marketing as a production function. The ones winning the future are building it as a strategic capability.",
  },
];

export default posts;

/** "2026-10-26" -> "Oct '26" */
export function shortDate(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ’${String(y).slice(-2)}`;
}

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return post;
}

/** Previous (newer) and next (older) posts for in-article navigation. */
export function getNeighbors(slug: string): { newer?: Post; older?: Post } {
  const i = posts.findIndex((p) => p.slug === slug);
  return { newer: i > 0 ? posts[i - 1] : undefined, older: i >= 0 ? posts[i + 1] : undefined };
}

/** One source of truth for a post's <head>: title, description, canonical, OG, Twitter. */
export function postMetadata(slug: string): Metadata {
  const post = getPost(slug);
  const url = `${SITE_URL}${post.path}`;
  const image = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`;
  const imageAlt = post.image ? post.imageAlt ?? post.title : "Matthew Gann, Ph.D.";
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Matthew Gann, Ph.D.",
      locale: "en_US",
      type: "article",
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      authors: [SITE_URL],
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}
