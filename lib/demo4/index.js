"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var mock = _interopRequireWildcard(require("./api"));

function fetchName() {
  var data;
  return _regenerator["default"].async(function fetchName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator["default"].awrap(mock.mockName());

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
  var _context2, _context3;

  console.log(new _set["default"]().add("foo"));
  console.log((0, _flat["default"])(_context2 = [[1, 2], 3]).call(_context2));
  console.log((0, _includes["default"])(_context3 = [1, 2, 3]).call(_context3, 1));
});

var foo =
/*#__PURE__*/
function () {
  function foo() {
    (0, _classCallCheck2["default"])(this, foo);
  }

  (0, _createClass2["default"])(foo, [{
    key: "render",
    value: function render() {
      console.log("foo");
    }
  }]);
  return foo;
}();