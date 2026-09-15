# asvanthc.github.io

Personal site of **Asvanth C** — Software Engineer at Zeetaminds.

Live at <https://asvanthc.github.io>.

Built with [Astro](https://astro.build). Static output, no client framework, no analytics,
no cookies. The only JavaScript shipped is a few kilobytes for the theme toggle, the mobile
menu, scroll reveal, the table of contents and the reading-progress bar — all of it
progressive enhancement, so the site works with scripting disabled.

---

## Running it

Requires **Node 20.3+** (CI uses Node 22).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check, then build to dist/
npm run preview    # serve dist/ locally
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload. Drafts are visible here only. |
| `npm run build` | `astro check` (type-check) then `astro build`. This is what CI runs. |
| `npm run build:fast` | Build without the type-check, for a quick look. |
| `npm run preview` | Serve `dist/` on the local network. |
| `npm run resume` | Re-render the résumé PDF from `resume/resume.html`. |

---

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repository, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**. Without this the workflow builds but cannot publish.

No secrets are needed — the workflow uses the built-in `GITHUB_TOKEN`.

---

## Layout

```
src/
├── content/writing/        Articles (MDX). One file per article.
├── content.config.ts       Frontmatter schema for articles.
├── data/                   All site content that is not an article:
│   ├── site.ts             Identity, nav, social links, SEO defaults.
│   ├── experience.ts       Roles, timeline, education.
│   ├── skills.ts           Capability map + "currently learning".
│   ├── principles.ts       Engineering principles + engineering identity.
│   ├── work.ts             Case studies and projects.
│   ├── diagrams.ts         Architecture diagram definitions.
│   └── certifications.ts   Generated from the legacy certificate page.
├── components/
│   ├── mdx/                Components usable inside articles (Callout, Flow).
│   ├── OidcFlow.astro      Interactive OAuth/OIDC sequence diagram.
│   ├── ArchDiagram.astro   Layered architecture diagram.
│   └── PlatformMatrix.astro Tizen / webOS / Android comparison.
├── layouts/
│   ├── BaseLayout.astro    <head>, SEO, JSON-LD, theme bootstrap, nav + footer.
│   └── ArticleLayout.astro Article shell: TOC, reading progress, byline, pager.
├── pages/
│   ├── index.astro         Homepage.
│   ├── writing/            Article index and article pages.
│   ├── engineering/[slug]  Case study pages.
│   ├── archive.astro       Index of the old site.
│   ├── rss.xml.ts          RSS feed.
│   └── 404.astro
└── styles/global.css       Design tokens, reset, shared primitives.

public/
├── fonts/                  Self-hosted Inter + JetBrains Mono (latin subset).
├── asv_c/resume.pdf        Résumé, linked from the nav, hero, contact and footer.
├── cert/                   Certificate PDFs, linked from the credentials section.
└── casestudy_car/ demo/ smartAtt/ MSD/   Archived pre-2024 projects (see /archive).
```

---

## Editing content

**Most of the site is data, not markup.** To change what the site says about experience,
skills, principles or projects, edit the relevant file in `src/data/` — the components
render whatever is there.

### Adding an article

Create `src/content/writing/my-slug.mdx`. The URL will be `/writing/my-slug/`.

```mdx
---
title: "Sentence case, no trailing period"
description: "One sentence, under 165 characters. Used for SEO and cards."
summary: "One or two sentences shown under the title on the article page."
date: 2026-06-01
tags: ["Identity", "Security"]
featured: false
draft: false
---

Open with the problem. No H1 — the layout renders the title.

## A section heading

Headings become the table of contents, so they should read as a useful outline.

<Callout type="wrong">
What I originally believed, before I understood it properly.
</Callout>

<Flow caption="The redirect chain" steps={[
  { label: "Browser", note: "untrusted", accent: "muted" },
  { label: "/authorize", accent: "accent" },
  { label: "/token", accent: "signal" },
]} />
```

`Callout` and `Flow` are in scope automatically — do not import them.

- `Callout` types: `note`, `gotcha`, `wrong`, `key`.
- `Flow` accents: `accent`, `signal`, `amber`, `rose`, `muted`.
- Reading time is computed from the body; set `readingTime` in frontmatter to override.
- `draft: true` hides an article from listings, the RSS feed and the sitemap, and marks it
  `noindex`. Drafts still render in `npm run dev`.

Code fences are highlighted by [Expressive Code](https://expressive-code.com) and follow the
site theme in both light and dark mode.

---

## The résumé

`public/asv_c/resume.pdf` is generated, not hand-maintained. Edit the content in
[`resume/resume.html`](resume/resume.html) and run:

```bash
npm run resume
```

This drives whatever Chrome or Chromium is already installed (set `CHROME_PATH` if it
isn't found) — no headless-browser dependency for a file that changes a few times a year.

Two constraints worth knowing before editing:

- **It must stay one page.** The build prints the page count; check it after any content
  change. `body { zoom }` in the stylesheet is the single lever for fitting — everything
  else is sized in absolute `pt`.
- **It must stay machine-readable.** Applicant tracking systems parse the text layer, so:
  one column, no text baked into images, conventional section headings, and every skills
  label ends in a colon so `Languages: Java, JavaScript` survives being flattened to plain
  text. The fonts in `resume/fonts/` are *static* instances rather than the variable woff2
  the website uses — Chrome rasterises variable fonts into Type 3 glyphs when printing, and
  Type 3 is the one font type some parsers cannot extract text from. Regenerate them with
  `python3 resume/fonts/build.py` (needs `fonttools`) only if the source fonts change.

To sanity-check a change: `pdffonts` should report **CID TrueType** (never Type 3), and
`pdftotext public/asv_c/resume.pdf -` should read back cleanly.

---

## Design notes

Dark is the default; light is a designed theme rather than an inversion. The choice persists
in `localStorage` and falls back to the OS preference until the user picks one explicitly.
Theme is resolved by an inline script before first paint, so there is no flash.

Colour, type scale, spacing and radii all live as custom properties at the top of
`src/styles/global.css`. Changing the accent colour there changes it everywhere.

Everything honours `prefers-reduced-motion`: the marquee stops, scroll reveal is disabled and
smooth scrolling is turned off.

---

## Archive

The previous version of this site is still served, so existing links keep resolving —
`/casestudy_car/`, `/demo/`, `/smartAtt/`, `/MSD/`, `/cert/` and `/asv_c/`. They are indexed
at [`/archive`](https://asvanthc.github.io/archive) and excluded from search engines via
`public/robots.txt`.
