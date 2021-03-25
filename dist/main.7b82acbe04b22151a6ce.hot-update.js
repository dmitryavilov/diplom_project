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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var calcBlock = document.getElementById('card_order');\n\n  var getTimeCount = function getTimeCount(e) {\n    var mozaika = document.getElementById('card_leto_mozaika'),\n        schelkovo = document.getElementById('card_leto_schelkovo');\n    var target = e.target,\n        result = 1999;\n\n    if (mozaika.checked) {\n      if (target.matches('input[name=card-type]')) {\n        switch (+target.value) {\n          case 1:\n            result = 1999;\n            break;\n\n          case 6:\n            result = 9990;\n            break;\n\n          case 9:\n            result = 13900;\n            break;\n\n          case 12:\n            result = 19900;\n            break;\n\n          default:\n            return result;\n        }\n\n        ;\n      }\n\n      ;\n    } else if (schelkovo.checked) {\n      if (target.matches('input[name=card-type]')) {\n        switch (+target.value) {\n          case 1:\n            result = 2999;\n            break;\n\n          case 6:\n            result = 14990;\n            break;\n\n          case 9:\n            result = 21990;\n            break;\n\n          case 12:\n            result = 24990;\n            break;\n\n          default:\n            return result;\n        }\n\n        ;\n      }\n\n      ;\n    }\n\n    ;\n  };\n\n  var toCalc = function toCalc(e) {\n    var result = getTimeCount(e);\n    console.log(result);\n  };\n\n  calcBlock.addEventListener('click', toCalc);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("695e0c60d73758d3fb8d")
/******/ })();
/******/ 
/******/ }
);