import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../www/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'service-worker.js', 'manifest.json', 'icon.svg']) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../www/${file}`, import.meta.url));
}
