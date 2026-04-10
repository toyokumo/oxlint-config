import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');

/**
 * @param {string} configPath
 * @param {string} targetPath
 * @returns {{ diagnostics: Array<{ message: string, code: string, severity: string }> }}
 */
export function runOxlint(configPath, targetPath) {
  try {
    const stdout = execFileSync(
      resolve(projectRoot, 'node_modules/.bin/oxlint'),
      ['-c', configPath, '--format', 'json', targetPath],
      { cwd: projectRoot, encoding: 'utf8' },
    );
    return JSON.parse(stdout);
  } catch (e) {
    return JSON.parse(e.stdout);
  }
}

/**
 * @param {Array<{ code: string }>} diagnostics
 * @returns {string[]}
 */
export function extractRuleCodes(diagnostics) {
  return diagnostics.map((d) => d.code);
}
