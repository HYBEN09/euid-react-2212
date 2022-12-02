/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\");\n\n\nfunction handleBodyClick() {\n  (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.styleLog)(\"clicked body\", \"color: #2124ff\");\n\n  let randomNumber = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getRandomMinMax)(10, 89);\n  (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.styleLog)(`난수: ${randomNumber}`, \"color: #4caf51\");\n}\n\ndocument.addEventListener(\"click\", handleBodyClick);\n\n\n//# sourceURL=webpack://webpack-react-typescript/./src/main.js?");

/***/ }),

/***/ "./src/utils/getRandom.js":
/*!********************************!*\
  !*** ./src/utils/getRandom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"getRandomMinMax\": () => (/* binding */ getRandomMinMax)\n/* harmony export */ });\nfunction getRandom(n) {\n  return Math.floor(Math.random() * n);\n}\n\nconst getRandomMinMax = (min = 0, max = 100) =>\n  getRandom(max - min) + min;\n\n\n//# sourceURL=webpack://webpack-react-typescript/./src/utils/getRandom.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* reexport safe */ _getRandom__WEBPACK_IMPORTED_MODULE_0__.getRandom),\n/* harmony export */   \"getRandomMinMax\": () => (/* reexport safe */ _getRandom__WEBPACK_IMPORTED_MODULE_0__.getRandomMinMax),\n/* harmony export */   \"styleLog\": () => (/* reexport safe */ _styleLog__WEBPACK_IMPORTED_MODULE_1__.styleLog)\n/* harmony export */ });\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandom */ \"./src/utils/getRandom.js\");\n/* harmony import */ var _styleLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleLog */ \"./src/utils/styleLog.js\");\n\n\n\n\n//# sourceURL=webpack://webpack-react-typescript/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/styleLog.js":
/*!*******************************!*\
  !*** ./src/utils/styleLog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleLog\": () => (/* binding */ styleLog)\n/* harmony export */ });\nfunction styleLog(message, cssCode) {\n  return console.log(`%c${message}`, cssCode);\n}\n\n\n//# sourceURL=webpack://webpack-react-typescript/./src/utils/styleLog.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;