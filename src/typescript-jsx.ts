import type { OxlintOverride } from 'oxlint';

export default {
  files: ['**/*.tsx'],
  rules: {
    'import/prefer-default-export': [
      'warn',
      {
        target: 'any',
      },
    ],
  },
  plugins: ['import'],
} as OxlintOverride;
