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

var CategoryLeisure = function CategoryLeisure(props) {
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
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M8 16a8 8 0 0 1-8-8V2.001A2 2 0 0 1 1.994 0h12.012C15.106 0 16 .899 16 2.008V8a8 8 0 0 1-8 8zm0-1a7 7 0 0 0 7-7V1.993A1 1 0 0 0 13.993 1H2.007A1.01 1.01 0 0 0 1 2v6a7 7 0 0 0 7 7zM3 5c0-.552.443-1 .999-1h1.002C5.553 4 6 4.444 6 5c0 .552-.443 1-.999 1H3.999A.997.997 0 0 1 3 5zm7 0c0-.552.443-1 .999-1h1.002c.552 0 .999.444.999 1 0 .552-.443 1-.999 1h-1.002A.997.997 0 0 1 10 5zM4.5 8c.268 0 .552.21.617.469C5.117 8.469 5.5 11 8 11s2.879-2.518 2.879-2.518A.68.68 0 0 1 11.5 8c.268 0 .458.212.406.475C11.906 8.475 11.5 12 8 12S4.098 8.49 4.098 8.49C4.037 8.215 4.224 8 4.5 8z"
  })));
};

CategoryLeisure.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
CategoryLeisure.defaultProps = {
  fill: "#91A6B6"
};
var _default = CategoryLeisure;
exports["default"] = _default;