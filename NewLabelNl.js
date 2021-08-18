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

var NewLabelNl = function NewLabelNl(props) {
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
    viewBox: "0 0 56 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 10C0 4.477 4.476 0 9.996 0h36.008C51.524 0 56 4.476 56 10c0 5.523-4.476 10-9.996 10H9.996C4.476 20 0 15.524 0 10z",
    fill: fill
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M49 9.36a.288.288 0 0 0-.281-.294h-1.87l-.58-1.857A.283.283 0 0 0 46 7a.283.283 0 0 0-.269.209l-.58 1.857h-1.87A.288.288 0 0 0 43 9.36a.3.3 0 0 0 .116.239l1.511 1.147-.582 1.866a.306.306 0 0 0-.014.092c0 .163.126.295.282.295a.272.272 0 0 0 .164-.056L46 11.788l1.523 1.156a.27.27 0 0 0 .164.056.288.288 0 0 0 .282-.295.308.308 0 0 0-.014-.092l-.582-1.866 1.51-1.147A.3.3 0 0 0 49 9.36zM13.362 13.5h-1.235L8.958 8.456V13.5H7.723V6.39h1.235l3.179 5.064V6.391h1.225V13.5zm2.764 0h-1.23V6.39h1.23v7.11zm5.674-3.174h-2.92v2.188h3.413v.986h-4.648V6.39h4.614v.997h-3.38V9.35h2.92v.976zm6.699-3.935v4.75c0 .756-.242 1.354-.725 1.795-.483.441-1.127.662-1.931.662-.814 0-1.46-.218-1.939-.652-.478-.435-.717-1.038-.717-1.81V6.392h1.23v4.755c0 .476.12.839.361 1.09.241.25.596.375 1.065.375.95 0 1.426-.501 1.426-1.504V6.391h1.23zm6.895 5.351 1.093-5.351h1.226l-1.64 7.109H34.89l-1.353-5.19-1.382 5.19H30.97l-1.64-7.11h1.225l1.103 5.342 1.358-5.341h1.035l1.343 5.351z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

NewLabelNl.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
NewLabelNl.defaultProps = {
  fill: "#F5A623"
};
var _default = NewLabelNl;
exports["default"] = _default;