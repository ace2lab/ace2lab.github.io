/* award_lightbox.js — Certificate viewer for the News page.
   Opens the original image in a native <dialog> with an award metadata header, a fit / actual-size toggle,
   and Prev / Next navigation (buttons, arrow keys, swipe) across every certificate in the page. */
(function () {
  "use strict";

  var dialog = document.getElementById("award-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-award-zoom]"));
  if (!triggers.length) return;

  var img = dialog.querySelector(".ed-lightbox__img");
  var stage = dialog.querySelector('[data-lb="stage"]');
  var viewport = dialog.querySelector('[data-lb="viewport"]');
  var tierBadge = dialog.querySelector(".ed-lightbox__tier");
  var zoomBtn = dialog.querySelector("[data-lb-zoom]");
  var zoomLabel = dialog.querySelector('[data-lb="zoomlabel"]');
  var zoomIcon = zoomBtn.querySelector("i");
  var prevBtn = dialog.querySelector("[data-lb-prev]");
  var nextBtn = dialog.querySelector("[data-lb-next]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var tiers = ["crimson", "amber", "navy", "purple", "teal"];
  var index = 0;
  var closing = false;

  function field(name) {
    return dialog.querySelector('[data-lb="' + name + '"]');
  }

  function getZoomText(on) {
    var lang = document.documentElement.getAttribute("data-lang") || "ko";
    var dict = window.__ACE2_I18N_DATA__ && window.__ACE2_I18N_DATA__.ui;
    if (dict) {
      var key = on ? "news.lb_fit" : "news.lb_zoom";
      if (dict[key] && dict[key][lang]) return dict[key][lang];
    }
    if (lang === "ko") return on ? "화면 맞춤" : "원본 크기";
    if (lang === "ja") return on ? "画面に合わせる" : "原寸表示";
    if (lang === "zh") return on ? "适应窗口" : "实际大小";
    return on ? "Fit to window" : "Actual size";
  }

  function setZoom(on) {
    stage.classList.toggle("is-zoomed", on);
    zoomBtn.setAttribute("aria-pressed", on ? "true" : "false");
    zoomLabel.textContent = getZoomText(on);
    zoomLabel.setAttribute("data-i18n", on ? "news.lb_fit" : "news.lb_zoom");
    zoomIcon.className = on ? "fa-solid fa-magnifying-glass-minus" : "fa-solid fa-magnifying-glass-plus";
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }

  function preload(i) {
    var src = triggers[(i + triggers.length) % triggers.length].dataset.full;
    if (src) new Image().src = src;
  }

  function show(i) {
    index = (i + triggers.length) % triggers.length;
    var d = triggers[index].dataset;

    // Type and issuer are glossary terms: re-arm [data-i18n-term] (drop the cached original) so ace2_i18n.js re-translates them per slide
    ["type", "issuer"].forEach(function (name) {
      var termEl = field(name);
      termEl.textContent = d[name] || "";
      termEl.setAttribute("data-i18n-term", "");
      delete termEl.dataset.origTerm;
    });
    field("title").textContent = d.title || "";
    field("recipient").textContent = d.recipient || "";
    field("date").textContent = d.date || "";
    if (window.ACE2_I18N && window.ACE2_I18N.refresh) window.ACE2_I18N.refresh();
    field("count").textContent = index + 1 + " / " + triggers.length;
    tiers.forEach(function (t) {
      tierBadge.classList.remove("ed-tier--" + t);
    });
    if (tiers.indexOf(d.tier) !== -1) tierBadge.classList.add("ed-tier--" + d.tier);

    setZoom(false);
    stage.classList.add("is-loading");
    img.alt = d.title || "";
    img.src = d.full;
    if (img.complete) stage.classList.remove("is-loading");

    preload(index + 1);
    preload(index - 1);
  }

  function step(delta) {
    show(index + delta);
  }

  function open(i) {
    closing = false;
    dialog.classList.remove("is-closing");
    show(i);
    dialog.showModal();
  }

  // Animated dismissal; falls back to an instant close when motion is reduced.
  function close() {
    if (!dialog.open || closing) return;
    if (reduceMotion.matches) {
      dialog.close();
      return;
    }
    closing = true;
    dialog.classList.add("is-closing");
    window.setTimeout(function () {
      dialog.close();
    }, 180);
  }

  triggers.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      open(i);
    });
  });

  img.addEventListener("load", function () {
    stage.classList.remove("is-loading");
  });
  img.addEventListener("click", function () {
    setZoom(!stage.classList.contains("is-zoomed"));
  });
  zoomBtn.addEventListener("click", function () {
    setZoom(!stage.classList.contains("is-zoomed"));
  });
  prevBtn.addEventListener("click", function () {
    step(-1);
  });
  nextBtn.addEventListener("click", function () {
    step(1);
  });
  dialog.querySelector("[data-lb-close]").addEventListener("click", close);

  // A click that lands on the <dialog> itself is a click on the backdrop.
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });

  // Escape: route through the animated close.
  dialog.addEventListener("cancel", function (e) {
    e.preventDefault();
    close();
  });

  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      step(-1);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      step(1);
      e.preventDefault();
    }
  });

  // Swipe between certificates (fit mode only, so panning a zoomed image is untouched).
  var touchX = null;
  var touchY = null;
  stage.addEventListener(
    "touchstart",
    function (e) {
      if (stage.classList.contains("is-zoomed") || e.touches.length !== 1) {
        touchX = null;
        return;
      }
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    },
    { passive: true }
  );
  stage.addEventListener(
    "touchend",
    function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      var dy = e.changedTouches[0].clientY - touchY;
      touchX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );

  dialog.addEventListener("close", function () {
    closing = false;
    dialog.classList.remove("is-closing");
    img.removeAttribute("src");
    triggers[index].focus();
  });
})();
