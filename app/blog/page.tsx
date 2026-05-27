import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI and Data Science writing by Markosh Karki."
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container-page section-pad">
      <SectionHeading
        eyebrow="Blog"
        title="Clear notes on AI, data science, and software practice."
        description="Short technical essays that document learning, project decisions, and practical AI engineering patterns."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
