"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockAge = exports.mockName = void 0;

var mockName = function mockName() {
  return Promise.resolve({
    name: "zhenyuttt"
  });
};

exports.mockName = mockName;

var mockAge = function mockAge() {
  return Promise.resolve({
    age: 26
  });
};

exports.mockAge = mockAge;