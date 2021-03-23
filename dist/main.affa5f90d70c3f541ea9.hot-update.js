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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropList */ \"./src/modules/dropList.js\");\n/* harmony import */ var _modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleForm */ \"./src/modules/toggleForm.js\");\n/* harmony import */ var _modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/heroSlider */ \"./src/modules/heroSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n //Выпадающий список\n\n //Модалка стандарт\n\n //Слайдер в главном блоке\n\n //Валидация\n\n //Выпадающий список\n\n(0,_modules_dropList__WEBPACK_IMPORTED_MODULE_0__.default)(); //Открытие и закрытие модалок\n\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('callback_form'), document.querySelector('.callback-btn'));\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('gift'), document.querySelector('.fixed-gift'), function () {\n  document.querySelector('.fixed-gift').style.display = 'none';\n}); //Слайдер в главном блоке\n\n(0,_modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__.default)(); //Валидации\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)(document.getElementById('banner-form'));\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var checkbox = form.querySelector('input[type=checkbox]'),\n      thanksMessage = document.getElementById('thanks');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var target = e.target;\n\n    if (!checkbox.checked) {\n      alert('Поставьте галочку!');\n      return;\n    }\n\n    ;\n    console.log('1');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0214d89501ef65ebe4bc")
/******/ })();
/******/ 
/******/ }
);