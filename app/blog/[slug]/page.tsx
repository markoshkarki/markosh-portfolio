import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return {
    title: post?.title ?? "Blog",
    description: post?.description
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container-page section-pad">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <MdxContent source={post.body} />
          <aside className="h-fit rounded-lg border border-border bg-card p-5">
            <h2 className="text-sm font-semibold">Table of contents</h2>
            <nav className="mt-4 space-y-2 text-sm text-muted-foreground">
              {post.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block hover:text-foreground">
                  {item.text}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
