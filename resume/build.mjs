/**
 * Renders resume/resume.html to public/asv_c/resume.pdf.
 *
 * Uses whichever Chrome or Chromium is already on the machine rather than
 * pulling in a headless-browser dependency for a file that changes a few times
 * a year. Run with `npm run resume`.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'resume.html');
const output = resolve(here, '..', 'public', 'asv_c', 'resume.pdf');

const CANDIDATES = [
  process.env.CHROME_PATH,
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

function findChrome() {
  for (const candidate of CANDIDATES) {
    try {
      execFileSync(candidate, ['--version'], { stdio: 'ignore' });
      return candidate;
    } catch {
      // Not on PATH, or not executable — try the next one.
    }
  }
  throw new Error(
    'No Chrome or Chromium found. Install one, or set CHROME_PATH to its executable.',
  );
}

if (!existsSync(source)) throw new Error(`Missing ${source}`);

const chrome = findChrome();
// Chrome refuses to write into a directory it does not own cleanly; give it a
// scratch profile so parallel runs and existing sessions do not collide.
const profile = mkdtempSync(join(tmpdir(), 'resume-chrome-'));

try {
  execFileSync(
    chrome,
    [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      `--user-data-dir=${profile}`,
      '--no-pdf-header-footer',
      '--print-to-pdf-no-header',
      `--print-to-pdf=${output}`,
      // Fonts are loaded from ../public/fonts over file://, which Chrome allows
      // for same-directory-tree resources.
      `file://${source}`,
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

if (!existsSync(output)) throw new Error('Chrome reported success but wrote no PDF.');
const kb = (statSync(output).size / 1024).toFixed(0);
console.log(`resume.pdf written — ${kb} kB → public/asv_c/resume.pdf`);
