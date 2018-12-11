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

var Reset = function Reset(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M9.732 9.758a.75.75 0 0 1-1.061 0L4.99 6.077l-3.7 3.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l3.7-3.703L.244 1.33A.75.75 0 1 1 1.304.264l3.679 3.682L8.707.22a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073L6.053 5.019l3.679 3.673a.754.754 0 0 1 0 1.066z"
  })));
};

Reset.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Reset;
exports.default = _default;