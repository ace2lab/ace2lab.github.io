/**
 * ACE² Lab — 4-Language (KO · EN · JA · ZH) Client-Side Switcher & DOM Engine
 * Architecture:
 *   1. Zero-FOUC initial state from ?lang= query or localStorage('ace2_lang')
 *   2. Synchronous SSOT dictionary read from #ace2-i18n-data (built from _data/i18n.yml)
 *   3. Graceful fallback chain: target -> en -> ko
 */
(function () {
  "use strict";

  var STORAGE_KEY = "ace2_lang";
  var SUPPORTED = ["ko", "en", "ja", "zh"];
  var HTML_LANG_MAP = {
    ko: "ko",
    en: "en",
    ja: "ja",
    zh: "zh-CN",
  };
  var LANG_META = [
    { code: "ko", short: "한국어", label: "한국어 (Korean)" },
    { code: "en", short: "English", label: "English" },
    { code: "ja", short: "日本語", label: "日本語 (Japanese)" },
    { code: "zh", short: "中文", label: "中文 (Chinese)" },
  ];

  function isValidLang(code) {
    return typeof code === "string" && SUPPORTED.indexOf(code.toLowerCase()) !== -1;
  }

  function resolveInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var qLang = params.get("lang");
      if (isValidLang(qLang)) return qLang.toLowerCase();
    } catch (e) {
      /* ignore URLSearchParams error */
    }
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (isValidLang(saved)) return saved.toLowerCase();
    } catch (e) {
      /* ignore storage error */
    }
    var docLang = document.documentElement.getAttribute("data-lang");
    if (isValidLang(docLang)) return docLang.toLowerCase();
    return "ko";
  }

  function loadDictionary() {
    if (window.__ACE2_I18N_DATA__) return window.__ACE2_I18N_DATA__;
    var el = document.getElementById("ace2-i18n-data");
    if (!el) return { nav: {}, ui: {}, terms: {} };
    try {
      var parsed = JSON.parse(el.textContent || "{}");
      window.__ACE2_I18N_DATA__ = parsed;
      return parsed;
    } catch (e) {
      return { nav: {}, ui: {}, terms: {} };
    }
  }

  function pickFallback(entry, lang) {
    if (!entry || typeof entry !== "object") return null;
    if (entry[lang] && String(entry[lang]).trim() !== "") return entry[lang];
    if (entry.en && String(entry.en).trim() !== "") return entry.en;
    if (entry.ko && String(entry.ko).trim() !== "") return entry.ko;
    return null;
  }

  function translatePattern(orig, lang, termsDict) {
    var trimmed = orig.trim();
    if (!trimmed) return orig;

    if (termsDict && termsDict[trimmed]) {
      var matched = pickFallback(termsDict[trimmed], lang);
      if (matched !== null) return matched;
    }

    if (lang === "ko") return orig;

    // 1. Period strings (e.g. "2020.03 – 현재", "박사과정 (2026.03 ~ 현재)")
    if (trimmed.indexOf("현재") !== -1) {
      var out = trimmed;
      if (lang === "en") {
        out = out
          .replace(/박사과정\s*\(/g, "")
          .replace(/석박통합과정\s*\(/g, "")
          .replace(/석사과정\(학연\)\s*\(/g, "")
          .replace(/석사과정\s*\(/g, "")
          .replace(/연구원\s*\(/g, "")
          .replace(/학부연구생\s*\(/g, "")
          .replace(/\)$/g, "")
          .replace(/(\d)학년\s*\/\s*\d+학번,\s*/g, "Yr $1, ")
          .replace(/현재/g, "Present");
        return out;
      }
      if (lang === "ja") {
        return out
          .replace(/박사과정/g, "博士課程")
          .replace(/석박통합과정/g, "一貫制博士課程")
          .replace(/석사과정\(학연\)/g, "連携大学院 修士課程")
          .replace(/석사과정/g, "修士課程")
          .replace(/연구원/g, "研究員")
          .replace(/학부연구생/g, "学部生研究員")
          .replace(/학년/g, "年")
          .replace(/학번/g, "入学")
          .replace(/현재/g, "現在");
      }
      if (lang === "zh") {
        return out
          .replace(/박사과정/g, "博士研究生")
          .replace(/석박통합과정/g, "硕博连读生")
          .replace(/석사과정\(학연\)/g, "联合培养硕士生")
          .replace(/석사과정/g, "硕士研究生")
          .replace(/연구원/g, "研究人员")
          .replace(/학부연구생/g, "本科生科研助理")
          .replace(/학년/g, "年级")
          .replace(/학번/g, "级")
          .replace(/현재/g, "至今");
      }
    }

    // 2. Education lines (e.g. "M.S.  KNU 에너지화학공학과 ('24학번)")
    if (trimmed.indexOf("KNU 에너지화학공학과") !== -1 && trimmed.indexOf("학번") !== -1) {
      if (lang === "en") {
        return trimmed.replace("KNU 에너지화학공학과", "KNU Energy Chem. Eng.").replace(/\('(\d+)학번\)/g, "(Class of '$1)");
      }
      if (lang === "ja") {
        return trimmed.replace("KNU 에너지화학공학과", "慶北大学校 エネルギー化学工学科").replace(/\('(\d+)학번\)/g, "('$1入学)");
      }
      if (lang === "zh") {
        return trimmed.replace("KNU 에너지화학공학과", "庆北大学 能源化学工程系").replace(/\('(\d+)학번\)/g, "('$1级)");
      }
    }

    // 3. Teaching credits (e.g. "9+3 학점", "9학점", "3, 2분반")
    if (trimmed.indexOf("학점") !== -1 || trimmed.indexOf("분반") !== -1) {
      if (lang === "en") {
        return trimmed.replace(/\s*학점/g, " cr.").replace(/(\d+)분반/g, "$1 sections");
      }
      if (lang === "ja") {
        return trimmed.replace(/\s*학점/g, " 単位").replace(/(\d+)분반/g, "$1クラス");
      }
      if (lang === "zh") {
        return trimmed.replace(/\s*학점/g, " 学分").replace(/(\d+)분반/g, "$1个班");
      }
    }

    // 4. Achievement button ("연구 실적 · 5")
    if (trimmed.indexOf("연구 실적") === 0) {
      var numMatch = trimmed.match(/\d+/);
      var num = numMatch ? numMatch[0] : "";
      if (lang === "en") return "Achievements · " + num;
      if (lang === "ja") return "研究業績 · " + num;
      if (lang === "zh") return "科研成果 · " + num;
    }

    // 5. Gallery "View all N photos"
    if (/^View all \d+ photos$/i.test(trimmed)) {
      var pNum = (trimmed.match(/\d+/) || [""])[0];
      if (lang === "ko") return "사진 전체 보기 (" + pNum + "장)";
      if (lang === "en") return "View all " + pNum + " photos";
      if (lang === "ja") return "全 " + pNum + " 枚の写真を表示";
      if (lang === "zh") return "查看全部 " + pNum + " 张照片";
    }

    return orig;
  }

  function translateNavbar(dict, lang) {
    var navMap = (dict && dict.nav) || {};
    var routeKeyMap = {
      "/": "about",
      "/members/": "members",
      "/research/": "research",
      "/projects/": "research",
      "/facilities/": "facilities",
      "/publications/": "publications",
      "/news/": "news",
      "/gallery/": "gallery",
      "/teaching/": "teaching",
    };

    var links = document.querySelectorAll("#navbar .navbar-nav a.nav-link");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute("href") || "";
      var cleanPath = href.split("?")[0].split("#")[0];
      if (cleanPath !== "/" && cleanPath.slice(-1) !== "/") {
        cleanPath += "/";
      }
      var navKey = routeKeyMap[cleanPath];
      if (!navKey || !navMap[navKey]) continue;

      var targetLabel = pickFallback(navMap[navKey], lang);
      if (!targetLabel) continue;

      for (var c = 0; c < a.childNodes.length; c++) {
        var node = a.childNodes[c];
        if (node.nodeType === 3 && node.nodeValue.trim().length > 0) {
          node.nodeValue = targetLabel;
          break;
        }
      }
    }
  }

  function applyDomTranslations(lang) {
    var dict = loadDictionary();
    var ui = (dict && dict.ui) || {};
    var terms = (dict && dict.terms) || {};

    // 1. Navbar items
    translateNavbar(dict, lang);

    // 2. Keyed plain-text elements [data-i18n]
    var keyedNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < keyedNodes.length; i++) {
      var el = keyedNodes[i];
      var key = el.getAttribute("data-i18n");
      if (!key || !ui[key]) continue;
      var text = pickFallback(ui[key], lang);
      if (text !== null) {
        el.textContent = text;
      }
    }

    // 2b. Keyed input placeholder elements [data-i18n-placeholder]
    var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < phNodes.length; p++) {
      var pEl = phNodes[p];
      var pKey = pEl.getAttribute("data-i18n-placeholder");
      if (!pKey || !ui[pKey]) continue;
      var phVal = pickFallback(ui[pKey], lang);
      if (phVal !== null) {
        pEl.setAttribute("placeholder", phVal);
      }
    }

    // 3. Keyed HTML elements [data-i18n-html]
    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hEl = htmlNodes[j];
      var hKey = hEl.getAttribute("data-i18n-html");
      if (!hKey || !ui[hKey]) continue;
      var htmlVal = pickFallback(ui[hKey], lang);
      if (htmlVal !== null) {
        hEl.innerHTML = htmlVal;
      }
    }

    // 4. Co-located inline attribute elements [data-i18n-ko]
    var inlineNodes = document.querySelectorAll("[data-i18n-ko]");
    for (var k = 0; k < inlineNodes.length; k++) {
      var iEl = inlineNodes[k];
      var inlineEntry = {
        ko: iEl.getAttribute("data-i18n-ko"),
        en: iEl.getAttribute("data-i18n-en"),
        ja: iEl.getAttribute("data-i18n-ja"),
        zh: iEl.getAttribute("data-i18n-zh"),
      };
      var val = pickFallback(inlineEntry, lang);
      if (val !== null) {
        if (iEl.getAttribute("data-i18n-mode") === "html") {
          iEl.innerHTML = val;
        } else {
          iEl.textContent = val;
        }
      }
    }

    // 5. Glossary & pattern token elements [data-i18n-term]
    var termNodes = document.querySelectorAll("[data-i18n-term]");
    for (var m = 0; m < termNodes.length; m++) {
      var tEl = termNodes[m];
      if (!tEl.hasAttribute("data-orig-term")) {
        tEl.setAttribute("data-orig-term", tEl.textContent.trim());
      }
      var origText = tEl.getAttribute("data-orig-term") || "";
      var translated = translatePattern(origText, lang, terms);
      if (translated !== null) {
        tEl.textContent = translated;
      }
    }

    // 6. Update switcher button active state & aria-label
    var switcher = document.querySelector(".ace2-lang-switcher");
    if (switcher) {
      if (ui["lang_switcher.aria_label"]) {
        var ariaLbl = pickFallback(ui["lang_switcher.aria_label"], lang);
        if (ariaLbl) switcher.setAttribute("aria-label", ariaLbl);
      }
      var btns = switcher.querySelectorAll(".ace2-lang-btn");
      for (var b = 0; b < btns.length; b++) {
        var btn = btns[b];
        var isCurrent = btn.getAttribute("data-lang-choice") === lang;
        btn.classList.toggle("is-active", isCurrent);
        btn.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      }
    }
  }

  function setLanguage(lang, opts) {
    var options = opts || {};
    var target = isValidLang(lang) ? lang.toLowerCase() : "ko";

    document.documentElement.setAttribute("data-lang", target);
    document.documentElement.setAttribute("lang", HTML_LANG_MAP[target] || target);

    if (options.persist !== false) {
      try {
        window.localStorage.setItem(STORAGE_KEY, target);
      } catch (e) {
        /* ignore */
      }
    }

    if (options.updateUrl) {
      try {
        var url = new URL(window.location.href);
        if (target === "ko") {
          url.searchParams.delete("lang");
        } else {
          url.searchParams.set("lang", target);
        }
        window.history.replaceState({}, "", url.toString());
      } catch (e) {
        /* ignore */
      }
    }

    applyDomTranslations(target);
  }

  function mountNavbarSwitcher(initialLang) {
    if (document.querySelector(".ace2-lang-switcher")) return;
    var navList = document.querySelector("#navbar .navbar-nav");
    if (!navList) return;

    var li = document.createElement("li");
    li.className = "nav-item ace2-lang-nav-item";

    var group = document.createElement("div");
    group.className = "ace2-lang-switcher";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "사이트 언어 선택");

    for (var i = 0; i < LANG_META.length; i++) {
      var item = LANG_META[i];
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ace2-lang-btn" + (item.code === initialLang ? " is-active" : "");
      btn.setAttribute("data-lang-choice", item.code);
      btn.setAttribute("aria-pressed", item.code === initialLang ? "true" : "false");
      btn.setAttribute("title", item.label);
      btn.textContent = item.short;
      btn.addEventListener("click", function (ev) {
        var chosen = ev.currentTarget.getAttribute("data-lang-choice");
        setLanguage(chosen, { updateUrl: true, persist: true });
      });
      group.appendChild(btn);
    }

    li.appendChild(group);

    // Insert right before search/theme toggle item if present
    var toggleItem = navList.querySelector("#search-toggle")?.closest("li") || navList.querySelector("#light-toggle")?.closest("li");
    if (toggleItem && toggleItem.parentNode === navList) {
      navList.insertBefore(li, toggleItem);
    } else {
      navList.appendChild(li);
    }
  }

  function init() {
    var initialLang = resolveInitialLang();
    mountNavbarSwitcher(initialLang);
    setLanguage(initialLang, { updateUrl: false, persist: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.ACE2_I18N = {
    setLanguage: setLanguage,
    getLanguage: resolveInitialLang,
    refresh: function () {
      applyDomTranslations(resolveInitialLang());
    },
  };
})();
