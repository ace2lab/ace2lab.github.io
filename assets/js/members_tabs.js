/* Members page — hash-synced WAI-ARIA tabs.
   Progressive enhancement: without this script every panel stays visible in sequence.
   Loaded synchronously at the end of .team-container so panels collapse before first paint. */
(function () {
  "use strict";

  var container = document.querySelector(".team-container");
  var nav = container && container.querySelector(".team-tabnav");
  if (!nav) return;

  var tabs = Array.prototype.slice.call(nav.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  // Canonical hash per tab, plus every alias that should resolve to it.
  var ALIASES = {
    yim: "yim",
    "changyong-yim": "yim",
    kim: "kim",
    "taewook-kim": "kim",
    members: "members",
    students: "members",
    alumni: "alumni",
    "proud-alumni": "alumni",
    interns: "interns",
    "former-interns": "interns",
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var byHash = {};
  tabs.forEach(function (tab) {
    byHash[tab.getAttribute("data-hash")] = tab;
  });

  function panelOf(tab) {
    return document.getElementById(tab.getAttribute("aria-controls"));
  }

  function readHash() {
    var raw = window.location.hash.replace(/^#/, "");
    try {
      return decodeURIComponent(raw);
    } catch (e) {
      return raw;
    }
  }

  // Hash -> { tab, target } where target is the element to scroll to (null = none).
  function resolve(hash) {
    if (!hash) return null;
    var alias = ALIASES[hash];
    if (alias && byHash[alias]) return { tab: byHash[alias], target: null };

    // Legacy anchors (#graduate-students, #member-{id}, ...): find the owning panel.
    var el = document.getElementById(hash);
    var panel = el && el.closest('[role="tabpanel"]');
    if (!panel) return null;
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute("aria-controls") === panel.id) {
        return { tab: tabs[i], target: el === panel ? null : el };
      }
    }
    return null;
  }

  function centerTabInBar(tab) {
    var overflow = nav.scrollWidth - nav.clientWidth;
    if (overflow <= 0) return;
    var left = tab.offsetLeft - (nav.clientWidth - tab.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, Math.min(overflow, left)), behavior: reduceMotion.matches ? "auto" : "smooth" });
  }

  function activate(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      var panel = panelOf(t);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle("is-active", on);
      if (panel) {
        panel.hidden = !on;
        panel.classList.toggle("is-active", on);
      }
    });
    centerTabInBar(tab);
  }

  function scrollBehavior() {
    return reduceMotion.matches ? "auto" : "smooth";
  }

  // When the bar is stuck, switching tabs would leave the reader mid-way down the new panel.
  function realignIfStuck() {
    var stickyTop = parseFloat(window.getComputedStyle(nav).top) || 0;
    if (nav.getBoundingClientRect().top <= stickyTop + 1) {
      var y = container.getBoundingClientRect().top + window.pageYOffset - stickyTop;
      window.scrollTo({ top: Math.max(0, y), behavior: scrollBehavior() });
    }
  }

  function scrollToTarget(el) {
    // Panel was `hidden` a moment ago; wait one frame so layout exists.
    window.requestAnimationFrame(function () {
      el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    });
  }

  function syncFromHash(isInitial) {
    var hit = resolve(readHash());
    if (hit) {
      activate(hit.tab);
      if (hit.target) scrollToTarget(hit.target);
      else if (!isInitial) realignIfStuck();
    } else if (isInitial) {
      activate(byHash.yim || tabs[0]);
    }
  }

  function select(tab, focus) {
    activate(tab);
    if (focus) tab.focus();
    // replaceState keeps the URL shareable without growing the history stack.
    window.history.replaceState(null, "", "#" + tab.getAttribute("data-hash"));
    realignIfStuck();
  }

  nav.addEventListener("click", function (e) {
    var tab = e.target.closest('[role="tab"]');
    if (tab && nav.contains(tab)) select(tab, false);
  });

  nav.addEventListener("keydown", function (e) {
    var current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    var next;
    switch (e.key) {
      case "ArrowRight":
        next = (current + 1) % tabs.length;
        break;
      case "ArrowLeft":
        next = (current - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabs.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    select(tabs[next], true);
  });

  // Back/forward, manual hash edits, and in-page links such as /members/#alumni.
  window.addEventListener("hashchange", function () {
    syncFromHash(false);
  });

  container.classList.add("is-tabbed");
  syncFromHash(true);
})();
