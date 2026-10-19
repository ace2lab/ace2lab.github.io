// Verifies the 4-language (KO / EN / JA / ZH) SSOT contract across _data/i18n.yml,
// _data/members.yml Co-PI blocks, and all data-i18n* bindings in _pages/ and _includes/.
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const LANGS = ["ko", "en", "ja", "zh"];
const failures = [];

function fail(msg) {
  failures.push(msg);
}

// 1. Parse _data/i18n.yml and verify 4-language completeness
const i18nPath = path.join(root, "_data/i18n.yml");
if (!fs.existsSync(i18nPath)) {
  console.error("Missing _data/i18n.yml");
  process.exit(1);
}

const i18nLines = fs.readFileSync(i18nPath, "utf8").split("\n");
const sections = { nav: new Map(), ui: new Map(), terms: new Map() };
let currentSection = null;
let currentKey = null;

for (let i = 0; i < i18nLines.length; i++) {
  const raw = i18nLines[i];
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;

  const topMatch = raw.match(/^(meta|nav|ui|terms):\s*$/);
  if (topMatch) {
    currentSection = topMatch[1];
    currentKey = null;
    continue;
  }

  if (!currentSection || currentSection === "meta") continue;

  const keyMatch = raw.match(/^  (?:"([^"]+)"|([A-Za-z0-9_.-]+)):\s*$/);
  if (keyMatch) {
    currentKey = keyMatch[1] || keyMatch[2];
    sections[currentSection].set(currentKey, { line: i + 1, langs: {} });
    continue;
  }

  const langMatch = raw.match(/^    (ko|en|ja|zh):\s*(.+)$/);
  if (langMatch && currentKey && sections[currentSection].has(currentKey)) {
    const lang = langMatch[1];
    const val = langMatch[2].trim().replace(/^["']|["']$/g, "");
    sections[currentSection].get(currentKey).langs[lang] = val;
  }
}

for (const [secName, map] of Object.entries(sections)) {
  if (map.size === 0) {
    fail(`_data/i18n.yml section '${secName}' is empty.`);
  }
  for (const [key, info] of map.entries()) {
    for (const lang of LANGS) {
      if (!info.langs[lang] || info.langs[lang].trim() === "") {
        fail(`_data/i18n.yml:${info.line} [${secName}.${key}] missing or empty '${lang}' translation.`);
      }
    }
  }
}

// 2. Verify all data-i18n and data-i18n-html references in _pages/ and _includes/
const scanDirs = ["_pages", "_includes"];
for (const dir of scanDirs) {
  const absDir = path.join(root, dir);
  if (!fs.existsSync(absDir)) continue;
  for (const entry of fs.readdirSync(absDir)) {
    if (!/\.(md|liquid|html)$/.test(entry)) continue;
    const relFile = path.join(dir, entry);
    const content = fs.readFileSync(path.join(root, relFile), "utf8");
    const lines = content.split("\n");

    lines.forEach((line, idx) => {
      for (const m of line.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)) {
        const refKey = m[1];
        if (refKey.includes("{{")) continue; // Liquid variable interpolation checked via i18n_prefix
        if (!sections.ui.has(refKey)) {
          fail(`${relFile}:${idx + 1} references missing ui key '${refKey}'.`);
        }
      }

      for (const pfxMatch of line.matchAll(/i18n_prefix="([^"]+)"/g)) {
        const pfx = pfxMatch[1];
        for (const sub of ["label", "title", "subtitle", "subtitle_en"]) {
          const fullKey = `${pfx}.${sub}`;
          if (!sections.ui.has(fullKey)) {
            fail(`${relFile}:${idx + 1} i18n_prefix='${pfx}' missing ui key '${fullKey}'.`);
          }
        }
      }
    });
  }
}

// 3. Verify Co-PI 4-language summary_i18n and card_summary_i18n in _data/members.yml
const membersContent = fs.readFileSync(path.join(root, "_data/members.yml"), "utf8");
for (const blockName of ["summary_i18n", "card_summary_i18n"]) {
  const matches = [...membersContent.matchAll(new RegExp(`^  ${blockName}:\\n((?:    .+\\n){4})`, "gm"))];
  if (matches.length < 2) {
    fail(`_data/members.yml must define '${blockName}' for both Co-PIs (found ${matches.length}).`);
  }
  matches.forEach((m, i) => {
    for (const lang of LANGS) {
      if (!new RegExp(`^    ${lang}:\\s+\\S+`, "m").test(m[1])) {
        fail(`_data/members.yml Co-PI #${i + 1} '${blockName}' missing '${lang}'.`);
      }
    }
  });
}

if (failures.length > 0) {
  console.error(`i18n contract failed (${failures.length} violation${failures.length === 1 ? "" : "s"}):`);
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log(
  `i18n contract passed (${sections.nav.size} nav items, ${sections.ui.size} UI keys, ${sections.terms.size} glossary terms across 4 languages: KO/EN/JA/ZH).`
);
