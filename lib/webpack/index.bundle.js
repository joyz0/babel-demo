(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/webpack/api.js":
/*!****************************!*\
  !*** ./src/webpack/api.js ***!
  \****************************/
/*! exports provided: mockName, mockAge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockName", function() { return mockName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAge", function() { return mockAge; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);


var mockName = function mockName() {
  return Promise.resolve({
    name: "zhenyuttt"
  });
};
var mockAge = function mockAge() {
  return Promise.resolve({
    age: 26
  });
};

/***/ }),

/***/ "./src/webpack/index.js":
/*!******************************!*\
  !*** ./src/webpack/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.set */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api */ "./src/webpack/api.js");

















function fetchName() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.async(function fetchName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.awrap(_api__WEBPACK_IMPORTED_MODULE_15__["mockName"]());

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data.name);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

fetchName().then(function (res) {
  return console.log("\u4F60\u597D".concat(res));
})["finally"](function () {
  console.log(new Set().add("foo"));
  console.log([[1, 2], 3].flat());
  console.log([1, 2, 3].includes(1));
});

var foo =
/*#__PURE__*/
function () {
  function foo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default()(this, foo);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default()(foo, [{
    key: "render",
    value: function render() {
      console.log("foo");
    }
  }]);

  return foo;
}();

/***/ })

},[["./src/webpack/index.js","runtime","vendors~index~index2"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VicGFjay9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnBhY2svaW5kZXguanMiXSwibmFtZXMiOlsibW9ja05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm5hbWUiLCJtb2NrQWdlIiwiYWdlIiwiZmV0Y2hOYW1lIiwibW9jayIsImRhdGEiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIlNldCIsImFkZCIsImZsYXQiLCJpbmNsdWRlcyIsImZvbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FBTUMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQWhCLENBQU47QUFBQSxDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTUgsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVHLE9BQUcsRUFBRTtBQUFQLEdBQWhCLENBQU47QUFBQSxDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQOztBQUVBLFNBQWVDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkFDcUJDLDhDQUFBLEVBRHJCOztBQUFBO0FBQ1FDLGNBRFI7QUFBQSwyQ0FFU0EsSUFBSSxDQUFDTCxJQUZkOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBRyxTQUFTLEdBQ05HLElBREgsQ0FDUSxVQUFBQyxHQUFHO0FBQUEsU0FBSUMsT0FBTyxDQUFDQyxHQUFSLHVCQUFpQkYsR0FBakIsRUFBSjtBQUFBLENBRFgsYUFFVyxZQUFNO0FBQ2JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQUlDLEdBQUosR0FBVUMsR0FBVixDQUFjLEtBQWQsQ0FBWjtBQUNBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQVQsRUFBWUcsSUFBWixFQUFaO0FBQ0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVVJLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBWjtBQUNELENBTkg7O0lBUU1DLEc7Ozs7Ozs7Ozs2QkFDSztBQUNQTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1vY2tOYW1lID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogXCJ6aGVueXV0dHRcIiB9KTtcbmV4cG9ydCBjb25zdCBtb2NrQWdlID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHsgYWdlOiAyNiB9KTtcbiIsImltcG9ydCAqIGFzIG1vY2sgZnJvbSBcIi4vYXBpXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTmFtZSgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IG1vY2subW9ja05hbWUoKTtcbiAgcmV0dXJuIGRhdGEubmFtZTtcbn1cblxuZmV0Y2hOYW1lKClcbiAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKGDkvaDlpb0ke3Jlc31gKSlcbiAgLmZpbmFsbHkoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5ldyBTZXQoKS5hZGQoXCJmb29cIikpO1xuICAgIGNvbnNvbGUubG9nKFtbMSwgMl0sIDNdLmZsYXQoKSk7XG4gICAgY29uc29sZS5sb2coWzEsIDIsIDNdLmluY2x1ZGVzKDEpKTtcbiAgfSk7XG5cbmNsYXNzIGZvbyB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImZvb1wiKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==