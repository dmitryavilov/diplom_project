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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropList */ \"./src/modules/dropList.js\");\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/heroSlider */ \"./src/modules/heroSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_servicesSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/servicesSlider */ \"./src/modules/servicesSlider.js\");\n //Выпадающий список\n\n //Модалка стандарт\n\n //Слайдер в главном блоке\n\n //Валидация\n\n //Слайдер из блока services\n\n //Выпадающий список\n\n(0,_modules_dropList__WEBPACK_IMPORTED_MODULE_0__.default)(); //Открытие и закрытие модалок\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('callback_form'), document.querySelector('.callback-btn'));\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('thanks'));\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('gift'), document.querySelector('.fixed-gift'), function () {\n  document.querySelector('.fixed-gift').style.display = 'none';\n}); //Слайдер в главном блоке\n\n(0,_modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__.default)(); //Валидации и отправки форм\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)(document.getElementById('form1'));\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)(document.getElementById('form2'));\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)(document.getElementById('banner-form')); //Слайдер из блока services\n\n(0,_modules_servicesSlider__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesSlider = function servicesSlider() {\n  var slider = document.querySelector('.services-slider'),\n      slides = slider.querySelectorAll('.slide');\n  var slideCounter = 0;\n\n  var activeSlides = function activeSlides() {\n    slides.forEach(function (item) {\n      item.style.display = 'none';\n    });\n    slides[slideCounter].style.display = 'block';\n    slides[slideCounter + 1].style.display = 'block';\n    slides[slideCounter + 2].style.display = 'block';\n  };\n\n  activeSlides();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/servicesSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8c6be883540581caa5d1")
/******/ })();
/******/ 
/******/ }
);