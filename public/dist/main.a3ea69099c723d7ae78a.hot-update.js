webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
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
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toggle.css */ "./src/toggle.css");
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_toggle_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/map */ "./src/components/map.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/filter */ "./src/components/filter.js");
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./areas */ "./src/areas.js");
/* harmony import */ var _utils_predict__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/predict */ "./src/utils/predict.js");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);









(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();














var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, App);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(App).call(this, props));
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
              return Object(_utils_predict__WEBPACK_IMPORTED_MODULE_17__["default"])({
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
              return Object(_utils_predict__WEBPACK_IMPORTED_MODULE_17__["default"])({
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(App, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  areas: Object(_areas__WEBPACK_IMPORTED_MODULE_16__["default"])()
                }, function () {
                  _this2.getAddressRange();

                  _this2.getAreasRange();
                });
                jquery__WEBPACK_IMPORTED_MODULE_19___default()(window).on('scroll', function () {
                  jquery__WEBPACK_IMPORTED_MODULE_19___default()(".header").css("top", jquery__WEBPACK_IMPORTED_MODULE_19___default()(this).scrollTop() * .5);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          areas = _this$state3.areas,
          prices = _this$state3.prices,
          mode = _this$state3.mode,
          areaPrice = _this$state3.areaPrice;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-9 col-md-9 col-sm-8 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_map__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onCenterChange: this.centerChange
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-3 col-md-3 col-sm-4 col-xs-12 input-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_filter__WEBPACK_IMPORTED_MODULE_15__["default"], {
        showSort: false,
        updateOption: function updateOption(e) {
          return _this3.updateOption(e, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "price-top"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Total Cost:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "\u20A6", parseFloat(areaPrice).toLocaleString('en'))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Compare By Areas"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_filter__WEBPACK_IMPORTED_MODULE_15__["default"], {
        showSort: true,
        sort: this.sort,
        updateOption: this.updateOption
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-container col-lg-12 col-md-12 col-sm-12 col-xs-12"
      }, prices.length > 1 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "areas-list",
        type: "none"
      }, areas.map(function (a, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: i
        }, a.name, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "price"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "\u20A6", parseFloat(prices[i]).toLocaleString('en'))));
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_9__["hot"])(module)(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/Sleekvick/Projects/houserents_fe/src/App.js");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/houserents_fe/src/App.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.a3ea69099c723d7ae78a.hot-update.js.map