import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { runOxlint, extractRuleCodes } from '../helpers.js';

describe('typescript', () => {
  it('sample.ts のルール違反を検出する', () => {
    const result = runOxlint(resolve(import.meta.dirname, 'test.config.ts'), resolve(import.meta.dirname, 'sample.ts'));
    const codes = extractRuleCodes(result.diagnostics);

    assert.equal(result.diagnostics.length, 7);
    assert.ok(codes.includes('typescript-eslint(consistent-type-imports)'));
    assert.ok(codes.includes('typescript-eslint(no-explicit-any)'));
    assert.ok(codes.includes('typescript-eslint(array-type)'));
    assert.ok(codes.includes('typescript-eslint(no-non-null-assertion)'));
    assert.ok(codes.includes('typescript-eslint(no-require-imports)'));
    assert.ok(codes.includes('typescript-eslint(no-empty-object-type)'));
    assert.ok(codes.includes('eslint(prefer-const)'));
  });
});
