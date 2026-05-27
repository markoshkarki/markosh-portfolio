import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Markosh Karki. Built with Next.js.</p>
        <div className="flex gap-4">
          <Link href="https://github.com/markoshkarki" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/markoshkarki" className="hover:text-foreground">
            LinkedIn
          </Link>
          <Link href="/admin" className="hover:text-foreground">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
