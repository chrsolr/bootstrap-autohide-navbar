; (function ($, window, document, undefined) {
  "use strict";
  
  var plugin_name = 'BootstrapNavbar';
  var plugin_version = '0.0.1';
  var defaults = {
    shadow: false
  };
  
  function BootstrapNavbar(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    
    //TODO: Add bottom shadow if needed
  }
  
  BootstrapNavbar.prototype.ShowOrHideOnScroll = function (options) {
    var $nav = this.element;
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
      var top = $(window).scrollTop();

      if (Math.abs(last_position - top) <= settings.delta) return;

      if (top > last_position && top > $nav.outerHeight()) {
        $nav.animate({ top: -Number($nav.outerHeight() + 10) + "px" }, settings.speed);
      } else {
        if (top + $(window).height() < $(document).height()) {
          $nav.animate({ top: "0px" }, settings.speed);
        }
      }

      last_position = top;
    }

    return $nav;
  }

  $.fn.[plugin_name] = function (options) {
    return new BootstrapNavbar(this, options);
  };
})(jQuery, window, document);
