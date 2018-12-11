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

var CheckboxChecked = function CheckboxChecked(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#4DC9FF",
    "fill-rule": "evenodd",
    d: "M0 3.996A3.996 3.996 0 0 1 3.996 0h8.008A3.996 3.996 0 0 1 16 3.996v8.008A3.996 3.996 0 0 1 12.004 16H3.996A3.996 3.996 0 0 1 0 12.004V3.996zm6.034 6.774a.807.807 0 0 0 1.132 0l4.6-4.429a.776.776 0 0 0 0-1.11.81.81 0 0 0-1.132 0L6.6 9.102 5.366 7.944a.81.81 0 0 0-1.132 0 .776.776 0 0 0 0 1.111l1.8 1.715z"
  })));
};

CheckboxChecked.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CheckboxChecked;
exports.default = _default;