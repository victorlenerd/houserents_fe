exports.id = "main";
exports.modules = {

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/list/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_bath_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/svg/bath.svg */ "./src/assets/svg/bath.svg");
/* harmony import */ var _assets_svg_bath_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_bath_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_toilet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/toilet.svg */ "./src/assets/svg/toilet.svg");
/* harmony import */ var _assets_svg_toilet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_toilet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_bed_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/bed.svg */ "./src/assets/svg/bed.svg");
/* harmony import */ var _assets_svg_bed_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_bed_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_team_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/svg/team.svg */ "./src/assets/svg/team.svg");
/* harmony import */ var _assets_svg_team_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_team_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_pin_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/svg/pin.svg */ "./src/assets/svg/pin.svg");
/* harmony import */ var _assets_svg_pin_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pin_svg__WEBPACK_IMPORTED_MODULE_7__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();










var List = function List(_ref) {
  var _ref$data = _ref.data,
      price = _ref$data.price,
      address = _ref$data.address,
      description = _ref$data.description,
      no_bath = _ref$data.no_bath,
      no_bed = _ref$data.no_bed,
      no_toilets = _ref$data.no_toilets,
      url = _ref$data.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "lists"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "list-price-tags"
  }, "\u20A6 ", price.toLocaleString('en'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_svg_pin_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "pin-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "list-body-description"
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_svg_bed_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "info-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Bed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, no_bed))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_svg_bath_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "info-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Bath"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, no_bath))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_svg_toilet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "info-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Toilet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, no_toilets))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-body-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_svg_team_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "info-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-label"
  }, "Roomies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "1"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-actions"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "view-property-button",
    href: url,
    target: "_blank"
  }, "View Property")))));
};

List.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var _default = List;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(List, "List", "/Users/Sleekvick/Projects/houserents_fe/src/components/list/index.js");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/houserents_fe/src/components/list/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};
//# sourceMappingURL=main.87482a6baa9c8ada658e.hot-update.js.map