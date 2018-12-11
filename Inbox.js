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

var Inbox = function Inbox(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M6.44 0h7.12a3 3 0 0 1 2.736 1.769L20 10v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-5l3.704-8.231A3 3 0 0 1 6.44 0zM2 15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.57l-3.528-7.84A1 1 0 0 0 13.56 2H6.44a1 1 0 0 0-.912.59L2 10.43V15zm0-4V9h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h6v2h-4.17A3.001 3.001 0 0 1 11 13H9a3.001 3.001 0 0 1-2.83-2H2z",
    fill: "#91A6B6",
    "fill-rule": "nonzero"
  })));
};

Inbox.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Inbox;
exports.default = _default;