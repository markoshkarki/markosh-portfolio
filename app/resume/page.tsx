import { Download } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume, education, and skills for Markosh Karki."
};

export default function ResumePage() {
  return (
    <div className="container-page section-pad">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Resume"
          title="Computer engineering foundation with an AI and data science direction."
          description="A clean recruiter-friendly snapshot. Replace the placeholder PDF link when the final resume is ready."
        />
        <Button asChild>
          <Link href="/resume-markosh-karki.pdf"><Download className="h-4 w-4" /> Download resume</Link>
        </Button>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Resume preview</h2>
          <div className="mt-6 min-h-[520px] rounded-md border border-dashed border-border bg-secondary p-6 text-sm text-muted-foreground">
            PDF resume preview placeholder. Add `public/resume-markosh-karki.pdf` to enable download.
          </div>
        </section>
        <aside className="space-y-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Education timeline</h2>
            <div className="mt-5 space-y-5 border-l border-border pl-5">
              <div>
                <p className="font-medium">Computer Engineering</p>
                <p className="text-sm text-muted-foreground">Core studies in software, systems, databases, and applied computing.</p>
              </div>
              <div>
                <p className="font-medium">AI and Data Science Track</p>
                <p className="text-sm text-muted-foreground">Self-directed projects in ML, analytics, model evaluation, and AI apps.</p>
              </div>
            </div>
          </section>
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "Machine Learning", "Data Science", "SQL", "React", "Next.js", "TypeScript", "Git"].map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
