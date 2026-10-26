# Moderation tool redesign: test task

Starter project for the Splento test task. Eugene sends you the brief with the full instructions.

## Start

1. Click **Use this template** → **Create a new repository**. Owner: your account. Visibility: **Private**.
2. In your new repo: **Settings → Collaborators → Add people** → `eug-subscription`.
3. Clone it to your computer, install [Node.js 24 LTS](https://nodejs.org), then in the project folder run:

```bash
npm install
npm run dev
```

Open the link it shows, usually `http://localhost:5173`.

## What's inside

| Path | What it is |
|---|---|
| `src/` | The app. Start in `src/App.tsx`. |
| `src/data/` | Your mock data goes here. |
| `docs/` | Images for `PROCESS.md`: mood board, sketches, screenshots. |
| `PROCESS.md` | How you got to your design. Fill in every section. |
| `CLAUDE.md` | Code rules for AI tools. Keep it in the project. |

Stack: React 19, TypeScript, Vite, HeroUI v3 (`@heroui/react`), Tailwind CSS v4.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Runs the app locally |
| `npm run build` | Checks types and builds the app |
| `npm run preview` | Opens the built app |
