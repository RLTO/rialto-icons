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

var Signout = function Signout(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M13.752 6.442a.748.748 0 0 1 0 1.115l-2.5 2.25A.749.749 0 0 1 10 9.25V8H7.01a1 1 0 1 1 0-2H10V4.75a.75.75 0 0 1 1.252-.558l2.5 2.25zM1 13h6.497c.27 0 .503.224.503.5 0 .268-.224.5-.5.5H.997C.453 14 0 13.55 0 12.993V1.007C0 .45.446 0 .997 0H7.5c.27 0 .5.224.5.5 0 .268-.225.5-.503.5H1v12z"
  })));
};

Signout.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Signout;
exports.default = _default;