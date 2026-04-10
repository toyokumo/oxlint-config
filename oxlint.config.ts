import { defineConfig } from 'oxlint';
import { baseConfig } from './src/base.ts';
import typescriptConfig from './src/typescript.ts';

export default defineConfig({ ...baseConfig, ignorePatterns: ['tests'], overrides: [typescriptConfig] });
