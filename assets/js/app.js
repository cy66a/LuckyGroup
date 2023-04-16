/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/circle.js":
/*!*********************************!*\
  !*** ./src/assets/js/circle.js ***!
  \*********************************/
/***/ (function() {

eval("async function drawElements() {\r\n  const circle = document.querySelector('.circle__round');\r\n  const circleWidth = parseInt(window.getComputedStyle(circle).width, 10);\r\n  const circleRadius = circleWidth / 2;\r\n  const elements = document.querySelectorAll('.circle__element');\r\n  const elementsCount = elements.length;\r\n\r\n  let j = 0;\r\n\r\n  await new Promise((resolve) => setTimeout(resolve, 3000));\r\n  for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / elementsCount) {\r\n    const left = circleWidth / 2 + circleRadius * Math.sin(i);\r\n    const top = circleWidth / 2 + circleRadius * Math.cos(i);\r\n\r\n    await new Promise((resolve) => setTimeout(resolve, 400));\r\n\r\n    if (elements[j]) {\r\n      elements[j].style.left = `${left}px`;\r\n      elements[j].style.top = `${top}px`;\r\n    }\r\n\r\n    j++;\r\n  }\r\n}\r\n\r\ndrawElements();\r\n\n\n//# sourceURL=webpack://cy66a/./src/assets/js/circle.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/***/ (function() {

eval("window.addEventListener('scroll', () => {\r\n\tconst header = document.querySelector('header');\r\n\tconst scrollPosition = window.scrollY;\r\n\r\n\tif (scrollPosition > 100) {\r\n\t\theader.classList.add('active');\r\n\t} else {\r\n\t\theader.classList.remove('active');\r\n\t}\r\n})\n\n//# sourceURL=webpack://cy66a/./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/menu.js":
/*!*******************************!*\
  !*** ./src/assets/js/menu.js ***!
  \*******************************/
/***/ (function() {

"use strict";
eval("\r\n\r\nconst isMobile = {\r\n\tAndroid: function () {\r\n\t\treturn navigator.userAgent.match(/Android/i);\r\n\t},\r\n\tBlackBerry: function () {\r\n\t\treturn navigator.userAgent.match(/BlackBerry/i);\r\n\t},\r\n\tiOS: function () {\r\n\t\treturn navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n\t},\r\n\tOpera: function () {\r\n\t\treturn navigator.userAgent.match(/Opera Mini/i);\r\n\t},\r\n\tWindows: function () {\r\n\t\treturn navigator.userAgent.match(/IEMobile/i);\r\n\t},\r\n\tany: function () {\r\n\t\treturn (\r\n\t\t\tisMobile.Android() ||\r\n\t\t\tisMobile.BlackBerry() ||\r\n\t\t\tisMobile.iOS() ||\r\n\t\t\tisMobile.Opera() ||\r\n\t\t\tisMobile.Windows());\r\n\t}\r\n};\r\n\r\nif (isMobile.any()) {\r\n\tdocument.body.classList.add('_touch');\r\n\r\n\tlet menuArrows = document.querySelectorAll('.menu__arrow');\r\n\tif (menuArrows.length > 0) {\r\n\t\tfor (let index = 0; index < menuArrows.length; index++) {\r\n\t\t\tconst menuArrow = menuArrows[index];\r\n\t\t\tmenuArrow.addEventListener('click', function (e) {\r\n\t\t\t\tmenuArrow.parentElement.classList.toggle('_active');\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\r\n} else {\r\n\tdocument.body.classList.add('_pc');\r\n}\r\n\r\n// Меню бургер\r\n\r\nconst menuIcon = document.querySelector('.menu__icon');\r\nconst menuBody = document.querySelector('.menu__body');\r\nif (menuIcon) {\r\n\tmenuIcon.addEventListener(\"click\", function (e) {\r\n\t\tdocument.body.classList.toggle('_lock');\r\n\t\tmenuIcon.classList.toggle('_active');\r\n\t\tmenuBody.classList.toggle('_active');\r\n\t})\r\n}\r\n\r\n\r\n// Прокрутка при клике\r\n\r\nconst menuLinks = document.querySelectorAll('[data-goto]');\r\nif (menuLinks.length > 0) {\r\n\tmenuLinks.forEach(menuLink => {\r\n\t\tmenuLink.addEventListener(\"click\", onMenuLinkClick);\r\n\t});\r\n\r\n\tfunction onMenuLinkClick(e) {\r\n\t\tconst menuLink = e.target;\r\n\t\tif (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\r\n\t\t\tconst gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n\t\t\tconst gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\r\n\r\n\t\t\tif (menuIcon.classList.contains('_active')) {\r\n\t\t\t\tdocument.body.classList.remove('_lock');\r\n\t\t\t\tmenuIcon.classList.remove('_active');\r\n\t\t\t\tmenuBody.classList.remove('_active');\r\n\t\t\t}\r\n\r\n\t\t\twindow.scrollTo({\r\n\t\t\t\ttop: gotoBlockValue,\r\n\t\t\t\tbehavior: \"smooth\"\r\n\t\t\t});\r\n\t\t\te.preventDefault();\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://cy66a/./src/assets/js/menu.js?");

/***/ }),

/***/ "./src/assets/js/paragraph.js":
/*!************************************!*\
  !*** ./src/assets/js/paragraph.js ***!
  \************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n\t// Отправка Fetch-запроса\r\n\tfetch(\"https://baconipsum.com/api/?type=lucky\")\r\n\t\t.then(response => {\r\n\t\t\tif (!response.ok) {\r\n\t\t\t\tthrow new Error(\"AJAX Error: \" + response.statusText);\r\n\t\t\t}\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then(data => {\r\n\t\t\tconst text = data[0]; // Получение текста из ответа\r\n\t\t\tdocument.querySelector(\".intro__text\").textContent = text; // Добавление текста в элемент <p>\r\n\t\t})\r\n\t\t.catch(error => {\r\n\t\t\tconsole.error(error);\r\n\t\t});\r\n});\n\n//# sourceURL=webpack://cy66a/./src/assets/js/paragraph.js?");

/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/***/ (function() {

eval("const input = document.querySelector('.search__input');\r\n\r\ninput.addEventListener('input', () => {\r\n\tconst cansel = document.querySelector('.search__cancel-button');\r\n\r\n\tif (input.value.length > 0) {\r\n\t\tcansel.classList.add('active');\r\n\r\n\t\tcansel.addEventListener('click', () => {\r\n\t\t\tinput.value = \"\";\r\n\t\t\tcansel.classList.remove('active');\r\n\t\t})\r\n\t} else {\r\n\t\tcansel.classList.remove('active');\r\n\t}\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack://cy66a/./src/assets/js/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/circle.js"]();
/******/ 	__webpack_modules__["./src/assets/js/header.js"]();
/******/ 	__webpack_modules__["./src/assets/js/menu.js"]();
/******/ 	__webpack_modules__["./src/assets/js/paragraph.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/search.js"]();
/******/ 	
/******/ })()
;