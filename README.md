# CLRT-I Course Portfolio

Portfolio website for **Rishab Nagaraj** — TEED 5113-02 Culturally and Linguistically Responsive Teaching-I (FQ26).

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Update your content

All portfolio content lives in one file:

**[`src/data/portfolio.ts`](src/data/portfolio.ts)**

### Artifacts

1. Add photos under `public/artifacts/`.
2. In `artifacts`, set:
   - `title`, `subtitle`, `type`
   - `outcomeIds` — e.g. `['clo-1']` (see `learningOutcomes` in the same file)
   - `images` — `{ src, alt }` entries; set `stackImages: true` to show them in one column
   - `caption.outcomeAddressed`, `caption.whatILearned`, `caption.citations`, `caption.whatItShows`

Replace every `[Replace …]` string before submitting.

Append another object to the `artifacts` array to add an artifact. The list is ordered by course learning outcome.

### Grade reflection

Edit `gradeReflection` in `portfolio.ts`:

- `proposedGrade`
- `reflection` — one paragraph addressing all course rubric criteria
- set `isPlaceholder: false` when your final text is ready

## Deploy

The site is a static Vite app. After `npm run build`, deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

For GitHub Pages with a project site URL, set `base` in `vite.config.ts` to your repo name (e.g. `base: '/clrt_portfolio/'`).
