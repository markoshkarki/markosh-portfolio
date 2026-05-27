import type { MetadataRoute } from "next";

import { getBlogPosts, getProjects } from "@/lib/content";

const baseUrl = "https://markoshkarki.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const projectRoutes = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date)
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
