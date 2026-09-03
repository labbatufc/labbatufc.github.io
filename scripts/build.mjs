import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ["index.html", "site.css", "site.js"]) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}

await cp(new URL("../media/", import.meta.url), new URL("../dist/media/", import.meta.url), { recursive: true });
await cp(new URL("../fonts/", import.meta.url), new URL("../dist/fonts/", import.meta.url), { recursive: true });
