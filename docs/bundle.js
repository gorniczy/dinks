/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/stylesheets/main.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/stylesheets/main.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Merienda);\", \"\"]);\n\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\nbody {\\n  font-family: 'Lato', sans-serif;\\n  font-size: 14px;\\n  color: #2E3B55; }\\n\\n.logo {\\n  font-family: 'Merienda', cursive;\\n  font-size: 18px; }\\n\\n.navbar__item {\\n  color: #B6CDC8; }\\n  .navbar__item:hover {\\n    color: #2E3B55; }\\n\\n.card__name {\\n  font-size: 28px;\\n  font-weight: 900;\\n  color: white; }\\n\\n.footer {\\n  color: #B6CDC8; }\\n  .footer span {\\n    color: #2E3B55; }\\n\\nhtml {\\n  height: 100%; }\\n\\nbody {\\n  height: 100%;\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-justify-content: flex-end;\\n          justify-content: flex-end;\\n  -webkit-align-items: center;\\n          align-items: center; }\\n\\nheader {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  width: 100%;\\n  height: 10%; }\\n\\n.container {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-justify-content: flex-start;\\n          justify-content: flex-start;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  width: 90%;\\n  height: 90%;\\n  background-color: #EEF8F6; }\\n\\n.footer {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  width: 90%;\\n  height: 5%; }\\n\\n.logo {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  width: 10%;\\n  min-width: 150px;\\n  height: 50%;\\n  min-height: 40px;\\n  margin-left: 3%;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%);\\n  border: 3px solid #2E3B55; }\\n\\nnav {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  width: 100%;\\n  height: 30%; }\\n\\n.navbar--mobile {\\n  display: none; }\\n\\n.navbar--desktop {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  width: 80%;\\n  height: 100%; }\\n\\n.navbar__item:hover {\\n  transition: 0.3s ease-in-out;\\n  cursor: pointer;\\n  border-bottom: 1px solid #2E3B55; }\\n\\n.navbar__hamburger {\\n  display: none; }\\n\\n@media screen and (max-width: 900px) {\\n  nav {\\n    position: relative;\\n    background-color: #EEF8F6;\\n    height: auto;\\n    padding-bottom: 30px;\\n    z-index: 100; }\\n  .navbar--desktop {\\n    display: none; }\\n  .navbar--mobile {\\n    display: -webkit-flex;\\n    display: flex;\\n    -webkit-flex-direction: column;\\n            flex-direction: column;\\n    width: 60%;\\n    text-align: center; }\\n  .navbar__item {\\n    padding: 10px;\\n    border-bottom: 1px solid #B6CDC8; }\\n    .navbar__item:hover {\\n      transition: 0.3s ease-in-out;\\n      cursor: pointer;\\n      border-bottom: 1px solid #B6CDC8; }\\n  .navbar__hamburger {\\n    display: inherit;\\n    position: absolute;\\n    top: 0;\\n    right: 5%;\\n    -webkit-align-self: flex-start;\\n            align-self: flex-start;\\n    width: 30px;\\n    cursor: pointer; } }\\n\\n.cards {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\\n  -webkit-align-items: center;\\n          align-items: center;\\n  grid-gap: 5vw;\\n  width: 80%;\\n  height: 80%;\\n  margin: 2%;\\n  overflow: scroll; }\\n\\n@media screen and (min-width: 1200px) {\\n  .cards {\\n    grid-template-columns: repeat(3, 1fr); } }\\n\\n.card {\\n  position: relative; }\\n  .card:hover {\\n    border: 5px solid #FADDB2;\\n    cursor: pointer; }\\n\\n.card__img {\\n  width: 100%; }\\n\\n.card__name {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  text-align: center; }\\n\\n.footer__social {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: center;\\n          justify-content: center;\\n  -webkit-align-content: center;\\n          align-content: center; }\\n\\n.footer__follow {\\n  padding: 0 10px; }\\n\\n.footer__icon {\\n  width: 12px;\\n  padding: 0 5px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/stylesheets/main.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/img/bijou.jpg":
/*!***************************!*\
  !*** ./src/img/bijou.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"43b371d63832ba0270f859bb9e510199.jpg\";\n\n//# sourceURL=webpack:///./src/img/bijou.jpg?");

/***/ }),

/***/ "./src/img/dribble.svg":
/*!*****************************!*\
  !*** ./src/img/dribble.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1922432b80e7ad04b1cd8931457c9f2c.svg\";\n\n//# sourceURL=webpack:///./src/img/dribble.svg?");

/***/ }),

/***/ "./src/img/eggnogg.jpg":
/*!*****************************!*\
  !*** ./src/img/eggnogg.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"101b52b99d9fcbbc854de58e04359fe5.jpg\";\n\n//# sourceURL=webpack:///./src/img/eggnogg.jpg?");

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2c94acae1cebb2f24c7ac8f9ae986aaf.svg\";\n\n//# sourceURL=webpack:///./src/img/facebook.svg?");

/***/ }),

/***/ "./src/img/hamburger.svg":
/*!*******************************!*\
  !*** ./src/img/hamburger.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4bd7f125a489cb3635af720d3e910cfd.svg\";\n\n//# sourceURL=webpack:///./src/img/hamburger.svg?");

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8a00390db59330697b13e6978786a328.svg\";\n\n//# sourceURL=webpack:///./src/img/instagram.svg?");

/***/ }),

/***/ "./src/img/mojito.jpg":
/*!****************************!*\
  !*** ./src/img/mojito.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1cf6850fc38021d1efa24eca2e9c8c8f.jpg\";\n\n//# sourceURL=webpack:///./src/img/mojito.jpg?");

/***/ }),

