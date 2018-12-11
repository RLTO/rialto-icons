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

var SelectAll = function SelectAll(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "16",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M8 1h7a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm0 5h7a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm0 5h7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM1.745 2.268L3.785.21a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 3.79a.707.707 0 0 1-1.006 0L.208 2.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535zm0 5l2.04-2.058a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 8.79a.707.707 0 0 1-1.006 0L.208 7.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535zm0 5l2.04-2.058a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 13.79a.707.707 0 0 1-1.006 0L.208 12.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535z",
    fill: "#329798",
    "fill-rule": "evenodd"
  })));
};

SelectAll.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = SelectAll;
exports.default = _default;