/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/toTopArrow.js":
/*!***********************************!*\
  !*** ./src/modules/toTopArrow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toTop = function toTop(callback) {\n  var arrow = document.getElementById('totop'),\n      head = document.querySelector('.head'),\n      nav = document.querySelector('.top-menu'),\n      firstBlock = document.querySelector('.head-slider');\n\n  var toggleArrow = function toggleArrow() {\n    var height = firstBlock.clientHeight + head.clientHeight + nav.clientHeight;\n\n    if (document.documentElement.scrollTop >= height) {\n      arrow.style.display = 'block';\n    } else {\n      arrow.style.display = 'none';\n    }\n\n    ;\n  };\n\n  document.addEventListener('scroll', toggleArrow);\n  callback();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toTop);\n\n//# sourceURL=webpack://3dglo/./src/modules/toTopArrow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a94d1478f2f4c9f7f77")
/******/ })();
/******/ 
/******/ }
);