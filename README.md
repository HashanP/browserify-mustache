browserify-mustache [![NPM Module](http://img.shields.io/npm/v/browserify-mustache.svg?style=flat-square)](https://npmjs.org/package/browserify-mustache) [![NPM Downlaods](http://img.shields.io/npm/dm/browserify-mustache.svg?style=flat-square)](https://npmjs.org/package/browserify-mustache)
===================

browserify transform for mustache template files

Install:
```bash
npm install browserify-mustache --save-dev
```

In JavaScript:
```js
var template = require("../views/template.mustache");

template({title:"Browserify is Awesome!", mood:"happy"});
```
### Partials
Partials can be passed in as a 2nd parameter.
