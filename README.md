# Mastra Studio nullable workflow state

Use Node.js 26.13.1 and pnpm 12.20.0. If you use asdf, run `asdf install` in this directory to install the Node.js version selected by `.tool-versions`. Make sure pnpm is installed for that Node.js version.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:4129/workflows/nullable-state/graph>. Studio shows “Unable to display this workflow” and `Cannot read properties of null (reading 'status')` on page load. No workflow run, API key, or external service is needed.
