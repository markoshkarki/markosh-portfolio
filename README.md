# Markosh Karki Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=fff)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

A modern, minimal portfolio website for **Markosh Karki**, a Computer Engineer transitioning into **AI Engineering** and **Data Science**.

The site is designed to feel clean, calm, recruiter-friendly, and easy to maintain with file-based content and a lightweight CMS setup.

## Project Overview

This portfolio presents Markosh's profile, projects, writing, resume, and contact information through a polished Next.js App Router website. Projects and blog posts are stored as Markdown/MDX files, making content updates simple for beginners while keeping the codebase flexible for future growth.

Live domain target:

```text
markoshkarki.com.np
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** with strict mode
- **Tailwind CSS**
- **shadcn/ui-style components**
- **Framer Motion** for subtle reveal animations
- **MDX / Markdown** for blog and project content
- **next-themes** for dark/light mode
- **Decap CMS** for content editing
- **Vercel** for deployment

## Features

- Responsive portfolio pages: Home, About, Projects, Blog, Resume, Contact
- Project grid with category filtering
- Project detail pages from MDX content
- Blog listing and detail pages
- Reading time and table of contents for posts
- Syntax highlighting for technical writing
- Dark/light theme toggle with persisted preference
- Formspree-compatible contact form structure
- SEO metadata, OpenGraph, sitemap, and robots file
- Decap CMS admin panel setup

## Local Development Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site:

```text
http://localhost:3000
```

Run a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Deployment Instructions

The project is ready for Vercel deployment.

1. Push the project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Keep the default framework setting as **Next.js**.
4. Deploy the project.
5. Add the custom domain in Vercel settings:

```text
markoshkarki.com.np
```

No custom backend, database, or paid service is required for the website itself.

## Folder Structure

```text
app/                 Next.js App Router pages and SEO routes
components/          Reusable layout, cards, theme, and UI components
components/ui/       shadcn-style UI primitives
content/blog/        MDX blog posts
content/projects/    MDX project entries
content/site/        Site settings and editable content files
lib/                 Content loading and utility functions
public/admin/        Decap CMS admin files
styles/              Global Tailwind CSS styles
```

## CMS/Admin Explanation

The admin panel is available at:

```text
/admin
```

Decap CMS is configured in:

```text
public/admin/config.yml
```

The CMS can edit:

- Homepage content
- About page content
- Skills
- Resume link
- Social links
- Projects
- Blog posts

For production editing, connect Decap CMS to your Git provider. For local content editing, you can also edit the Markdown/MDX files directly in the `content/` folder.

## Content Editing Guide

### Updating Projects

Project files live in:

```text
content/projects
```

Each project is an `.mdx` file with frontmatter for metadata:

```mdx
---
title: Project Title
description: Short project summary
category: AI
tags: [AI, ML, Data Science]
techStack: [Python, Next.js, TypeScript]
status: Completed
featured: true
---

Project details go here.
```

After saving a new project file, it will automatically appear on the Projects page.

### Updating Blog Posts

Blog files live in:

```text
content/blog
```

Each post is an `.mdx` file:

```mdx
---
title: Blog Post Title
description: Short post summary
date: 2026-01-01
tags: [AI, Data Science]
---

Post content goes here.
```

Headings such as `## Section Title` are used to generate the table of contents.

### Updating Site Settings

General site content lives in:

```text
content/site
```

Use these files to update profile text, skills, resume links, and social links.

## Dark/Light Mode

Theme switching is handled with `next-themes`.

- User preference is persisted automatically.
- The toggle is available in the site header.
- Colors are defined with CSS variables in `styles/globals.css`.

## Future Improvements

- Add real project screenshots
- Replace placeholder resume with a final PDF
- Connect the contact form to a real Formspree endpoint
- Configure production CMS authentication
- Add richer project case studies
- Add analytics after deployment

## License

This project is intended as a personal portfolio for Markosh Karki.
