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

var ArrowDownSmall = function ArrowDownSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "6"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10 .75C10 .336 9.68 0 9.286 0a.695.695 0 0 0-.496.21L4.998 4.191 1.256.261A.699.699 0 0 0 .714 0C.32 0 0 .336 0 .75c0 .201.076.384.199.519l-.002.002 4.286 4.5c.13.141.312.229.514.229H5a.696.696 0 0 0 .514-.23L9.8 1.27a.767.767 0 0 0 .2-.52z"
  })));
};

ArrowDownSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowDownSmall;
exports.default = _default;