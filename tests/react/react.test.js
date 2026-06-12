import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { runOxlint, extractRuleCodes } from '../helpers.js';

describe('react', () => {
  it('sample.tsx のルール違反を検出する', () => {
    const result = runOxlint(
      resolve(import.meta.dirname, 'test.config.ts'),
      resolve(import.meta.dirname, 'sample.tsx'),
    );
    const codes = extractRuleCodes(result.diagnostics);

    assert.equal(result.diagnostics.length, 12);
    assert.ok(codes.includes('react(jsx-no-useless-fragment)'));
    assert.ok(codes.includes('react(self-closing-comp)'));
    assert.ok(codes.includes('react(button-has-type)'));
    assert.ok(codes.includes('react(jsx-boolean-value)'));
    assert.ok(codes.includes('react(jsx-curly-brace-presence)'));
    assert.ok(codes.includes('react(jsx-no-target-blank)'));
    assert.ok(codes.includes('jsx-a11y(alt-text)'));
    assert.ok(codes.includes('jsx-a11y(anchor-has-content)'));
    assert.ok(codes.includes('jsx-a11y(control-has-associated-label)'));
  });

  it('sample2.tsx で import/prefer-default-export を検出する', () => {
    const result = runOxlint(
      resolve(import.meta.dirname, 'test.config.ts'),
      resolve(import.meta.dirname, 'sample2.tsx'),
    );
    const codes = extractRuleCodes(result.diagnostics);

    assert.equal(result.diagnostics.length, 1);
    assert.ok(codes.includes('import(prefer-default-export)'));
  });
});
