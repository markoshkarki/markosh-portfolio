import { ArrowRight, Code2, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts, getProjects } from "@/lib/content";

const skills = ["Python", "Machine Learning", "Data Analysis", "Next.js", "TypeScript", "SQL", "MLOps"];

export default function HomePage() {
  const projects = getProjects();
  const posts = getBlogPosts();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="container-page section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <MotionReveal>
            <p className="mb-4 text-sm font-medium text-primary">markoshkarki.com.np</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
              Markosh Karki
            </h1>
            <p className="mt-5 text-xl font-medium text-muted-foreground">
              Aspiring AI Engineer & Data Scientist
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Building intelligent systems, ML-powered applications, and modern software experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/resume">
                  Resume <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/markoshkarki">
                  <Code2 className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://linkedin.com/in/markoshkarki">
                  <BriefcaseBusiness className="h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-lg border border-border bg-gradient-to-br from-secondary via-card to-primary/10 p-6 shadow-soft">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-border bg-background text-5xl font-semibold text-primary">
                MK
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

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

      <section className="container-page section-pad">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading title="Featured projects" description="Selected AI, data, and web engineering work." />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/projects">View all</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

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
