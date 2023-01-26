"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 20px;\r\n  width: 100%;\r\n}\r\n\r\nmain .listContainer form img {\r\n  width: 20px;\r\n}\r\n\r\nmain .listContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n  border: 1px solid #ebebeb;\r\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nmain .listContainer .topTitle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n  height: 40px;\r\n  color: #6f727b;\r\n  border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\nmain .listContainer form button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer ul li button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer ul li img,\r\nmain .listContainer .topTitle button img {\r\n  width: 20px;\r\n}\r\n\r\nmain .listContainer ul li button,\r\nmain .listContainer .topTitle button {\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .listContainer .topTitle button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer form button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer ul li button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer .topTitle button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n  border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\nmain .listContainer form input {\r\n  width: 90%;\r\n  height: 40px;\r\n  border: none;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\nmain .listContainer form input:focus {\r\n  outline: none;\r\n  color: #6f727b;\r\n}\r\n\r\nmain .listContainer form .addTask {\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .listContainer ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nmain .listContainer ul li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 40px;\r\n  border-bottom: 1px solid #ebebeb;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\nmain .listContainer ul li .taskDescription {\r\n  flex-grow: 4;\r\n  margin: 0 10px;\r\n  height: 30px;\r\n  border: none;\r\n}\r\n\r\nmain .listContainer ul li input:focus {\r\n  background-color: rgb(239, 239, 167);\r\n  outline: none;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(239, 239, 167);\r\n  width: 100%;\r\n}\r\n\r\n.unselected {\r\n  background-color: white;\r\n}\r\n\r\n.fontDached {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.fontUndached {\r\n  text-decoration: none;\r\n}\r\n\r\nmain .listContainer .btnClear {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  color: #7f7f7f;\r\n}\r\n\r\nmain .listContainer .btnClear:hover {\r\n  text-decoration: underline;\r\n  background-color: #c2c4c7;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,6EAA6E;AAC/E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,eAAe;AACjB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 20px;\r\n  width: 100%;\r\n}\r\n\r\nmain .listContainer form img {\r\n  width: 20px;\r\n}\r\n\r\nmain .listContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n  border: 1px solid #ebebeb;\r\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nmain .listContainer .topTitle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n  height: 40px;\r\n  color: #6f727b;\r\n  border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\nmain .listContainer form button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer ul li button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer ul li img,\r\nmain .listContainer .topTitle button img {\r\n  width: 20px;\r\n}\r\n\r\nmain .listContainer ul li button,\r\nmain .listContainer .topTitle button {\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .listContainer .topTitle button {\r\n  opacity: 1;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain .listContainer form button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer ul li button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer .topTitle button:hover {\r\n  background-color: rgb(223, 223, 144);\r\n  opacity: 0.6;\r\n}\r\n\r\nmain .listContainer form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n  border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\nmain .listContainer form input {\r\n  width: 90%;\r\n  height: 40px;\r\n  border: none;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\nmain .listContainer form input:focus {\r\n  outline: none;\r\n  color: #6f727b;\r\n}\r\n\r\nmain .listContainer form .addTask {\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .listContainer ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nmain .listContainer ul li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 40px;\r\n  border-bottom: 1px solid #ebebeb;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\nmain .listContainer ul li .taskDescription {\r\n  flex-grow: 4;\r\n  margin: 0 10px;\r\n  height: 30px;\r\n  border: none;\r\n}\r\n\r\nmain .listContainer ul li input:focus {\r\n  background-color: rgb(239, 239, 167);\r\n  outline: none;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(239, 239, 167);\r\n  width: 100%;\r\n}\r\n\r\n.unselected {\r\n  background-color: white;\r\n}\r\n\r\n.fontDached {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.fontUndached {\r\n  text-decoration: none;\r\n}\r\n\r\nmain .listContainer .btnClear {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  color: #7f7f7f;\r\n}\r\n\r\nmain .listContainer .btnClear:hover {\r\n  text-decoration: underline;\r\n  background-color: #c2c4c7;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/iconAdd.png":
/*!***************************************!*\
  !*** ./src/assets/images/iconAdd.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/iconAdd.png");

/***/ }),

/***/ "./src/assets/images/iconDelete.png":
/*!******************************************!*\
  !*** ./src/assets/images/iconDelete.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/iconDelete.png");

/***/ }),

/***/ "./src/assets/images/iconMore.png":
/*!****************************************!*\
  !*** ./src/assets/images/iconMore.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/iconMore.png");

/***/ }),

/***/ "./src/assets/images/iconRefresh.png":
/*!*******************************************!*\
  !*** ./src/assets/images/iconRefresh.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/iconRefresh.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_iconRefresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/iconRefresh.png */ "./src/assets/images/iconRefresh.png");
