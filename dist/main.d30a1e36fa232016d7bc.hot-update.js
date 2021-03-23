/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/heroSlider.js":
/*!***********************************!*\
  !*** ./src/modules/heroSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar heroSlider = function heroSlider() {\n  var slider = document.querySelector('.main-slider'),\n      slides = slider.querySelectorAll('.slide');\n  var slideCounter = 0;\n\n  var autoPlay = function autoPlay() {\n    setTimeout(function () {\n      if (slideCounter + 1 === slides.length) {\n        slideCounter = -1;\n      }\n\n      ;\n\n      try {\n        slides[slideCounter].style.display = 'none';\n      } catch (_unused) {}\n\n      ;\n      slides[slideCounter + 1].style.display = 'flex';\n      slideCounter++;\n      autoPlay();\n    }, 2000);\n  };\n\n  autoPlay();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/heroSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("398f6ce995c005091723")
/******/ })();
/******/ 
/******/ }
);