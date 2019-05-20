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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst StockSelect = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\")\nconst StockView = __webpack_require__(/*! ./views/stock_view.js */ \"./src/views/stock_view.js\")\nconst StockPick = __webpack_require__(/*! ./models/stock_pick.js */ \"./src/models/stock_pick.js\")\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const element = document.querySelector(\"#input_stock_pick\")\n  const companyName = new StockSelect(element)\n  companyName.bindEvents()\n\n  const container = document.querySelector(\"#stockInfo\")\n  const stockView = new StockView(container)\n  stockView.bindEvents()\n\n\n\n  const stockPickInfo = new StockPick(`https://financialmodelingprep.com/api/v3/financials/income-statement/`)\n  stockPickInfo.bindEvents()\n  });\n\n\n/**\n\nUser enters company code and submits ->\nSelect view publishes choice/selection ->\nStock pick model subscribed to Select view publishing channel will get stock data using company code ->\nWhen stock data comes into model (request finishes successfully) it will publish that data ->\nStock view subscribed to the Stock pick model publishing channel will render stock data\n\n*/\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n return fetch(this.url)\n   .then(response => response.json())\n   .catch(err => console.log(\"Error in get:\", err))\n   response.setHeader('Content-Type', 'text/html');\n   console.log(\"this is the RH response\",response);\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/stock_pick.js":
/*!**********************************!*\
  !*** ./src/models/stock_pick.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\")\n\nconst StockPick = function(url){\n  this.url = url\n  this.company = []\n\n}\n\n\nStockPick.prototype.bindEvents = function () {\n  PubSub.subscribe(\"Stock-input: user company name inputted\", (event) => {\n    let UsersCompanySearch = event.detail.toUpperCase()\n    console.log(\"This is the company name\", UsersCompanySearch);\n\n    const PreUrl = this.url\n    const postUrl = \"?datatype=json\"\n    const request = new RequestHelper(PreUrl + UsersCompanySearch);\n    console.log(\"This is the request\", request);\n    request.get()\n    .then((data) => {\n      const companyInfo = data;\n      console.log(\"what is this? \", companyInfo);\n      PubSub.publish('StockPick:stock-info-ready', companyInfo)\n    })\n\n  })\n};\n\n// StockPick.prototype.getData = function (companyName) {\n//   const request = new RequestHelper(this.url + `${UsersCompanySearch}` + '?datatype=json');\n//   console.log(request);\n//   request.get()\n//   .then((data) => {\n//     this.company = data;\n//     PubSub.publish('StockPick:stock-info-ready', this.company)\n//   })\n// }\n\n\nmodule.exports = StockPick;\n\n\n//# sourceURL=webpack:///./src/models/stock_pick.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst Stock_input = function(element){\n  this.element = element\n  ;\n}\n\nStock_input.prototype.bindEvents = function () {\n\n  this.element.addEventListener('submit', (event) => {\n    data = event.target.stockname.value;\n    PubSub.publish(\"Stock-input: user company name inputted\", data)\n    event.preventDefault();\n  })\n}\n\n\n\n\n\nmodule.exports = Stock_input;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ }),

/***/ "./src/views/stock_view.js":
/*!*********************************!*\
  !*** ./src/views/stock_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\n\nconst StockView = function(container){\n  this.container = container\n\n}\n\n\nStockView.prototype.bindEvents = function () {\n  PubSub.subscribe('StockPick:stock-info-ready', (event) => {\n    const companyInfo = event.detail;\n    this.render(companyInfo)\n  })\n}\n\nStockView.prototype.render = function (data) {\n\n      this.companyCodeRender(data)\n};\n\nStockView.prototype.companyCodeRender = function (data) {\n  const CompanySymbol = document.createElement('h3')\n  CompanySymbol.textContent = data.symbol\n  this.container.appendChild(CompanySymbol)\n};\n\n\n\nmodule.exports = StockView\n\n\n//# sourceURL=webpack:///./src/views/stock_view.js?");

/***/ })

/******/ });