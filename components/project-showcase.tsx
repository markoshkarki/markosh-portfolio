import Link from "next/link";

import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content";

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [featuredProject, ...otherProjects] = projects;

  if (!featuredProject) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/35">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,hsl(var(--primary)/0.10),transparent_32%),radial-gradient(circle_at_85%_18%,hsl(var(--accent)/0.10),transparent_28%)]" />
      <div className="container-page section-pad">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with practical AI and data engineering signal."
            description="A focused showcase of systems, experiments, and product-minded builds across machine learning, data science, and modern web development."
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/projects">View all projects</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <MotionReveal>
            <ProjectCard project={featuredProject} variant="featured" />
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.slice(0, 3).map((project, index) => (
              <MotionReveal key={project.slug} delay={0.04 * (index + 1)}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
