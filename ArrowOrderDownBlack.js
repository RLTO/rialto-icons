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

var ArrowOrderDownBlack = function ArrowOrderDownBlack(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "none",
    stroke: "#152435",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1.5 6.5L4 9l2.5-2.5M4 9V1"
  })));
};

ArrowOrderDownBlack.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowOrderDownBlack;
exports.default = _default;