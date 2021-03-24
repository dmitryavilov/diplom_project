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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesSlider = function servicesSlider() {\n  var slider = document.querySelector('.services-slider'),\n      sliderWrapper = document.getElementById('services-slider-wrapper'),\n      wrapper = document.getElementById('serv-slider-wrapper'),\n      slides = slider.querySelectorAll('.slide'),\n      yellow = '#ffd11a';\n  var sliderTransform = 0,\n      baseSlideWidth = 210,\n      slideCounter = 0;\n\n  var changeStyles = function changeStyles() {\n    sliderWrapper.style.cssText = \"\\n            overflow: hidden;\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            width: 1110px;\\n        \";\n    wrapper.style.cssText = \"\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            position: relative;\\n        \";\n    slider.style.cssText = \"\\n            padding: 0;\\n            transition: 0.4s;\\n        \";\n    slides.forEach(function (item) {\n      item.style.minWidth = \"\".concat(baseSlideWidth, \"px\");\n    });\n  };\n\n  var createArrows = function createArrows() {\n    var arrowStyles = \"\\n            width: 50px;\\n            height: 50px;\\n            border-radius: 50%;\\n            background-color: \".concat(yellow, \";\\n            position: absolute;\\n            top: 50%;\\n            transform: translateY(-50%);\\n        \");\n    var arrowPrev = document.createElement('button'),\n        arrowNext = document.createElement('button');\n    arrowPrev.style.cssText = arrowStyles + 'left: -50px';\n    arrowNext.style.cssText = arrowStyles + 'right: -50px';\n    arrowPrev.id = 'serv-prev';\n    arrowNext.id = 'serv-next';\n    wrapper.insertAdjacentElement('afterbegin', arrowPrev);\n    wrapper.insertAdjacentElement('afterbegin', arrowNext);\n  };\n\n  createArrows();\n  var prevBtn = document.getElementById('serv-prev'),\n      nextBtn = document.getElementById('serv-next');\n\n  var toNextSlide = function toNextSlide() {\n    if (slideCounter + 5 !== slides.length) {\n      sliderTransform += baseSlideWidth + 12;\n      slider.style.transform = \"translateX(\".concat(-sliderTransform, \"px)\");\n      slideCounter++;\n    }\n\n    ;\n  };\n\n  var toPrevSlide = function toPrevSlide() {\n    if (sliderTransform > 0) {\n      sliderTransform -= baseSlideWidth + 12;\n      slider.style.transform = \"translateX(\".concat(-sliderTransform, \"px)\");\n      slideCounter--;\n    }\n\n    ;\n  };\n\n  changeStyles();\n  nextBtn.addEventListener('click', toNextSlide);\n  prevBtn.addEventListener('click', toPrevSlide);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/servicesSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c03c7221366f839c0df7")
/******/ })();
/******/ 
/******/ }
);