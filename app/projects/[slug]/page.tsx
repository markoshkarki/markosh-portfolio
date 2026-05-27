import { ExternalLink, Code2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, getProjects } from "@/lib/content";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.description
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-page section-pad">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary">{project.category}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>{project.status}</Badge>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github ? (
            <Button asChild variant="outline">
              <Link href={project.github}><Code2 className="h-4 w-4" /> GitHub</Link>
            </Button>
          ) : null}
          {project.demo ? (
            <Button asChild>
              <Link href={project.demo}><ExternalLink className="h-4 w-4" /> Live demo</Link>
            </Button>
          ) : null}
        </div>
      </div>
      <div className="my-12 grid gap-4 md:grid-cols-2">
        {project.screenshots.map((screenshot) => (
          <div key={screenshot} className="aspect-video rounded-lg border border-border bg-secondary p-6 text-sm text-muted-foreground">
            Screenshot placeholder: {screenshot}
          </div>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
        <MdxContent source={project.body} />
        <aside className="h-fit rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm font-semibold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
