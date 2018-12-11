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

var ArrowLeft = function ArrowLeft(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "14"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M7.72 12.306L2.412 6.998l5.24-5.24A.999.999 0 0 0 7 0a.995.995 0 0 0-.692.278L6.306.276l-6 6a.997.997 0 0 0-.306.72V7c0 .283.117.538.306.72l6 6a1 1 0 0 0 1.414-1.414z"
  })));
};

ArrowLeft.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowLeft;
exports.default = _default;