import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://markoshkarki.com.np"),
  title: {
    default: "Markosh Karki | Aspiring AI Engineer & Data Scientist",
    template: "%s | Markosh Karki"
  },
  description:
    "Portfolio of Markosh Karki, a Computer Engineer transitioning into AI Engineering and Data Science.",
  openGraph: {
    title: "Markosh Karki | Aspiring AI Engineer & Data Scientist",
    description:
      "Building intelligent systems, ML-powered applications, and modern software experiences.",
    url: "https://markoshkarki.com.np",
    siteName: "Markosh Karki Portfolio",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
