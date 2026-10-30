# Redesign and structure audit

Branch: `redesign/2026` (local only, not pushed). Started 2026-10-29.

This document covers two things: what changed in the redesign, and the SEO / AEO / GEO
structure audit that drove the non-visual changes. Copy was carried over as written, with
the exceptions listed under "Copy changes".

## 1. Design system

| Token | Value | Notes |
| --- | --- | --- |
| Ground | `#ECE9E3` | Warm bone, keeps the parchment lineage of the old site |
| Raised | `#F4F2EE` | Panels and the closing CTA |
| Ink | `#141311` | Near-black |
| Accent | `#1F6F63` | Deep teal. Contrast on the ground is about 5:1, passes AA for text |
| Dark | `#141311` | Footer and the community block |
| Display | Inter Tight 600 | Tracking -0.035em |
| Body | Inter | |
| Small labels | DM Mono | Uppercase, no borders |

Structure: full-bleed hairline grid, two-column rows, sticky cards that stack with an 84px
step while the covered card dims. Under 768px the stack becomes a plain list because the
cards are taller than the screen.

Calistoga (the old display serif) was retired. It can come back as the display face with
no other changes; every heading uses the `t-*` classes in `app/globals.css`, and all
tokens are at the top of that file.

Accent alternates if teal doesn't land: slate blue `#2F5D8A`, pine `#2E5A3C`,
petrol `#176B74`. One line to change.

## 2. Naming

The writing section is called **On Purpose**. It lives in one constant, `WRITING_LABEL` in
`lib/site.ts`, and flows to the nav, footer, home section, listing page, breadcrumbs,
schema, feed title, and `llms.txt`. The URL stays `/research` so nothing already indexed
breaks. Alternates that were considered: Office Hours, Field Notes, Working Notes,
Thoughts.

"Areas of Expertise" became a plain kicker, `What I do`, over the headline "Where strategy,
story, and service meet." Alternates: "The work.", "How I help."

## 3. Page by page

**Home**
- Split hero. The `h1` is "Purpose-driven marketing and storytelling." with a drawn
  underline under the first word. The existing statement sentence sits below it with two
  buttons. Portrait on the right. Video hero removed (7.4 MB file, the single biggest
  performance issue on the old site).
- About: first paragraph set as a large statement, remaining three paragraphs unchanged,
  "At a glance" as a definition list.
- The six practice areas as stacked cards with a photo each; copy unchanged.
- Three most recent posts as rows, then a closing CTA using the contact page's own
  sentence.

**On Purpose (/research)**
- Photo hero, a row with the section's own sentence, then every post as a stacked card.
  Posts without a photo render as a text-only card so nothing looks like a missing image.
  No categories or counters anywhere; the stack is the index.
- "A note on AI" kept verbatim.

**Experience**
- `h1` is "Experience". Same content, hairline rows per role, skills and education as
  lists, community on a dark block.

**Contact**
- Three-column details, photo band.

**Posts**
- All ten posts render through one `PostShell`: breadcrumb, title, byline with a
  machine-readable date, optional lead photo, centered prose column, author card,
  and newer/older links. Post prose untouched; the "Matthew Gann, Ph.D." sign-off line was
  replaced by the author card.
- Each post's `<head>` comes from `postMetadata(slug)` in `lib/posts.ts`, so title,
  description, canonical, OG and Twitter tags cannot drift from the listing.

## 4. Structure audit: findings and what was done

### Crawl and index

| Finding | Status |
| --- | --- |
| Home `<title>` was just the name | Now "Matthew Gann, Ph.D. \| Chief Marketing Officer, University of Denver"; template `%s \| Matthew Gann, Ph.D.` for every other page |
| No canonical on /research, /experience, /contact, or any post | Canonical on every page |
| Contact description was "Contact Matthew Gann, Ph.D." | Descriptive sentence; experience and listing descriptions also expanded with role and institution |
| No RSS feed | `/feed.xml`, advertised in `<head>` and the footer |
| No 404 page | `app/not-found.tsx`, noindex |
| Sitemap dates hard-coded | Home and listing take the newest post's date |
| `public/resume.html` redirect stub | Kept. It is noindex with a canonical to /experience, which is right |
| robots.txt | Unchanged. It already allows all agents including AI crawlers |

### Entity and structured data (GEO)

