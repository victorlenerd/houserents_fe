webpackHotUpdate("main",{

/***/ "./src/components/search/index.js":
/*!****************************************!*\
  !*** ./src/components/search/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../map */ "./src/components/map/index.js");
/* harmony import */ var _utils_predict__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/predict */ "./src/utils/predict.js");









(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();







var Search =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Search, _React$Component);

  function Search(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Search);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Search).call(this, props));
    _this.state = {
      currentArea: {
        lat: 6.5005,
        lng: 3.3666
      },
      searchText: 'Yaba, Lagos, Nigeria',
      areaPrice: 0
    };
    _this.getAddressRange = _this.getAddressRange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.centerChange = _this.centerChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        areaPrice: window.__DATA__.singleAreaPrice
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.no_bath !== prevProps.no_bath || this.props.no_bed !== prevProps.no_bed || this.props.no_toilets !== prevProps.no_toilets) {
        this.getAddressRange(this.props.no_bed, this.props.no_bath, this.props.no_toilets);
      }
    }
  }, {
    key: "getAddressRange",
    value: function () {
      var _getAddressRange = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var no_bed,
            no_bath,
            no_toilets,
            _this$state$currentAr,
            lat,
            lng,
            _ref,
            prices,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                no_bed = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                no_bath = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                no_toilets = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
                _this$state$currentAr = this.state.currentArea, lat = _this$state$currentAr.lat, lng = _this$state$currentAr.lng;
                _context.next = 6;
                return Object(_utils_predict__WEBPACK_IMPORTED_MODULE_12__["default"])({
                  locations: [{
                    lat: lat,
                    lng: lng
                  }],
                  specs: {
                    no_bed: no_bed,
                    no_bath: no_bath,
                    no_toilets: no_toilets
                  }
                });

              case 6:
                _ref = _context.sent;
                prices = _ref.prices;
                this.setState({
                  areaPrice: Math.round(prices[0])
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAddressRange() {
        return _getAddressRange.apply(this, arguments);
      }

      return getAddressRange;
    }()
  }, {
    key: "centerChange",
    value: function centerChange(center, searchText) {
      this.setState({
        currentArea: {
          lat: center.lat(),
          lng: center.lng()
        },
        searchText: searchText
      }, this.getAddressRange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          areaPrice = _this$state.areaPrice,
          searchText = _this$state.searchText;
      var _this$props = this.props,
          no_bed = _this$props.no_bed,
          no_bath = _this$props.no_bath,
          no_toilets = _this$props.no_toilets;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-sm-6 hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_map__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onCenterChange: this.centerChange
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "price-top"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: '#000'
        }
      }, "Average cost to rent ", no_bed, " bed, ", no_bath, " bath, and ", no_toilets, " toilet within ", searchText), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "\u20A6", parseFloat(areaPrice).toLocaleString('en')))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Search.propTypes = {
  no_bed: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  no_bath: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  no_toilets: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number
};

var _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_9__["hot"])(module)(Search);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/Sleekvick/Projects/houserents_fe/src/components/search/index.js");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/houserents_fe/src/components/search/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.2b4a938be8f6de13aea5.hot-update.js.map