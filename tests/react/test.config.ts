import { defineConfig } from 'oxlint';
import { baseConfig } from '../../src/base.ts';
import typescriptConfig from '../../src/typescript.ts';
import reactConfig from '../../src/react.ts';
import typescriptJsxConfig from '../../src/typescript-jsx.ts';

export default defineConfig({
  ...baseConfig,
  overrides: [typescriptConfig, reactConfig, typescriptJsxConfig],
});
