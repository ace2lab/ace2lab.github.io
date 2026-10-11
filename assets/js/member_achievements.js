/* member_achievements.js — Research achievements popup for the Members page.
   One shared native <dialog id="member-achievements">; each `.member-card__ach-btn` clones its member's
   <template id="ach-{id}"> into it. Backdrop click / ESC / close button dismiss with a short exit animation
   (instant when reduced motion is requested); focus returns to the button that opened the dialog. */
(function () {
  "use strict";

  var dialog = document.getElementById("member-achievements");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var container = document.querySelector(".team-container");
  var titleEl = dialog.querySelector('[data-ach="title"]');
  var summaryEl = dialog.querySelector('[data-ach="summary"]');
  var bodyEl = dialog.querySelector('[data-ach="body"]');
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var opener = null;
  var closing = false;

  function open(btn) {
    var tpl = document.getElementById(btn.getAttribute("data-ach-target"));
    if (!tpl) return;

    var frag = tpl.content.cloneNode(true);
    var parts = Array.prototype.map.call(frag.querySelectorAll(".ach-group__title"), function (h) {
      return h.textContent.replace(/\s+/g, " ").trim();
    });

    titleEl.textContent = (btn.getAttribute("data-ach-name") || "") + " 연구 실적";
    summaryEl.textContent = "총 " + (tpl.getAttribute("data-total") || "") + "건 · " + parts.join(" · ");
    bodyEl.textContent = "";
    bodyEl.appendChild(frag);
    bodyEl.scrollTop = 0;

    opener = btn;
    closing = false;
    dialog.classList.remove("is-closing");
    document.documentElement.classList.add("ach-lock");
    dialog.showModal();
    bodyEl.focus({ preventScroll: true });
  }

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

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".member-card__ach-btn");
    if (btn) open(btn);
  });

  dialog.querySelector("[data-ach-close]").addEventListener("click", close);

  // The panel fills the dialog, so a click that lands on the <dialog> itself is a backdrop click.
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });

  // Escape: route through the animated close.
  dialog.addEventListener("cancel", function (e) {
    e.preventDefault();
    close();
  });

  dialog.addEventListener("close", function () {
    closing = false;
    dialog.classList.remove("is-closing");
    document.documentElement.classList.remove("ach-lock");
    bodyEl.textContent = "";
    if (opener && document.contains(opener)) opener.focus();
    opener = null;
  });

  // Reveal the buttons only now that the dialog is wired up (no-JS visitors never see a dead control).
  if (container) container.classList.add("has-ach");
})();
