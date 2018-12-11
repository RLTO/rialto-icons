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

var CloseWhite = function CloseWhite(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12"
  }, _react.default.createElement("path", {
    fill: "#FFF",
    "fill-rule": "evenodd",
    d: "M10.929 0c-.296 0-.564.12-.758.314L6 4.485 1.829.314A1.071 1.071 0 1 0 .314 1.829L4.484 6l-4.17 4.171a1.071 1.071 0 0 0 1.515 1.515L6 7.516l4.171 4.17a1.071 1.071 0 1 0 1.515-1.515L7.516 6l4.17-4.17A1.07 1.07 0 0 0 10.93 0z"
  })));
};

CloseWhite.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CloseWhite;
exports.default = _default;