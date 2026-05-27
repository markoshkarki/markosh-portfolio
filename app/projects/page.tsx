import type { Metadata } from "next";

import { ProjectFilter } from "@/components/project-filter";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, ML, Data Science, Web, and Research projects by Markosh Karki."
};

export default function ProjectsPage() {
  return (
    <div className="container-page section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Practical systems across AI, data, and modern web engineering."
        description="Filter by category to review work relevant to AI engineering, machine learning, data science, web products, and research-oriented exploration."
      />
      <div className="mt-10">
        <ProjectFilter projects={getProjects()} />
      </div>
    </div>
  );
}
