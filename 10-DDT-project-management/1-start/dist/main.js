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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const{checkData, joiner} = __webpack_require__(/*! ./helper */ \"./helper.js\")\n\nconst initApp = () => {\n    const addUserBtn = document.querySelector('#addBtn')\n    addUserBtn.addEventListener('click', () => {\n        addUser()\n    })\n}\n\n\nconst addUser = () => {\n    const userNameElement = document.querySelector('#userNameInp')\n    const userAgeElement = document.querySelector('#ageInp')\n    const usersListElement = document.querySelector('#userList')\n\n    if(checkData(userNameElement.value, userAgeElement.value)){\n        const newelement = document.createElement('li')\n    newelement.innerText = joiner( userNameElement.value, userAgeElement.value)\n    usersListElement.append(newelement)\n    }else {\n        alert('data error')\n    }\n    \n}\n\n\n\ninitApp()\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const validator = (value, isNumber, notEmpty) => {\n    if (isNumber && notEmpty) {\n        if(value.trim().length === 0){\n            return false\n        }\n        if(isNaN(value)){\n            return false\n        }\n        return true\n    }\n    if(!isNumber && notEmpty){\n        if(value.trim().lenght === 0){\n            return false\n        }\n        return true\n    }\n\n}\n\nconst checkData = (userName, userAge) => {\n    if(validator(userName, false, true) && validator(userAge, true, true)){\n        return true\n    }\n    return false\n    \n}\nconst joiner = (name,age) => {\n    return('user name is ' + name + ' ,and the age is ' + age )\n}\n\n\nmodule.exports = {\n    checkData,\n    validator,\n    joiner\n}\n\n\n\n//# sourceURL=webpack:///./helper.js?");

/***/ })

/******/ });