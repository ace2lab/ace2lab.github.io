/* image_lightbox.js — Natural-aspect, full-resolution image viewer for Publications, Gallery, Facilities, Research and Home figures.
   medium-zoom scales the on-page <img> box, which is a cropped square on the Gallery (object-fit: cover) and a 140-280px strip on
   Publications. Here the original file is loaded into a native <dialog> with object-fit: contain, so nothing is cropped or stretched.
   Albums (.ed-album) are navigable with arrow keys, on-screen buttons or swipe; publication figures open as a single image. */
(function () {
  "use strict";

  if (typeof HTMLDialogElement === "undefined") return;

  var SELECTOR = [
    ".publications img.preview",
    ".ed-album img[data-zoomable]",
    ".ed-spec__thumb img",
    ".research-card__media img",
    ".ed-pillar__figure img",
  ].join(", ");

  var dialog = null;
  var stage = null;
  var full = null;
  var caption = null;
  var counter = null;
  var prevBtn = null;
  var nextBtn = null;
  var group = [];
  var index = 0;
  var opener = null;
  var touchX = null;

  function build() {
    dialog = document.createElement("dialog");
    dialog.className = "ed-viewer";
    dialog.setAttribute("aria-label", "Image viewer");
    dialog.innerHTML =
      '<button type="button" class="ed-viewer__btn ed-viewer__close" aria-label="Close">&times;</button>' +
      '<button type="button" class="ed-viewer__btn ed-viewer__nav ed-viewer__nav--prev" aria-label="Previous photo">&#8249;</button>' +
      '<div class="ed-viewer__stage"><img class="ed-viewer__img" alt=""></div>' +
      '<button type="button" class="ed-viewer__btn ed-viewer__nav ed-viewer__nav--next" aria-label="Next photo">&#8250;</button>' +
      '<div class="ed-viewer__bar"><span class="ed-viewer__caption"></span><span class="ed-viewer__count"></span></div>';
    document.body.appendChild(dialog);

    stage = dialog.querySelector(".ed-viewer__stage");
    full = dialog.querySelector(".ed-viewer__img");
    caption = dialog.querySelector(".ed-viewer__caption");
    counter = dialog.querySelector(".ed-viewer__count");
    prevBtn = dialog.querySelector(".ed-viewer__nav--prev");
    nextBtn = dialog.querySelector(".ed-viewer__nav--next");

    full.addEventListener("load", function () {
      dialog.classList.remove("is-loading");
    });

    dialog.querySelector(".ed-viewer__close").addEventListener("click", function () {
      dialog.close();
    });
    prevBtn.addEventListener("click", function () {
      step(-1);
    });
    nextBtn.addEventListener("click", function () {
      step(1);
    });

    // Backdrop and empty stage dismiss; clicks on the image itself do not.
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target === stage) dialog.close();
    });

    dialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });

    dialog.addEventListener("touchstart", function (e) {
      touchX = e.changedTouches[0].clientX;
    });
    dialog.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    });

    dialog.addEventListener("close", function () {
      full.removeAttribute("src");
      group = [];
      if (opener) opener.focus({ preventScroll: true });
    });
  }

  function captionFor(img) {
    var li = img.closest(".publications ol.bibliography > li");
    var title = li && li.querySelector(".title");
    return title ? title.textContent.trim() : img.alt || "";
  }

  function show(i) {
    var img = group[i];
    index = i;
    dialog.classList.add("is-loading");
    full.alt = captionFor(img);
    // Original file: the page <img> already points at it, so currentSrc is the full-resolution asset.
    full.src = img.currentSrc || img.src;
    caption.textContent = full.alt;
    var multi = group.length > 1;
    counter.textContent = multi ? i + 1 + " / " + group.length : "";
    prevBtn.hidden = nextBtn.hidden = !multi;
  }

  function step(delta) {
    if (group.length < 2) return;
    show((index + delta + group.length) % group.length);
  }

  function open(img) {
    if (!dialog) build();
    var album = img.closest(".ed-album");
    group = album ? Array.prototype.slice.call(album.querySelectorAll("img[data-zoomable]")) : [img];
    opener = img;
    show(Math.max(group.indexOf(img), 0));
    if (!dialog.open) dialog.showModal();
  }

  // Capture phase on document: runs before medium-zoom's listener bound on the <img>, which is then suppressed.
  document.addEventListener(
    "click",
    function (e) {
      var img = e.target.closest && e.target.closest(SELECTOR);
      if (!img) return;
      e.preventDefault();
      e.stopPropagation();
      open(img);
    },
    true
  );

  // Keyboard access: preview figures and album photos are not natively focusable.
  document.querySelectorAll(SELECTOR).forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(img);
      }
    });
  });
})();
