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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MimeTypePdf = function MimeTypePdf(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size", "fill", "stroke"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 15 8",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    fill: fill,
    width: "15",
    height: "8",
    rx: "2"
  }), _react.default.createElement("path", {
    d: "M2.669 4.675V6.5h-.96V1.523H3.41c.272 0 .517.04.735.118.219.079.405.188.56.328.153.14.271.309.355.505.083.196.124.413.124.652 0 .224-.041.43-.124.62-.084.188-.202.352-.356.49-.154.137-.34.245-.559.323a2.19 2.19 0 0 1-.735.116H2.67zm0-.78h.741c.137 0 .256-.02.356-.061a.686.686 0 0 0 .402-.412.85.85 0 0 0 .049-.289c0-.116-.016-.224-.05-.324a.708.708 0 0 0-.402-.44.892.892 0 0 0-.355-.066H2.67v1.593zM5.827 6.5V1.523h1.288c.33 0 .63.057.898.17A1.998 1.998 0 0 1 9.14 2.887c.103.28.155.588.155.923v.41c0 .335-.052.642-.155.921-.104.28-.25.52-.436.722a1.945 1.945 0 0 1-.674.47 2.193 2.193 0 0 1-.868.167H5.827zm.967-4.197v3.425h.37c.18 0 .34-.035.483-.103a.99.99 0 0 0 .362-.297c.1-.13.175-.288.228-.474.052-.185.078-.397.078-.634v-.417c0-.223-.025-.426-.077-.61a1.378 1.378 0 0 0-.229-.473 1.047 1.047 0 0 0-.376-.308 1.166 1.166 0 0 0-.518-.11h-.32zm6.412 2.136h-2.133V6.5h-.963V1.523h3.363v.783h-2.4V3.66h2.133v.779z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

MimeTypePdf.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
MimeTypePdf.defaultProps = {
  fill: "#91A6B6"
};
var _default = MimeTypePdf;
exports.default = _default;