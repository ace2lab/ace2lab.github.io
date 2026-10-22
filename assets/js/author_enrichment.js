/*
 * Author enrichment for jekyll-scholar bibliographies.
 * Shared by the Home page (Selected Publications) and the Publications page.
 *  1. Bold ACE² Lab members (exact full-name match) and style contribution symbols († *)
 *  2. Flag journal-cover entries with a badge and highlight class
 * Idempotent: authors are marked with data-enhanced, covers with .is-cover-paper.
 */
(function () {
  // All 26 ACE² Lab members (including spelling variants used in papers.bib)
  var labMembers = [
    "Changyong Yim",
    "Taewook Kim",
    "Dawin Kim",
    "Dongho Lee",
    "Jaebeen Ahn",
    "Gyeongjin Kim",
    "Jongmin Lee",
    "Donggun Lee",
    "Minsu Kim",
    "Myeong Seo Kang",
    "Myeongseo Kang",
    "Changung Paeng",
    "Donghyun Lee",
    "Huijin Lee",
    "Jaeho Lee",
    "Junhyuck Ahn",
    "Junhyeok Ahn",
    "Kyuhyun Park",
    "Ninad Velhal",
    "Ninad B. Velhal",
    "Seong Gwang Lee",
    "Seonggwang Lee",
    "Subin Yang",
    "Tae Ho Yun",
    "Taeho Yoon",
    "Seokhyun Oh",
    "Sungwoo Kim",
    "Sumin Woo",
    "Gunwoo Wi",
    "Yuri Kim",
    "Hamin Kim",
    "Jongtaek Hong",
    "Huisu Kim",
    "Saeyeon Baek",
    "Soyeon Park",
  ];

  // Single alternation, longest name first, so variants never produce nested <strong>
  var memberRegex = new RegExp(
    "\\b(" +
      labMembers
        .slice()
        .sort(function (a, b) {
          return b.length - a.length;
        })
        .map(function (name) {
          return name.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        })
        .join("|") +
      ")(?![\\w])",
    "g"
  );

  function enrichAuthors(li) {
    var authorDiv = li.querySelector(".author");
    if (!authorDiv || authorDiv.getAttribute("data-enhanced")) return;
    authorDiv.setAttribute("data-enhanced", "true");

    var html = authorDiv.innerHTML;
    // Contribution symbols: † (co-first) and * (corresponding)
    html = html.replace(/†/g, '<span class="author-symbol">†</span>');
    html = html.replace(/\*/g, '<span class="author-symbol">*</span>');
    // Lab member names
    html = html.replace(memberRegex, "<strong>$1</strong>");
    authorDiv.innerHTML = html;
  }

  function flagCover(li) {
    var isCover = false;
    li.querySelectorAll(".periodical").forEach(function (p) {
      if (p.querySelector(".pub-badge--cover, .pub-badge--accepted, .ed-entry__jcr, .ed-entry__funding, .ed-entry__press")) return;
      var text = p.textContent.trim();
      if (!text || !/(cover|just accepted|in press)/i.test(text)) return;
      var parts = text.split(/\s*·\s*/);
      var badges = parts.map(function (part) {
        if (/cover/i.test(part)) {
          isCover = true;
          return '<span class="pub-badge pub-badge--cover"><i class="fa-solid fa-award" aria-hidden="true"></i> ' + part + "</span>";
        }
        if (/(just accepted|in press)/i.test(part)) {
          return '<span class="pub-badge pub-badge--accepted"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> ' + part + "</span>";
        }
        return part;
      });
      p.innerHTML = badges.join(" ");
    });
    if (isCover) {
      li.classList.add("is-cover-paper");
    }
  }

  function run() {
    document.querySelectorAll(".publications ol.bibliography > li").forEach(function (li) {
      enrichAuthors(li);
      flagCover(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
