// Verifies the 4-language (KO / EN / JA / ZH) SSOT contract across _data/i18n.yml,
// _data/members.yml Co-PI blocks, all data-i18n* bindings in _pages/ and _includes/,
// and pre-collapsed tab states across multi-tab pages.
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
    const val = langMatch[2].trim().replace(/^["\x27]|["\x27]$/g, "");
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

function normalize(str) {
  if (!str) return "";
  return str
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractElementContent(content, startIndex, openTag) {
  const openTagEnd = startIndex + openTag.length;
  const tagMatch = openTag.match(/^<([a-zA-Z0-9_-]+)/);
  if (!tagMatch) return { inner: "", line: 1 };
  const tag = tagMatch[1];

  let depth = 1;
  let closeIndex = -1;
  const tagRegex = new RegExp(`</?${tag}[^>]*>`, "gi");
  tagRegex.lastIndex = openTagEnd;
  let m;
  while ((m = tagRegex.exec(content)) !== null) {
    if (m[0].toLowerCase().startsWith(`</${tag.toLowerCase()}`)) {
      depth--;
      if (depth === 0) {
        closeIndex = m.index;
        break;
      }
    } else if (!m[0].endsWith("/>")) {
      depth++;
    }
  }

  const inner = closeIndex !== -1 ? content.slice(openTagEnd, closeIndex) : "";
  const line = content.slice(0, startIndex).split("\n").length;
  return { inner, line };
}

function collectTemplateFiles(dirPath) {
  const files = [];
  if (!fs.existsSync(dirPath)) return files;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectTemplateFiles(fullPath));
    } else if (/\.(md|liquid|html)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

// 2. Verify all data-i18n and data-i18n-html references, and assert zero English fallbacks
const templateFiles = [...collectTemplateFiles(path.join(root, "_pages")), ...collectTemplateFiles(path.join(root, "_includes"))];

for (const absFile of templateFiles) {
  const relFile = path.relative(root, absFile);
  const content = fs.readFileSync(absFile, "utf8");
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    for (const m of line.matchAll(/data-i18n(?:-html)?=["\x27]([^"\x27]+)["\x27]/g)) {
      const refKey = m[1];
      if (refKey.includes("{{")) continue; // Liquid variable interpolation checked via i18n_prefix
      if (!sections.ui.has(refKey)) {
        fail(`${relFile}:${idx + 1} references missing ui key '${refKey}'.`);
      }
    }

    for (const pfxMatch of line.matchAll(/i18n_prefix=["\x27]([^"\x27]+)["\x27]/g)) {
      const pfx = pfxMatch[1];
      for (const sub of ["label", "title", "subtitle", "subtitle_en"]) {
        const fullKey = `${pfx}.${sub}`;
        if (!sections.ui.has(fullKey)) {
          fail(`${relFile}:${idx + 1} i18n_prefix='${pfx}' missing ui key '${fullKey}'.`);
        }
      }
    }
  });

  // Zero-FLOC static Korean authoring assertion:
  // Assert that template elements bound to data-i18n* do not contain English fallback strings.
  const elementRegex = /<([a-zA-Z0-9_-]+)([^>]*\bdata-i18n(?:-html)?=["\x27]([^"\x27]+)["\x27][^>]*)>/gi;
  let elMatch;
  while ((elMatch = elementRegex.exec(content)) !== null) {
    const fullOpenTag = elMatch[0];
    const key = elMatch[3];
    if (key.includes("{{")) continue;

    const uiInfo = sections.ui.get(key);
    if (!uiInfo || !uiInfo.langs.ko || !uiInfo.langs.en) continue;

    const normKo = normalize(uiInfo.langs.ko);
    const normEn = normalize(uiInfo.langs.en);
    if (normKo.toLowerCase() === normEn.toLowerCase()) continue;

    const { inner, line } = extractElementContent(content, elMatch.index, fullOpenTag);
    const normInner = normalize(inner);

    if (normInner.toLowerCase() === normEn.toLowerCase()) {
      fail(`${relFile}:${line} [${key}] contains English fallback string "${normInner}" in Korean template (expected Korean: "${normKo}").`);
    }
  }
}

// 3. Verify pre-collapsed tab container and accessibility state across all 4 multi-tab pages
const tabPages = ["members.md", "projects.md", "facilities.md", "publications.md"];
for (const page of tabPages) {
  const relPage = path.join("_pages", page);
  const pagePath = path.join(root, relPage);
  if (!fs.existsSync(pagePath)) {
    fail(`${relPage} does not exist.`);
    continue;
  }
  const content = fs.readFileSync(pagePath, "utf8");

  // a. Container has pre-collapsed .is-tabbed class
  const containerMatch = content.match(
    /<([a-zA-Z0-9_-]+)[^>]*\bclass=["\x27]([^"\x27]*\b(?:ace2-tab-container|team-container)\b[^"\x27]*)["\x27][^>]*>/i
  );
  if (!containerMatch) {
    fail(`${relPage} missing tab container element (expected class 'ace2-tab-container' or 'team-container').`);
  } else if (!/\bis-tabbed\b/.test(containerMatch[2])) {
    fail(`${relPage} tab container element '${containerMatch[0]}' is missing pre-collapsed class 'is-tabbed'.`);
  }

  // b. Exactly one default tab with aria-selected="true"
  const tabs = [...content.matchAll(/<([a-zA-Z0-9_-]+)[^>]*\brole=["\x27]tab["\x27][^>]*>/gi)];
  if (tabs.length === 0) {
    fail(`${relPage} has no elements with role="tab".`);
  }
  const activeTabs = tabs.filter((t) => /\baria-selected=["\x27]true["\x27]/i.test(t[0]));
  if (activeTabs.length !== 1) {
    fail(`${relPage} must have exactly one active default tab with aria-selected="true" (found ${activeTabs.length}).`);
  }

  // c. Exactly one unhidden default panel, and all non-default panels have hidden attribute
  const panels = [...content.matchAll(/<([a-zA-Z0-9_-]+)[^>]*\brole=["\x27]tabpanel["\x27][^>]*>/gi)];
  if (panels.length === 0) {
    fail(`${relPage} has no elements with role="tabpanel".`);
  }
  const unhiddenPanels = panels.filter((p) => !/\bhidden\b/i.test(p[0]));
  if (unhiddenPanels.length !== 1) {
    fail(`${relPage} must have exactly one unhidden default panel (found ${unhiddenPanels.length} unhidden panels without 'hidden' attribute).`);
  }
  panels.forEach((p) => {
    const isDefault = /\bis-active\b/i.test(p[0]);
    const isHidden = /\bhidden\b/i.test(p[0]);
    if (!isDefault && !isHidden) {
      fail(`${relPage} non-default panel '${p[0]}' missing 'hidden' attribute.`);
    }
    if (isDefault && isHidden) {
      fail(`${relPage} active default panel '${p[0]}' must not have 'hidden' attribute.`);
    }
  });
}

// 4. Verify Co-PI 4-language summary_i18n and card_summary_i18n in _data/members.yml
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

// 5. Enforce Student Achievement Modal SSOT (no duplicate _data/student_papers.yml + required dynamic i18n keys)
if (fs.existsSync(path.join(root, "_data/student_papers.yml"))) {
  fail(
    "_data/student_papers.yml must not exist; student papers are synthesized at build time from _bibliography/papers.bib, _data/covers.yml, and _data/domestic.yml via _plugins/student_papers_ssot.rb."
  );
}
for (const dynKey of ["ach.type_sci", "ach.type_domestic", "ach.badge_accepted", "publications.badge_front_cover"]) {
  if (!sections.ui.has(dynKey)) {
    fail(`_data/i18n.yml missing required achievement modal UI key '${dynKey}'.`);
  }
}

// 6. If _site/ exists, verify built [data-i18n-term] elements render Korean text and student modal cover badges match SSOT
const siteDir = path.join(root, "_site");
if (fs.existsSync(siteDir)) {
  const builtMembers = path.join(siteDir, "members/index.html");
  if (fs.existsSync(builtMembers)) {
    const mHtml = fs.readFileSync(builtMembers, "utf8");
    const jaebinTpl = mHtml.match(/<template\s+id=["\x27]ach-jaebin-an["\x27][^>]*>([\s\S]*?)<\/template>/i);
    if (!jaebinTpl) {
      fail("_site/members/index.html missing <template id='ach-jaebin-an'>.");
    } else {
      const coverCount = (jaebinTpl[1].match(/ach-item__tag--cover/g) || []).length;
      if (coverCount !== 2) {
        fail(`_site/members/index.html ach-jaebin-an expected 2 Front Cover badges (.ach-item__tag--cover), found ${coverCount}.`);
      }
      if (!jaebinTpl[1].includes("https://doi.org/10.1002/smll.74205")) {
        fail("_site/members/index.html ach-jaebin-an missing canonical Small 2026 DOI (10.1002/smll.74205).");
      }
    }
  }

  const builtRoutes = [
    "index.html",
    "members/index.html",
    "research/index.html",
    "facilities/index.html",
    "publications/index.html",
    "news/index.html",
    "gallery/index.html",
    "teaching/index.html",
  ];
  for (const r of builtRoutes) {
    const builtPath = path.join(siteDir, r);
    if (!fs.existsSync(builtPath)) continue;
    const html = fs.readFileSync(builtPath, "utf8");
    const termRe = /<([a-zA-Z0-9_-]+)\b[^>]*\bdata-i18n-term\b[^>]*>([\s\S]*?)<\/\1>/gi;
    let tm;
    while ((tm = termRe.exec(html)) !== null) {
      const innerText = normalize(tm[2]);
      const termInfo = sections.terms.get(innerText);
      if (termInfo && termInfo.langs.ko && normalize(termInfo.langs.ko) !== innerText) {
        fail(`_site/${r} [data-i18n-term] rendered non-Korean "${innerText}" (expected "${normalize(termInfo.langs.ko)}").`);
      }
    }
  }

  // 7. Performance asset contracts: shared i18n script, lazy paper previews, and existing WebP thumbs
  const sharedI18nJs = path.join(siteDir, "assets/js/ace2_i18n_data.js");
  if (!fs.existsSync(sharedI18nJs) || fs.statSync(sharedI18nJs).size < 1000) {
    fail("_site/assets/js/ace2_i18n_data.js missing or unexpectedly small.");
  }

  const builtPubs = path.join(siteDir, "publications/index.html");
  if (fs.existsSync(builtPubs)) {
    const pubHtml = fs.readFileSync(builtPubs, "utf8");
    const eagerPreviews = [...pubHtml.matchAll(/<img\b[^>]*\bclass=["\x27][^"\x27]*\bpreview\b[^"\x27]*["\x27][^>]*>/gi)].filter((m) =>
      /\bloading=["\x27]eager["\x27]/i.test(m[0])
    );
    if (eagerPreviews.length > 0) {
      fail(`_site/publications/index.html contains ${eagerPreviews.length} .preview <img> with loading="eager" (expected 0).`);
    }
    const pubThumbSources = [
      ...pubHtml.matchAll(/<source\b[^>]*\bsrcset=["\x27]([^"\x27]*\/assets\/img\/thumbs\/[a-f0-9]{16}\.webp)(?:\?v=[a-f0-9]+)?["\x27]/gi),
    ];
    if (pubThumbSources.length < 50) {
      fail(`_site/publications/index.html expected >= 50 WebP thumbnail <source> tags, found ${pubThumbSources.length}.`);
    }
    for (const sm of pubThumbSources) {
      const relWebp = sm[1].replace(/^\/+/, "");
      if (!fs.existsSync(path.join(siteDir, relWebp))) {
        fail(`_site/publications/index.html references missing WebP thumb: ${relWebp}`);
      }
    }
    // In production builds (detected by stripped sample blog route), ensure eager ninja-keys module tag was swapped out
    if (
      !fs.existsSync(path.join(siteDir, "blog/index.html")) &&
      /<script\s+type=["\x27]module["\x27]\s+src=["\x27][^"\x27]*ninja-keys\.min\.js["\x27]/i.test(pubHtml)
    ) {
      fail("_site/publications/index.html still contains eager <script type='module' src='...ninja-keys.min.js'> in production build.");
    }
  }

  const builtGallery = path.join(siteDir, "gallery/index.html");
  if (fs.existsSync(builtGallery)) {
    const galHtml = fs.readFileSync(builtGallery, "utf8");
    const galThumbSources = [
      ...galHtml.matchAll(/<source\b[^>]*\bsrcset=["\x27]([^"\x27]*\/assets\/img\/thumbs\/[a-f0-9]{16}\.webp)(?:\?v=[a-f0-9]+)?["\x27]/gi),
    ];
    if (galThumbSources.length < 100) {
      fail(`_site/gallery/index.html expected >= 100 WebP thumbnail <source> tags, found ${galThumbSources.length}.`);
    }
    for (const sm of galThumbSources) {
      const relWebp = sm[1].replace(/^\/+/, "");
      if (!fs.existsSync(path.join(siteDir, relWebp))) {
        fail(`_site/gallery/index.html references missing WebP thumb: ${relWebp}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`i18n contract failed (${failures.length} violation${failures.length === 1 ? "" : "s"}):`);
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log(
  `i18n contract passed (${sections.nav.size} nav items, ${sections.ui.size} UI keys, ${sections.terms.size} glossary terms across 4 languages: KO/EN/JA/ZH; 4 tabbed pages pre-collapsed; zero English fallbacks).`
);
