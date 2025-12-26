# AI Monorepo

This is a monorepo managed by **pnpm** workspaces and **Lerna**, containing a React component library, a hooks library, and a Storybook application for development and documentation.

## Project Structure

```text
.
├── apps/
│   └── yd-ui-interface/    # Vite app for Storybook, tests, and demo of @yd/ui
├── packages/
│   ├── yd-ui/              # Pure React component library (@yd/ui)
│   ├── yd-hooks/           # React hooks library (@yd/hooks)
│   └── yd-libs/            # Utility library (@yd/libs)
```

## Packages

### 1. `@yd/ui`
A reusable React component library built with:
- **Radix UI**: For accessible, headless component primitives.
- **Tailwind CSS**: For styling.
- **TypeScript**: For type safety.

### 2. `@yd/hooks`
A collection of custom React hooks (e.g., `useWallet`).
- Bundled with **Microbundle**.

### 3. `@yd/libs`
Shared utility functions and libraries.

### 4. `yd-ui-interface` (App)
The playground and documentation hub for the UI library.
- **Storybook**: For component isolation and documentation.
- **Vitest**: For running tests against the components.

## Getting Started

### Prerequisites
- Node.js
- pnpm

### Installation

Install all dependencies from the root directory:

```bash
pnpm install
```

### Development

#### Run Storybook
To start the Storybook development server for the UI components:

```bash
cd apps/yd-ui-interface
pnpm storybook
```
Or from the root:
```bash
pnpm --filter yd-ui-interface storybook
```
This will start Storybook at `http://localhost:6006`.

#### Build Packages
To build all packages:

```bash
pnpm -r build
```

#### Run Tests
To run tests (located in `yd-ui-interface`):

```bash
cd apps/yd-ui-interface
pnpm test
```

## Tooling
- **pnpm**: Fast, disk space efficient package manager.
- **Vite**: Next Generation Frontend Tooling.
- **Microbundle**: Zero-configuration bundler for tiny modules.
- **Lerna**: A tool for managing JavaScript projects with multiple packages.
