/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var checkbox = form.querySelector('input[type=checkbox]'),\n      thanksMessage = document.getElementById('thanks'),\n      phone = form.querySelector('input[type=tel]'),\n      name = form.querySelector('input[type=text]');\n\n  var phoneValidation = function phoneValidation() {\n    phone.value = phone.value.match(/\\+?[7,8]([-()]*\\d){10}/g);\n    phone.value = phone.value.split(',').join('');\n  };\n\n  var nameValidation = function nameValidation() {\n    name.value = name.value.match(/[а-яё ]/gi);\n    name.value = name.value.split(',').join('');\n  };\n\n  var sendData = function sendData() {\n    var data = {\n      name: name.value,\n      phone: phone.value\n    };\n    fetch('../server.php', \"\\n            method: 'POST',\\n            mode: 'same-origin',\\n            cache: 'default',\\n            credentials: 'same-origin',\\n            headers: {\\n                ContentType: 'application/json'\\n            },\\n            redirect: 'follow',\\n            referrer: 'client',\\n            body: JSON.stringify(data) \\n        \").then(function (response) {\n      console.log(response);\n    });\n  };\n\n  phone.addEventListener('change', phoneValidation);\n  name.addEventListener('change', nameValidation);\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var target = e.target;\n\n    if (!checkbox.checked) {\n      alert('Поставьте галочку!');\n      return;\n    }\n\n    ;\n    sendData();\n    form.closest('.popup').style.display = 'none';\n    thanksMessage.style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23b49af45b1289538f40")
/******/ })();
/******/ 
/******/ }
);