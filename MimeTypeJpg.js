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
var MimeTypeJpg = function MimeTypeJpg(props) {
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
    viewBox: "0 0 15 8"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "15",
    height: "8",
    fill: fill,
    rx: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M3.995 1.523h.96l.004 3.45a1.54 1.54 0 0 1-.496 1.152c-.153.14-.332.25-.538.327a1.875 1.875 0 0 1-.665.116c-.25 0-.479-.032-.684-.095a1.466 1.466 0 0 1-.528-.286 1.286 1.286 0 0 1-.343-.477 1.74 1.74 0 0 1-.127-.673h.964c.003.267.062.46.178.58.116.12.296.179.54.179a.708.708 0 0 0 .533-.236.783.783 0 0 0 .149-.261.986.986 0 0 0 .053-.327V1.523Zm2.874 3.152V6.5h-.96V1.523H7.61c.271 0 .516.04.735.118.219.079.405.188.559.328.154.14.272.309.355.505.083.196.125.413.125.652 0 .224-.042.43-.125.62-.083.188-.201.352-.355.49-.154.137-.34.245-.56.323a2.19 2.19 0 0 1-.734.116H6.87Zm0-.78h.742c.137 0 .255-.02.356-.061a.686.686 0 0 0 .402-.412.85.85 0 0 0 .049-.289c0-.116-.017-.224-.05-.324a.708.708 0 0 0-.402-.44.892.892 0 0 0-.355-.066H6.87v1.593Zm6.6 2.024a1.34 1.34 0 0 1-.252.229 1.96 1.96 0 0 1-.382.21 2.826 2.826 0 0 1-1.082.21c-.282 0-.537-.05-.765-.15a1.616 1.616 0 0 1-.584-.434 1.984 1.984 0 0 1-.375-.696 3.067 3.067 0 0 1-.131-.934v-.677c0-.349.046-.66.138-.935.092-.275.22-.508.383-.699a1.643 1.643 0 0 1 1.29-.588c.28 0 .525.035.733.106.209.07.385.173.528.306.144.133.256.296.337.487.081.191.134.407.16.646h-.937c-.032-.255-.11-.447-.231-.576-.122-.129-.31-.193-.566-.193a.654.654 0 0 0-.342.094.84.84 0 0 0-.273.275 1.53 1.53 0 0 0-.185.45 2.526 2.526 0 0 0-.068.62v.684c.002.464.08.82.232 1.068.153.247.387.372.701.374a1.437 1.437 0 0 0 .427-.065c.064-.02.12-.044.17-.07a.377.377 0 0 0 .11-.084l.004-.902h-.824v-.718h1.781l.003 1.962Z"
  }))));
};
MimeTypeJpg.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
MimeTypeJpg.defaultProps = {
  fill: "#91A6B6"
};
var _default = MimeTypeJpg;
exports["default"] = _default;