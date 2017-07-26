# bootstrap-autohide-navbar
A small jQuery plugin to show/hide twitter bootstrap 3 navbar on scroll.

## Install
```
$ bower install bootstrap-autohide-navbar
```

## Usage
```javascript
$(function () {
  'use strict';

  $('.navbar').BootstrapAutoHideNavbar({
    delta: 5,
    duration: 250,
    shadow: true
  });
});
```

## Options
| Property  | Required | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| delta | No | 5 | How many pixels the user needs to scroll down before effect get trigger |
| duration | No | 250 | Duration of animation in milliseconds |
| shadow | no | false | Add bottom shadow to navbar |