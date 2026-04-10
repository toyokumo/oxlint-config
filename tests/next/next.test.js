import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { runOxlint, extractRuleCodes } from '../helpers.js';

describe('next', () => {
  it('sample.tsx のルール違反を検出する', () => {
    const result = runOxlint(
      resolve(import.meta.dirname, 'test.config.ts'),
      resolve(import.meta.dirname, 'sample.tsx'),
    );
    const codes = extractRuleCodes(result.diagnostics);

    assert.equal(result.diagnostics.length, 4);
    assert.ok(codes.includes('eslint-plugin-next(no-img-element)'));
    assert.ok(codes.includes('eslint-plugin-next(no-head-element)'));
    assert.ok(codes.includes('eslint-plugin-next(no-sync-scripts)'));
    assert.ok(codes.includes('eslint-plugin-react(self-closing-comp)'));
  });
});
