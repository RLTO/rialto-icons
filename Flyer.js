"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Flyer = function Flyer(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size", "fill", "stroke"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    style: _objectSpread(_objectSpread({}, (0, _iconStyle["default"])(size)), dimensions),
    onClick: onClick
  }, otherProps), /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    d: "M24 24H0V0h24v24zM23 5H1v18h22V5zm-1 17H10V6h12v16zM21 7H11v14h10V7zM6 21H2v-1h4v1zm2-2H2v-1h6v1zm8.391-7.404c-.2-.612-1.262-.528-1.224.231-.114.251-.623 1.148-2.315 1.977-.534.261-.852.742-.852 1.286 0 .888.818 1.443 1.668 1.315l.835.922c.05.055.329.338.752.201l.486-.162c.405-.135.484-.599.302-.868l-.431-.668a3.532 3.532 0 011.163.032.64.64 0 00.677.189.635.635 0 00.392-.816l-1.453-3.639zM8 17H2v-1h6v1zm6.427-1.613l.853 1.331-.233.078-1.129-1.247-.232.075c-.309.095-.736.054-.883-.312-.118-.294 0-.637.383-.825 1.754-.861 2.413-1.827 2.637-2.268l1.16 2.912c-1.288-.313-2.379.193-2.556.256zM20 13.69c0 .124-.01.787-.288 1.344l-.694-.3c.297-.706.286-1.382.036-2-.256-.63-.727-1.12-1.417-1.407l.297-.696c.392.13 2.066 1.003 2.066 3.059zm-1.278-.82a2.16 2.16 0 01-.035 1.719l-.681-.284c.144-.372.201-.728.028-1.155-.162-.4-.443-.646-.825-.807l.289-.687c.612.256 1.009.683 1.224 1.214zM6 14.098H2v-1h4v1zM8 12H2v-1h6v1zm0-1.903H2v-1h6v1zM8 8H2V7h6v1zm15-7H1v3h22V1z"
  })));
};

Flyer.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
Flyer.defaultProps = {
  fill: "#91a6b6"
};
var _default = Flyer;
exports["default"] = _default;