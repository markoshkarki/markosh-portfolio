import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { HomeHero } from "@/components/home-hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPosts, getProjects } from "@/lib/content";

const skills = ["Python", "Machine Learning", "Data Analysis", "Next.js", "TypeScript", "SQL", "MLOps"];

export default function HomePage() {
  const projects = getProjects();
  const posts = getBlogPosts();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="border-y border-border bg-secondary/45">
        <div className="container-page section-pad grid gap-8 md:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            eyebrow="Short intro"
            title="A computer engineer focused on practical AI."
          />
          <p className="text-base leading-8 text-muted-foreground">
            Markosh is building a foundation across software engineering, machine learning,
            and data science with a focus on systems that are understandable, useful, and
            maintainable. This portfolio is structured for recruiters, collaborators, and
            mentors to quickly evaluate projects, writing, and technical direction.
          </p>
        </div>
      </section>

      <ProjectShowcase projects={featuredProjects} />


      <section className="border-y border-border bg-secondary/45">
        <div className="container-page section-pad">
          <SectionHeading title="Skills preview" description="Tools and concepts currently shaping the work." />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} className="px-3 py-1.5 text-sm">{skill}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading title="Latest writing" description="Notes on learning, building, and evaluating AI systems." />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/blog">Read blog</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-page section-pad flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <SectionHeading title="Open to AI engineering and data roles." description="Available for internships, junior roles, research collaboration, and project-based work." />
          <Button asChild>
            <Link href="/contact">Contact Markosh</Link>
          </Button>
        </div>
      </section>
    </>
  );
}


