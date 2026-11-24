# Morée Solutions website

Static company website for Morée Solutions, built with accessible HTML, CSS and JavaScript.

## Local preview

```bash
python3 -m http.server 4188 --directory dist
```

Open `http://localhost:4188`.

## Vercel deployment

The repository includes `vercel.json` and can be imported directly into Vercel. No build command is required.

- Framework preset: Other
- Build command: leave empty
- Output directory: repository root (routing is handled by `vercel.json`)

The production site is expected to use a project-owned Vercel domain or a custom Morée Solutions domain.
