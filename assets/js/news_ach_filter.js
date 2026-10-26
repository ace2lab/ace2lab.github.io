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

      if (status) {
        status.textContent = visibleCount + " items visible";
      }
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
