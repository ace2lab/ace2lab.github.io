/* ace2_tabs.js — Universal hash-synced WAI-ARIA tabs for ACE² Lab.
   Progressive enhancement: without this script every panel stays visible in sequence.
   Loaded synchronously at the end of .ace2-tab-container / .team-container so panels collapse before first paint. */
(function () {
  "use strict";

  function initTabContainer(container) {
    var nav = container.querySelector('[role="tablist"]');
    if (!nav) return;

    var tabs = Array.prototype.slice.call(nav.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var byHash = {};
    tabs.forEach(function (tab) {
      var hash = tab.getAttribute("data-hash");
      if (hash) byHash[hash] = tab;
      var aliases = tab.getAttribute("data-aliases");
      if (aliases) {
        aliases.split(",").forEach(function (a) {
          byHash[a.trim()] = tab;
        });
      }
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

    function resolve(hash) {
      if (!hash) return null;
      if (byHash[hash]) return { tab: byHash[hash], target: null };

      // Year jump support for publications: #y2024, #y2021, etc.
      if (/^y\d{4}$/.test(hash) && byHash["journals"]) {
        var yrEl = document.getElementById(hash);
        return { tab: byHash["journals"], target: yrEl };
      }

      // Child anchor match
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

    function realignIfStuck() {
      var stickyTop = parseFloat(window.getComputedStyle(nav).top) || 0;
      if (nav.getBoundingClientRect().top <= stickyTop + 1) {
        var y = container.getBoundingClientRect().top + window.pageYOffset - stickyTop;
        window.scrollTo({ top: Math.max(0, y), behavior: scrollBehavior() });
      }
    }

    function scrollToTarget(el) {
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
        var defaultTab =
          tabs.filter(function (t) {
            return t.hasAttribute("data-default");
          })[0] || tabs[0];
        activate(defaultTab);
      }
    }

    function select(tab, focus) {
      activate(tab);
      if (focus) tab.focus();
      var hash = tab.getAttribute("data-hash");
      if (hash) {
        window.history.replaceState(null, "", "#" + hash);
      }
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

    window.addEventListener("hashchange", function () {
      syncFromHash(false);
    });

    container.classList.add("is-tabbed");
    syncFromHash(true);
  }

  // Auto-init all tab containers
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".ace2-tab-container, .team-container").forEach(initTabContainer);
    });
  } else {
    document.querySelectorAll(".ace2-tab-container, .team-container").forEach(initTabContainer);
  }
})();
