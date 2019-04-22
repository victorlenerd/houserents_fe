webpackHotUpdate("main",{

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();



var getOptions = function getOptions() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (o, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: o
    }, o);
  });
};

var Filter = function Filter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "input-container col-lg-12 col-md-12 col-sm-12 col-xs-12" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "NO. Of Bedrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: props.updateOption,
    name: "no_bed"
  }, getOptions())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "NO. Of Bathrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: props.updateOption,
    name: "no_bath"
  }, getOptions())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "NO. Of Toilets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: props.updateOption,
    name: "no_toilets"
  }, getOptions())), props.showSort && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.showSort ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Sort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "sort",
    onChange: props.sort
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "high"
  }, "High"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "low"
  }, "Low")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-container col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }));
};

var _default = Filter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getOptions, "getOptions", "/Users/vnaokocha/houserents/houserents_fe/src/components/filter.js");
  reactHotLoader.register(Filter, "Filter", "/Users/vnaokocha/houserents/houserents_fe/src/components/filter.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/components/filter.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.d96c1a299adf02ddb071.hot-update.js.map