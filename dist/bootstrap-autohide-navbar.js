/*!
 * navstrap v0.0.1 (https://github.com/iamrelos/bootstrap-autohide-navbar.git)
 *
 * Copyright 2017 navstrap
 * Licensed under MIT (https://github.com/iamrelos/bootstrap-autohide-navbar/blob/master/LICENSE)
 */

; (function ($, window, document, undefined) {
  "use strict";

  var plugin_name = 'BootstrapAutoHideNavbar';
  var plugin_version = '0.0.1';

  function BootstrapAutoHideNavbar(element, options) {
    this.element = element;
    this.version = plugin_version;

    this.settings = $.extend({
      delta: 5,
      speed: 250,
      shadow: false
    }, options);

    init(this);
  }

  function init(context) {
    var settings = context.settings;
    var $nav = context.element;
    var $window = $(window);
    var $document = $(document);
    var last_position = 0;
    var is_scrolled = false;

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

  $.fn[plugin_name] = function (options) {
    return new BootstrapAutoHideNavbar(this, options);
  };
})(jQuery, window, document);