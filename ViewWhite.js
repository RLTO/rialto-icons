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

var ViewWhite = function ViewWhite(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#FFF",
    "fill-rule": "evenodd",
    d: "M8 3.244c-.829 0-1.5.726-1.5 1.62 0 .896.671 1.621 1.5 1.621.828 0 1.5-.725 1.5-1.62 0-.895-.672-1.621-1.5-1.621zm7.999 1.723l-.002-.022-.001-.01a.081.081 0 0 0-.002-.017l-.002-.018v-.002a.688.688 0 0 0-.168-.364c-.51-.669-1.118-1.264-1.735-1.807C12.76 1.555 11.24.575 9.56.18A6.842 6.842 0 0 0 6.64.136c-.887.175-1.742.54-2.543.993C2.844 1.836 1.7 2.812.703 3.905a9.429 9.429 0 0 0-.536.63.732.732 0 0 0 0 .931c.51.669 1.118 1.264 1.735 1.808 1.33 1.171 2.85 2.15 4.53 2.545.97.228 1.946.238 2.921.045.887-.176 1.742-.54 2.543-.992 1.252-.708 2.396-1.683 3.393-2.777.184-.203.368-.409.536-.629a.69.69 0 0 0 .167-.364V5.1a.23.23 0 0 0 .003-.018l.002-.016v-.011L16 5.033 16 5l-.001-.033zm-8 3.139C6.344 8.106 5 6.655 5 4.865s1.343-3.242 3-3.242 3 1.452 3 3.242-1.344 3.241-3 3.241z"
  })));
};

ViewWhite.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ViewWhite;
exports.default = _default;