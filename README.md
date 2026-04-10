# oxlint-config

[![npm version](https://badge.fury.io/js/%40toyokumo%2Foxlint-config.svg)](https://badge.fury.io/js/%40toyokumo%2Foxlint-config)
![CI](https://github.com/toyokumo/oxlint-config/workflows/CI/badge.svg?branch=main)

An oxlint rule set for Toyokumo.

## Usage

```bash
pnpm add -D @toyokumo/oxlint-config oxlint
```

### Exported configs

```typescript
import {
  baseConfig, // Base rules (eslint, import, oxc plugins)
  typescriptConfig, // TypeScript override (*.ts, *.tsx)
  reactConfig, // React + jsx-a11y override
  nextConfig, // Next.js override
  typescriptJsxConfig, // TypeScript JSX override (*.tsx)
} from '@toyokumo/oxlint-config';
```

### Setup oxlint.config.ts

```typescript
import { defineConfig } from 'oxlint';
import { baseConfig, typescriptConfig, reactConfig, nextConfig, typescriptJsxConfig } from '@toyokumo/oxlint-config';

export default defineConfig({
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    myGlobal: 'readonly',
  },
  overrides: [
    typescriptConfig,
    reactConfig,
    // Override files to limit Next.js rules to a specific directory
    { ...nextConfig, files: ['apps/web/**/*.ts', 'apps/web/**/*.tsx'] },
    typescriptJsxConfig,
    {
      // Overwrite rules
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
});
```

## Contribution

```bash
pnpm install
pnpm run test
```
