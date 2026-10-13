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

    if (status) {
      var scope = current === "all" ? "" : " by " + PIS[current].label;
      status.textContent = "Showing " + shown + " of " + items.length + " international journal articles" + scope + ".";
    }
  }

  function apply(pi) {
    current = pi;
    items.forEach(function (li) {
      var tags = (li.getAttribute("data-pi") || "").split(" ");
      li.classList.toggle(HIDDEN, pi !== "all" && tags.indexOf(pi) === -1);
    });
    var sectionCount = panel.querySelector(".ed-section__count");
    if (sectionCount) {
      sectionCount.textContent = pi === "all" ? counts.all : counts[pi] || 0;
    }
    sync();
  }

  function init() {
    panel = document.getElementById("panel-journals");
    fieldset = document.getElementById("pubPiFilter");
    if (!panel || !fieldset) return;

    items = Array.prototype.slice.call(panel.querySelectorAll(".publications ol.bibliography > li"));
    var c = items.length ? classify() : { yim: 0, kim: 0 };
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

  // Registered at parse time so a hash-driven search fired on load is never missed
  document.addEventListener("bibsearch:filtered", sync);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
