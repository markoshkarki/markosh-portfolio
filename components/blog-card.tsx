import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block h-full rounded-lg border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
        <time dateTime={post.date}>
          {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
            new Date(post.date)
          )}
        </time>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-normal text-foreground">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} className="bg-background/80 text-muted-foreground">{tag}</Badge>
        ))}
      </div>
    </Link>
  );
}
