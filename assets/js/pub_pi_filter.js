/*
 * PI filter for the International Journals panel (Publications page).
 *  1. Tag each jekyll-scholar entry with data-pi="yim kim" (exact full-name match on .author)
 *  2. Hide non-matching entries with .is-pi-hidden, kept separate from bibsearch's .unloaded
 *  3. Re-sync year headings and #pubYearChips counts on PI change and on "bibsearch:filtered"
 *  4. Deep link: ?pi=yim | ?pi=kim (absent = All), kept in sync via history.replaceState
 * An entry is visible only if it is neither .unloaded (search) nor .is-pi-hidden (PI).
 */
(function () {
  var PIS = {
    yim: { label: "Prof. Changyong Yim", pattern: /\bChangyong\s+Yim\b/i },
    kim: { label: "Prof. Taewook Kim", pattern: /\bTae-?wook\s+Kim\b/i },
  };
  var HIDDEN = "is-pi-hidden"; // entry excluded by the PI filter
  var EMPTY = "is-pi-empty"; // year heading / list / chip with no visible entry

  // aria-live status strings follow html[data-lang] (ace2_i18n.js) and are re-rendered when it changes
  var NOUNS = {
    journals: { ko: "국제 학술지 논문", en: "international journal articles", ja: "国際学術誌論文", zh: "国际期刊论文" },
    patents: { ko: "특허", en: "patents", ja: "特許", zh: "专利" },
    talks: { ko: "학술대회 발표", en: "conference presentations", ja: "学会発表", zh: "会议报告" },
  };
  var refreshers = [];

  function statusText(kind, shown, total, scopeName) {
    var lang = document.documentElement.getAttribute("data-lang");
    var noun = (NOUNS[kind] || NOUNS.journals)[lang] ? lang : "ko";
    var label = NOUNS[kind][noun];
    if (noun === "en") return "Showing " + shown + " of " + total + " " + label + (scopeName ? " by " + scopeName : "") + ".";
    if (noun === "ja") return label + " " + total + " 件中 " + shown + " 件を表示" + (scopeName ? "（" + scopeName + "）" : "") + "。";
    if (noun === "zh") return "显示" + label + " " + total + " 项中的 " + shown + " 项" + (scopeName ? "（" + scopeName + "）" : "") + "。";
    return label + " " + total + "건 중 " + shown + "건 표시" + (scopeName ? " (" + scopeName + ")" : "") + ".";
  }

  if (window.MutationObserver) {
    new MutationObserver(function () {
      refreshers.forEach(function (fn) {
        fn();
      });
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
  }

  var panel, fieldset, status, items;
  var current = "all";
  var ready = false;
  var counts = { all: 0, yim: 0, kim: 0 };

  function isPi(value) {
    return Object.prototype.hasOwnProperty.call(PIS, value);
  }

  function readParam() {
    var value = (new URLSearchParams(window.location.search).get("pi") || "").toLowerCase();
    return isPi(value) ? value : "all";
  }

  function writeParam(pi) {
    var params = new URLSearchParams(window.location.search);
    if (pi === "all") {
      params.delete("pi");
    } else {
      params.set("pi", pi);
    }
    var query = params.toString();
    var next = window.location.pathname + (query ? "?" + query : "") + window.location.hash;
    if (next !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(window.history.state, "", next);
    }
  }

  function classify() {
    counts = { all: items.length, yim: 0, kim: 0 };
    items.forEach(function (li) {
      var author = li.querySelector(".author");
      var text = author ? author.textContent.replace(/\s+/g, " ") : "";
      var tags = Object.keys(PIS).filter(function (key) {
        return PIS[key].pattern.test(text);
      });
      li.setAttribute("data-pi", tags.join(" "));
      tags.forEach(function (key) {
        counts[key] += 1;
      });
    });
    return counts;
  }

  function isVisible(li) {
    return !li.classList.contains("unloaded") && !li.classList.contains(HIDDEN);
  }

  // Combined (search AND PI) visibility for year groups, chips and the live status
  function sync() {
    if (!ready) return;
    var yearCounts = {};
    var shown = 0;

    panel.querySelectorAll(".publications h2.bibliography").forEach(function (h2) {
      var groupShown = 0;
      var node = h2.nextElementSibling;
      while (node && node.tagName !== "H2") {
        if (node.tagName === "OL") {
          var visible = 0;
          node.querySelectorAll(":scope > li").forEach(function (li) {
            if (isVisible(li)) visible += 1;
          });
          node.classList.toggle(EMPTY, visible === 0);
          var label = node.previousElementSibling;
          if (label && label !== h2 && label.tagName !== "OL") {
            label.classList.toggle(EMPTY, visible === 0); // sub-grouping heading, if any
          }
          groupShown += visible;
        }
        node = node.nextElementSibling;
      }
      h2.classList.toggle(EMPTY, groupShown === 0);
      var year = h2.textContent.trim();
      yearCounts[year] = (yearCounts[year] || 0) + groupShown;
      shown += groupShown;
    });

    document.querySelectorAll("#pubYearChips .pub-year-chip").forEach(function (chip) {
      var n = yearCounts[chip.getAttribute("data-year")] || 0;
      var badge = chip.querySelector(".pub-year-chip__count");
      if (badge) badge.textContent = n;
      chip.classList.toggle(EMPTY, n === 0);
    });

    lastShown = shown;
    renderStatus();
  }

  var lastShown = 0;
  function renderStatus() {
    if (!status || !ready) return;
    status.textContent = statusText("journals", lastShown, items.length, current === "all" ? "" : PIS[current].label);
  }
  refreshers.push(renderStatus);

  function apply(pi) {
    current = pi;
    items.forEach(function (li) {
      var tags = (li.getAttribute("data-pi") || "").split(" ");
      li.classList.toggle(HIDDEN, pi !== "all" && tags.indexOf(pi) === -1);
    });
    // Filter cover showcase cards
    var coverCards = panel.querySelectorAll(".pub-cover-card");
    var visibleCovers = 0;
    coverCards.forEach(function (card) {
      var tags = (card.getAttribute("data-pi") || "").split(" ");
      var match = pi === "all" || tags.indexOf(pi) !== -1;
      card.classList.toggle(HIDDEN, !match);
      if (match) visibleCovers += 1;
    });
    var coverShowcase = panel.querySelector(".pub-cover-showcase");
    if (coverShowcase) {
      coverShowcase.classList.toggle(EMPTY, visibleCovers === 0);
      var coverCount = coverShowcase.querySelector(".pub-cover-showcase__count");
      if (coverCount) coverCount.textContent = visibleCovers;
    }
    var sectionCount = panel.querySelector(".ed-section__count");
    if (sectionCount) {
      sectionCount.textContent = pi === "all" ? counts.all : counts[pi] || 0;
    }
    sync();
  }

  // Year ids normally exist already (publications.md assigns them before ace2_tabs.js runs); this is the safety net.
  function ensureYearIds() {
    panel.querySelectorAll(".publications h2.bibliography").forEach(function (h2) {
      var year = h2.textContent.trim();
      if (/^\d{4}$/.test(year) && !h2.id) h2.id = "y" + year;
    });
  }

  // Chip counts are derived from the rendered bibliography so the static HTML can never drift
  function syncYearChipCounts() {
    var perYear = {};
    panel.querySelectorAll(".publications h2.bibliography").forEach(function (h2) {
      var node = h2.nextElementSibling;
      var year = h2.textContent.trim();
      while (node && node.tagName !== "H2") {
        if (node.tagName === "OL") perYear[year] = (perYear[year] || 0) + node.querySelectorAll(":scope > li").length;
        node = node.nextElementSibling;
      }
    });
    document.querySelectorAll("#pubYearChips .pub-year-chip").forEach(function (chip) {
      var badge = chip.querySelector(".pub-year-chip__count");
      if (badge) badge.textContent = perYear[chip.getAttribute("data-year")] || 0;
    });
  }

  function init() {
    panel = document.getElementById("panel-journals");
    fieldset = document.getElementById("pubPiFilter");
    if (!panel || !fieldset) return;

    items = Array.prototype.slice.call(panel.querySelectorAll(".publications ol.bibliography > li"));
    ensureYearIds();
    syncYearChipCounts();
    var c = items.length ? classify() : { all: 0, yim: 0, kim: 0 };
    fieldset.querySelectorAll('[data-pi-count="all"]').forEach(function (el) {
      el.textContent = items.length;
    });
    // Fail safe: if author markup changed and nothing matches, never strand the user on an empty list
    if (c.yim + c.kim === 0) {
      fieldset.hidden = true;
      return;
    }

    fieldset.querySelectorAll("[data-pi-count]").forEach(function (el) {
      el.textContent = c[el.getAttribute("data-pi-count")];
    });
    status = document.getElementById("pubPiStatus");

    var initial = readParam();
    var radio = fieldset.querySelector('input[name="pub-pi"][value="' + initial + '"]');
    if (radio) radio.checked = true;

    fieldset.removeAttribute("hidden");
    ready = true;
    apply(initial);
    writeParam(initial); // drops unknown ?pi= values

    fieldset.addEventListener("change", function (e) {
      var input = e.target;
      if (!input || input.name !== "pub-pi" || !input.checked) return;
      apply(isPi(input.value) ? input.value : "all");
      writeParam(current);
    });
  }

  function initRailFilter(cfg) {
    var railPanel = document.getElementById(cfg.panelId);
    var railFieldset = document.getElementById(cfg.fieldsetId);
    if (!railPanel || !railFieldset) return;

    var railStatus = document.getElementById(cfg.statusId);
    var rows = Array.prototype.slice.call(railPanel.querySelectorAll(".ed-rail__row"));
    var entries = Array.prototype.slice.call(railPanel.querySelectorAll(".ed-entry[" + cfg.attr + "]"));
    var sectionCount = railPanel.querySelector(".ed-section__count");

    function applyRail(val) {
      var shown = 0;
      entries.forEach(function (li) {
        var match = val === "all" || li.getAttribute(cfg.attr) === val;
        li.classList.toggle("is-filter-hidden", !match);
        if (match) shown += 1;
      });

      var firstVisibleAssigned = false;
      rows.forEach(function (row) {
        var visibleInRow = 0;
        row.querySelectorAll(".ed-entry[" + cfg.attr + "]").forEach(function (li) {
          if (!li.classList.contains("is-filter-hidden")) visibleInRow += 1;
        });
        var empty = visibleInRow === 0;
        row.classList.toggle("is-filter-empty", empty);
        row.classList.toggle("is-first-visible", !empty && !firstVisibleAssigned);
        if (!empty) firstVisibleAssigned = true;
      });

      if (sectionCount) {
        sectionCount.textContent = shown;
      }
      lastRailShown = shown;
      renderRailStatus();
    }

    var lastRailShown = null;
    function renderRailStatus() {
      if (railStatus && lastRailShown !== null) railStatus.textContent = statusText(cfg.noun, lastRailShown, entries.length, "");
    }
    refreshers.push(renderRailStatus);

    railFieldset.addEventListener("change", function (e) {
      var input = e.target;
      if (!input || input.name !== cfg.radioName || !input.checked) return;
      applyRail(input.value || "all");
    });
  }

  function boot() {
    init();
    initRailFilter({
      panelId: "panel-patents",
      fieldsetId: "pubPatentFilter",
      statusId: "pubPatentStatus",
      radioName: "pub-patent",
      attr: "data-patent-status",
      noun: "patents",
    });
    initRailFilter({
      panelId: "panel-talks",
      fieldsetId: "pubTalkFilter",
      statusId: "pubTalkStatus",
      radioName: "pub-talk",
      attr: "data-talk-type",
      noun: "talks",
    });
  }

  // Registered at parse time so a hash-driven search fired on load is never missed
  document.addEventListener("bibsearch:filtered", sync);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
