const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();

const read = (relPath) => fs.readFileSync(path.join(root, relPath), "utf8");
const exists = (relPath) => fs.existsSync(path.join(root, relPath));
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const failures = [];

const packageJson = JSON.parse(read("package.json"));
const scripts = packageJson.scripts || {};
for (const forbiddenScript of ["build:css", "build:tailwind", "build:tailwind:watch"]) {
  if (Object.prototype.hasOwnProperty.call(scripts, forbiddenScript)) {
    failures.push(`Starter package.json must not define \`${forbiddenScript}\`; build ownership belongs to gem repos.`);
  }
}

const config = read("_config.yml");
if (!/^\s*theme:\s*al_folio_core\s*$/m.test(config)) {
  failures.push("`_config.yml` must keep `theme: al_folio_core` for thin-starter wiring.");
}
if (!/^\s*-\s*al_folio_core\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_folio_core`.");
}
if (!/^\s*-\s*al_folio_distill\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_folio_distill` (distill is plugin-owned).");
}
if (!/^\s*-\s*al_cookie\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_cookie` (cookie consent is plugin-owned).");
}
if (!/^\s*-\s*al_icons\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_icons` (icon runtime is plugin-owned).");
}
if (!/^\s*-\s*al_math\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_math` when math features are enabled.");
}

for (const libraryKey of ["fontawesome", "academicons", "scholar-icons"]) {
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:\\s*$`, "m").test(config)) {
    failures.push(`\`_config.yml\` must define \`third_party_libraries.${libraryKey}\` for al_icons runtime wiring.`);
    continue;
  }
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:[\\s\\S]*?^\\s{4}integrity:\\s*$[\\s\\S]*?^\\s{6}css:\\s*\"sha`, "m").test(config)) {
    failures.push(`\`_config.yml\` should define an SRI hash for \`third_party_libraries.${libraryKey}.integrity.css\`.`);
  }
}

for (const libraryKey of ["tikzjax", "tocbot"]) {
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:\\s*$`, "m").test(config)) {
    failures.push(`\`_config.yml\` must define \`third_party_libraries.${libraryKey}\` for v1 runtime contracts.`);
  }
}

const gemfile = read("Gemfile");
// The point of this check is that `al_math` is pinned to *a* released version,
// not to any particular one. Hard-coding the number here meant every routine
// version bump failed the style contract until someone remembered to edit this
// file too, which is a tripwire for the bump rather than for the boundary.
if (!/gem 'al_math', '= \d+\.\d+\.\d+'/.test(gemfile)) {
  failures.push("`Gemfile` should pin `al_math` to an exact released version (`= x.y.z`).");
}
if (/gem 'al_math',\s*:git =>/.test(gemfile)) {
  failures.push("`Gemfile` must not use git-branch pin for `al_math`; use released gem version.");
}

for (const forbiddenPath of ["_layouts", "_sass", "_scripts", "assets/tailwind", "tailwind.config.js", "assets/webfonts"]) {
  if (exists(forbiddenPath)) {
    failures.push(`Starter must not own core component path \`${forbiddenPath}\`; move ownership to the corresponding gem.`);
  }
}

for (const forbiddenGlobPath of [
  "assets/fonts/academicons.woff",
  "assets/fonts/academicons.ttf",
  "assets/fonts/scholar-icons.woff",
  "assets/fonts/scholar-icons.ttf",
]) {
  if (exists(forbiddenGlobPath)) {
    failures.push(`Starter must not own icon runtime artifact \`${forbiddenGlobPath}\`; icon ownership belongs to al_icons.`);
  }
}

for (const requiredPath of ["test/visual", "test/integration_plugin_toggles.sh", "test/integration_distill.sh"]) {
  if (!exists(requiredPath)) {
    failures.push(`Starter integration/visual contract missing required path: \`${requiredPath}\`.`);
  }
}

// -----------------------------------------------------------------------------
// ACE² Lab Editorial Styling, Typography & Chemical Notation Contracts
// -----------------------------------------------------------------------------
function collectFiles(relDir, extPattern) {
  const absDir = path.join(root, relDir);
  if (!fs.existsSync(absDir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    const childRel = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectFiles(childRel, extPattern));
    } else if (extPattern.test(entry.name)) {
      out.push(childRel);
    }
  }
  return out;
}

