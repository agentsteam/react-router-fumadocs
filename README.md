# React Router + Fumadocs

Customer-editable frontend template using React Router Framework Mode, Vite Plus, Tailwind CSS, and Fumadocs.

## Template rendering

Platform generation renders `package.json.hbs` and `bun.lock.hbs` using `projectName`. For standalone local use, copy them to `package.json` and `bun.lock`, replacing every `{{projectName}}` with your project name before running the commands below.

## Local development

```bash
bun install
bun run dev
```

Application checks and production build:

```bash
bun run typegen
bun run typecheck
bun run lint
bun run build
```

## Deployment

Deployment and hosted previews are managed by the platform.
