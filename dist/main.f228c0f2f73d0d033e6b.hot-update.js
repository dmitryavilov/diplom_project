/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var calcBlock = document.getElementById('card_order');\n\n  var getTimeCount = function getTimeCount(e) {\n    var mozaika = document.getElementById('card_leto_mozaika'),\n        schelkovo = document.getElementById('card_leto_schelkovo'),\n        counts = {\n      oneMonth: 1999,\n      sixMonths: 9990,\n      nineMonths: 13900,\n      twelveMonths: 19900\n    };\n\n    if (mozaika.checked) {\n      if (e.target.matches('input[name=card-type]')) {}\n\n      ;\n    } else if (schelkovo.checked) {\n      if (e.target.matches('input[name=card-type]')) {}\n\n      ;\n    }\n  };\n\n  calcBlock.addEventListener('click', getTimeCount);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c175da00427546dc372b")
/******/ })();
/******/ 
/******/ }
);