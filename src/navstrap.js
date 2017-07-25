/*!
 * navstrap v0.0.2 (https://github.com/iamrelos/navstrap.git)
 *
 * Copyright 2017 navstrap
 * Licensed under MIT (https://github.com/iamrelos/navstrap/blob/master/LICENSE)
 */

; (function ($, window, document, undefined) {
  "use strict";

  var plugin_name = 'NavStrap';
  var plugin_version = '0.0.2';

  function NavStrap(element) {
    this.element = element;
    this.version = plugin_version;
  }

  NavStrap.prototype.ShowOrHideOnScroll = function (options) {
    var $nav = this.element;
    var $window = $(window);
    var $document = $(document);
    var last_position = 0;
    var is_scrolled = false;

    var settings = $.extend({
      delta: 5,
      speed: 250,
      shadow: false
    }, options);

    if (!$nav.hasClass("navbar-fixed-top"))
      $nav.addClass("navbar-fixed-top");

    if (settings.shadow)
      $nav.css({ "box-shadow": "0 0 4px rgba(0,0,0,0.4)" });

    $nav.css({ transition: "transform ease-in-out " + settings.speed + "ms" });

    $window.scroll(function () {
      is_scrolled = true;
    });

    setInterval(function () {
      if (is_scrolled) {
        onHasScrolled();
        is_scrolled = false;
      }
    }, settings.speed);

    function onHasScrolled() {
      var top = $window.scrollTop();

      if (Math.abs(last_position - top) <= settings.delta) return;

      if (top > last_position && top > $nav.outerHeight()) {
        $nav.css({ transform: "translate3d(0, -110%, 0)" });
      } else {
        if (top + $window.height() < $document.height()) 
          $nav.css({ transform: "translate3d(0, 0, 0)" });
      }

      last_position = top;
    }

    return $nav;
  }

  $.fn[plugin_name] = function () {
    return new NavStrap(this);
  };
})(jQuery, window, document);