# Opening Explainer

A small single-page app that teaches chess openings by explaining the **idea**
behind each move, not just the move itself. Pick an opening, step through the
line one move at a time, and read a one-line "why" for whatever's on the
board right now.

Live demo: _add your GitHub Pages URL here after deploying_

## Why this matters

Chess.com already covers the two halves of this separately. The
[Opening Explorer](https://www.chess.com/explorer) shows move statistics —
win/draw/loss percentages, how often a move is played at each level. Their
[Lessons](https://www.chess.com/lessons) have GM videos explaining the ideas
behind an opening. Both are good at what they do.

The gap is that they're two different products: stats live in the Explorer,
"why" lives in a video you'd have to go find and watch separately, and
neither is attached to the specific move in front of you. This prototype
closes that gap by putting a one-line explanation inline, attached to each
move, inside the same step-through-a-line interface the Explorer already
uses. No video, no tab switching — the reasoning is right next to the move
that prompted it.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [chess.js](https://github.com/jhlywa/chess.js) for move/position logic
- [react-chessboard](https://github.com/Clariity/react-chessboard) for the board UI

No backend, no API keys, fully static — built to run for free on GitHub Pages.

## Openings included

Italian Game, Ruy Lopez, Sicilian Najdorf, French Defense, Caro-Kann,
Queen's Gambit Declined, King's Indian Defense, English Opening, Scotch Game.

Each is a hardcoded line in [`src/data/openings.json`](src/data/openings.json),
where every move carries a short explanation of its purpose (e.g. "restrict
the knight", "develop with tempo"). Adding another opening means adding
another entry to that file — no code changes required.

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Outputs a static site to `dist/`, ready to serve from anywhere (GitHub Pages,
Netlify, a plain S3 bucket, etc.). `vite.config.js` uses a relative `base`
so the build works regardless of the path it's hosted under.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds
and deploys `dist/` to GitHub Pages automatically on every push to `main`.
See the commands below to set it up.
