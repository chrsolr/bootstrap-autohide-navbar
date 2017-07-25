/**
 * bootstrap-autohide-navbar
 * @desc A small jquery plugin to show/hide twitter bootstrap 3 navbar on scroll.
 * @version 0.0.2
 * @link https://github.com/iamrelos/bootstrap-autohide-navbar#readme
 * @license MIT
 * @author Christian Soler
 */
;
(function ($, window, document, undefined) {
	'use strict';

	var plugin_name = 'BootstrapAutoHideNavbar';
	var plugin_version = '0.0.2';
	var $window = $(window);
	var $document = $(document);
	var visible = true;
	var defaults = {
		disable: false,
		delta: 5,
		duration: 250,
		shadow: false
	};

	function BootstrapAutoHideNavbar(element, options) {
		this.element = $(element);
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = plugin_name;
		this._version = plugin_version;

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

	function show() {
		this.element.css({
			transform: 'translate3d(0, 0, 0)'
		});

		visible = true;
	}

	function hide() {
		this.element.css({
			transform: 'translate3d(0, -110%, 0)'
		});

		visible = false;
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
			if (is_scrolled) {
				onHasScrolled();
				is_scrolled = false;
			}
		}, settings.duration);

		function onHasScrolled() {
			var top = $window.scrollTop();

			if (Math.abs(last_position - top) <= settings.delta)
				return;

			if (top > last_position && top > $nav.outerHeight()) {
				_this.hide();
			} else {
				if (top + $window.height() < $document.height())
					_this.show();
			}

			last_position = top;
		}

		return $nav;
	};

	/**
	 * @desc Show navbar
	 */
	BootstrapAutoHideNavbar.prototype.show = function () {
		show.call(this);
	};

	/**
	 * @desc Hide navbar
	 */
	BootstrapAutoHideNavbar.prototype.hide = function () {
		hide.call(this);
	};

	BootstrapAutoHideNavbar.prototype.setDisableAutoHide = function (disable) {
		this.settings.disable = disable;
	};

	$.fn[plugin_name] = function (options) {
		var instance;

		this.each(function () {
			instance = $.data(this, 'plugin_' + plugin_name);

			if (instance === undefined) {
				instance = $.data(this, 'plugin_' + plugin_name, new BootstrapAutoHideNavbar(this, options));
			}
		});

		return instance;
	};
})(jQuery, window, document);