/* harmony import */ var _assets_images_iconMore_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/iconMore.png */ "./src/assets/images/iconMore.png");
/* harmony import */ var _assets_images_iconAdd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/iconAdd.png */ "./src/assets/images/iconAdd.png");
/* harmony import */ var _assets_images_iconDelete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/iconDelete.png */ "./src/assets/images/iconDelete.png");
/* harmony import */ var _modules_domElements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/domElements.js */ "./src/modules/domElements.js");







(0,_modules_domElements_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCollection.js */ "./src/modules/taskCollection.js");


const addElementsToDom = () => {
  const btnStart = document.querySelector('.btnStart');
  const ul = document.querySelector('#ulTaskList');
  const txtNewTask = document.getElementById('txtNewTask');
  const addTaskForm = document.getElementById('addTaskForm');
  const btnClearAll = document.querySelector('.btnClear');
  const newTasksCollection = new _taskCollection_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  if (JSON.parse(localStorage.getItem('localStorageTasks')) === null) {
    localStorage.setItem('localStorageTasks', JSON.stringify(newTasksCollection.getTasks()));
  } else {
    newTasksCollection.setTasks(JSON.parse(localStorage.getItem('localStorageTasks')));
  }

  // LIST TASKS
  let aux = '';

  newTasksCollection.getTasks().forEach((newTask) => {
    if (!newTask.completed) {
      aux += `<li id="li${newTask.index}" class="liTask unselected">
                  <input class="taskChkBox" type="checkbox" id="cbox${newTask.index}" name="checkbox""> 
                  <input class="taskDescription" type="text" name="taskDescription${newTask.index}" 
                    id="taskDescription${newTask.index}" value="${newTask.description}" />
                  <button  class="btnMore"><img id="img${newTask.index}" src="./assets/images/iconMore.png" alt="icon more" /></button>
                  </li>`;
    }
  });
  ul.innerHTML = aux;

  /* -------------------------------------------------------------------------- */
  /*                               Event Listeners                              */
  /* -------------------------------------------------------------------------- */

  btnStart.addEventListener('click', () => {
    newTasksCollection.removeAll();
  });

  addTaskForm.addEventListener('submit', () => {
    if (txtNewTask.value !== '') { newTasksCollection.addTask(txtNewTask.value); }
  });

  document.querySelectorAll('.taskChkBox').forEach((chkTask, index) => {
    chkTask.addEventListener('click', () => {
      const inputDesc = document.querySelector(`#taskDescription${index + 1}`);
      if (chkTask.checked) {
        inputDesc.classList.add('fontDached');
        inputDesc.classList.remove('fontUndached');
      } else {
        inputDesc.classList.remove('fontDached');
        inputDesc.classList.add('fontUndached');
      }
    });
  });

  document.querySelectorAll('.taskDescription').forEach((inputDesc, index) => {
    inputDesc.addEventListener('focus', () => {
      const liSelected = document.querySelector(`#li${index + 1}`);

      if (!liSelected.classList.contains('selected')) {
        liSelected.classList.remove('unselected');
        liSelected.classList.add('selected');
        liSelected.children.item(2).children.item(0).attributes.item(1).value = './assets/images/iconDelete.png';
      }
    });

    inputDesc.addEventListener('change', () => {
      newTasksCollection.editTask(inputDesc.value, index);
    });

    inputDesc.addEventListener('blur', () => {
      const liSelected = document.querySelector(`#li${index + 1}`);

      if (liSelected.classList.contains('selected')) {
        liSelected.classList.add('unselected');
        liSelected.classList.remove('selected');
        liSelected.children.item(2).children.item(0).attributes.item(1).value = './assets/images/iconMore.png';
      }
    });
  });

  document.querySelectorAll('.btnMore').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      newTasksCollection.removeTask(index);
    });
  });

  btnClearAll.addEventListener('click', () => {
    document.querySelectorAll('.taskChkBox').forEach((chkTask) => {
      if (!chkTask.checked) {
        chkTask.click();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addElementsToDom);

/***/ }),

/***/ "./src/modules/taskCollection.js":
/*!***************************************!*\
  !*** ./src/modules/taskCollection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCollection)
/* harmony export */ });
class TaskCollection {
  constructor() {
    this.tasks = [];
  }

    addTask = (desc) => {
      const newTask = {
        description: desc,
        completed: false,
        index: this.tasks.length + 1,
      };
      this.tasks.push(newTask);
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
    }

    removeTask = (index) => {
      const result = this.tasks.filter((task, i) => i !== index);
      for (let i = index; i < result.length; i += 1) {
        result[i].index -= 1;
      }
      this.tasks = result;
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
      window.location.reload();
    }

