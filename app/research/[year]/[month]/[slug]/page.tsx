import type { Metadata } from "next";
import { notFound } from "next/navigation";
import posts, { postMetadata } from "@/lib/posts";
import PostShell from "@/components/PostShell";

type Params = { year: string; month: string; slug: string };

/** One static page per Markdown file in content/posts. */
export function generateStaticParams(): Params[] {
  return posts.map((p) => {
    const [, , year, month] = p.path.split("/");
    return { year, month, slug: p.slug };
  });
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return postMetadata(slug);
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { year, month, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post || post.path !== `/research/${year}/${month}/${slug}`) notFound();
  return (
    <PostShell slug={slug}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostShell>
  );
}
