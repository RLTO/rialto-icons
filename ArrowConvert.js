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

var ArrowConvert = function ArrowConvert(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "14",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M10 0l3.292 3.279a1 1 0 0 1 .002 1.414L10 8 8.5 6.5 10 5H2.5a.5.5 0 0 0-.5.5V7a1 1 0 1 1-2 0V5.5A2.5 2.5 0 0 1 2.5 3H10L8.5 1.5 10 0zM4 16L.708 12.721a1 1 0 0 1-.002-1.414L4 8l1.5 1.5L4 11h7.5a.5.5 0 0 0 .5-.5V9a1 1 0 0 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5H4l1.5 1.5L4 16z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

ArrowConvert.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowConvert;
exports.default = _default;