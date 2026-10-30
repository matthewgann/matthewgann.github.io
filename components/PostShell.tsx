import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";
import { getNeighbors, getPost } from "@/lib/posts";
import { SITE_URL, WRITING_LABEL, WRITING_PATH } from "@/lib/site";

function Arrow() {
  return (
    <span className="dot" aria-hidden>
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/**
 * Shared chrome for a post: header, optional lead image, body, author card,
 * and newer/older navigation. The body (children) is the post's own prose.
 */
export default function PostShell({ slug, children }: { slug: string; children: React.ReactNode }) {
  const post = getPost(slug);
  const { newer, older } = getNeighbors(slug);
  const url = `${SITE_URL}${post.path}`;

  return (
    <article>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.dateISO}
        url={url}
        image={post.image}
      />

      {/* Header */}
      <header className="hairline-b">
        <div className="page-x pt-10 md:pt-14 pb-8 grid md:grid-cols-12 gap-6">
          <nav aria-label="Breadcrumb" className="md:col-span-3">
            <Link href={WRITING_PATH} className="t-small font-medium no-underline hover:text-accent transition-colors">
              ← {WRITING_LABEL}
            </Link>
          </nav>
          <div className="md:col-span-9">
            <h1 className="t-headline mb-6 max-w-[20ch]">{post.title}</h1>
            <p className="t-small flex flex-wrap items-center gap-x-3 gap-y-1 m-0" style={{ color: "var(--ink-soft)" }}>
              <span>
                By{" "}
                <Link href="/" rel="author" className="font-medium no-underline" style={{ color: "var(--ink)" }}>
                  Matthew Gann, Ph.D.
                </Link>
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.dateISO}>{post.date}</time>
            </p>
          </div>
        </div>
      </header>

      {/* Lead image */}
      {post.image && (
        <figure className="m-0 hairline-b">
          <div className="img-frame w-full h-[56vw] max-h-[620px]">
            <Image
              src={post.image}
              alt={post.imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: post.imagePosition ?? "center" }}
            />
          </div>
        </figure>
      )}

      {/* Body */}
      <div className="page-x grid md:grid-cols-12 gap-6 pt-10 md:pt-14 pb-16">
        <div className="md:[grid-column:4/11] lg:[grid-column:4/10]">
          <div className="prose-mg">{children}</div>
        </div>
      </div>

      {/* Author card */}
      <section aria-label="About the author" className="hairline-t">
        <div className="page-x py-10 grid md:grid-cols-12 gap-6 items-start">
          <div className="md:[grid-column:4/11] lg:[grid-column:4/10] flex gap-5 items-start">
            <div className="img-frame shrink-0 w-16 h-16 rounded-full overflow-hidden">
              <Image src="/headshot.jpg" alt="Matthew Gann, Ph.D." width={64} height={64} className="object-cover object-top w-full h-full" />
            </div>
            <div>
              <p className="font-semibold m-0 mb-1">Matthew Gann, Ph.D.</p>
              <p className="t-small m-0" style={{ color: "var(--ink-soft)" }}>
                Associate vice chancellor and chief marketing officer at the University of Denver.
                More than two decades at the intersection of strategy, storytelling, and leadership.
              </p>
              <p className="t-small mt-3 mb-0">
                <Link href="/experience" className="arrow-link" style={{ fontSize: "0.875rem" }}>
                  <Arrow />
                  Experience
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newer / older */}
      <nav aria-label="More writing" className="hairline-t grid md:grid-cols-2">
        {[
          { post: newer, label: "Newer" },
          { post: older, label: "Older" },
        ].map(({ post: p, label }, i) => (
          <div key={label} className={`page-x py-8 ${i === 1 ? "md:hairline-l hairline-t md:border-t-0" : ""}`}>
            <span className="kicker" style={{ color: "var(--ink-faint)" }}>
              {label}
            </span>
            <Link
              href={p ? p.path : WRITING_PATH}
              className="block no-underline mt-2 hover:text-accent transition-colors"
            >
              <span className="t-card block">{p ? p.title : `All ${WRITING_LABEL.toLowerCase()}`}</span>
            </Link>
          </div>
        ))}
      </nav>
    </article>
  );
}
