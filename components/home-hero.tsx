import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Database,
  Network
} from "lucide-react";
import Link from "next/link";

import { MotionReveal } from "@/components/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const focusAreas = ["Applied ML", "Data Products", "AI Systems"];

const signalCards = [
  { label: "Model thinking", icon: BrainCircuit },
  { label: "Data pipelines", icon: Database },
  { label: "Software craft", icon: Network }
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.14),transparent_30%),radial-gradient(circle_at_78%_22%,hsl(var(--accent)/0.13),transparent_28%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.32))]" />
      <div className="absolute left-1/2 top-16 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/5" />

      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
        <MotionReveal>
          <div className="max-w-[46rem]">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge className="border-primary/20 bg-primary/8 text-primary">markoshkarki.com.np</Badge>
              <span className="text-sm text-muted-foreground">Computer Engineer moving into AI and Data Science</span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Markosh Karki
            </h1>
            <p className="mt-5 text-lg font-medium leading-8 text-primary sm:text-xl">
              Aspiring AI Engineer & Data Scientist
            </p>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
              Building intelligent systems, ML-powered applications, and modern software experiences with a practical engineering mindset.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="shadow-soft">
                <Link href="/projects">
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resume">Resume</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="https://github.com/markoshkarki">
                <Code2 className="h-4 w-4" /> GitHub
              </Link>
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="https://linkedin.com/in/markoshkarki">
                <BriefcaseBusiness className="h-4 w-4" /> LinkedIn
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} className="bg-background/80 px-3 py-1.5 text-sm shadow-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[440px] lg:mr-0">
            <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
            <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />

            <div className="relative rounded-lg border border-border/80 bg-card/88 p-5 shadow-soft backdrop-blur-xl">
              <div className="rounded-md border border-border bg-gradient-to-br from-secondary via-background to-primary/10 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Portfolio signal</p>
                    <p className="mt-2 text-sm font-medium text-foreground">AI-ready engineer profile</p>
                  </div>
                  <ChartNoAxesCombined className="h-5 w-5 text-primary" />
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-border bg-background shadow-soft">
                    <div className="absolute inset-3 rounded-full border border-primary/15" />
                    <div className="absolute inset-8 rounded-full bg-primary/8" />
                    <span className="relative text-5xl font-semibold text-primary">MK</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  {signalCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 rounded-md border border-border bg-card/80 p-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-muted-foreground">Clean, measurable, maintainable</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

