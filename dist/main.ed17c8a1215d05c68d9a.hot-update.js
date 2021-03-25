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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var checkbox = form.querySelector('input[type=checkbox]'),\n      thanksMessage = document.getElementById('thanks'),\n      phone = form.querySelector('input[type=tel]'),\n      name = form.querySelector('input[type=text]');\n\n  var phoneValidation = function phoneValidation() {\n    phone.value = phone.value.match(/\\+?[7,8]([-()]*\\d){10}/g);\n    phone.value = phone.value.split(',').join('');\n  };\n\n  var nameValidation = function nameValidation() {\n    name.value = name.value.match(/[а-яё ]/gi);\n    name.value = name.value.split(',').join('');\n  };\n\n  var sendData = function sendData() {\n    var thanksText = document.getElementById('thanks-text');\n    var data = {\n      name: name.value,\n      phone: phone.value\n    };\n\n    var toggleModal = function toggleModal() {\n      try {\n        form.closest('.popup').style.display = 'none';\n      } catch (_unused) {}\n\n      ;\n      thanksMessage.style.display = 'block';\n    };\n\n    toggleModal();\n    thanksText.textContent = 'Загрузка';\n    fetch('../server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    }).then(function (response) {\n      if (response.status === 200) {\n        thanksText.textContent = \"\\n                    \\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430. <br />\\n                    \\u041C\\u044B \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0432 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F.\\n                \";\n      } else {\n        thanksText.textContent = \"\\n                    \\u041F\\u0440\\u0438 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0435 \\u043F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430!. <br />\\n                    \\u0421\\u0442\\u0430\\u0442\\u0443\\u0441 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0438 \".concat(request.status, \".\\n                \");\n        throw new Error('status network not 200.');\n      }\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  phone.addEventListener('change', phoneValidation);\n  name.addEventListener('change', nameValidation);\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var target = e.target;\n\n    if (!checkbox.checked) {\n      alert('Поставьте галочку!');\n      return;\n    }\n\n    ;\n    sendData();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc7886de6453fcb61cee")
/******/ })();
/******/ 
/******/ }
);