// 1. Forbid page-local <style> blocks inside _pages/*.md (all styling belongs in assets/css/)
for (const relPage of collectFiles("_pages", /\.md$/)) {
  const content = read(relPage);
  if (/<style\b/i.test(content)) {
    failures.push(`\`${relPage}\` must not contain inline \`<style>\` blocks; move rules to \`assets/css/editorial_typography.css\`.`);
  }
}

// 2. Zero inline bolding contract: forbid <strong>, <b>, and markdown ** in ACE² templates, news, and JS
const ace2ScanFiles = [
  ...collectFiles("_pages", /\.(md|html|liquid)$/),
  ...collectFiles("_includes", /\.(liquid|html)$/),
  ...collectFiles("_news", /\.md$/),
  ...collectFiles("assets/js", /\.js$/),
];
for (const relFile of ace2ScanFiles) {
  // Exclude upstream al-folio demo pages stripped in production if any
  if (/_pages\/(cv|dropdown|profiles|repositories|books|blog)\.md$/.test(relFile)) continue;
  const lines = read(relFile).split("\n");
  lines.forEach((line, idx) => {
    if (/<(strong|b)(?:\s|>)/i.test(line)) {
      failures.push(`\`${relFile}:${idx + 1}\` contains forbidden inline bold tag (\`<strong>\` / \`<b>\`); use semantic span classes.`);
    }
  });
}

// 3. 13px (0.8125rem) readable type floor across ACE² custom stylesheets
for (const relCss of collectFiles("assets/css", /\.css$/)) {
  const lines = read(relCss).split("\n");
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("/*") || trimmed.startsWith("*")) return;
    for (const m of line.matchAll(/font-size:\s*([0-9]*\.?[0-9]+)(rem|px)\b/gi)) {
      const val = parseFloat(m[1]);
      const unit = m[2].toLowerCase();
      if (val === 0) continue;
      if ((unit === "rem" && val < 0.8125) || (unit === "px" && val < 13)) {
        failures.push(`\`${relCss}:${idx + 1}\` violates 13px (0.8125rem) type floor: \`${m[0]}\`.`);
      }
    }
  });
}

// 4. Chemical formula subscript invariant on ACE² display data & pages
const plainChemRe = /\b(TiO2|SnO2|NO2|SO2|CO2|NH3|ND3|C6D6|V2O5|WO3|Al2O3|ZrO2|KNbO3|K2Ti2O5)\b/;
for (const relData of ["_data/domestic.yml", "_data/patents.yml", "_data/members.yml", "_pages/projects.md"]) {
  if (!exists(relData)) continue;
  const lines = read(relData).split("\n");
  lines.forEach((line, idx) => {
    const t = line.trim();
    if (!t || t.startsWith("#")) return;
    // Strip URLs, file paths, and HTML tag attributes before checking display text
    const stripped = line
      .replace(/https?:\/\/\S+/g, "")
      .replace(/assets\/\S+/g, "")
      .replace(/\b(?:alt|id|href|src|data-[a-z0-9_-]+)=["'][^"']*["']/gi, "");
    const hit = stripped.match(plainChemRe);
    if (hit) {
      failures.push(`\`${relData}:${idx + 1}\` contains unformatted chemical formula \`${hit[1]}\` (use Unicode subscripts or \`<sub>\`).`);
    }
  });
}

if (exists("_bibliography/papers.bib")) {
  const bibLines = read("_bibliography/papers.bib").split("\n");
  bibLines.forEach((line, idx) => {
    if (!/^\s*title\s*=/i.test(line)) return;
    const hit = line.match(plainChemRe);
    if (hit) {
      failures.push(`\`_bibliography/papers.bib:${idx + 1}\` title contains unformatted chemical formula \`${hit[1]}\` (use \`<sub>\`).`);
    }
  });
}

if (failures.length > 0) {
  console.error("Starter style contract check failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Starter style contract check passed.");
