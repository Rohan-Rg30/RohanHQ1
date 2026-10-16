# Rohan Gaikwad — Portfolio redesign

A responsive, scroll-led React + Vite portfolio concept using the dark plum / lavender visual direction from the supplied screenshots.

## Run locally

Requirements: Node.js 20+ and pnpm (or npm).

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. For a production build:

```bash
pnpm run build
```

## Before publishing

- Only three project names were readable in the supplied screenshots. The cards currently use those three names; add the remaining projects once their titles are confirmed.
- Each card currently points to the supplied GitHub profile/repository URL, not a verified project-specific repository. Replace each `repo` in `client/src/pages/Home.tsx` with its exact repository URL when known.
- Project cover photography loads from Unsplash over the internet. Replace with local, licensed images if you want self-hosted assets.
- The portfolio avoids fabricated accuracy/AUC metrics. Add performance figures only after confirming them from the notebooks or deployed apps.
- Update the contact section with your actual preferred contact details when you are ready.

## Main files

- `client/src/pages/Home.tsx` — page structure, project cards, filtering, motion and navigation
- `client/src/index.css` — visual system, responsive layouts, animations and reduced-motion handling
- `client/index.html` — document title and metadata
