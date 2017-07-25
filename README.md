# bootstrap-autohide-navbar
A small jQuery plugin to show/hide twitter bootstrap 3 navbar on scroll.

## Install
```
$ bower install navstrap
```

## Usage
```javascript
$(function () {
    'use strict';

    $('.navbar').BootstrapAutoHideNavbar({
      delta: 5,
      speed: 250,
      shadow: true
    });
});
```
