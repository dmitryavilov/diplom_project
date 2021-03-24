/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesSlider = function servicesSlider() {\n  var slider = document.querySelector('.services-slider'),\n      sliderWrapper = document.getElementById('services-slider-wrapper'),\n      wrapper = document.getElementById('serv-slider-wrapper'),\n      slides = slider.querySelectorAll('.slide'),\n      yellow = '#ffd11a';\n  var sliderTransform = 0,\n      baseSlideWidth,\n      slideCounter = 0;\n\n  var checkBaseSlideWitdh = function checkBaseSlideWitdh() {\n    if (window.screen.width > 900) {\n      baseSlideWidth = 210;\n    }\n\n    ;\n\n    if (window.screen.width <= 900) {\n      baseSlideWidth = 190;\n    }\n\n    ;\n  };\n\n  checkBaseSlideWitdh();\n\n  var changeStyles = function changeStyles() {\n    sliderWrapper.style.cssText = \"\\n            overflow: hidden;\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            width: 1110px;\\n        \";\n    wrapper.style.cssText = \"\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            position: relative;\\n        \";\n    slider.style.cssText = \"\\n            padding: 0;\\n            transition: 0.4s;\\n        \";\n    slides.forEach(function (item) {\n      item.style.minWidth = \"\".concat(baseSlideWidth, \"px\");\n    });\n  };\n\n  var createArrows = function createArrows() {\n    var arrowStyles = \"\\n            width: 50px;\\n            height: 50px;\\n            border-radius: 50%;\\n            background-color: \".concat(yellow, \";\\n            position: absolute;\\n            top: 50%;\\n            transform: translateY(-50%);\\n            font-size: 25px;\\n            border: none;\\n        \");\n    var arrowPrev = document.createElement('button'),\n        arrowNext = document.createElement('button');\n    arrowPrev.style.cssText = arrowStyles + 'left: -50px';\n    arrowNext.style.cssText = arrowStyles + 'right: -50px';\n    arrowPrev.id = 'serv-prev';\n    arrowNext.id = 'serv-next';\n    arrowPrev.textContent = '<';\n    arrowNext.textContent = '>';\n    wrapper.insertAdjacentElement('afterbegin', arrowPrev);\n    wrapper.insertAdjacentElement('afterbegin', arrowNext);\n  };\n\n  createArrows();\n  var prevBtn = document.getElementById('serv-prev'),\n      nextBtn = document.getElementById('serv-next');\n\n  var createAdaptive = function createAdaptive() {\n    var adaptiveStyles = document.createElement('style');\n    adaptiveStyles.textContent = \"\\n            @media (max-width: 1330px) {\\n                #services-slider-wrapper {\\n                    width: 890px !important;\\n                }\\n\\n                #serv-next {\\n                    right: 50px !important;\\n                }\\n\\n                #serv-prev {\\n                    left: 50px !important;\\n                }\\n            }\\n\\n            @media (max-width: 1120px) {\\n                #services-slider-wrapper {\\n                    width: 665px !important;\\n                }\\n\\n                #serv-prev {\\n                    left: 5% !important;\\n                }\\n\\n                #serv-next {\\n                    right: 5% !important;\\n                }\\n            }\\n\\n            @media (max-width: 900px) {\\n                #serv-prev {\\n                    left: 3% !important;\\n                }\\n\\n                #serv-next {\\n                    right: 3% !important;\\n                }\\n\\n                #serv-prev, #serv-next {\\n                    width: 40px !important;\\n                    height: 40px !important;\\n                    font-size: 20px !important;\\n                }\\n\\n                .services-slider .slide {\\n                    width: 190px;\\n                    min-width: 190px !important;\\n                }\\n\\n                #services-slider-wrapper {\\n                    width: 605px !important;\\n                }\\n            }\\n\\n            @media (max-width: 750px) {\\n                #services-slider-wrapper {\\n                    width: 405px !important;\\n                }\\n\\n                #serv-prev {\\n                    left: 10% !important;\\n                }\\n\\n                #serv-next {\\n                    right: 10% !important;\\n                }\\n            }\\n        \";\n    document.head.appendChild(adaptiveStyles);\n  };\n\n  createAdaptive();\n\n  var toNextSlide = function toNextSlide() {\n    if (window.screen.width > 1330) {\n      if (slideCounter + 5 === slides.length) {\n        return;\n      }\n\n      ;\n    }\n\n    if (window.screen.width <= 1330 && window.screen.width > 1120) {\n      if (slideCounter + 4 === slides.length) {\n        return;\n      }\n\n      ;\n    }\n\n    if (window.screen.width <= 1120 && window.screen.width > 750) {\n      if (slideCounter + 3 === slides.length) {\n        return;\n      }\n\n      ;\n    }\n\n    if (window.screen.width <= 750) {\n      if (slideCounter + 2 === slides.length) {\n        return;\n      }\n\n      ;\n    }\n\n    sliderTransform += baseSlideWidth + 12;\n    slider.style.transform = \"translateX(\".concat(-sliderTransform, \"px)\");\n    slideCounter++;\n  };\n\n  var toPrevSlide = function toPrevSlide() {\n    if (sliderTransform > 0) {\n      sliderTransform -= baseSlideWidth + 12;\n      slider.style.transform = \"translateX(\".concat(-sliderTransform, \"px)\");\n      slideCounter--;\n    }\n\n    ;\n  };\n\n  changeStyles();\n  nextBtn.addEventListener('click', toNextSlide);\n  prevBtn.addEventListener('click', toPrevSlide);\n  wrapper.addEventListener('mouseenter', function () {\n    var checkKeyNumber = function checkKeyNumber(e) {\n      if (e.keyCode === 37) {\n        toPrevSlide();\n      } else if (e.keyCode === 39) {\n        toNextSlide();\n      }\n    };\n\n    document.addEventListener('keydown', checkKeyNumber);\n    wrapper.addEventListener('mouseleave', function () {\n      document.removeEventListener('keydown', checkKeyNumber);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/servicesSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("854004ac418a5c79aee4")
/******/ })();
/******/ 
/******/ }
);