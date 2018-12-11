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

var PlusCircleSmall = function PlusCircleSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "9",
    height: "9"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M5 4h1.01a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5H5v1.01a.5.5 0 0 1-.5.49.492.492 0 0 1-.5-.49V5H2.99a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5H4V2.99a.5.5 0 0 1 .5-.49c.276 0 .5.215.5.49V4zm-.5 5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
  })));
};

PlusCircleSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = PlusCircleSmall;
exports.default = _default;