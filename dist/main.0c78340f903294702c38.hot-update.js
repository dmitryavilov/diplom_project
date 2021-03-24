/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesSlider = function servicesSlider() {\n  var slider = document.querySelector('.services-slider'),\n      sliderWrapper = document.getElementById('services-slider-wrapper'),\n      wrapper = document.getElementById('serv-slider-wrapper'),\n      slides = slider.querySelectorAll('.slide'),\n      prevBtn = document.getElementById('serv-prev'),\n      nextBtn = document.getElementById('serv-next');\n  var sliderTransform = 0;\n  var baseSlideWidth = 210;\n\n  var changeStyles = function changeStyles() {\n    sliderWrapper.style.cssText = \"\\n            overflow: hidden;\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            width: 1110px;\\n        \";\n    wrapper.style.cssText = \"\\n            display: flex;\\n            flex-direction: column;\\n        \";\n    slider.style.padding = '0';\n    slides.forEach(function (item) {\n      item.style.minWidth = \"\".concat(baseSlideWidth, \"px\");\n    });\n  };\n\n  changeStyles();\n  nextBtn.addEventListener('click', function () {\n    sliderTransform += baseSlideWidth + 12;\n    slider.style.transform = \"translateX(-\".concat(sliderTransform, \"px)\");\n    console.log(sliderTransform);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/servicesSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("492de9396c098f256499")
/******/ })();
/******/ 
/******/ }
);