import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const library = await import('../dist/index.mjs');

test('exports core public APIs', () => {
  for (const exportName of [
    'Button',
    'Card',
    'CommandDialog',
    'ToastProvider',
    'cn',
  ]) {
    assert.ok(exportName in library, `Missing public export: ${exportName}`);
  }
});

test('merges Tailwind classes through the public cn helper', () => {
  assert.equal(library.cn('p-2 text-cyan-400', 'p-4'), 'text-cyan-400 p-4');
});

test('publishes the stylesheet declared by the globals.css export', async () => {
  const packageJson = JSON.parse(
    await readFile(new URL('../package.json', import.meta.url), 'utf8'),
  );
  const stylesheet = new URL('../dist/styles/globals.css', import.meta.url);
  const stylesheetContents = await readFile(stylesheet, 'utf8');

  assert.equal(
    packageJson.exports['./globals.css'],
    './dist/styles/globals.css',
  );
  assert.deepEqual(packageJson.files, ['dist']);
  assert.match(stylesheetContents, /@import "tailwindcss"/);
});
