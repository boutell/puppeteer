import {copyFileSync, readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {chdir} from 'process';
import semver from 'semver';
import {versionsPerRelease} from '../versions.js';
import {sync} from 'glob';

// eslint-disable-next-line import/extensions
import {generateDocs} from './internal/custom_markdown_action';

function getOffsetAndLimit(
  sectionName: string,
  lines: string[]
): [offset: number, limit: number] {
  const offset =
    lines.findIndex(line => {
      return line.includes(`<!-- ${sectionName}-start -->`);
    }) + 1;
  const limit = lines.slice(offset).findIndex(line => {
    return line.includes(`<!-- ${sectionName}-end -->`);
  });
  return [offset, limit];
}

function spliceIntoSection(
  sectionName: string,
  content: string,
  sectionContent: string
): string {
  const lines = content.split('\n');
  const [offset, limit] = getOffsetAndLimit(sectionName, lines);
  lines.splice(offset, limit, ...sectionContent.split('\n'));
  return lines.join('\n');
}

// Change to root directory
chdir(join(__dirname, '..'));

// README
{
  copyFileSync('README.md', 'docs/index.md');
}

// Chrome Versions
{
  const filename = 'docs/chromium-support.md';
  let content = readFileSync(filename, {encoding: 'utf8'});

  // Generate versions
  const buffer: string[] = [];
  for (const [chromiumVersion, puppeteerVersion] of versionsPerRelease) {
    if (puppeteerVersion === 'NEXT') {
      continue;
    }
    if (semver.lt(puppeteerVersion, '15.0.0')) {
      buffer.push(
        `  * Chromium ${chromiumVersion} - [Puppeteer ${puppeteerVersion}](https://github.com/puppeteer/puppeteer/blob/${puppeteerVersion}/docs/api.md)`
      );
    } else {
      buffer.push(
        `  * Chromium ${chromiumVersion} - Puppeteer ${puppeteerVersion}`
      );
    }
  }
  content = spliceIntoSection('version', content, buffer.join('\n'));

  writeFileSync(filename, content);
}

generateDocs('docs/puppeteer.api.json', 'docs/api');

// Change to documentation directory
chdir('docs/api');

for (const file of sync(`./**/*.md`)) {
  let content = readFileSync(file, {encoding: 'utf-8'});

  // Replace boldface with markdown equivalent.
  content = content.replace(/<b>|<\/b>/g, '**');

  writeFileSync(file, content);
}
