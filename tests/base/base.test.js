import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { runOxlint, extractRuleCodes } from '../helpers.js';

describe('base', () => {
  it('sample.js のルール違反を検出する', () => {
    const result = runOxlint(resolve(import.meta.dirname, 'test.config.ts'), resolve(import.meta.dirname, 'sample.js'));
    const codes = extractRuleCodes(result.diagnostics);

    assert.equal(result.diagnostics.length, 22);
    assert.ok(codes.includes('import(named)'));
    assert.ok(codes.includes('import(no-duplicates)'));
    assert.ok(codes.includes('eslint(arrow-body-style)'));
    assert.ok(codes.includes('eslint(eqeqeq)'));
    assert.ok(codes.includes('eslint(guard-for-in)'));
    assert.ok(codes.includes('eslint(no-console)'));
    assert.ok(codes.includes('eslint(no-constant-condition)'));
    assert.ok(codes.includes('eslint(no-debugger)'));
    assert.ok(codes.includes('eslint(no-empty)'));
    assert.ok(codes.includes('eslint(no-eval)'));
    assert.ok(codes.includes('eslint(no-new-wrappers)'));
    assert.ok(codes.includes('eslint(no-param-reassign)'));
    assert.ok(codes.includes('eslint(no-restricted-exports)'));
    assert.ok(codes.includes('eslint(no-shadow)'));
    assert.ok(codes.includes('eslint(no-unused-vars)'));
    assert.ok(codes.includes('eslint(no-useless-concat)'));
    assert.ok(codes.includes('eslint(no-useless-constructor)'));
    assert.ok(codes.includes('eslint(no-useless-rename)'));
    assert.ok(codes.includes('eslint(no-useless-return)'));
    assert.ok(codes.includes('eslint(no-var)'));
    assert.ok(codes.includes('eslint(object-shorthand)'));
  });
});
