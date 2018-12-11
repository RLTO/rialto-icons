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

var PortfoliosActiveBlue = function PortfoliosActiveBlue(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M1.995 20A1.997 1.997 0 0 1 0 18.01V1.99C0 .892.893 0 1.995 0h16.01C19.107 0 20 .898 20 1.99v16.02c0 1.099-.893 1.99-1.995 1.99H1.995zM6 18h12V2H6v16zm4-8l5-4v8l-5-4z",
    fill: "#4DC9FF",
    "fill-rule": "nonzero"
  })));
};

PortfoliosActiveBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = PortfoliosActiveBlue;
exports.default = _default;