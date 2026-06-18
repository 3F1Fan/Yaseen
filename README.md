# Yaseen's App

A modular web app container for kids' modules and games — built to host
Poki-style 3D web games (Three.js / WebGL, or embedded Unity/Godot WebGL
exports).

Built with **Vite + React + TypeScript**, deployed on **Firebase Hosting**.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

---

## Go live on Firebase (get your URL)

This sandbox can't create a Firebase project for you (that needs your Google
account), so do this once from your machine:

1. **Install the CLI and sign in**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Create a project** (or use an existing one) at
   <https://console.firebase.google.com> — note the **Project ID**.

3. **Point this repo at it** — replace the placeholder in `.firebaserc`:
   ```json
   { "projects": { "default": "your-project-id" } }
   ```
   Or run `firebase use --add` and pick it.

4. **Build & deploy**
   ```bash
   npm run deploy
   ```

Your app goes live at:

- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

---

## Auto-deploy on every push (optional CI)

`.github/workflows/deploy.yml` deploys automatically when you push to `main`.
Add these repository secrets (GitHub → Settings → Secrets and variables →
Actions):

- `FIREBASE_PROJECT_ID` — your project ID
- `FIREBASE_SERVICE_ACCOUNT` — the JSON from a Firebase service account
  (Project Settings → Service accounts → *Generate new private key*). Paste the
  whole JSON file contents as the secret value.

The easiest way to generate these is `firebase init hosting:github`, which
wires the secret up for you.

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
