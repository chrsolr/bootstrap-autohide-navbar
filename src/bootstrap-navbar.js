; (function ($, window, document, undefined) {
  "use strict";

  $.fn.BootstrapNavbar = function (options) {
    var $nav = this;
    var last_position = 0;
    var is_scrolled = false;

    var settings = $.extend({
      delta: 5,
      speed: 250
    }, options);

    if (!$nav.hasClass("navbar-fixed-top"))
      $nav.addClass("navbar-fixed-top");

    $(window).scroll(function () {
      is_scrolled = true;
    });

    setInterval(function () {
      if (is_scrolled) {
        onHasScrolled();
        is_scrolled = false;
      }
    }, settings.speed);

    function onHasScrolled() {
      const top = $(window).scrollTop();

      if (Math.abs(last_position - top) <= settings.delta) return;

      if (top > last_position && top > $nav.outerHeight()) {
        $nav.animate({ top: `-${Number($nav.outerHeight() + 10)}px` }, settings.speed);
      } else {
        if (top + $(window).height() < $(document).height()) {
          $nav.animate({ top: "0px" }, settings.speed);
        }
      }

      last_position = top;
    }

    return $nav;
  };
})(jQuery, window, document);
