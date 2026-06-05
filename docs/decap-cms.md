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

## Built-In GitHub OAuth Backend

This project includes a small GitHub OAuth backend using Next.js App Router route handlers:

- `/api/auth` starts the GitHub OAuth flow.
- `/api/callback` exchanges the GitHub code for an access token and returns it to Decap CMS.

No database or paid service is required. The OAuth routes only use GitHub OAuth App credentials from environment variables.

## Required CMS Config

Update `public/admin/config.yml` with your real GitHub repo and production domain:

```yaml
backend:
  name: github
  repo: your-github-username/your-repo-name
  branch: main
  base_url: https://your-domain.com
  auth_endpoint: api/auth
  site_domain: your-domain.com
```

For this portfolio domain, the production values should look like:

```yaml
base_url: https://markoshkarki.com.np
auth_endpoint: api/auth
site_domain: markoshkarki.com.np
```

## Required GitHub OAuth App

Create a GitHub OAuth App from GitHub Developer Settings.

Use these URLs:

```text
Homepage URL: https://markoshkarki.com.np
Authorization callback URL: https://markoshkarki.com.np/api/callback
```

For local OAuth testing, create a second GitHub OAuth App or temporarily change the callback URL to:

```text
http://localhost:3000/api/callback
```

## Required Vercel Environment Variables

Add these in Vercel Project Settings > Environment Variables:

```text
GITHUB_CLIENT_ID=your_github_oauth_app_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_app_client_secret
NEXT_PUBLIC_SITE_URL=https://markoshkarki.com.np
```

Optional:

```text
GITHUB_OAUTH_SCOPE=repo,user
```

Use `repo,user` for private repositories. Use `public_repo,user` for public repositories.

## Local Testing

Create `.env.local` with:

```text
GITHUB_CLIENT_ID=your_local_github_oauth_app_client_id
GITHUB_CLIENT_SECRET=your_local_github_oauth_app_client_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GITHUB_OAUTH_SCOPE=repo,user
```

Run the site:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/admin
```

Decap CMS will open a GitHub login popup, GitHub will redirect to `/api/callback`, and the callback route will pass the token back to the CMS window.
