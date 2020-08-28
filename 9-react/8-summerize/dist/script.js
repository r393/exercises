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
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar _privatePassword = new WeakMap();\n\nvar User = /*#__PURE__*/function () {\n  function User(fname, lname, email, password) {\n    _classCallCheck(this, User);\n\n    _privatePassword.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    this.email = email;\n    this.fName = fname;\n\n    _classPrivateFieldSet(this, _privatePassword, password);\n\n    this.lName = lname;\n  }\n\n  _createClass(User, [{\n    key: \"fullName\",\n    value: function fullName() {\n      return this.fName + ' ' + this.lName;\n    }\n  }, {\n    key: \"changePasssword\",\n    value: function changePasssword(newPassword) {\n      _classPrivateFieldSet(this, _privatePassword, newPassword);\n    }\n  }, {\n    key: \"password\",\n    set: function set(value) {\n      console.log('you can not change password from here');\n    },\n    get: function get() {\n      return _classPrivateFieldGet(this, _privatePassword);\n    }\n  }]);\n\n  return User;\n}();\n\nvar someUser = new User('Rebec', 'Arowosoki', 'reb@jes.com', '12345');\nvar someUser1 = new User('Reb', 'Arowo', 'reb@arow.com', '1234567'); // adding new method to the class user which reflect on all \n// objects that have been created from this class\n\nUser.prototype.checkUser = function (email, password) {\n  if (email === this.email && password === this.password) {\n    return true;\n  } else {\n    return false;\n  }\n}; // override fullname method from class user and also it will reflect on all\n// object that have been created from this  class\n\n\nUser.prototype.fullName = function () {\n  return 'I am' + this.fName + ' ' + this.lName;\n}; //static object\n// let someUser = {\n//     email: 'reb@jes.com',\n//     fname: 'Rebec',\n//     lName: 'Arowosoki',\n//     password: '12345',\n//     fullName: function(){\n//         return this.fname + ' ' + this.lName\n//     }\n// }\n//console.log(someUser.fullName());\n\n\nvar Employee = /*#__PURE__*/function (_User) {\n  _inherits(Employee, _User);\n\n  var _super = _createSuper(Employee);\n\n  function Employee(lname, fname, email, password, officeNum, department) {\n    var _this;\n\n    _classCallCheck(this, Employee);\n\n    // we must call the constructure of the parent class using super\n    _this = _super.call(this, fname, lname, email, password);\n    _this.officeNum = officeNum;\n    _this.department = department;\n    return _this;\n  }\n\n  _createClass(Employee, [{\n    key: \"showDetails\",\n    value: function showDetails() {\n      return \"I am an employee and my name is \".concat(this.fName, \", I am working in \").concat(this.department);\n    }\n  }], [{\n    key: \"employeeDescription\",\n    value: function employeeDescription() {\n      return 'this is a static method in Employee class';\n    }\n  }]);\n\n  return Employee;\n}(User);\n\nvar someEmployee = new Employee('Arow', 'rebec', 'reb@reb.com', '123456', 'fbw5', 'web-dev');\nconsole.log(someEmployee.fullName());\nconsole.log(someEmployee.showDetails()); // prototype user to add a new method called chanellPassword\n// which will take one parameter  'newPassword' and it should change the password property for the user\n// User.prototype.changePasssword = function (newPassword){\n//     this.#privatePassword = newPassword\n// }\n\nsomeEmployee.changePasssword('122213');\nsomeEmployee.password = '122213'; //console.log(someEmployee.password);\n//console.log(User.description());\n\nconsole.log(Employee.employeeDescription());\nvar user1 = new User('user1', 'luser1', 'eee@dd.cc', '123421');\nvar user2 = new User('user1', 'luser1', 'eee@dd.cc', '123421');\n\nvar user3 = _objectSpread({}, user1);\n\nuser1.lname = 'bla';\n\nif (user1 === user3) {\n  console.log('equal');\n} else {\n  console.log('not equal');\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });