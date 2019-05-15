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

var SettingsBlack = function SettingsBlack(props) {
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
    viewBox: "0 0 14 16"
  }, _react.default.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M1.5 6C.672 6 0 6.674 0 7.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2C3 6.672 2.334 6 1.5 6zm5 2C5.672 8 5 8.674 5 9.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2C8 8.672 7.334 8 6.5 8zm6-4c-.828 0-1.5.674-1.5 1.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2c0-.828-.666-1.5-1.5-1.5zm-11-4c-.25 0-.5.5-.5.5V5h1V.5S1.75 0 1.5 0zm5 0c-.25 0-.5.5-.5.5V7h1V.5S6.75 0 6.5 0zm6 0c-.25 0-.5.5-.5.5V3h1V.5s-.25-.5-.5-.5zm-11 16c.25 0 .5-.5.5-.5V12H1v3.5s.25.5.5.5zm5 0c.25 0 .5-.5.5-.5V14H6v1.5s.25.5.5.5zm6 0c.25 0 .5-.5.5-.5V10h-1v5.5s.25.5.5.5z"
  })));
};

SettingsBlack.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
SettingsBlack.defaultProps = {
  fill: "#152435"
};
var _default = SettingsBlack;
exports.default = _default;