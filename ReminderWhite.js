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

var ReminderWhite = function ReminderWhite(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#FFF",
    "fill-rule": "evenodd",
    d: "M1.994 0h12.012C15.106 0 16 .893 16 1.994v12.012c0 1.1-.893 1.994-1.994 1.994H1.994C.894 16 0 15.107 0 14.006V1.994C0 .894.893 0 1.994 0zM1 2.007v11.986C1 14.55 1.45 15 2.007 15h11.986C14.55 15 15 14.55 15 13.993V2.007C15 1.45 14.55 1 13.993 1H2.007C1.45 1 1 1.45 1 2.007zm9.395 3.679L7.309 8.77 5.767 7.23a.727.727 0 0 0-1.029 1.028l2.057 2.057a.728.728 0 0 0 1.028 0l3.6-3.6a.727.727 0 1 0-1.028-1.028z"
  })));
};

ReminderWhite.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ReminderWhite;
exports.default = _default;