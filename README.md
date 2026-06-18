# Yaseen's App

A modular web app for kids' learning modules and games — built to host
Poki-style 3D web games (Three.js / WebGL, or embedded Unity/Godot WebGL
exports).

Built with **Vite + React + TypeScript**, deployed on **Firebase Hosting**.

**Live app:** https://yaseen-portal.web.app

---

## How to change the app and deploy

Everything lives on GitHub and deploys automatically — no local setup needed.
Any change pushed to the repo builds and goes live within a minute or two.
There are three ways to make a change:

1. **Ask the assistant** to build a feature or fix something — it commits and
   pushes for you, which deploys automatically.

2. **Edit on GitHub directly** — open a file at
   <https://github.com/3F1Fan/Yaseen>, click the pencil ✏️, and commit. The
   deploy runs on commit.

3. **Trigger a deploy manually** (no code change) — go to the
   [Actions tab](https://github.com/3F1Fan/Yaseen/actions), pick
   **"Deploy to Firebase Hosting on merge"**, and click **Run workflow**.

You can watch every deploy on the
[Actions tab](https://github.com/3F1Fan/Yaseen/actions). When a run is green,
the live site is updated.

> Deploys are handled by `.github/workflows/firebase-hosting-merge.yml`, which
> builds the app and publishes it to the `yaseen-portal` Firebase project.
> Pull requests get their own temporary preview URLs via
> `firebase-hosting-pull-request.yml`.

---

## How the app is organized

Everything is registry-driven, so adding content is a one-file change.

```
src/
  pages/Home.tsx              # landing screen, lists all modules
  modules/
    registry.ts               # ← register a new MODULE here (Games, Reading, ...)
    games/
      registry.ts             # ← register a new GAME here
      GamesModule.tsx         # games grid + per-game player route
      SpinningCube/           # sample 3D game (copy this as a template)
```

### Add a new game

1. Create `src/modules/games/MyGame/MyGame.tsx`.
2. Add an entry to `src/modules/games/registry.ts`.

It appears in the games grid and gets a route at `/games/my-game`
automatically.

### Add a new module (e.g. Reading, Numbers)

1. Create the module's entry component.
2. Add an entry to `src/modules/registry.ts`.

It appears on the home screen and gets a route at `/your-module`.

### Bigger / engine-based games (Poki-style)

For Unity or Godot WebGL exports, drop the exported build into `public/` and
embed it in an `<iframe>` from a game component. For code-built 3D games, use
`@react-three/fiber` + `@react-three/drei` (already installed) — see
`SpinningCube` for the pattern.
