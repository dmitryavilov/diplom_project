/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/gallerySlider.js":
/*!**************************************!*\
  !*** ./src/modules/gallerySlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar gallerySlider = function gallerySlider() {\n  var slider = document.querySelector('.gallery-slider'),\n      wrapper = document.getElementById('gallery-wrapper'),\n      slides = slider.querySelectorAll('.slide'),\n      prevBtn = document.getElementById('gl-prev'),\n      nextBtn = document.getElementById('gl-next'),\n      dotsWrapper = document.querySelector('.dots-wrapper'),\n      yellow = '#ffd11a';\n  var slideCounter = 0,\n      changeSlides;\n\n  var createTimeOut = function createTimeOut() {\n    changeSlides = setTimeout(function () {\n      if (slideCounter + 1 === slides.length) {\n        slideCounter = 0;\n        autoPlay();\n        return;\n      }\n\n      ;\n      slideCounter++;\n      autoPlay();\n    }, 3000);\n  };\n\n  var deleteSlides = function deleteSlides() {\n    slides.forEach(function (item) {\n      item.style.display = 'none';\n    });\n  };\n\n  var createDots = function createDots() {\n    var dot;\n    slider.style.position = 'relative';\n    dotsWrapper.style.cssText = \"\\n            display: flex;\\n            position: absolute;\\n            left: 50%;\\n            transform: translateX(-50%);\\n            bottom: 40px;\\n        \";\n    slides.forEach(function () {\n      dot = document.createElement('div');\n      dot.classList.add('dot');\n      dot.style.cssText = \"\\n                width: 37px;\\n                height: 7px;\\n                margin-left: 8px;\\n                margin-rigth: 8px;\\n                background-color: rgba(0, 0, 0, 0.3);\\n                cursor: pointer;\\n            \";\n      dotsWrapper.insertAdjacentElement('afterbegin', dot);\n    });\n    var dots = dotsWrapper.querySelectorAll('div');\n    console.log(dots);\n    dots.forEach(function (item, index) {\n      item.addEventListener('click', function () {\n        deleteSlides();\n        slideCounter = index;\n\n        for (var i = 0; i < dots.length; i++) {\n          dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)';\n        }\n\n        ;\n        item.style.backgroundColor = yellow;\n        slides[index].style.display = 'block';\n      });\n    });\n  };\n\n  createDots();\n  var dots = dotsWrapper.querySelectorAll('div');\n\n  var changeDot = function changeDot() {\n    for (var i = 0; i < dots.length; i++) {\n      dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)';\n    }\n\n    ;\n    dots[slideCounter].style.backgroundColor = yellow;\n  };\n\n  var autoPlay = function autoPlay() {\n    deleteSlides();\n    slides[slideCounter].style.display = 'block';\n    changeDot();\n    createTimeOut();\n  };\n\n  var changeSlide = function changeSlide(e) {\n    var target = e.target;\n\n    if (target.matches('#gl-prev')) {\n      if (slideCounter <= 0) {\n        slideCounter = slides.length - 1;\n        deleteSlides();\n        slides[slideCounter].style.display = 'block';\n        changeDot();\n        return;\n      }\n\n      ;\n      deleteSlides();\n      slideCounter--;\n      slides[slideCounter].style.display = 'block';\n      changeDot();\n    } else if (target.matches('#gl-next')) {\n      if (slideCounter + 1 === slides.length) {\n        deleteSlides();\n        slideCounter = 0;\n        slides[slideCounter].style.display = 'block';\n        changeDot();\n        return;\n      }\n\n      ;\n      deleteSlides();\n      slideCounter++;\n      slides[slideCounter].style.display = 'block';\n      changeDot();\n    }\n\n    ;\n  };\n\n  prevBtn.addEventListener('click', changeSlide);\n  nextBtn.addEventListener('click', changeSlide);\n  wrapper.addEventListener('mouseenter', function (e) {\n    var target = e.target;\n\n    if (target.matches('#gl-prev') || target.matches('#gl-next') || target.matches('.dot')) {\n      clearInterval(changeSlides);\n    } else {\n      createTimeOut();\n    }\n  });\n  autoPlay();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlider);\n\n//# sourceURL=webpack://3dglo/./src/modules/gallerySlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dd6bed1572cd033c0b95")
/******/ })();
/******/ 
/******/ }
);