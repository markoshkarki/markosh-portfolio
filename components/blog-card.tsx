import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-lg border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/35"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>
          {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
            new Date(post.date)
          )}
        </time>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-normal">{post.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  );
}
