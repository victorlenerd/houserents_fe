webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/list/index.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/list/index.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./src/components/list/index.css":
/*!***************************************!*\
  !*** ./src/components/list/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/list/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/list/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/list/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/list/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var List = function List() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-container col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "lists"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "list-price-tags"
  }, "\u20A6 250,000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "list-source-tags"
  }, "Propety Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "18 Agege Motor Road Lagos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Well lit and spacious 3 Bedroom Apartment in the heart of Old Ikoyi. NGN 8.5m including service charge."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Bed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Bath"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Toilet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Roomies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "1")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-actions"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "view-property-button"
  }, "View Property"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "connect-roomie-button"
  }, "Find A Roomie"))))));
};

var _default = List;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(List, "List", "/Users/vnaokocha/houserents/houserents_fe/src/components/list/index.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/components/list/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/list/list.js":
false,

/***/ "./src/containers/home/index.js":
/*!**************************************!*\
  !*** ./src/containers/home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/filter */ "./src/components/filter/index.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/map */ "./src/components/map/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/list */ "./src/components/list/index.js");







(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();






var Home =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$PureComponent);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home).call(this, props));
    _this.state = {
      no_bed: 1,
      no_bath: 1,
      no_toilets: 1,
      tno_bed: 1,
      tno_bath: 1,
      tno_toilets: 1,
      currentArea: {
        lat: 6.5005,
        lng: 3.3666
      },
      prices: [],
      areaPrice: 0,
      mode: true,
      sort: 'high'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sort = this.sort.bind(this);
      this.centerChange = this.centerChange.bind(this);
      this.updateOption = this.updateOption.bind(this);
    }
  }, {
    key: "updateOption",
    value: function updateOption(e) {
      var name = e.target.name;
      var value = e.target.value;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    }
  }, {
    key: "centerChange",
    value: function centerChange(center) {
      this.setState({
        currentArea: {
          lat: center.lat(),
          lng: center.lng()
        }
      });
    }
  }, {
    key: "sort",
    value: function sort(e) {
      var _this2 = this;

      var type = e.target.value;
      var pairAreaPrice = this.state.areas.map(function (A, i) {
        return {
          a: A,
          p: _this2.state.prices[i]
        };
      });
      var sortedPairs = type !== 'high' ? pairAreaPrice.sort(function (a, b) {
        return a.p - b.p;
      }) : pairAreaPrice.sort(function (a, b) {
        return b.p - a.p;
      });
      this.setState({
        prices: sortedPairs.map(function (sp) {
          return sp.p;
        }),
        areas: sortedPairs.map(function (sp) {
          return sp.a;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_map__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onCenterChange: this.centerChange
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        showSort: true,
        sort: this.sort,
        updateOption: this.updateOptions
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/vnaokocha/houserents/houserents_fe/src/containers/home/index.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/containers/home/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.6c4508ab02a32e193eba.hot-update.js.map