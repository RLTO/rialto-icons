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

var CategoryCarParking = function CategoryCarParking(props) {
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
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 12"
  }, _react.default.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M1 10.991V6.5s0-.5.248-.5H.51c-.29 0-.47-.22-.424-.491l.003-.017c.09-.55.613-.992 1.166-.992h.24L2.986 1C3.483 0 6 0 6 0h4s2.497 0 2.994 1c.497 1 1.49 3.5 1.49 3.5h.24c.554 0 1.076.444 1.167.992l.002.017c.045.27-.144.491-.423.491h-.737c.248 0 .248.5.248.5v4.491c0 .559-.452 1.009-1.009 1.009h-.963A.997.997 0 0 1 12 11v-1H3.98v1c0 .556-.452 1-1.01 1h-.962C1.44 12 1 11.548 1 10.991zM2.49 4.5S5.267 5 8 5c2.732 0 5.49-.5 5.49-.5s-.993-2.5-1.281-3C11.92 1 10.186 1 7.999 1c-2.185 0-3.94 0-4.228.5-.288.5-1.281 3-1.281 3zm-.475 3.253a.52.52 0 0 0 .513.506h2.124a.374.374 0 0 0 .365-.375.723.723 0 0 0-.328-.567s-1.48-.921-2.156-.808c-.675.113-.518 1.244-.518 1.244zm11.987 0s.158-1.13-.518-1.244c-.675-.113-2.156.808-2.156.808a.723.723 0 0 0-.328.567c0 .201.164.375.366.375h2.123a.52.52 0 0 0 .513-.506z"
  })));
};

CategoryCarParking.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
CategoryCarParking.defaultProps = {
  fill: "#91A6B6"
};
var _default = CategoryCarParking;
exports.default = _default;