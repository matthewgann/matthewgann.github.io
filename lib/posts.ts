import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Metadata } from "next";
import { SITE_URL } from "./site";

/**
 * Posts live in content/posts as Markdown files with a frontmatter header.
 * The filename (minus .md) is the slug and must not change once published,
 * because it is part of the public URL: /research/YYYY/MM/slug.
 *
 * Frontmatter:
 *   title:          required
 *   date:           required, YYYY-MM-DD; sets the URL year and month
 *   excerpt:        required; listing, share tags, feed, schema
 *   image:          optional, path under public/ such as /campus-run.jpg
 *   imageAlt:       required when image is set
 *   imagePosition:  optional CSS object-position, default "center"
 *   draft:          optional; true keeps the post out of production builds
 */
export type Post = {
  slug: string;
  path: string;
  title: string;
  date: string;
  dateISO: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  draft: boolean;
  /** Rendered HTML for the post body. */
  html: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const s = String(value ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw new Error(`Post date must be YYYY-MM-DD, got "${s}"`);
  return s;
}

function longDate(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** "2026-10-26" -> "Oct '26" */
export function shortDate(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[m - 1].slice(0, 3)} ’${String(y).slice(-2)}`;
}

function clean(v: unknown): string | undefined {
  const s = v == null ? "" : String(v).trim();
  return s ? s : undefined;
}

function loadPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const all = files.map((file): Post => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    for (const key of ["title", "date", "excerpt"]) {
      if (!clean(data[key]) && !(key === "date" && data.date instanceof Date)) {
        throw new Error(`content/posts/${file} is missing "${key}"`);
      }
    }
    const image = clean(data.image);
    const imageAlt = clean(data.imageAlt);
    if (image && !imageAlt) throw new Error(`content/posts/${file} has an image but no imageAlt`);
    const dateISO = toISODate(data.date);
    const [y, m] = dateISO.split("-");
    return {
      slug,
      path: `/research/${y}/${m}/${slug}`,
      title: String(data.title).trim(),
      date: longDate(dateISO),
      dateISO,
      excerpt: String(data.excerpt).trim(),
      image,
      imageAlt,
      imagePosition: clean(data.imagePosition),
      draft: Boolean(data.draft),
      html: marked.parse(content.trim(), { gfm: true, breaks: false }) as string,
    };
  });
  const visible = process.env.NODE_ENV === "production" ? all.filter((p) => !p.draft) : all;
  return visible.sort((a, b) => (a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : a.slug.localeCompare(b.slug)));
}

const posts: Post[] = loadPosts();

export default posts;

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
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
  };
}
