# next-intl: `useExtracted` + webpack source maps

`next build --webpack` fails when webpack generates source maps (`devtool`, e.g. set by `@sentry/nextjs`).

```sh
npm install
npm run build             # webpack: fails with "bad json: invalid type: string"
npm run build:turbopack   # turbopack: works
```

Removing `config.devtool = 'source-map'` from `next.config.ts` makes the webpack build pass.
