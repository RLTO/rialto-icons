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
var Outlook = function Outlook(props) {
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
    viewBox: "0 0 26.458 25.013"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M98.185 159.524a23873.39 23873.39 0 0 1-17.529-3.113c-.036-.008-.066-10.552-.066-23.43 0-12.879.03-23.423.066-23.43.037-.009 7.952-1.415 17.59-3.125l17.525-3.11.07 6.366.071 6.365 13.288.133 13.288.132.603.603.602.602v31.192l-.602.602-.603.603-13.288.132-13.288.133-.132 6.22-.133 6.222z",
    style: "fill:#fff;strokeWidth:.26458332",
    transform: "matrix(.40974 0 0 .40974 -32.7 -41.942)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m97.866 160.172-18.058-3.211v-48.169l17.926-3.148c9.859-1.731 18.134-3.201 18.388-3.267.432-.11.463.329.463 6.527v6.645h12.953c8.928 0 13.152.092 13.596.294.355.162.777.584.939.938.413.907.413 31.555 0 32.461-.162.355-.584.777-.939.938-.444.203-4.668.294-13.596.294h-12.953v6.483c0 5.024-.074 6.476-.33 6.454-.182-.015-8.457-1.472-18.389-3.239zm44.384-25.195v-13.38l-.768.614c-.422.338-4.353 3.502-8.735 7.03-5.611 4.519-8.162 6.417-8.625 6.417-.44 0-1.795-.92-4.097-2.779l-3.44-2.778V148.358h25.665zm-43.118 8.62c3.909-1.086 6.341-5.237 6.341-10.823 0-4.896-1.728-8.492-4.883-10.163-1.488-.789-4.545-.795-6.254-.012-3.313 1.517-5.27 5.436-5.264 10.534.005 3.93.86 6.313 3.06 8.525 1.915 1.926 4.485 2.638 7 1.939zm-3.987-4.566c-.484-.327-1.186-1.19-1.558-1.918-.6-1.17-.678-1.643-.68-4.101-.002-2.504.07-2.926.733-4.274.817-1.665 1.64-2.337 3.095-2.532 1.943-.26 3.399 1.083 4.103 3.786.72 2.764.302 6.33-.947 8.083-1.131 1.589-3.195 2.004-4.746.956zm38.308-12.75c7.906-6.363 8.797-7.157 8.797-7.847v-.768h-25.665v10.032l3.751 3.047c2.297 1.866 3.862 2.963 4.035 2.83.157-.119 4.243-3.402 9.082-7.295z",
    style: "fill:#006fc4;strokeWidth:.26458332",
    transform: "matrix(.40974 0 0 .40974 -32.7 -41.942)"
  })));
};
Outlook.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
Outlook.defaultProps = {};
var _default = Outlook;
exports["default"] = _default;