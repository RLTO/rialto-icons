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

var LinkGreen = function LinkGreen(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14"
  }, _react.default.createElement("path", {
    fill: "#329798",
    "fill-rule": "evenodd",
    d: "M13.233 5.71L11.941 7a2.611 2.611 0 0 1-2.974.505l2.974-2.975a.873.873 0 0 0 0-1.235l-1.234-1.237a.873.873 0 0 0-1.236 0L6.497 5.033A2.614 2.614 0 0 1 7 2.058L8.29.768a2.621 2.621 0 0 1 3.705 0l1.237 1.235a2.625 2.625 0 0 1 0 3.707zM4.53 9.47a.873.873 0 0 1 0-1.235l3.706-3.706a.873.873 0 1 1 1.235 1.235L5.765 9.47a.873.873 0 0 1-1.235 0zM2.06 10.706l1.235 1.236a.873.873 0 0 0 1.235 0l2.976-2.976c.463.973.301 2.17-.504 2.976l-1.181 1.29a2.62 2.62 0 0 1-3.707 0L.767 11.888a2.622 2.622 0 0 1 0-3.707L2.057 7a2.616 2.616 0 0 1 2.977-.504L2.06 9.47a.875.875 0 0 0 0 1.236z"
  })));
};

LinkGreen.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LinkGreen;
exports.default = _default;