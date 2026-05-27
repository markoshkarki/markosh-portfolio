import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");
const projectsRoot = path.join(contentRoot, "projects");
const blogRoot = path.join(contentRoot, "blog");
const siteRoot = path.join(contentRoot, "site");

export type ProjectStatus = "Completed" | "In Progress" | "Research";
export type ProjectCategory = "AI" | "ML" | "Data Science" | "Web" | "Research";

export type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: ProjectCategory;
  tags: ProjectCategory[];
  techStack: string[];
  github?: string;
  demo?: string;
  screenshots: string[];
  status: ProjectStatus;
  featured: boolean;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  body: string;
  toc: { id: string; text: string; level: number }[];
};

export type SiteContent = Record<string, unknown>;

function readContentDir<T>(fullDir: string, mapper: (slug: string, body: string, data: Record<string, unknown>) => T) {
  if (!fs.existsSync(fullDir)) {
    return [];
  }

  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(fullDir, file), "utf8");
      const { content, data } = matter(raw);
      return mapper(slug, content, data);
    });
}

function toStringArray(value: unknown) {
  return Array.isArray(value) ? value.map(String) : [];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getToc(body: string) {
  return body
    .split("\n")
    .map((line) => /^(##|###)\s+(.+)$/.exec(line))
    .filter(Boolean)
    .map((match) => {
      const text = match?.[2] ?? "";
      return {
        id: slugify(text),
        text,
        level: match?.[1].length ?? 2
      };
    });
}

export function getProjects() {
  return readContentDir<Project>(projectsRoot, (slug, body, data) => ({
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    category: data.category as ProjectCategory,
    tags: toStringArray(data.tags) as ProjectCategory[],
    techStack: toStringArray(data.techStack),
    github: data.github ? String(data.github) : undefined,
    demo: data.demo ? String(data.demo) : undefined,
    screenshots: toStringArray(data.screenshots),
    status: data.status as ProjectStatus,
    featured: Boolean(data.featured),
    body
  })).sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getBlogPosts() {
  return readContentDir<BlogPost>(blogRoot, (slug, body, data) => ({
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    tags: toStringArray(data.tags),
    readingTime: readingTime(body).text,
    body,
    toc: getToc(body)
  })).sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getSiteContent(filename: string): SiteContent {
  const fullPath = path.join(siteRoot, filename);

  if (!fs.existsSync(fullPath)) {
    return {};
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw).data;
}
