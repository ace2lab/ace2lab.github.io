/**
 * Filter for the unified Awards & Press timeline on the ACE² Lab website.
 * Allows instant client-side toggling between All, Awards, and In the Press,
 * updating annual counter badges and hiding empty year groups.
 */
(function () {
  function initFilter() {
    var fieldset = document.getElementById("newsAchFilter");
    if (!fieldset) return;

    var yeargroups = document.querySelectorAll("#achievements .ed-yeargroup");
    var inputs = fieldset.querySelectorAll('input[name="news-ach"]');
    var status = document.getElementById("newsAchStatus");

    function applyFilter(type) {
      var visibleCount = 0;
      yeargroups.forEach(function (yg) {
        var cards = yg.querySelectorAll(".ed-award-card, .ed-press-card");
        var ygVisible = 0;
        cards.forEach(function (card) {
          var cardType = card.getAttribute("data-ach-type");
          var match = type === "all" || cardType === type;
          if (match) {
            card.style.display = "";
            ygVisible++;
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        var countBadge = yg.querySelector("[data-year-count]");
        if (countBadge) {
          countBadge.textContent = ygVisible;
        }

        if (ygVisible === 0) {
          yg.style.display = "none";
        } else {
          yg.style.display = "";
        }
      });

      var totalBadge = document.getElementById("newsAchTotalCount");
      if (totalBadge) {
        totalBadge.textContent = visibleCount;
      }

      lastVisible = visibleCount;
      renderStatus();
    }

    // aria-live status follows html[data-lang] (ace2_i18n.js) and is re-rendered when it changes
    var STATUS = {
      ko: function (n) {
        return n + "건 표시 중";
      },
      en: function (n) {
        return n + " items visible";
      },
      ja: function (n) {
        return n + " 件を表示中";
      },
      zh: function (n) {
        return "正在显示 " + n + " 项";
      },
    };
    var lastVisible = null;
    function renderStatus() {
      if (!status || lastVisible === null) return;
      var lang = document.documentElement.getAttribute("data-lang");
      status.textContent = (STATUS[lang] || STATUS.ko)(lastVisible);
    }
    if (window.MutationObserver) {
      new MutationObserver(renderStatus).observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
    }

    inputs.forEach(function (input) {
      input.addEventListener("change", function (e) {
        applyFilter(e.target.value);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFilter);
  } else {
    initFilter();
  }
})();
