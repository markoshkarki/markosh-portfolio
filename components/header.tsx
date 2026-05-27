import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-normal">
          Markosh Karki
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden text-xs text-muted-foreground sm:block">markoshkarki.com.np</div>
          <ThemeToggle />
        </div>
      </div>
      <nav className="container-page flex gap-4 overflow-x-auto pb-3 text-sm text-muted-foreground md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 transition-colors hover:text-foreground">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
