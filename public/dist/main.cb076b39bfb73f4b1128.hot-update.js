webpackHotUpdate("main",{

/***/ "./src/components/map/index.js":
/*!*************************************!*\
  !*** ./src/components/map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





var _require = __webpack_require__(/*! react-google-maps/lib/components/places/SearchBox */ "./node_modules/react-google-maps/lib/components/places/SearchBox.js"),
    SearchBox = _require.SearchBox;

var Map = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc", "&v=3.exp&libraries=places"),
  containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-container",
    style: {
      height: "400px",
      width: '100%',
      paddingTop: 0,
      paddingBottom: 0
    }
  }),
  loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "400px"
    }
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "400px"
    }
  }),
  center: {
    lat: 25.03,
    lng: 121.6
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    var _this = this;

    var refs = {};
    this.setState({
      center: {
        lat: 6.5005,
        lng: 3.3666
      },
      onMapMounted: function onMapMounted(ref) {
        refs.map = ref;
      },
      onSearchBoxMounted: function onSearchBoxMounted(ref) {
        refs.searchBox = ref;
      },
      onPlacesChanged: function onPlacesChanged() {
        var places = refs.searchBox.getPlaces();

        if (places.length > 0) {
          var place = places[0].geometry.location;
          refs.map.panTo(place);

          _this.props.onCenterChange(place);

          _this.setState({
            center: place
          });
        }
      }
    });
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    ref: props.onMapMounted,
    defaultZoom: 15,
    defaultOptions: {
      disableDefaultUI: true
    },
    defaultCenter: props.center
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchBox, {
    ref: props.onSearchBoxMounted,
    controlPosition: window.google.maps.ControlPosition.TOP_CENTER,
    onPlacesChanged: props.onPlacesChanged
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Type address e.g Yaba, adekunle",
    style: {
      boxSizing: "border-box",
      border: "1px solid transparent",
      width: "90%",
      height: "32px",
      marginLeft: "10px",
      marginTop: "10px",
      padding: "0 12px",
      borderRadius: "3px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
      fontSize: "14px",
      outline: "none",
      textOverflow: "ellipses"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: props.center,
    onClick: props.onToggleOpen
  }));
});
var _default = Map;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Map, "Map", "/Users/vnaokocha/houserents/houserents_fe/src/components/map/index.js");
  reactHotLoader.register(_default, "default", "/Users/vnaokocha/houserents/houserents_fe/src/components/map/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.cb076b39bfb73f4b1128.hot-update.js.map