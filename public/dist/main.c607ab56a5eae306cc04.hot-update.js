webpackHotUpdate("main",{

/***/ "./src/containers/home.js":
/*!********************************!*\
  !*** ./src/containers/home.js ***!
  \********************************/
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
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/filter */ "./src/components/filter.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/map */ "./src/components/map.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/list */ "./src/components/list.js");







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
    }
  }, {
    key: "updateOption",
    value: function updateOption(e, topFilter) {
      var name = !topFilter ? e.target.name : "t".concat(e.target.name);
      var value = e.target.value;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value), function () {});
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
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_map__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_filter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        showSort: true
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
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

  reactHotLoader.register(Home, "Home", "/Users/vnaokocha/houserents/houserents_fe/src/containers/home.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/containers/home.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.c607ab56a5eae306cc04.hot-update.js.map