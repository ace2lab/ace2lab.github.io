// Fails when a source file references a local asset that does not exist.
// Catches broken image paths before the post-deploy lychee check does.
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();

const SCAN_DIRS = ["_pages", "_posts", "_news", "_projects", "_teachings", "_books", "_data", "_includes"];
const SCAN_EXTS = new Set([".md", ".markdown", ".html", ".liquid", ".yml", ".yaml"]);
const ASSET_EXTS = "jpe?g|png|gif|webp|svg|avif|pdf|mp4|webm|mov|mp3|wav|ogg|json|csv|ipynb";
const ASSET_RE = new RegExp(`assets/[^\\s"'\`()<>{}|\\\\,]+?\\.(?:${ASSET_EXTS})(?![\\w.])`, "gi");
const PREVIEW_DIR = "assets/img/publication_preview";

const walk = (dir) => {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((entry) => {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(rel);
    return SCAN_EXTS.has(path.extname(entry.name).toLowerCase()) ? [rel] : [];
  });
};

const exists = (relPath) => fs.existsSync(path.join(root, decodeURIComponent(relPath)));

const failures = [];

for (const file of SCAN_DIRS.flatMap(walk)) {
  const lines = fs.readFileSync(path.join(root, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const match of line.matchAll(ASSET_RE)) {
      if (!exists(match[0])) failures.push(`${file}:${i + 1} -> ${match[0]}`);
    }
  });
}

const bibDir = path.join(root, "_bibliography");
if (fs.existsSync(bibDir)) {
  for (const bib of fs.readdirSync(bibDir).filter((name) => name.endsWith(".bib"))) {
    const lines = fs.readFileSync(path.join(bibDir, bib), "utf8").split("\n");
    lines.forEach((line, i) => {
      const match = line.match(/^\s*preview\s*=\s*[{"]([^}"]+)[}"]/);
      if (match && !/^https?:/.test(match[1]) && !exists(`${PREVIEW_DIR}/${match[1]}`)) {
        failures.push(`_bibliography/${bib}:${i + 1} -> ${PREVIEW_DIR}/${match[1]}`);
      }
    });
  }
}

if (failures.length > 0) {
  console.error(`Asset reference check failed (${failures.length} missing):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Asset reference check passed.");
