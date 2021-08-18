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

var MimeTypePng = function MimeTypePng(props) {
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
    viewBox: "0 0 15 8",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    fill: fill,
    width: "15",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.669 4.675V6.5h-.96V1.523H3.41c.272 0 .517.04.735.118.219.079.405.188.56.328.153.14.271.309.355.505.083.196.124.413.124.652 0 .224-.041.43-.124.62-.084.188-.202.352-.356.49-.154.137-.34.245-.559.323a2.19 2.19 0 0 1-.735.116H2.67zm0-.78h.741c.137 0 .256-.02.356-.061a.686.686 0 0 0 .402-.412.85.85 0 0 0 .049-.289c0-.116-.016-.224-.05-.324a.708.708 0 0 0-.402-.44.892.892 0 0 0-.355-.066H2.67v1.593zM9.129 6.5h-.957L6.787 3.29V6.5H5.82V1.523h.967L8.161 4.72l.004-3.196h.964V6.5zm4.34-.581a1.34 1.34 0 0 1-.252.229 1.96 1.96 0 0 1-.382.21 2.826 2.826 0 0 1-1.082.21c-.282 0-.537-.05-.765-.15a1.616 1.616 0 0 1-.584-.434 1.984 1.984 0 0 1-.375-.696 3.067 3.067 0 0 1-.131-.934v-.677c0-.349.046-.66.138-.935.092-.275.22-.508.383-.699a1.643 1.643 0 0 1 1.29-.588c.28 0 .525.035.733.106.209.07.385.173.528.306.144.133.256.296.337.487.081.191.134.407.16.646h-.937c-.032-.255-.11-.447-.231-.576-.122-.129-.31-.193-.566-.193a.654.654 0 0 0-.342.094.84.84 0 0 0-.273.275 1.53 1.53 0 0 0-.185.45 2.526 2.526 0 0 0-.068.62v.684c.002.464.08.82.232 1.068.153.247.387.372.701.374a1.437 1.437 0 0 0 .427-.065c.064-.02.12-.044.17-.07a.377.377 0 0 0 .11-.084l.004-.902h-.824v-.718h1.781l.003 1.962z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

MimeTypePng.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
MimeTypePng.defaultProps = {
  fill: "#91A6B6"
};
var _default = MimeTypePng;
exports["default"] = _default;