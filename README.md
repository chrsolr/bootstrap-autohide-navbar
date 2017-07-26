# bootstrap-autohide-navbar
A small jQuery plugin to show/hide twitter bootstrap 3 navbar on scroll.

## Usage
1. Install using bower
```
$ bower install bootstrap-autohide-navbar
```

2. Include jQuery and Bootstrap
```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.x.x/css/bootstrap.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.x.x/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.x.x/js/bootstrap.min.js"></script>
```
3. Include bootstrap-autohide-navbar.js
```html
<script src="dist/bootstrap-autohide-navbar.js"></script>
```

4. Instantiate plugin
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