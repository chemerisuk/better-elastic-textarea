# better-elastic-textarea [![Build Status](https://api.travis-ci.org/chemerisuk/better-elastic-textarea.png?branch=master)](http://travis-ci.org/chemerisuk/better-elastic-textarea)
> Elastic textarea for [better-dom](https://github.com/chemerisuk/better-dom)

[VIEW DEMO](http://chemerisuk.github.io/better-elastic-textarea/)

## Features
* all `textarea[rows='1']` elements expand on any king of content insertion: manually or from clipboard
* [live extension](https://github.com/chemerisuk/better-dom/wiki/Live-extensions) - works for current and future content

## Installing
Use [bower](http://bower.io/) to download this extension with all required dependencies.

    bower install better-elastic-textarea --save

This will clone the latest version of the __better-elastic-textarea__ into the `bower_components` directory at the root of your project.

Then append the following script on your page:

```html
<html>
<head>
    ...
    <!--[if IE]>
        <link href="bower_components/better-dom/dist/better-dom.htc" rel="htc" />
        <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    ...
    <script src="bower_components/better-dom/dist/better-dom.js"></script>
    <script src="bower_components/better-elastic-textarea/dist/better-elastic-textarea.js"></script>
</body>
</html>
```

## Browser support
* Chrome
* Safari 5.2.2+
* Firefox 16+
* Opera 12.10+
* IE8+
