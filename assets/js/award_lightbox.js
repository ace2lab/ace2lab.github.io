/* award_lightbox.js — Full-resolution certificate viewer for the News page.
   Loads the original image into a native <dialog> at its natural resolution (object-fit: contain),
   instead of scaling the 80x105 cropped thumbnail the way medium-zoom does. */
(function () {
  "use strict";

  var dialog = document.getElementById("award-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var full = dialog.querySelector(".ed-lightbox__img");
  var opener = null;

  function open(btn) {
    var thumb = btn.querySelector("img");
    if (!thumb) return;
    opener = btn;
    full.removeAttribute("src");
    full.alt = thumb.alt;
    full.src = thumb.currentSrc || thumb.src;
    dialog.showModal();
  }

  document.querySelectorAll("[data-award-zoom]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn);
    });
  });

  // Click on the backdrop, the image, or the close button dismisses.
  dialog.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("close", function () {
    full.removeAttribute("src");
    if (opener) opener.focus();
  });
})();
