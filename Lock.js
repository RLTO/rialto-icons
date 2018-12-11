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

var Lock = function Lock(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10 8V4c0-2.21-1.795-4-4-4-2.21 0-4 1.795-4 4v4H1c-.552 0-1 .453-1 .997v6.006c0 .55.456.997 1.002.997h9.996c.553 0 1.002-.453 1.002-.997V8.997A.996.996 0 0 0 11 8h-1zM3 8V4.01A3.007 3.007 0 0 1 6 1c1.657 0 3 1.35 3 3.01V8H3z"
  })));
};

Lock.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Lock;
exports.default = _default;