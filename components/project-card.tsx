import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/35"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-normal">{project.title}</h3>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Badge className="bg-primary/8 text-primary">{project.status}</Badge>
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </Link>
  );
}
