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

var Time = function Time(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "9"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M2.191 5.645l.07-.192a.5.5 0 0 1 .94.342l-.484 1.33a.5.5 0 0 1-.64.298l-1.33-.484A.5.5 0 0 1 1.09 6l.192.07a4.5 4.5 0 1 1 2.39 2.544l.407-.914a3.5 3.5 0 1 0-1.887-2.055zM6 4h1v1H5V2h1v2z"
  })));
};

Time.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Time;
exports.default = _default;