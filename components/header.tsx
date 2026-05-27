"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border/80 bg-background/86 shadow-[0_12px_40px_-32px_rgba(15,23,42,0.7)] backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Markosh Karki home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-sm font-semibold text-primary shadow-sm transition-colors group-hover:border-primary/35">
            MK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-normal text-foreground">Markosh Karki</span>
            <span className="block text-xs text-muted-foreground">AI Engineering Portfolio</span>
          </span>
        </Link>

        <nav className="hidden items-center rounded-lg border border-border bg-card/70 p-1 text-sm text-muted-foreground shadow-sm md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 transition-all duration-200 hover:bg-secondary hover:text-foreground",
                  active && "bg-secondary text-foreground shadow-sm"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-md border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground lg:block">
            markoshkarki.com.np
          </div>
          <ThemeToggle />
        </div>
      </div>

      <nav className="container-page flex gap-2 overflow-x-auto pb-3 text-sm text-muted-foreground md:hidden [scrollbar-width:none]">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-md border border-border bg-card/70 px-3 py-2 transition-all hover:border-primary/35 hover:text-foreground",
                active && "border-primary/30 bg-primary/10 text-primary"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
