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

var DeleteItemSmall = function DeleteItemSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12zm2.049-4.73a.563.563 0 1 1-.796.8l-1.26-1.262L4.72 8.085a.571.571 0 0 1-.803 0 .57.57 0 0 1 0-.805l1.275-1.277-1.259-1.255a.563.563 0 1 1 .796-.8l1.26 1.261L7.28 3.915a.57.57 0 0 1 .802.805L6.79 6.014 8.049 7.27z"
  })));
};

DeleteItemSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DeleteItemSmall;
exports.default = _default;