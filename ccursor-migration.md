# Cursor migration notes — premium-content-canvas

This repo started from a **Lovable.dev** template (`tanstack_start_ts` / TanStack Start + TypeScript). Most of the app is standard React and TanStack; **Lovable-specific pieces were limited to build tooling, IDE metadata, and default meta tags.** This document summarizes the codebase and how to run or deploy it without Lovable.

---

## Codebase overview

| Area | Role |
|------|------|
| **[`package.json`](./package.json)** | Scripts: `dev`, `build`, `preview`. React 19, Vite 7, TanStack Router/Start, Tailwind v4, Radix UI, React Query. |
| **[`vite.config.ts`](./vite.config.ts)** | Vite + `@cloudflare/vite-plugin` + `@tanstack/react-start/plugin/vite` + `@vitejs/plugin-react` + `@tailwindcss/vite`. Uses `resolve.tsconfigPaths: true` for the `@/*` alias from [`tsconfig.json`](./tsconfig.json). Custom Worker entry via `tanstackStart({ server: { entry: "server" } })` → **`src/server.ts`**. |
| **[`wrangler.jsonc`](./wrangler.jsonc)** | Cloudflare Workers: `main` points at **`src/server.ts`** (SSR wrapper around `@tanstack/react-start/server-entry`). |
| **`src/server.ts`** | Cloudflare-facing `fetch` handler: forwards to TanStack server entry and normalizes some SSR error responses. |
| **`src/start.ts`** | Registers TanStack Start instance with middleware that renders a branded HTML page on uncaught errors. |
| **`src/router.tsx`** | Creates the router with `routeTree` and a per-request **`QueryClient`**. |
| **`src/routes/`** | File-based routing. **`__root.tsx`** defines HTML shell (`HeadContent`, `Scripts`), global error/404 UI, default `<head>` meta. **`index.tsx`** is the landing page (Russian copy, sections composed from **`src/components/landing/`**). |
| **`src/routeTree.gen.ts`** | Generated route tree — **do not hand-edit**; regenerated when the dev/build pipeline runs with the TanStack router plugin. |
| **`src/content/site.ts`** | Editable marketing copy, image imports, nav, CTA links, testimonials, case study data. |
| **`src/components/ui/`** | shadcn-style primitives (Radix + `cn()` helpers from **`src/lib/utils.ts`**). |
| **`components.json`** | shadcn CLI configuration (style, aliases). |
| **`src/styles.css`** | Global CSS / Tailwind entry (imported from `__root.tsx` as `?url`). |

**Previously Lovable-specific (now removable or already removed):**

- **`@lovable.dev/vite-tanstack-config`** — wrapped the same plugins Lovable documented (TanStack Start, React, Tailwind, Cloudflare build, tsconfig paths, dev-only tagging). Replaced by an explicit **`vite.config.ts`** aligned with [TanStack Start — Cloudflare Workers](https://tanstack.com/start/latest/docs/framework/react/guide/hosting#cloudflare-workers--official-partner).
- **`.lovable/`** — Lovable IDE metadata (`project.json`, `plan.md`). Safe to delete from the repo if you do not use Lovable.
- **`src/routes/__root.tsx`** — had Lovable-branded `<title>`, Open Graph URLs on Lovable CDN, `@Lovable` Twitter fields. Replace with your own SEO/social defaults (the home route in `index.tsx` also sets route-level meta).

---

## Local development (no Lovable)

### Prerequisites

- **Node.js** 20+ or **Bun** (the repo ships a [`bun.lock`](./bun.lock); either tool works).
- No Lovable account or CLI is required.

### Steps

1. **Install dependencies** (from the project root):

   ```bash
   bun install
   ```

   or

   ```bash
   npm install
   ```

2. **Start the dev server:**

   ```bash
   bun run dev
   ```

   or `npm run dev`. With the current Vite config, the app listens on **port 3000** (see `server.port` in `vite.config.ts`).

3. **Open** `http://localhost:3000` in a browser.

4. **Optional — verify production build:**

   ```bash
   bun run build
   bun run preview
   ```

If you change route files and something type-checks oddly, ensure `src/routeTree.gen.ts` is up to date by running `dev` or `build` once.

---

## Disconnecting from Lovable (checklist)

Use this if you are merging an older branch that still references Lovable.

1. **Remove** `@lovable.dev/vite-tanstack-config` from `devDependencies`.
2. **Use** a plain Vite config: `defineConfig` from `vite`, `tanstackStart` from `@tanstack/react-start/plugin/vite`, `viteReact`, `tailwindcss()`, and **`cloudflare({ viteEnvironment: { name: 'ssr' } })`** in plugin order consistent with [TanStack’s Cloudflare example](https://github.com/TanStack/router/tree/main/examples/react/start-basic-cloudflare).
3. **Preserve** `tanstackStart({ server: { entry: 'server' } })` so builds keep using **`src/server.ts`** as the Worker entry (matches `wrangler.jsonc` `main`).
4. **Prefer** `resolve: { tsconfigPaths: true }` in Vite (Vite 6+) instead of duplicating aliases with `vite-tsconfig-paths` unless you need the plugin for another reason.
5. **Add** `wrangler` as a dev dependency if you deploy to Cloudflare (`npx wrangler deploy` / `wrangler login`).
6. **Search** the repo for `lovable`, `Lovable`, and `lovable.app` in source and docs; update or remove branding and social preview URLs.
7. **Delete** the `.lovable/` folder when you no longer sync with Lovable.dev.
8. **Reinstall** dependencies and commit a fresh lockfile so no packages resolve from Lovable-only registries (if you ever had a custom `.npmrc`, remove it unless you rely on another private registry).

---

## Deploying to Cloudflare Workers

1. Install CLI and authenticate (once per machine):

   ```bash
   npx wrangler login
   ```

2. Build and deploy (add a script if you like):

   ```bash
   npm run build && npx wrangler deploy
   ```

Official reference: [TanStack Start — Hosting — Cloudflare Workers](https://tanstack.com/start/latest/docs/framework/react/guide/hosting#cloudflare-workers--official-partner).

---

## Environment variables

This landing page is mostly static content from `site.ts` and does not require API keys for local dev. If you add analytics, CMS, or server functions later, use Vite’s `VITE_*` prefix for client-exposed env vars and document them here.

---

## Quick mental model

```text
Browser  →  Vite dev / Cloudflare Worker  →  src/server.ts  →  TanStack server entry  →  SSR + client hydration
                                    ↑
                          src/start.ts (middleware, error HTML)
```

File-based routes under `src/routes/` drive URLs; shared UI lives under `src/components/`; copy and assets are centralized in `src/content/site.ts` and `src/assets/`.
