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

var NewLabelFr = function NewLabelFr(props) {
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
    width: "71",
    height: "20",
    viewBox: "0 0 71 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 10C0 4.477 4.468 0 10.003 0h50.994C66.52 0 71 4.476 71 10c0 5.523-4.468 10-10.003 10H10.003C4.48 20 0 15.524 0 10z",
    fill: fill
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.36a.288.288 0 0 0-.281-.294h-1.87l-.58-1.857A.283.283 0 0 0 61 7a.283.283 0 0 0-.269.209l-.58 1.857h-1.87A.288.288 0 0 0 58 9.36a.3.3 0 0 0 .116.239l1.511 1.147-.582 1.866a.306.306 0 0 0-.014.092c0 .163.126.295.282.295a.272.272 0 0 0 .164-.056L61 11.788l1.523 1.156a.27.27 0 0 0 .164.056.288.288 0 0 0 .282-.295.308.308 0 0 0-.014-.092l-.582-1.866 1.51-1.147A.3.3 0 0 0 64 9.36zM13.362 13.5h-1.235L8.958 8.456V13.5H7.723V6.39h1.235l3.179 5.064V6.391h1.225V13.5zm7.134-3.37c0 .697-.12 1.309-.361 1.834-.241.526-.585.93-1.033 1.211-.448.282-.963.423-1.545.423-.577 0-1.09-.141-1.54-.423-.452-.281-.8-.682-1.046-1.203s-.37-1.122-.373-1.802v-.4c0-.694.123-1.306.368-1.836.246-.531.593-.937 1.04-1.219.448-.281.961-.422 1.54-.422.58 0 1.094.14 1.541.417.448.279.794.68 1.038 1.202.244.522.368 1.13.371 1.823v.396zm-1.235-.37c0-.788-.15-1.392-.447-1.812-.298-.42-.72-.63-1.267-.63-.534 0-.951.21-1.253.628-.3.418-.454 1.01-.461 1.775v.41c0 .781.152 1.385.457 1.811.304.427.726.64 1.267.64.547 0 .967-.208 1.262-.625.294-.417.442-1.025.442-1.826V9.76zm7.666-3.37v4.752c0 .755-.242 1.353-.725 1.794-.484.441-1.127.662-1.931.662-.814 0-1.46-.218-1.939-.652-.478-.435-.718-1.038-.718-1.81V6.392h1.23v4.755c0 .476.121.839.362 1.09.24.25.596.375 1.065.375.95 0 1.425-.501 1.425-1.504V6.391h1.23zm3.823 5.562 1.807-5.561h1.357L31.355 13.5H30.16L27.61 6.39h1.353l1.787 5.562zm8.12-1.626h-2.92v2.188h3.413v.986h-4.648V6.39h4.614v.997H35.95V9.35h2.92v.976zm5.479 1.519h-2.754l-.576 1.655h-1.285l2.686-7.11h1.108l2.69 7.11H44.93l-.581-1.655zm-2.408-.996h2.061l-1.03-2.95-1.03 2.95zm10.2-4.458v4.75c0 .756-.241 1.354-.724 1.795-.484.441-1.128.662-1.932.662-.813 0-1.46-.218-1.938-.652-.479-.435-.718-1.038-.718-1.81V6.392h1.23v4.755c0 .476.121.839.362 1.09.24.25.596.375 1.064.375.95 0 1.426-.501 1.426-1.504V6.391h1.23z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

NewLabelFr.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
NewLabelFr.defaultProps = {
  fill: "#F5A623"
};
var _default = NewLabelFr;
exports["default"] = _default;