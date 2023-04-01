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
var CategoryMeeting = function CategoryMeeting(props) {
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
    viewBox: "0 0 17 15"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M8.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm14 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 14.5a.5.5 0 1 1-1 0v-2a2.5 2.5 0 1 1 5 0v2a.5.5 0 1 1-1 0v-2a1.5 1.5 0 0 0-3 0v2ZM4.5 12a.5.5 0 1 1 0 1H2.765a1 1 0 0 1-.917-1.4l3.063-8a1 1 0 0 1 .916-.6h5.346a1 1 0 0 1 .916.6l3.063 8a1 1 0 0 1-.917 1.4H12.5a.5.5 0 1 1 0-1h1.735l-3.062-8H5.827l-3.062 8H4.5ZM1 10a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5V5a1 1 0 0 1 1-1h.64a1 1 0 0 1 .948.684l.386 1.158a.5.5 0 1 1-.948.316L1.64 5H1v5Zm15 0V5h-.64l-.386 1.158a.5.5 0 0 1-.948-.316l.386-1.158A1 1 0 0 1 15.36 4H16a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5H16a.5.5 0 1 1 0-1Z"
  })));
};
CategoryMeeting.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
CategoryMeeting.defaultProps = {
  fill: "#91A6B6"
};
var _default = CategoryMeeting;
exports["default"] = _default;