/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/mobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/mobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mobileMenu = function mobileMenu() {\n  var menuBtn = document.getElementById('menu-btn'),\n      menu = document.getElementById('hidden-menu');\n\n  var toggleMenu = function toggleMenu() {\n    if (menu.classList.contains('menu-showed')) {\n      menu.style.display = 'none';\n      menu.classList.toggle('menu-showed');\n    } else {\n      menu.style.display = 'flex';\n      menu.classList.toggle('menu-showed');\n    }\n\n    ;\n  };\n\n  menuBtn.addEventListener('click', toggleMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/mobileMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53b4a8ff1fb5488fb383")
/******/ })();
/******/ 
/******/ }
);