webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./assets/img/unsplash.jpg */ "./src/assets/img/unsplash.jpg"));

// Module
exports.push([module.i, "* {\n  /* transition: all 2s; */\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #2BE6A8;\n}\n\n#main {\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n  z-index: 100;\n}\n\nul {\n  padding: 0px;\n  margin: 0px;\n}\n\n.hint {\n  font-size: 16px;\n  text-align: 'center';\n  width: 260px;\n  margin: 0px auto;\n}\n\n.toggle-label {\n  display: block;\n  margin-top: 5px;\n}\n\n.header {\n  width: 100%;\n  background-color: #ECF0F1;\n  padding: 80px 0px;\n  display: table;\n  position: relative;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.header-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  background-color: rgba(43,230,168, 0.8);\n}\n\n.header .container {\n  z-index: 5;\n  position: relative;\n}\n\n.header h2 {\n  font-family: 'Archivo', sans-serif;\n  color: #fff;\n  letter-spacing: 3.8px;\n  line-height: 50px;\n  font-size: 38px;\n  text-align: center;\n  text-shadow: 5px 2px 12px rgba(0,0,0,0.30);\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background-color: #fff;\n  z-index: 150;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  font-family: 'Karla', sans-serif;\n  letter-spacing: 1px;\n  justify-content: center;\n  flex-direction: row;\n  border-bottom: 2px solid #2BE6A8;\n  box-shadow: 0 5px 30px 0 rgba(0,0,0,0.20);\n}\n\nnav > ul > li {\n  display: inline;\n  margin: 0px 50px;\n}\n\nnav > ul > li > a {\n  color: #000;\n}\n\nnav > ul > li > a:active,\nnav > ul > li > a.active {\n  font-weight: bold;\n  color: #2980b9 !important;\n  text-decoration-line: underline;\n}\n\nnav > ul > li > a:visited {\n  color: #000;\n  text-decoration-line: underline;\n}\n\n#getstarted-button {\n  width: 200px;\n  height: 40px;\n  color: #fff;\n  background: #2BE6A8;\n  box-shadow: 0 1px 30px 12px rgba(43,230,168,0.30);\n  border-radius: 10px;\n  margin-top: 80px;\n  text-align: center;\n  line-height: 40px;\n  display: block;\n  margin: 50px auto;\n  border: 0px;\n  text-transform: uppercase;\n  font-family: 'Archivo', sans-serif;\n}\n\n.hometxt {\n  margin: 0px auto;\n  font-family: 'Archivo', sans-serif;\n  text-align: center;\n\n  font-style: italic;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: normal;\n  text-align: center;\n  letter-spacing: 0.05em;\n\n  color: #333333;\n}\n\n/*ECF0F1*/\n\n.footer {\n  background-color: #FFF;\n  padding: 20px 0px;\n}\n\n.highlight {\n  color: #D0021B;\n  font-weight: bold;\n}\n\n.signature {\n  font-size: 16px;\n  font-family: 'Archivo', sans-serif;\n}\n\nsection {\n  padding: 20px 0px;\n}\n\nhr {\n  width: 80%;\n}\n\nh2 {\n  text-align: center;\n  font-family: 'Karla', sans-serif;\n}\n\n.input-container {\n  display: table;\n  margin-top: 50px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 5px solid #ECF0F1;\n  box-shadow: 0 5px 15px 1px rgba(0,0,0,0.14);\n}\n\n.input-container > div:nth-child(1) {\n  border-left: none; \n}\n\n.input-container > div {\n  border-left: 2px solid #ECF0F1;\n}\n\n.input-container select {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.input-container input {\n  width: 100%;\n\n  margin-bottom: 10px;\n  border: 0px;\n  border-bottom: 1px solid #333;\n}\n\n.input-label {\n  color: rgba(0,0,0,0.5);\n  font-family:  'Archivo', sans-serif;\n  font-size: 12px;\n}\n\n.areas-list li {\n  padding: 20px;\n  border-bottom: 2px solid #ECF0F1;\n  font-family:  'Archivo', sans-serif;\n  font-size: 18px;\n}\n\n.areas-list li:last-child {\n  border-bottom: none;\n}\n\n.price, .price-top {\n  font-weight: 800;\n  float: right;\n  color: #2BE6A8;\n  font-family:  'Archivo', sans-serif;\n}\n\n.price-top {\n  float: none;\n  text-align: center;\n  border: 0px !important;\n}\n\n.map {\n  width: 100%;\n  height: 300px;\n}\n\n.lists {\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px;\n}\n\n.lists li {\n  border-top: 1px solid rgba(0,0,0,0.5);\n}\n\n.lists li:last-child {\n  border-top: 0px; \n}\n\n.list-header {\n  display: flex;\n  justify-content: 'space-between';\n  align-items: center;\n}\n\n.list-price-tags {\n  \n}\n\n@media only screen and (max-width: 999px) { \n  .header {\n    padding: 0px 0px;\n  }\n\n  .header h2 {\n    font-size: 26px;\n    letter-spacing: 2px;\n  }\n}\n\n@media only screen and (max-width: 799px) {\n  .areas-list li {\n    font-size: 14px;\n  }\n\n  .input-container > div {\n    border-left: none;\n    border-bottom: 2px solid #ECF0F1;\n    margin-bottom: 10px;\n  }\n  \n  .footer-right {\n    justify-content: flex-start;\n    margin-top: 20px;\n  }\n\n  .inner-pane h5, .source { \n    text-align: left\n  }\n\n\n  /* .input-container input {\n    margin-top: 0px;\n    margin-bottom: 15px;\n  } */\n}\n\n@media only screen and (max-width: 380px) {\n  .price {\n    float: none;\n  }\n\n  .areas-list li {\n    font-size: 14px;\n  }\n\n  .footer-right {\n    justify-content: flex-start;\n    margin-top: 20px;\n  }\n\n  .inner-pane h5, .source { \n    text-align: left\n  }\n}\n\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n", ""]);



/***/ })

})
//# sourceMappingURL=main.c1417644d58b0d1c9ad3.hot-update.js.map