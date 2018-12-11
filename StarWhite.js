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

var StarWhite = function StarWhite(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "6",
    height: "6",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M6 2.36a.288.288 0 0 0-.281-.294h-1.87L3.268.209A.283.283 0 0 0 3 0a.283.283 0 0 0-.269.209l-.58 1.857H.282A.288.288 0 0 0 0 2.36a.3.3 0 0 0 .116.239l1.511 1.147-.582 1.866a.306.306 0 0 0-.014.092c0 .163.126.295.282.295a.272.272 0 0 0 .164-.056L3 4.788l1.523 1.156A.27.27 0 0 0 4.688 6a.288.288 0 0 0 .28-.295.308.308 0 0 0-.013-.092l-.582-1.866L5.883 2.6A.3.3 0 0 0 6 2.36z",
    fill: "#FFF"
  })));
};

StarWhite.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = StarWhite;
exports.default = _default;