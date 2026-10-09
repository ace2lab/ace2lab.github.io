import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ROOT_DIR = process.cwd();
const PREVIEW_DIR = path.join(ROOT_DIR, "assets/img/publication_preview");
const BIB_PATH = path.join(ROOT_DIR, "_bibliography/papers.bib");

if (!fs.existsSync(PREVIEW_DIR)) {
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
}

function cleanDoi(doiStr) {
  if (!doiStr) return "";
  return doiStr
    .toLowerCase()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
    .replace(/^doi\.org\//, "")
    .replace(/^doi:\s*/, "")
    .trim();
}

function cleanTitle(titleStr) {
  if (!titleStr) return "";
  return titleStr.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function scrapePage(page, url) {
  console.log(`\nNavigating to ${url}...`);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(3500);

  const items = await page.evaluate(() => {
    const list = [];
    const sections = Array.from(document.querySelectorAll("section"));
    for (const sec of sections) {
      const img = sec.querySelector("img");
      const text = sec.innerText || "";
      if (img && img.src && img.src.includes("googleusercontent.com") && text.includes("DOI")) {
        const titleMatch = text.match(/\((\d+)\)\s*([^\n\r]+)/);
        const doiMatch = text.match(/DOI:\s*([^\s\n\r]+)/i);
        list.push({
          num: titleMatch ? titleMatch[1] : null,
          rawTitle: titleMatch ? titleMatch[2].trim() : "",
          rawDoi: doiMatch ? doiMatch[1].trim() : "",
          imgSrc: img.src,
        });
      }
    }
    return list;
  });

  console.log(`Found ${items.length} publications with figures on ${url}`);
  return items;
}

async function main() {
  console.log("========================================================");
  console.log("Scraping and Binding Publication Graphical Abstracts");
  console.log("========================================================");

  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
  });
  const page = await browser.newPage();

  const yimItems = await scrapePage(page, "https://ace2.knu.ac.kr/publications/prof-changyong-yim");
  const kimItems = await scrapePage(page, "https://ace2.knu.ac.kr/publications/prof-taewook-kim");

  const allItems = [...yimItems, ...kimItems];
  console.log(`Total collected publication figures: ${allItems.length}`);

  // Read BibTeX
  const bibContent = fs.readFileSync(BIB_PATH, "utf-8");
  const entryRegex = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)(?=\n@|\Z)/g;

  const entries = [];
  let m;
  while ((m = entryRegex.exec(bibContent)) !== null) {
    const type = m[1];
    const key = m[2].trim();
    const body = m[3];

    const doiMatch = body.match(/doi\s*=\s*[\x7b"]([^\x7d"]+)[\x7d"]/i);
    const titleMatch = body.match(/title\s*=\s*[\x7b"]([^\x7d"]+)[\x7d"]/i);

    entries.push({
      type,
      key,
      body,
      doi: doiMatch ? cleanDoi(doiMatch[1]) : "",
      title: titleMatch ? titleMatch[1] : "",
      cleanTitle: titleMatch ? cleanTitle(titleMatch[1]) : "",
      fullMatch: m[0],
    });
  }
  console.log(`Parsed ${entries.length} entries from papers.bib`);

  let boundCount = 0;
  let newBib = bibContent;

  for (const entry of entries) {
    // Find matching scraped item
    let matchedItem = allItems.find((item) => {
      const cDoi = cleanDoi(item.rawDoi);
      return entry.doi && cDoi && (entry.doi === cDoi || entry.doi.includes(cDoi) || cDoi.includes(entry.doi));
    });

    if (!matchedItem && entry.cleanTitle) {
      matchedItem = allItems.find((item) => {
        const cTitle = cleanTitle(item.rawTitle);
        if (!cTitle || cTitle.length < 15) return false;
        return entry.cleanTitle.includes(cTitle) || cTitle.includes(entry.cleanTitle);
      });
    }

    if (matchedItem) {
      const destFilename = `${entry.key}.jpg`;
      const destRel = `assets/img/publication_preview/${destFilename}`;
      const destFull = path.join(ROOT_DIR, destRel);

      try {
        const resp = await page.context().request.get(matchedItem.imgSrc);
        if (resp.status() === 200) {
          const buf = await resp.body();
          fs.writeFileSync(destFull, buf);
          console.log(`  [OK] (${entry.key}) Saved figure (${(buf.length / 1024).toFixed(1)} KB) -> ${destFilename}`);

          // Update entry in newBib with preview field if not present
          const entryPattern = new RegExp(`(@\\w+\\s*\\{\\s*${entry.key},)([\\s\\S]*?)(?=\\n@|\\Z)`);
          newBib = newBib.replace(entryPattern, (match, header, body) => {
            if (/preview\s*=/i.test(body)) {
              return match.replace(/preview\s*=\s*[\x7b"][^\x7d"]*[\x7d"]/i, `preview     = {${destFilename}}`);
            } else {
              return `${header}\n  preview     = {${destFilename}},${body}`;
            }
          });
          boundCount++;
        } else {
          console.warn(`  [WARN] Failed to download figure for ${entry.key}: status ${resp.status()}`);
        }
      } catch (err) {
        console.error(`  [ERROR] Downloading figure for ${entry.key}:`, err.message);
      }
    } else {
      console.log(`  [MISS] No figure found for: ${entry.key} (${entry.doi || entry.title.slice(0, 40)})`);
    }
  }

  fs.writeFileSync(BIB_PATH, newBib, "utf-8");
  console.log(`\n========================================================`);
  console.log(`Successfully bound ${boundCount} / ${entries.length} publication figures!`);
  console.log(`Updated: _bibliography/papers.bib`);
  console.log(`========================================================`);

  await browser.close();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
