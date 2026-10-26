# CLAUDE.md

Code rules for this project. AI tools: follow them in every change.

This file covers **code only**. There are no design rules here. Layout, colours, fonts, icons and interactions are decided by the person you are working with. Don't impose a style of your own; ask when unsure.

## Project

A front-end-only prototype of a photo moderation tool. No server, no database: all data is mock data in `src/data/`.

Stack: React 19, TypeScript (strict), Vite, HeroUI v3 (`@heroui/react`), Tailwind CSS v4.

Run: `npm install`, then `npm run dev`. Check before finishing a task: `npm run build`.

## HeroUI v3 only

- Import components from `@heroui/react`. Never from `@heroui/button`, `@heroui/card` or other sub-packages.
- **HeroUI Pro (`@heroui-pro/react`) is not available.** Don't import it.
- HeroUI v2 and NextUI patterns are forbidden: no `@nextui-org/*`, no `HeroUIProvider` or `NextUIProvider` (v3 needs no provider).
- Compound components use dot notation: `<Card.Header>`, `<Modal.Body>`. No config props like `<Card header="...">`.
- Use `onPress`, not `onClick`, on HeroUI components.
- Check HeroUI first. If it has the component (button, modal, table, tabs, dropdown…), use it. Don't build it from scratch.
- No wrapper components that only re-export a HeroUI component. Restyling with `className` or `tv()` is fine.
- Docs: <https://heroui.com/docs/react>. Use v3 docs only. Never v2 docs or nextui.org.

## Code style

- Named exports only: `export function X`. Never `export default`.
- Strict typing: no `any`. Define an interface for every component's props.
- Internal imports use the `@/` alias (`@/components/QueueList`), not deep relative paths.
- No `'use client'`. This is a Vite app, not Next.js.
- Never `@ts-ignore`. If unavoidable, use `@ts-expect-error` with a reason.

## Language

All documentation (`PROCESS.md`, `README.md`, anything in `docs/`) and all code comments are in English, even when the person you work with writes to you in another language.

## Where things go

```text
src/
├── components/   # UI components, PascalCase (QueueList.tsx)
├── hooks/        # shared hooks, camelCase (useQueue.ts)
├── data/         # mock data and constants, kebab-case (mock-items.ts)
├── types/        # TypeScript types, one file per domain (moderation.ts)
├── App.tsx
├── main.tsx
└── index.css     # theme tokens and global styles only
docs/             # images for PROCESS.md: mood board, sketches, screenshots
```

- All mock data lives in `src/data/` as `mock-*.ts`. No hardcoded arrays inside components.
- Keep components small. Move logic into hooks in `src/hooks/`.

## Styling

- Use Tailwind utilities in components.
- Define colours as tokens (CSS variables) in `src/index.css` and use those. No hex values inside components.
- HeroUI v3 + Tailwind v4 gotcha: `bg-default-100`, `bg-default-200` and the other `bg-default-{shade}` classes are transparent. Use `bg-default`, `bg-surface`, `bg-surface-secondary` or your own tokens.

## Libraries

Only these may be added, and only when needed: `react-resizable-panels`, `@tanstack/react-virtual`, `motion`, `@tanstack/react-router`, `date-fns`. Anything else needs approval from Eugene first.

## Data and images

- Never use real client photos, names or orders. Use free stock photos (Unsplash, Pexels) and made-up data.

## Git

- Commit in small steps with short, clear messages.
- Never squash commits, rewrite history or force-push. The commit history is part of the submission.
