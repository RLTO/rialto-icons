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

var LockSmallUnlockedGreen = function LockSmallUnlockedGreen(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "8"
  }, _react.default.createElement("path", {
    fill: "#329798",
    "fill-rule": "evenodd",
    d: "M6 5.01C6 4.451 5.557 4 4.99 4H2V1.999A.997.997 0 0 1 3 1c.552 0 1 .453 1 .997V2h1v-.006A1.992 1.992 0 0 0 3 0C1.895 0 1 .888 1 2v2a1 1 0 0 0-1 1.01v1.98C0 7.549.451 8 .99 8h4.02C5.555 8 6 7.557 6 6.99V5.01z"
  })));
};

LockSmallUnlockedGreen.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LockSmallUnlockedGreen;
exports.default = _default;