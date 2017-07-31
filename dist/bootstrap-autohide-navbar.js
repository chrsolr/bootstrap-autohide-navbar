/**
 * bootstrap-autohide-navbar
 * @desc A small jquery plugin to show/hide twitter bootstrap 3 navbar on scroll.
 * @version 0.0.5
 * @link https://github.com/iamrelos/bootstrap-autohide-navbar#readme
 * @license MIT
 * @author Christian Soler
 */
;
(function ($, window, document) {
    'use strict';
    var plugin_name = 'BootstrapAutoHideNavbar';
    var $window = $(window);
    var $document = $(document);
    var defaults = {
        disableAutoHide: false,
        delta: 5,
        duration: 250,
        shadow: false
    };
    function show() {
        this.element.css({
            transform: 'translate3d(0, 0, 0)'
        });
    }
    function hide() {
        this.element.css({
            transform: 'translate3d(0, -110%, 0)'
        });
    }
    var BootstrapAutoHideNavbar = (function () {
        function BootstrapAutoHideNavbar(element, options) {
            this.element = $(element);
            this.settings = $.extend({}, defaults, options);
            if (!this.element.hasClass('navbar-fixed-top'))
                this.element.addClass('navbar-fixed-top');
            if (this.settings.shadow)
                this.element.css({
                    'box-shadow': '0 0 4px rgba(0,0,0,0.4)'
                });
            this.element.css({
                transition: 'transform ease-in-out ' + this.settings.duration + 'ms'
            });
            this.init();
        }
        BootstrapAutoHideNavbar.prototype.init = function () {
            var _this = this;
            var $nav = _this.element;
            var settings = _this.settings;
            var last_position = 0;
            var is_scrolled = false;
            $window.scroll(function () {
                is_scrolled = true;
            });
            setInterval(function () {
                if (is_scrolled && !settings.disableAutoHide) {
                    onHasScrolled();
                    is_scrolled = false;
                }
            }, 250);
            function onHasScrolled() {
                var top = $window.scrollTop();
                if (Math.abs(last_position - top) <= settings.delta)
                    return;
                if (top > last_position && top > $nav.outerHeight()) {
                    _this.hide();
                }
                else {
                    if (top + $window.height() < $document.height())
                        _this.show();
                }
                last_position = top;
            }
            return $nav;
        };
        BootstrapAutoHideNavbar.prototype.show = function () {
            show.call(this);
        };
        BootstrapAutoHideNavbar.prototype.hide = function () {
            hide.call(this);
        };
        BootstrapAutoHideNavbar.prototype.setDisableAutoHide = function (flag) {
            this.settings.disableAutoHide = flag;
        };
        return BootstrapAutoHideNavbar;
    }());
    $.fn[plugin_name] = function (options) {
        var instance;
        this.each(function () {
            instance = $.data(this, 'plugin_' + plugin_name);
            if (instance === undefined)
                instance = $.data(this, 'plugin_' + plugin_name, new BootstrapAutoHideNavbar(this, options));
        });
        return instance;
    };
})(jQuery, window, document);