/***/ "./src/img/negroni.jpg":
/*!*****************************!*\
  !*** ./src/img/negroni.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6733c1bc95b68e7309e4329bf4687620.jpg\";\n\n//# sourceURL=webpack:///./src/img/negroni.jpg?");

/***/ }),

/***/ "./src/img/rattlesnake.jpg":
/*!*********************************!*\
  !*** ./src/img/rattlesnake.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1d1d8ebb5aed267f4142a8860cbae8e7.jpg\";\n\n//# sourceURL=webpack:///./src/img/rattlesnake.jpg?");

/***/ }),

/***/ "./src/img/zinger.jpg":
/*!****************************!*\
  !*** ./src/img/zinger.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2327579191b2b14e53735d0fb3237f03.jpg\";\n\n//# sourceURL=webpack:///./src/img/zinger.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/main.scss */ \"./src/stylesheets/main.scss\");\n/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_script__WEBPACK_IMPORTED_MODULE_0__[\"insertHamburger\"])();\nObject(_script__WEBPACK_IMPORTED_MODULE_0__[\"insertImages\"])();\nObject(_script__WEBPACK_IMPORTED_MODULE_0__[\"insertIcons\"])();\nObject(_script__WEBPACK_IMPORTED_MODULE_0__[\"listenForClick\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: insertHamburger, listenForClick, insertImages, insertIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertHamburger\", function() { return insertHamburger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenForClick\", function() { return listenForClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertImages\", function() { return insertImages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertIcons\", function() { return insertIcons; });\n/* harmony import */ var _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hamburger.svg */ \"./src/img/hamburger.svg\");\n/* harmony import */ var _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_hamburger_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_bijou_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bijou.jpg */ \"./src/img/bijou.jpg\");\n/* harmony import */ var _img_bijou_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_bijou_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/eggnogg.jpg */ \"./src/img/eggnogg.jpg\");\n/* harmony import */ var _img_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_mojito_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/mojito.jpg */ \"./src/img/mojito.jpg\");\n/* harmony import */ var _img_mojito_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_mojito_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_negroni_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/negroni.jpg */ \"./src/img/negroni.jpg\");\n/* harmony import */ var _img_negroni_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_negroni_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/rattlesnake.jpg */ \"./src/img/rattlesnake.jpg\");\n/* harmony import */ var _img_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_zinger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/zinger.jpg */ \"./src/img/zinger.jpg\");\n/* harmony import */ var _img_zinger_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_zinger_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _img_dribble_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/dribble.svg */ \"./src/img/dribble.svg\");\n/* harmony import */ var _img_dribble_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_dribble_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/instagram.svg */ \"./src/img/instagram.svg\");\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_instagram_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/facebook.svg */ \"./src/img/facebook.svg\");\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_facebook_svg__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n // insert 'hamburger' icon\n\nvar navbarNode = document.querySelector(\"nav\");\nvar insertHamburger = function insertHamburger() {\n  var hamburger = document.createElement(\"img\");\n  hamburger.className = \"navbar__hamburger\";\n  hamburger.src = _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n  hamburger.alt = 'menu icon';\n  navbarNode.appendChild(hamburger);\n}; // activate 'hamburger' icon\n\nvar navbarList = document.querySelector(\".navbar\");\n\nvar toggleMenu = function toggleMenu() {\n  if (navbarList.className === 'navbar navbar--desktop') {\n    navbarList.className += ' navbar--mobile';\n  } else {\n    navbarList.className = 'navbar navbar--desktop';\n  }\n};\n\nvar listenForClick = function listenForClick() {\n  var hamburger = document.querySelector(\".navbar__hamburger\");\n  hamburger.addEventListener('click', toggleMenu);\n}; // insert cards content\n\nvar images = [_img_bijou_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _img_negroni_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _img_mojito_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _img_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _img_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _img_zinger_jpg__WEBPACK_IMPORTED_MODULE_6___default.a];\nvar names = [\"Bijou\", \"Negroni\", \"Mojito\", \"Texas Rattlesnake\", \"Egg Nogg\", \"Zinger\"];\nvar cardNode = document.querySelectorAll('.card');\nvar insertImages = function insertImages() {\n  for (var i = 0; i < cardNode.length; i++) {\n    cardNode[i].innerHTML = \"\\n    <img class=\\\"card__img\\\" src=\\\"\".concat(images[i], \"\\\" alt=\\\"drink\\\">\\n    <p class=\\\"card__name\\\">\").concat(names[i], \"</p>\\n    \");\n  }\n}; // insert social media icons\n\nvar icons = [_img_dribble_svg__WEBPACK_IMPORTED_MODULE_7___default.a, _img_instagram_svg__WEBPACK_IMPORTED_MODULE_8___default.a, _img_facebook_svg__WEBPACK_IMPORTED_MODULE_9___default.a];\nvar iconNames = [\"dribble\", \"instagram\", \"facebook\"];\nvar footerNode = document.querySelector('.footer__social');\nvar insertIcons = function insertIcons() {\n  for (var i = 0; i < icons.length; i++) {\n    var iconElement = document.createElement(\"img\");\n    iconElement.className = \"footer__icon\";\n    iconElement.src = icons[i];\n    iconElement.alt = iconNames[i];\n    footerNode.appendChild(iconElement);\n  }\n};\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/stylesheets/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"sourceMap\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/stylesheets/main.scss?");

/***/ })

/******/ });