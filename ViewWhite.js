"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));

var _excluded = ["dimensions", "onClick", "size", "fill", "stroke"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ViewWhite = function ViewWhite(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    style: _objectSpread(_objectSpread({}, (0, _iconStyle["default"])(size)), dimensions),
    onClick: onClick
  }, otherProps), /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "10",
    viewBox: "0 0 16 10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FFF",
    fillRule: "evenodd",
    d: "M8 3.244c-.829 0-1.5.726-1.5 1.62 0 .896.671 1.621 1.5 1.621.828 0 1.5-.725 1.5-1.62 0-.895-.672-1.621-1.5-1.621zm7.999 1.723-.002-.022-.001-.01a.081.081 0 0 0-.002-.017l-.002-.018v-.002a.688.688 0 0 0-.168-.364c-.51-.669-1.118-1.264-1.735-1.807C12.76 1.555 11.24.575 9.56.18A6.842 6.842 0 0 0 6.64.136c-.887.175-1.742.54-2.543.993C2.844 1.836 1.7 2.812.703 3.905a9.429 9.429 0 0 0-.536.63.732.732 0 0 0 0 .931c.51.669 1.118 1.264 1.735 1.808 1.33 1.171 2.85 2.15 4.53 2.545.97.228 1.946.238 2.921.045.887-.176 1.742-.54 2.543-.992 1.252-.708 2.396-1.683 3.393-2.777.184-.203.368-.409.536-.629a.69.69 0 0 0 .167-.364V5.1a.23.23 0 0 0 .003-.018l.002-.016v-.011L16 5.033 16 5l-.001-.033zm-8 3.139C6.344 8.106 5 6.655 5 4.865s1.343-3.242 3-3.242 3 1.452 3 3.242-1.344 3.241-3 3.241z"
  })));
};

ViewWhite.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
ViewWhite.defaultProps = {};
var _default = ViewWhite;
exports["default"] = _default;