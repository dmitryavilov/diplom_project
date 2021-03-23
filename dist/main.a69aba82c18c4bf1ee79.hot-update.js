/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropList.js */ \"./src/modules/dropList.js\");\n\n\n\n(0,_modules_dropList_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dropList.js":
/*!*********************************!*\
  !*** ./src/modules/dropList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dropList = function dropList() {\n  var clubList = document.querySelector('.club-select'),\n      hiddenContent = clubList.querySelector('ul');\n\n  var toggleList = function toggleList() {\n    if (clubList.classList.contains('list-active')) {\n      clubList.classList.remove('list-content');\n      hiddenContent.style.display = 'none';\n    } else {\n      clubList.classList.add('list-content');\n      hiddenContent.style.display = 'block';\n    }\n  };\n\n  clubList.addEventListener('click');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropList);\n\n//# sourceURL=webpack://3dglo/./src/modules/dropList.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19ddbf84203dabd3e938")
/******/ })();
/******/ 
/******/ }
);