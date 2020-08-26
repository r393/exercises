/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module1.js */ \"./modules/module1.js\");\n\n\ndocument.querySelector('#submitBtn').addEventListener('click', e => {\n    e.preventDefault();\n    const title = document.querySelector('#titleInp').value\n    const category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;\n    const description = document.querySelector('#descriptionText').value\n    let categoryObg;\n    switch (category) {\n        case 'news':\n            categoryObg = _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"].News();\n            break;\n\n        case 'sports':\n            categoryObg = _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"].Sports();\n            break;\n        case 'politics':\n            categoryObg = _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"].Politics();\n            break;\n        case 'Beauty':\n            categoryObg = _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"].Beauty();\n            break;\n        default:\n            categoryObg = new _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"]('No Category')\n            break;\n    }\n     // title\n     // not empty not less than 2 chars and not more than 50 char\n\n     // category\n     // not empty\n\n     //description\n     // nt empty not less than 10 chars and not more than 1000 char   \n\n    const container = document.querySelector('#container')\n    const article = new _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"Article\"](title, description, categoryObg)\n    article.render(container)\n})\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./modules/module1.js":
/*!****************************!*\
  !*** ./modules/module1.js ***!
  \****************************/
/*! exports provided: Article, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return Article; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\nclass Article {\n    constructor(title, description, category){\n        this.title = title;\n        this.description = description;\n        this.category = category;\n\n    }\n    render(container){\n        const titleElement = document.createElement('h2');\n        titleElement.innerText = this.title;\n\n        const categoryElement = document.createElement('h4');\n        categoryElement.innerText = this.category.name;\n\n        const descriptionElement = document.createElement('p')\n        descriptionElement.innerText = this.description\n\n        container.append(titleElement)\n        container.append(categoryElement)\n        container.append(descriptionElement)\n    }\n}\nclass Category{\n    constructor(categoryName){\n        this.name = categoryName;\n    }\n    static News(){\n        return new Category('News')\n    }\n    static Sport(){\n        return new Category('Sport')\n    }\n    static Politics(){\n        return new Category('Politics')\n    }\n    static Beauty(){\n        return new Category('Beauty')\n    }\n}\n\n\n//# sourceURL=webpack:///./modules/module1.js?");

/***/ })

/******/ });