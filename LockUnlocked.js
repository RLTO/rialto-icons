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

var LockUnlocked = function LockUnlocked(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M0 8.997C0 8.447.444 8 1 8h1V4a4 4 0 0 1 8 0v1H9V3.99A2.997 2.997 0 0 0 6 1C4.343 1 3 2.35 3 4.01V8h8.002c.551 0 .998.453.998.997v6.006c0 .55-.456.997-1.002.997H1.002A1.004 1.004 0 0 1 0 15.003V8.997z"
  })));
};

LockUnlocked.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LockUnlocked;
exports.default = _default;