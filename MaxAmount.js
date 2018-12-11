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

var MaxAmount = function MaxAmount(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "4",
    height: "8",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M4 .714c0 .193-.08.367-.21.496L1.809 3.002l1.93 1.742c.16.131.261.325.261.542C4 5.68 3.664 6 3.25 6a.767.767 0 0 1-.519-.199L.23 3.517a.698.698 0 0 1 0-1.031L2.73.2A.77.77 0 0 1 3.25 0c.414 0 .75.32.75.714zM3.25 6.5a.75.75 0 0 1 0 1.5H.752a.75.75 0 1 1 0-1.5H3.25z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

MaxAmount.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = MaxAmount;
exports.default = _default;