| Finding | Status |
| --- | --- |
| Person schema had no stable `@id`, so each page's author was a separate anonymous node | One `Person` with `@id: https://matthewgann.com/#person`, referenced by every page |
| Person lacked degrees, credentials, awards, memberships, address | Added `alumniOf`, `hasCredential`, `award`, `memberOf`, `address`, `email`, `alternateName`. Every value comes from the experience page |
| No `WebSite` node | Added, linked to the Person |
| No page-type nodes | `ProfilePage` on home and experience, `CollectionPage` + `Blog` (with `blogPost` list) on the listing, `ContactPage` on contact |
| Posts used `Article` with inline author | Now `BlogPosting` with `@id`, `dateModified`, `inLanguage`, `articleSection`, `image`, `isPartOf` the Blog, author by `@id`, plus a `WebPage` node and breadcrumbs |
| No machine-readable publish date in the body | `<time dateTime>` in the byline |
| No author byline or bio on posts | Byline with `rel="author"` and an author card on every post |
| `llms.txt` | Added at `/llms.txt`: one-paragraph identity, page map, post list with one-line summaries |

### Answer readiness (AEO)

- The About section opens with a single-sentence answer to "who is Matthew Gann" in an `h2`,
  which is the sentence most likely to be quoted.
- "At a glance" is a `<dl>`, so role, location, education, and credentials are
  term/definition pairs rather than styled paragraphs.
- Career rows on /experience are a list with org, title, and one-line scope, which reads
  cleanly in a text-only extraction.
- Not done, by design: no FAQ block. There are no FAQs in the supplied copy, and inventing
  questions would break the "every assertion traces to something supplied" rule.
- Note: the home `h1` no longer contains the name. The name is in the title tag, the nav,
  the schema, and the About copy, so this is fine for a personal site, but it is a
  deliberate trade for the stronger headline.

### Headings

- One `h1` per page. Home: "Purpose-driven marketing and storytelling." Listing: "On
  Purpose". Experience: "Experience". Contact: "Get in Touch". Posts: the title.
- Small mono kickers are not headings. The real `h2` carries the sentence.
- Post bodies keep their original `h2` structure.

### Performance and accessibility

- Hero video removed. `public/hero-bg.mp4` is still in the repo and still deploys; delete
  it when you are sure you won't want it back.
- Skip link, visible focus ring, `prefers-reduced-motion` honored (no stack dimming, no
  underline animation).
- Mobile menu is a real button with `aria-expanded` and `aria-controls`.
- Photos are still served unoptimized (static export). Most are 1600 to 2400px and 180 to
  670 KB. Worth a pass through an image optimizer before launch; nothing in the code needs
  to change for that.

### Open Graph

- A static card at `/og-image.png` (1200x630) is the default share image. Posts with a
  photo use their photo; posts without fall back to the card.
- The card was generated once with `next/og` and saved as a file, because GitHub Pages
  serves extensionless route output with the wrong content type.

## 5. Copy changes

Everything else is verbatim. These are the only edits to supplied text:

1. Home `h1`: "Purpose-driven." became "Purpose-driven marketing and storytelling." The
   name and the role line were removed from the hero.
2. Experience summary: the em dash in "storytelling — and I believe" became a comma, per the
   no-em-dash rule.
3. "Areas of Expertise" heading replaced (see Naming).
4. "Research & Thoughts" renamed "On Purpose" (see Naming).
5. Post sign-off line replaced by the author card, whose two sentences are lifted from the
   home page About copy.
6. Author card and meta descriptions describe the role as "associate vice chancellor and
   chief marketing officer at the University of Denver", which is the home page wording.

## 6. Photos that would finish this

Current placeholders reuse the nine photos already in `public/`. To replace:

| Slot | Current | Ideal |
| --- | --- | --- |
| Home hero, right half | headshot.jpg (studio, 800x1200) | Environmental portrait, vertical, 1600x2000 or larger, room to crop on the top |
| Practice cards (6) | band-vision, band-conference, band-ama, broncos-panel, campus-run, band-colorado | One landscape per card, 1600x1200, that reads as the topic |
| Listing hero | band-car | Any wide candid, 2400x1200 |
| Post cards (8 of 10 have none) | text-only card | One landscape per post, 1600x1000. A strong texture or place shot works |
| Experience band | band-conference | Wide conference or campus shot, 2400x900 |
| Contact band | band-doorway | Fine as is |

Drop files in `public/` and set `image`, `imageAlt`, and `imagePosition` in `lib/posts.ts`
or the `expertise` array in `app/page.tsx`.

## 7. Running it

```
npm run dev      # local
npm run build    # static export to out/
```

Nothing has been pushed. `main` is untouched.
