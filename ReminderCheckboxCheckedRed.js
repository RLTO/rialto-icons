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

var ReminderCheckboxCheckedRed = function ReminderCheckboxCheckedRed(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#FF6B6B",
    "fill-rule": "evenodd",
    d: "M2 0h6c1.113 0 2 .895 2 2v6c0 1.113-.895 2-2 2H2c-1.113 0-2-.895-2-2V2C0 .887.895 0 2 0zM1 1.997v6.006c0 .544.446.997.997.997h6.006C8.547 9 9 8.554 9 8.003V1.997C9 1.453 8.554 1 8.003 1H1.997C1.453 1 1 1.446 1 1.997zm3.229 3.275l-.543-.543a.727.727 0 0 0-1.029 1.028l1.057 1.057a.728.728 0 0 0 1.029 0l2.6-2.6a.727.727 0 1 0-1.029-1.028L4.23 5.272z"
  })));
};

ReminderCheckboxCheckedRed.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ReminderCheckboxCheckedRed;
exports.default = _default;