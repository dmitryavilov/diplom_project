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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropList */ \"./src/modules/dropList.js\");\n/* harmony import */ var _modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleForm */ \"./src/modules/toggleForm.js\");\n/* harmony import */ var _modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/heroSlider */ \"./src/modules/heroSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__);\n //Выпадающий список\n\n //Модалка стандарт\n\n //Слайдер в главном блоке\n\n //Валидация\n\n //Выпадающий список\n\n(0,_modules_dropList__WEBPACK_IMPORTED_MODULE_0__.default)(); //Открытие и закрытие модалок\n\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('callback_form'), document.querySelector('.callback-btn'));\n(0,_modules_toggleForm__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('gift'), document.querySelector('.fixed-gift'), function () {\n  document.querySelector('.fixed-gift').style.display = 'none';\n}); //Слайдер в главном блоке\n\n(0,_modules_heroSlider__WEBPACK_IMPORTED_MODULE_2__.default)(); //Валидации\n\n_modules_sendForm__WEBPACK_IMPORTED_MODULE_3___default()(document.getElementById('banner-form'));\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\websites\\\\dipl\\\\src\\\\modules\\\\sendForm.js: Unexpected token (3:26)\\n\\n\\u001b[0m \\u001b[90m 1 |\\u001b[39m \\u001b[36mconst\\u001b[39m sendForm \\u001b[33m=\\u001b[39m (form) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 |\\u001b[39m     \\u001b[36mconst\\u001b[39m checkbox \\u001b[33m=\\u001b[39m form\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m'input[type=checkbox]'\\u001b[39m)\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 |\\u001b[39m           thanksMessage \\u001b[33m=\\u001b[39m \\u001b[36mfor\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m                           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m     form\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m'submit'\\u001b[39m\\u001b[33m,\\u001b[39m e \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m         e\\u001b[33m.\\u001b[39mpreventDefault()\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:775:17)\\n    at Parser.raiseWithData (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:768:17)\\n    at Parser.raise (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:736:17)\\n    at Parser.unexpected (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9699:16)\\n    at Parser.parseExprAtom (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11091:20)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10668:23)\\n    at Parser.parseUpdate (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10648:21)\\n    at Parser.parseMaybeUnary (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10626:23)\\n    at Parser.parseExprOps (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10487:23)\\n    at Parser.parseMaybeConditional (D:\\\\websites\\\\dipl\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10461:23)\");\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("affa5f90d70c3f541ea9")
/******/ })();
/******/ 
/******/ }
);