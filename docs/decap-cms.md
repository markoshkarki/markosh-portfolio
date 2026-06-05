# Decap CMS Setup

The admin panel is served at `/admin` and loads Decap CMS from `public/admin/index.html`.

Content is stored in the repository:

- Homepage: `content/site/home.md`
- About: `content/site/about.md`
- Skills: `content/site/skills.md`
- Social links: `content/site/socials.md`
- Resume: `content/site/resume.md`
- Projects: `content/projects/*.mdx`
- Blog posts: `content/blog/*.mdx`

## GitHub Backend

`public/admin/config.yml` uses Decap's GitHub backend. Update these values before production use:

```yaml
backend:
  name: github
  repo: your-github-username/your-repo-name
  branch: main
  base_url: https://your-decap-oauth-provider.example.com
  auth_endpoint: auth
```

## Authentication Required

GitHub does not allow Decap CMS to commit to a repository from the browser without OAuth. For a Vercel-hosted site, you need a small OAuth provider/proxy for Decap CMS.

Free beginner-friendly options:

- Deploy a Decap CMS OAuth provider to Vercel or another free host.
- Create a GitHub OAuth App.
- Add the OAuth app credentials to the OAuth provider environment variables.
- Set `base_url` in `public/admin/config.yml` to the deployed OAuth provider URL.

The portfolio website itself does not need a database, paid service, or custom API.

## Local Editing

For local CMS testing, run Decap's local backend in one terminal:

```bash
npx decap-server
```

Then run the portfolio in another terminal:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/admin
```
