# Org Atlas Directory

A legacy React 16 portfolio demo for browsing connected enterprise data: companies, projects, employees, and addresses. The app uses a local JSON data source and Redux-managed navigation state to show master-detail relationships across multiple screens.

## What it shows

- React screen composition for hierarchical business data.
- Redux, Redux Thunk, and Reduxsauce state flow.
- Local `json-server` development API.
- Master-detail filtering across companies, projects, employees, and addresses.
- React Router page structure.
- ESLint and GitHub Pages deployment scripts.

## Tech stack

- React 16
- Redux, Redux Thunk, Reduxsauce
- React Router
- json-server
- Create React App

## Run locally

```bash
npm install
npm run json-server
npm start
```

Open `http://localhost:3000`. Keep `npm run json-server` running in a second terminal at `http://localhost:5000`; the React app reads `db.json` from that local API.

The npm scripts set the legacy Create React App environment flags needed for modern Node versions.

## Verify

```bash
npm run build
```

The local JSON dataset is synthetic and exists to demonstrate UI state flow, relational filtering, and screen organization.

## Legacy note

This is an older demo project that has been preserved and reframed as a personal portfolio sample. It is not intended to represent a current production stack.

## Cloudflare Pages

- Pages project name: `org-atlas-directory`
- GitHub repository: `BorisThoris/org-atlas-directory`
- Production branch: `master`
- Root directory: `.`
- Build command: `SKIP_PREFLIGHT_CHECK=true NODE_OPTIONS=--openssl-legacy-provider npx react-scripts build`
- Build output directory: `build`
- Public URL target: `https://org-atlas-directory.pages.dev/`

Do not enable Cloudflare Access for the demo deployment. Leave frame-blocking headers unset so the portfolio can iframe the public build.
