import { BriefcaseBusiness, Code2, FileText, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "https://github.com/markoshkarki", label: "GitHub", icon: Code2 },
  { href: "https://linkedin.com/in/markoshkarki", label: "LinkedIn", icon: BriefcaseBusiness },
  { href: "mailto:hello@markoshkarki.com.np", label: "Email", icon: Mail },
  { href: "/resume-markosh-karki.pdf", label: "Resume", icon: FileText }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/90">
      <div className="container-page py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-foreground">Markosh Karki</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Aspiring AI Engineer & Data Scientist building practical intelligent systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2 text-sm" aria-label="Footer links">
            {footerLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Markosh Karki. All rights reserved.</p>
          <p>markoshkarki.com.np</p>
        </div>
      </div>
    </footer>
  );
}
