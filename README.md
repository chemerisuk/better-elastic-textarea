# better-elastic-textarea<br>[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Bower version][bower-image]][bower-url]
> Elastic textarea for [better-dom](https://github.com/chemerisuk/better-dom)

[VIEW DEMO](http://chemerisuk.github.io/better-elastic-textarea/)

## Features
* all `textarea[rows='1']` elements expand on any kind of content insertion: manually or from clipboard
* [live extension](https://github.com/chemerisuk/better-dom/wiki/Live-extensions) - works for current and future content

## Installing
The simplest way is to use [bower](http://bower.io/):

```sh
$ bower install better-elastic-textarea
```

This will clone the latest version of the __better-dateinput-polyfill__ with dependencies into the `bower_components` directory at the root of your project.

Then append the following script on your page:

```html
<script src="bower_components/better-dom/dist/better-dom.js"></script>
<script src="bower_components/better-elastic-textarea/dist/better-elastic-textarea.js"></script>
```

## Browser support
* Chrome
* Safari 6.0+
* Firefox 16+
* Opera 12.10+
* IE8+

[npm-url]: https://www.npmjs.com/package/better-elastic-textarea
[npm-version]: https://img.shields.io/npm/v/better-elastic-textarea.svg
[npm-downloads]: https://img.shields.io/npm/dt/better-elastic-textarea.svg

[travis-url]: http://travis-ci.org/chemerisuk/better-elastic-textarea
[travis-image]: http://img.shields.io/travis/chemerisuk/better-elastic-textarea/master.svg

[coveralls-url]: https://coveralls.io/r/chemerisuk/better-elastic-textarea
[coveralls-image]: http://img.shields.io/coveralls/chemerisuk/better-elastic-textarea/master.svg

[bower-url]: https://github.com/chemerisuk/better-elastic-textarea
[bower-image]: http://img.shields.io/bower/v/better-elastic-textarea.svg
