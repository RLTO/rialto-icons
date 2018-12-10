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

var CheckboxUnchecked = function CheckboxUnchecked(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#DCE6ED",
    "fill-rule": "evenodd",
    d: "M0 3.996A3.996 3.996 0 0 1 3.996 0h8.008A3.996 3.996 0 0 1 16 3.996v8.008A3.996 3.996 0 0 1 12.004 16H3.996A3.996 3.996 0 0 1 0 12.004V3.996zm2 .013v7.982C2 13.098 2.9 14 4.009 14h7.982A2.01 2.01 0 0 0 14 11.991V4.01A2.01 2.01 0 0 0 11.991 2H4.01A2.01 2.01 0 0 0 2 4.009z"
  })));
};

CheckboxUnchecked.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CheckboxUnchecked;
exports.default = _default;