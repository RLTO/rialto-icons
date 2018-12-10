"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Question = function Question(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7",
    height: "12"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M2.5 11c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zM0 3.51C0 1.57 1.57 0 3.5 0 5.433 0 7 1.57 7 3.5 7 5.433 5.43 7 4.5 7v2h-2V6.01C2.5 5.451 2.947 5 3.502 5 4.33 5 5 4.334 5 3.5 5 2.672 4.334 2 3.5 2 2.672 2 2 2.677 2 3.495V4H0v-.49z"
  })));
};

Question.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Question;
exports.default = _default;