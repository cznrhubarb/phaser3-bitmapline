(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["phaser"], factory);
	else if(typeof exports === 'object')
		exports["BitmapLine"] = factory(require("phaser"));
	else
		root["BitmapLine"] = factory(root["Phaser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_phaser__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BitmapLine.js":
/*!***************************!*\
  !*** ./src/BitmapLine.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _phaser = __webpack_require__(/*! phaser */ \"phaser\");\n\nvar _phaser2 = _interopRequireDefault(_phaser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BASE = '__BASE';\nvar MISSING = '__MISSING';\n\nvar BitmapLine = function (_Phaser$GameObjects$R) {\n  _inherits(BitmapLine, _Phaser$GameObjects$R);\n\n  /**\r\n   * @param {Phaser.Scene} scene the parent scene for this BitmapLine\r\n   */\n  function BitmapLine(scene, startPos, endPos, lineImageKey) {\n    _classCallCheck(this, BitmapLine);\n\n    var texWidth = Math.round(_phaser2.default.Math.Distance.Between(startPos.x, startPos.y, endPos.x, endPos.y));\n    var texHeight = 8;\n\n    var _this = _possibleConstructorReturn(this, (BitmapLine.__proto__ || Object.getPrototypeOf(BitmapLine)).call(this, scene, startPos.x, startPos.y, texWidth, texHeight));\n\n    _this.redraw = _this.redraw.bind(_this);\n\n    _this.sourceTex = scene.sys.textures.get(lineImageKey);\n    if (!_this.sourceTex || _this.sourceTex.key === MISSING) {\n      throw new Error('Expected source image ' + lineImageKey + ' not found.');\n    }\n\n    _this.start = startPos;\n    _this.end = endPos;\n    _this.setSize(_this.width, _this.sourceTex.frames[BASE].height);\n\n    _this._initalized = true;\n\n    _this.redraw();\n    return _this;\n  }\n\n  _createClass(BitmapLine, [{\n    key: 'setGlobalTint',\n    value: function setGlobalTint(tint) {\n      _get(BitmapLine.prototype.__proto__ || Object.getPrototypeOf(BitmapLine.prototype), 'setGlobalTint', this).call(this, tint);\n      this.redraw();\n    }\n  }, {\n    key: 'setGlobalAlpha',\n    value: function setGlobalAlpha(alpha) {\n      _get(BitmapLine.prototype.__proto__ || Object.getPrototypeOf(BitmapLine.prototype), 'setGlobalAlpha', this).call(this, alpha);\n      this.redraw();\n    }\n  }, {\n    key: 'redraw',\n    value: function redraw() {\n      if (!this._initalized) {\n        return;\n      }\n\n      this.clear();\n\n      this.width = Math.round(_phaser2.default.Math.Distance.Between(this.start.x, this.start.y, this.end.x, this.end.y));\n\n      var xPos = 0;\n      var texWidth = this.sourceTex.frames[BASE].width;\n      while (xPos < this.width) {\n        this.draw(this.sourceTex.key, xPos, 0);\n        xPos += texWidth;\n      }\n\n      this.rotation = Math.atan2(this.end.y - this.start.y, this.end.x - this.start.y);\n    }\n  }, {\n    key: 'enableDebugDraw',\n    value: function enableDebugDraw() {\n      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n      if (this._g) {\n        this._g.clear();\n      }\n\n      if (enabled) {\n        this._g = this.scene.add.graphics(this.x, this.y);\n      } else {\n        this._g = null;\n      }\n      this.redraw();\n    }\n  }, {\n    key: 'start',\n    get: function get() {\n      return this._start;\n    },\n    set: function set(start) {\n      if (this._start !== start) {\n        if (this._g) {\n          this._g.clear();\n        }\n\n        this._start = start;\n        this.redraw();\n      }\n    }\n  }, {\n    key: 'end',\n    get: function get() {\n      return this._end;\n    },\n    set: function set(end) {\n      if (this._end !== end) {\n        if (this._g) {\n          this._g.clear();\n        }\n\n        this._end = end;\n        this.redraw();\n      }\n    }\n  }]);\n\n  return BitmapLine;\n}(_phaser2.default.GameObjects.RenderTexture);\n\nexports.default = BitmapLine;\n\n//# sourceURL=webpack://BitmapLine/./src/BitmapLine.js?");

/***/ }),

/***/ "./src/Plugin.js":
/*!***********************!*\
  !*** ./src/Plugin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _phaser = __webpack_require__(/*! phaser */ \"phaser\");\n\nvar _phaser2 = _interopRequireDefault(_phaser);\n\nvar _BitmapLine = __webpack_require__(/*! ./BitmapLine */ \"./src/BitmapLine.js\");\n\nvar _BitmapLine2 = _interopRequireDefault(_BitmapLine);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Plugin = function (_Phaser$Plugins$BaseP) {\n  _inherits(Plugin, _Phaser$Plugins$BaseP);\n\n  function Plugin(mgr) {\n    _classCallCheck(this, Plugin);\n\n    var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this, mgr));\n\n    mgr.registerGameObject('bitmapLine', _this.addBitmapLine, _this.makeBitmapLine);\n    return _this;\n  }\n\n  _createClass(Plugin, [{\n    key: 'addBitmapLine',\n    value: function addBitmapLine() {\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var line = mkBmpLine(this.scene, args);\n      this.displayList.add(line);\n      return line;\n    }\n  }, {\n    key: 'makeBitmapLine',\n    value: function makeBitmapLine() {\n      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      return mkBmpLine(this.scene, args);\n    }\n  }]);\n\n  return Plugin;\n}(_phaser2.default.Plugins.BasePlugin);\n\nexports.default = Plugin;\n\n\nvar mkBmpLine = function mkBmpLine(scene, args) {\n  if (args.length === 3) {\n    return new (Function.prototype.bind.apply(_BitmapLine2.default, [null].concat([scene], _toConsumableArray(args))))();\n  } else {\n    throw new Error(\"Wrong number of arguments used for a Bitmap Line.\");\n  }\n};\n\nvar DefaultCfg = {\n  key: 'BitmapLine',\n  plugin: Plugin,\n  start: true\n};\n\nPlugin.DefaultCfg = DefaultCfg;\n\n//# sourceURL=webpack://BitmapLine/./src/Plugin.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _BitmapLine = __webpack_require__(/*! ./BitmapLine */ \"./src/BitmapLine.js\");\n\nObject.defineProperty(exports, 'BitmapLine', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_BitmapLine).default;\n  }\n});\n\nvar _Plugin = __webpack_require__(/*! ./Plugin */ \"./src/Plugin.js\");\n\nObject.defineProperty(exports, 'Plugin', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Plugin).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://BitmapLine/./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://BitmapLine/multi_./src/index.js?");

/***/ }),

/***/ "phaser":
/*!*********************************************************************************************************!*\
  !*** external {"umd":"phaser","commonjs2":"phaser","commonjs":"phaser","amd":"phaser","root":"Phaser"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;\n\n//# sourceURL=webpack://BitmapLine/external_%7B%22umd%22:%22phaser%22,%22commonjs2%22:%22phaser%22,%22commonjs%22:%22phaser%22,%22amd%22:%22phaser%22,%22root%22:%22Phaser%22%7D?");

/***/ })

/******/ });
});