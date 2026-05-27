"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/lib/content";

const filters: Array<ProjectCategory | "All"> = ["All", "AI", "ML", "Data Science", "Web", "Research"];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const visibleProjects = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active || project.tags.includes(active)),
    [active, projects]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={active === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
