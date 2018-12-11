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

var ExpandBlue = function ExpandBlue(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "12",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M0 5c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 5zM6.356.356l2.288 2.288C8.84 2.84 8.78 3 8.51 3H3.491c-.263 0-.332-.16-.135-.356L5.644.356a.505.505 0 0 1 .712 0zm0 9.288a.505.505 0 0 1-.712 0L3.356 7.356C3.159 7.159 3.228 7 3.49 7h5.018c.271 0 .33.161.135.356L6.356 9.644z",
    fill: "#4DC9FF",
    "fill-rule": "evenodd"
  })));
};

ExpandBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ExpandBlue;
exports.default = _default;