import { ArrowUpRight, Code2, ExternalLink, Layers3 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "featured";
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg",
        isFeatured ? "grid min-h-[420px] gap-0 lg:grid-cols-[1.05fr_0.95fr]" : "flex h-full flex-col"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,hsl(var(--primary)/0.10),transparent_32%),radial-gradient(circle_at_90%_16%,hsl(var(--accent)/0.10),transparent_28%)] opacity-80" />

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className={cn("relative block", isFeatured ? "p-6 sm:p-8" : "p-5")}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-primary/20 bg-primary/10 text-primary">{project.status}</Badge>
              <Badge className="bg-background/80 text-muted-foreground">{project.category}</Badge>
            </div>
            <h3 className={cn("mt-5 font-semibold leading-snug tracking-normal text-foreground", isFeatured ? "text-2xl sm:text-[1.9rem]" : "text-lg")}> 
              {project.title}
            </h3>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background/75 text-muted-foreground transition-colors group-hover:text-primary">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className={cn("mt-4 text-sm leading-7 text-muted-foreground", isFeatured ? "max-w-2xl sm:text-[0.96rem] sm:leading-8" : "line-clamp-3")}> 
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, isFeatured ? 6 : 4).map((tech) => (
            <Badge key={tech} className="border-border/80 bg-background/85 text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </Link>

      <div className={cn("relative mt-auto", isFeatured ? "border-t border-border lg:border-l lg:border-t-0" : "px-5 pb-5")}> 
        <div className={cn("relative overflow-hidden rounded-md border border-border bg-secondary/70", isFeatured ? "m-6 flex h-[300px] items-center justify-center sm:m-8" : "mb-5 aspect-video")}> 
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.12),transparent_35%,hsl(var(--accent)/0.12))]" />
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          <div className="relative grid w-full max-w-[240px] gap-3 p-6">
            <div className="flex items-center gap-3 rounded-md border border-border bg-card/80 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Layers3 className="h-4 w-4" />
              </div>
              <div className="h-2 flex-1 rounded-full bg-muted" />
            </div>
            <div className="ml-8 h-2 rounded-full bg-primary/20" />
            <div className="mr-10 h-2 rounded-full bg-accent/20" />
          </div>
        </div>

        <div className={cn("relative flex flex-wrap gap-2 text-sm", isFeatured ? "px-6 pb-6 sm:px-8 sm:pb-8" : "")}> 
          {project.github ? (
            <Link href={project.github} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground">
              <Code2 className="h-4 w-4" /> Code
            </Link>
          ) : null}
          {project.demo ? (
            <Link href={project.demo} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground">
              <ExternalLink className="h-4 w-4" /> Demo
            </Link>
          ) : null}
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground transition-colors hover:bg-primary/90">
            Details <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

