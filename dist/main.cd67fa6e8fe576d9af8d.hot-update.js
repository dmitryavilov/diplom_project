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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesSlider = function servicesSlider() {\n  var slider = document.querySelector('.services-slider'),\n      slides = slider.querySelectorAll('.slide'),\n      prevBtn = document.getElementById('serv-prev'),\n      nextBtn = document.getElementById('serv-next');\n  var slideCounter = 0;\n\n  var activeSlides = function activeSlides() {\n    slides.forEach(function (item) {\n      item.style.display = 'none';\n    });\n\n    if (slideCounter + 4 !== slides.length) {\n      return;\n    } else {\n      slideCounter = 0;\n      slides[slideCounter].style.display = 'block';\n      slides[slideCounter + 1].style.display = 'block';\n      slides[slideCounter + 2].style.display = 'block';\n      slides[slideCounter + 3].style.display = 'block';\n      slides[slideCounter + 4].style.display = 'block';\n    }\n  };\n\n  var turnPages = function turnPages(e) {\n    var target = e.target;\n\n    if (target.closest('#serv-next')) {\n      slideCounter++;\n      activeSlides();\n    } else {\n      slideCounter--;\n      activeSlides();\n    }\n\n    ;\n  };\n\n  prevBtn.addEventListener('click', turnPages);\n  nextBtn.addEventListener('click', turnPages);\n  activeSlides();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/servicesSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7f1dae76885716212cb")
/******/ })();
/******/ 
/******/ }
);