    removeAll = () => {
      this.tasks = [];
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
      window.location.reload();
    }

    editTask = (desc, index) => {
      this.tasks[index].description = desc;
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
    }

    getTasks = () => this.tasks

    setTasks = (tasks) => {
      this.tasks = tasks;
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25BZGQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uRGVsZXRlLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbk1vcmUucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uUmVmcmVzaC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrQ29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdMdWNpZGEgR3JhbmRlJywgdGFob21hLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgZm9ybSBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC50b3BUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY29sb3I6ICM2ZjcyN2I7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIGJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSBidXR0b24ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgdWwgbGkgaW1nLFxcclxcbm1haW4gLmxpc3RDb250YWluZXIgLnRvcFRpdGxlIGJ1dHRvbiBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgdWwgbGkgYnV0dG9uLFxcclxcbm1haW4gLmxpc3RDb250YWluZXIgLnRvcFRpdGxlIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciAudG9wVGl0bGUgYnV0dG9uIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMTQ0KTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAxNDQpO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC50b3BUaXRsZSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAxNDQpO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogIzZmNzI3YjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIC5hZGRUYXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSAudGFza0Rlc2NyaXB0aW9uIHtcXHJcXG4gIGZsZXgtZ3JvdzogNDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIHVsIGxpIGlucHV0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMTY3KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDE2Nyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb250RGFjaGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udFVuZGFjaGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciAuYnRuQ2xlYXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC5idG5DbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmM0Yzc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDViw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdMdWNpZGEgR3JhbmRlJywgdGFob21hLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgZm9ybSBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC50b3BUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY29sb3I6ICM2ZjcyN2I7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIGJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSBidXR0b24ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgdWwgbGkgaW1nLFxcclxcbm1haW4gLmxpc3RDb250YWluZXIgLnRvcFRpdGxlIGJ1dHRvbiBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmxpc3RDb250YWluZXIgdWwgbGkgYnV0dG9uLFxcclxcbm1haW4gLmxpc3RDb250YWluZXIgLnRvcFRpdGxlIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciAudG9wVGl0bGUgYnV0dG9uIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMTQ0KTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAxNDQpO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC50b3BUaXRsZSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAxNDQpO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIGZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogIzZmNzI3YjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciBmb3JtIC5hZGRUYXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciB1bCBsaSAudGFza0Rlc2NyaXB0aW9uIHtcXHJcXG4gIGZsZXgtZ3JvdzogNDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIHVsIGxpIGlucHV0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMTY3KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDE2Nyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb250RGFjaGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udFVuZGFjaGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubGlzdENvbnRhaW5lciAuYnRuQ2xlYXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5saXN0Q29udGFpbmVyIC5idG5DbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmM0Yzc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbkFkZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29uRGVsZXRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25Nb3JlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25SZWZyZXNoLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ljb25SZWZyZXNoLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pY29uTW9yZS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbkFkZC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbkRlbGV0ZS5wbmcnO1xuaW1wb3J0IGFkZEVsZW1lbnRzVG9Eb20gZnJvbSAnLi9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzJztcblxuYWRkRWxlbWVudHNUb0RvbSgpOyIsImltcG9ydCBUYXNrQ29sbGVjdGlvbiBmcm9tICcuL3Rhc2tDb2xsZWN0aW9uLmpzJztcblxuY29uc3QgYWRkRWxlbWVudHNUb0RvbSA9ICgpID0+IHtcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuU3RhcnQnKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWxUYXNrTGlzdCcpO1xuICBjb25zdCB0eHROZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dE5ld1Rhc2snKTtcbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbiAgY29uc3QgYnRuQ2xlYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuQ2xlYXInKTtcbiAgY29uc3QgbmV3VGFza3NDb2xsZWN0aW9uID0gbmV3IFRhc2tDb2xsZWN0aW9uKCk7XG5cbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RvcmFnZVRhc2tzJykpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RvcmFnZVRhc2tzJywgSlNPTi5zdHJpbmdpZnkobmV3VGFza3NDb2xsZWN0aW9uLmdldFRhc2tzKCkpKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrc0NvbGxlY3Rpb24uc2V0VGFza3MoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdG9yYWdlVGFza3MnKSkpO1xuICB9XG5cbiAgLy8gTElTVCBUQVNLU1xuICBsZXQgYXV4ID0gJyc7XG5cbiAgbmV3VGFza3NDb2xsZWN0aW9uLmdldFRhc2tzKCkuZm9yRWFjaCgobmV3VGFzaykgPT4ge1xuICAgIGlmICghbmV3VGFzay5jb21wbGV0ZWQpIHtcbiAgICAgIGF1eCArPSBgPGxpIGlkPVwibGkke25ld1Rhc2suaW5kZXh9XCIgY2xhc3M9XCJsaVRhc2sgdW5zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFza0Noa0JveFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2JveCR7bmV3VGFzay5pbmRleH1cIiBuYW1lPVwiY2hlY2tib3hcIlwiPiBcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRhc2tEZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tEZXNjcmlwdGlvbiR7bmV3VGFzay5pbmRleH1cIiBcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXNrRGVzY3JpcHRpb24ke25ld1Rhc2suaW5kZXh9XCIgdmFsdWU9XCIke25ld1Rhc2suZGVzY3JpcHRpb259XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzPVwiYnRuTW9yZVwiPjxpbWcgaWQ9XCJpbWcke25ld1Rhc2suaW5kZXh9XCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2ljb25Nb3JlLnBuZ1wiIGFsdD1cImljb24gbW9yZVwiIC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgfVxuICB9KTtcbiAgdWwuaW5uZXJIVE1MID0gYXV4O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IExpc3RlbmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza3NDb2xsZWN0aW9uLnJlbW92ZUFsbCgpO1xuICB9KTtcblxuICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgaWYgKHR4dE5ld1Rhc2sudmFsdWUgIT09ICcnKSB7IG5ld1Rhc2tzQ29sbGVjdGlvbi5hZGRUYXNrKHR4dE5ld1Rhc2sudmFsdWUpOyB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrQ2hrQm94JykuZm9yRWFjaCgoY2hrVGFzaywgaW5kZXgpID0+IHtcbiAgICBjaGtUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tEZXNjcmlwdGlvbiR7aW5kZXggKyAxfWApO1xuICAgICAgaWYgKGNoa1Rhc2suY2hlY2tlZCkge1xuICAgICAgICBpbnB1dERlc2MuY2xhc3NMaXN0LmFkZCgnZm9udERhY2hlZCcpO1xuICAgICAgICBpbnB1dERlc2MuY2xhc3NMaXN0LnJlbW92ZSgnZm9udFVuZGFjaGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dERlc2MuY2xhc3NMaXN0LnJlbW92ZSgnZm9udERhY2hlZCcpO1xuICAgICAgICBpbnB1dERlc2MuY2xhc3NMaXN0LmFkZCgnZm9udFVuZGFjaGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb24nKS5mb3JFYWNoKChpbnB1dERlc2MsIGluZGV4KSA9PiB7XG4gICAgaW5wdXREZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGlTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaSR7aW5kZXggKyAxfWApO1xuXG4gICAgICBpZiAoIWxpU2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGxpU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgndW5zZWxlY3RlZCcpO1xuICAgICAgICBsaVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGxpU2VsZWN0ZWQuY2hpbGRyZW4uaXRlbSgyKS5jaGlsZHJlbi5pdGVtKDApLmF0dHJpYnV0ZXMuaXRlbSgxKS52YWx1ZSA9ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbkRlbGV0ZS5wbmcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5wdXREZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIG5ld1Rhc2tzQ29sbGVjdGlvbi5lZGl0VGFzayhpbnB1dERlc2MudmFsdWUsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIGlucHV0RGVzYy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGlTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaSR7aW5kZXggKyAxfWApO1xuXG4gICAgICBpZiAobGlTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgbGlTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCd1bnNlbGVjdGVkJyk7XG4gICAgICAgIGxpU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgbGlTZWxlY3RlZC5jaGlsZHJlbi5pdGVtKDIpLmNoaWxkcmVuLml0ZW0oMCkuYXR0cmlidXRlcy5pdGVtKDEpLnZhbHVlID0gJy4vYXNzZXRzL2ltYWdlcy9pY29uTW9yZS5wbmcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuTW9yZScpLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBuZXdUYXNrc0NvbGxlY3Rpb24ucmVtb3ZlVGFzayhpbmRleCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGJ0bkNsZWFyQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrQ2hrQm94JykuZm9yRWFjaCgoY2hrVGFzaykgPT4ge1xuICAgICAgaWYgKCFjaGtUYXNrLmNoZWNrZWQpIHtcbiAgICAgICAgY2hrVGFzay5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBhZGRFbGVtZW50c1RvRG9tOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgICBhZGRUYXNrID0gKGRlc2MpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpbmRleDogdGhpcy50YXNrcy5sZW5ndGggKyAxLFxuICAgICAgfTtcbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdFtpXS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy50YXNrcyA9IHJlc3VsdDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sgPSAoZGVzYywgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMudGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrcyA9ICgpID0+IHRoaXMudGFza3NcblxuICAgIHNldFRhc2tzID0gKHRhc2tzKSA9PiB7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==