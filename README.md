# NavStrap
A small jQuery plugin to show/hide twitter bootstrap 3 navbar on scroll.

## Install
```
$ bower install navstrap
```

## Usage
```javascript
$(function () {
    'use strict';

    $('.navbar').NavStrap().ShowOrHideOnScroll({
      delta: 5,
      speed: 250,
      shadow: true
    });
});
```
