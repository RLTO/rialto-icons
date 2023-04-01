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
var CategoryCoveredCarParking = function CategoryCoveredCarParking(props) {
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
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M.587 2.742c0 .28.215.45.489.377l6.96-1.869 6.96 1.869c.27.072.488-.087.488-.377v-.234a.693.693 0 0 0-.489-.64L8.035 0l-6.96 1.869a.688.688 0 0 0-.488.64v.233zM1 14.992V10.5s0-.5.248-.5H.512c-.29 0-.47-.22-.424-.491l.003-.017c.09-.55.613-.992 1.166-.992h.24L2.987 5C3.484 4 6 4 6 4h4s2.497 0 2.994 1c.496 1 1.49 3.5 1.49 3.5h.24c.553 0 1.075.444 1.166.992l.003.017c.045.27-.145.491-.424.491h-.737c.249 0 .249.5.249.5v4.491c0 .559-.452 1.009-1.01 1.009h-.962A.997.997 0 0 1 12 15v-1H3.98v1c0 .556-.451 1-1.008 1h-.963C1.44 16 1 15.548 1 14.991zM2.49 8.5S5.268 9 8 9c2.732 0 5.49-.5 5.49-.5s-.993-2.5-1.281-3C11.92 5 10.186 5 8 5c-2.186 0-3.94 0-4.228.5-.288.5-1.282 3-1.282 3zm-.474 3.253a.52.52 0 0 0 .513.506h2.123a.374.374 0 0 0 .366-.375.723.723 0 0 0-.328-.567s-1.481-.921-2.156-.808c-.675.113-.518 1.244-.518 1.244zm11.986 0s.157-1.13-.518-1.244c-.675-.113-2.156.808-2.156.808a.723.723 0 0 0-.328.567c0 .201.164.375.365.375h2.123a.52.52 0 0 0 .514-.506z"
  })));
};
CategoryCoveredCarParking.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
CategoryCoveredCarParking.defaultProps = {
  fill: "#91A6B6"
};
var _default = CategoryCoveredCarParking;
exports["default"] = _default;