import { Code2, BriefcaseBusiness, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Markosh Karki for AI engineering and data science opportunities."
};

export default function ContactPage() {
  return (
    <div className="container-page section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about AI, data, and software roles."
            description="For internships, junior roles, collaborations, or project conversations, send a concise note with the opportunity and timeline."
          />
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <Link className="flex items-center gap-3 hover:text-foreground" href="mailto:hello@markoshkarki.com.np">
              <Mail className="h-4 w-4" /> hello@markoshkarki.com.np
            </Link>
            <Link className="flex items-center gap-3 hover:text-foreground" href="https://github.com/markoshkarki">
              <Code2 className="h-4 w-4" /> GitHub
            </Link>
            <Link className="flex items-center gap-3 hover:text-foreground" href="https://linkedin.com/in/markoshkarki">
              <BriefcaseBusiness className="h-4 w-4" /> LinkedIn
            </Link>
          </div>
        </div>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="rounded-lg border border-border bg-card p-6 shadow-soft"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <Input name="name" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <Input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <Textarea name="message" placeholder="Share the role, project, or collaboration details." required />
            </label>
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
