#!/usr/bin/env node
/**
 * Scaffold a new post.
 *
 *   npm run new-post -- "The Title of the Post"
 *   npm run new-post -- "The Title" --slug custom-slug --date 2026-11-04
 *
 * Creates content/posts/<slug>.md as a draft. Edit it, set draft: false,
 * commit, and the site rebuilds.
 */
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const title = args.find((a) => !a.startsWith("--"));
if (!title) {
  console.error('Usage: npm run new-post -- "Post title" [--slug my-slug] [--date YYYY-MM-DD]');
  process.exit(1);
}
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

const slug = opt("slug", slugify(title));
const date = opt("date", new Date().toISOString().slice(0, 10));
const file = path.join(process.cwd(), "content", "posts", `${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`);
  process.exit(1);
}
const body = `---
title: ${JSON.stringify(title)}
date: ${date}
excerpt: ""
image: ""
imageAlt: ""
imagePosition: "center"
draft: true
---
Opening paragraph.

## A heading if you need one

More.
`;
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, body);
const [y, m] = date.split("-");
console.log(`Created ${path.relative(process.cwd(), file)}`);
console.log(`URL when published: /research/${y}/${m}/${slug}`);
console.log(`Preview: npm run dev, then open http://localhost:3000/research/${y}/${m}/${slug}`);
