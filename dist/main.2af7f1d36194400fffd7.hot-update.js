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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropList */ \"./src/modules/dropList.js\");\n/* harmony import */ var _modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleForm */ \"./src/modules/toggleForm.js\");\n //Выпадающий список\n\n //Модалка бесплатного визита\n\n //Выпадающий список\n\n(0,_modules_dropList__WEBPACK_IMPORTED_MODULE_0__.default)(); //Модалка бесплатного визита\n\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/toggleForm.js":
/*!***********************************!*\
  !*** ./src/modules/toggleForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar visitModal = function visitModal(modal, modalLink) {\n  modal.style.height = '100vh';\n\n  var openModal = function openModal() {\n    modal.style.display = 'block';\n  };\n\n  var closeModal = function closeModal() {\n    modal.style.display = 'none';\n  };\n\n  modalLink.addEventListener('click', openModal);\n  modal.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.matches('.overlay') || target.matches('.close_icon')) {\n      closeModal();\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visitModal);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d81adf438449c94685d2")
/******/ })();
/******/ 
/******/ }
);