import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "About Markosh Karki and his transition into AI Engineering and Data Science."
};

const technologies = ["Python", "Pandas", "scikit-learn", "PyTorch", "SQL", "Next.js", "TypeScript", "Tailwind CSS"];

export default function AboutPage() {
  return (
    <div className="container-page section-pad">
      <SectionHeading
        eyebrow="About"
        title="Engineering judgment, data curiosity, and a practical AI direction."
        description="Markosh Karki is a Computer Engineer building toward AI Engineering and Data Science through projects that connect clean software foundations with measurable machine learning outcomes."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
        <aside className="rounded-lg border border-border bg-card p-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-secondary text-2xl font-semibold text-primary">
            MK
          </div>
          <h2 className="mt-6 text-xl font-semibold">Markosh Karki</h2>
          <p className="mt-2 text-sm text-muted-foreground">Aspiring AI Engineer & Data Scientist</p>
        </aside>
        <div className="space-y-10">
          {[
            ["Personal introduction", "I enjoy building software that makes complex information easier to reason about. My current focus is turning engineering fundamentals into AI products that are useful, explainable, and reliable enough for real users."],
            ["Engineering journey", "My background in computer engineering gave me a strong base in programming, systems thinking, databases, and web development. I am now applying that base to machine learning workflows, data pipelines, model evaluation, and user-facing AI applications."],
            ["AI and Data Science interests", "I am especially interested in applied machine learning, natural language interfaces, forecasting, retrieval systems, and data storytelling. I like projects where the model is only one part of a thoughtful product experience."],
            ["Goals", "My near-term goal is to contribute to AI engineering or data science teams where I can learn from strong practitioners, ship maintainable tools, and keep improving my understanding of production-grade ML systems."]
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-8 text-muted-foreground">{body}</p>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
