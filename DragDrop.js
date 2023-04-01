"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));
var _excluded = ["dimensions", "onClick", "size", "fill", "stroke"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DragDrop = function DragDrop(props) {
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
    viewBox: "0 0 40 41"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M28 32.948a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005ZM7.638 35.035l2.475 2.462a1 1 0 0 1-.003 1.42l-1.402 1.384a1 1 0 0 1-1.41-.006l-5.886-5.909a2 2 0 0 1 .005-2.828l5.873-5.86a1 1 0 0 1 1.416.005l1.42 1.433a1 1 0 0 1-.003 1.411L7.638 31.03h16.644c.892-4.005 3.994-6.04 7.718-6.04 4.418 0 8 3.554 8 7.98 0 4.424-3.582 8.03-8 8.03-3.724 0-6.826-3.963-7.718-5.965H7.638ZM4 8.018a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005Zm4 8a8 8 0 0 1-8-8.004C0 3.59 3.582 0 8 0c3.724 0 6.826 1.994 7.718 6h16.644l-2.48-2.469a1 1 0 0 1 0-1.416L31.293.707a1 1 0 0 1 1.414 0l5.88 5.879a2 2 0 0 1 .002 2.826l-5.881 5.896a1 1 0 0 1-1.416 0l-1.414-1.417a1 1 0 0 1 .002-1.415l2.482-2.472H15.718c-.892 4.005-3.994 6.014-7.718 6.014Z"
  })));
};
DragDrop.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
DragDrop.defaultProps = {
  fill: "#91A6B6"
};
var _default = DragDrop;
exports["default"] = _default;