webpackHotUpdate("main",{

/***/ "./src/components/areas/index.js":
/*!***************************************!*\
  !*** ./src/components/areas/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filter */ "./src/components/filter/index.js");
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../areas */ "./src/areas.js");
/* harmony import */ var _utils_predict__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/predict */ "./src/utils/predict.js");









(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();






var Areas =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Areas, _React$Component);

  function Areas(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Areas);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Areas).call(this, props));
    _this.getAreasRange =
    /*#__PURE__*/
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _this$state, no_bed, no_bath, no_toilets, mode, _ref2, prices;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, no_bed = _this$state.no_bed, no_bath = _this$state.no_bath, no_toilets = _this$state.no_toilets, mode = _this$state.mode;
              _context.next = 3;
              return Object(_utils_predict__WEBPACK_IMPORTED_MODULE_11__["default"])({
                locations: _this.state.areas.map(function (_ref3) {
                  var lat = _ref3.lat,
                      lng = _ref3.lng;
                  return {
                    lat: lat,
                    lng: lng
                  };
                }),
                specs: {
                  no_bed: no_bed,
                  no_bath: no_bath,
                  no_toilets: no_toilets
                }
              }, mode);

            case 3:
              _ref2 = _context.sent;
              prices = _ref2.prices;

              _this.setState({
                prices: prices.map(function (P) {
                  return Math.round(P);
                })
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    _this.getAddressRange =
    /*#__PURE__*/
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var _this$state2, no_bed, no_bath, no_toilets, _this$state2$currentA, lat, lng, mode, _ref5, prices;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state2 = _this.state, no_bed = _this$state2.tno_bed, no_bath = _this$state2.tno_bath, no_toilets = _this$state2.tno_toilets, _this$state2$currentA = _this$state2.currentArea, lat = _this$state2$currentA.lat, lng = _this$state2$currentA.lng, mode = _this$state2.mode;
              _context2.next = 3;
              return Object(_utils_predict__WEBPACK_IMPORTED_MODULE_11__["default"])({
                locations: [{
                  lat: lat,
                  lng: lng
                }],
                specs: {
                  no_bed: no_bed,
                  no_bath: no_bath,
                  no_toilets: no_toilets
                }
              }, mode);

            case 3:
              _ref5 = _context2.sent;
              prices = _ref5.prices;

              _this.setState({
                areaPrice: Math.round(prices[0])
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    _this.updateOption = function (e, topFilter) {
      var name = !topFilter ? e.target.name : "t".concat(e.target.name);
      var value = e.target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value), function () {
        setTimeout(!topFilter ? _this.getAreasRange : _this.getAddressRange, 500);
      });
    };

    _this.handleChange = function () {
      _this.setState({
        mode: !_this.state.mode
      }, function () {
        _this.getAddressRange();

        _this.getAreasRange();
      });
    };

    _this.centerChange = function (center) {
      _this.setState({
        currentArea: {
          lat: center.lat(),
          lng: center.lng()
        }
      }, _this.getAddressRange);
    };

    _this.sort = function (e) {
      var type = e.target.value;

      var pairAreaPrice = _this.state.areas.map(function (A, i) {
        return {
          a: A,
          p: _this.state.prices[i]
        };
      });

      var sortedPairs = type !== 'high' ? pairAreaPrice.sort(function (a, b) {
        return a.p - b.p;
      }) : pairAreaPrice.sort(function (a, b) {
        return b.p - a.p;
      });

      _this.setState({
        prices: sortedPairs.map(function (sp) {
          return sp.p;
        }),
        areas: sortedPairs.map(function (sp) {
          return sp.a;
        })
      });
    };

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Areas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        areas: Object(_areas__WEBPACK_IMPORTED_MODULE_10__["default"])()
      }, function () {
        _this2.getAddressRange();

        _this2.getAreasRange();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          areas = _this$state3.areas,
          prices = _this$state3.prices;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-container col-lg-12 col-md-12 col-sm-12 col-xs-12"
      }, prices.length > 1 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "areas-list",
        type: "none"
      }, areas.map(function (a, i) {
        var parsedPrice = parseFloat(prices[i]);
        if (parsedPrice < 1) return null;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: i
        }, a.name, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "price"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "\u20A6", parsedPrice.toLocaleString('en'))));
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Areas;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var _default = Areas;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Areas, "Areas", "/Users/vnaokocha/houserents/houserents_fe/src/components/areas/index.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/components/areas/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.0368aa197028ea90cb57.hot-update.js.map