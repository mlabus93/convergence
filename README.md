# Convergence

Group travel planning app built with React, Vite, and Turborepo.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a React and [Vite](https://vite.dev) TypeScript app
- `web`: another React and [Vite](https://vite.dev) TypeScript app
- `@repo/ui`: a React component library shared by both `web` and `docs`
- `@repo/eslint-config`: shared ESLint configuration
- `@repo/typescript-config`: shared `tsconfig.json` files

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Testing

- `pnpm test` runs each package's Vitest suite through Turborepo for granular caching.
- `pnpm test:projects` runs all suites once through the root Vitest Projects configuration.
- `pnpm test:projects:watch` watches all projects in one Vitest process.
- `pnpm report` runs the cached package suites and merges their native Vitest blob reports into one coverage report.

Each package's `vitest.config.ts` is the source of truth for that test project; the root configuration references those files directly.
