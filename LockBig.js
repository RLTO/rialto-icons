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

var LockBig = function LockBig(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "32"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M20 16V8c0-4.418-3.59-8-8-8-4.418 0-8 3.59-8 8v8H2c-1.105 0-2 .895-2 1.994v12.012A2 2 0 0 0 2.005 32h19.99A2 2 0 0 0 24 30.006V17.994A1.992 1.992 0 0 0 22 16h-2zM6 16V7.998A6.003 6.003 0 0 1 12 2c3.314 0 6 2.683 6 5.998V16H6z"
  })));
};

LockBig.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LockBig;
exports.default = _default;