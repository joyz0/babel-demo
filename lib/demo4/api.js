"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.mockAge = exports.mockName = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var mockName = function mockName() {
  return _promise["default"].resolve({
    name: "zhenyuttt"
  });
};

exports.mockName = mockName;

var mockAge = function mockAge() {
  return _promise["default"].resolve({
    age: 26
  });
};

exports.mockAge = mockAge;