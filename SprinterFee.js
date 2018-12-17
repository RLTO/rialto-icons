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

var SprinterFee = function SprinterFee(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10 2.07V1h1V0H7v1h1v1.07A7.008 7.008 0 0 0 2.29 7H3.34a6 6 0 1 1 7.606 7.677c.035.101.053.21.053.323v.71a7.003 7.003 0 0 0 3.425-11.135l1.227-1.227a.493.493 0 0 0-.002-.698l-.3-.3a.495.495 0 0 0-.698-.002l-1.227 1.227A6.969 6.969 0 0 0 10 2.071zm1.798 3.572a.307.307 0 0 1 .383.039l.138.138c.1.1.12.268.04.383l-3.217 4.596a.204.204 0 0 1-.313.031L7.171 9.171c-.095-.095-.084-.232.031-.313l4.596-3.216zM0 9.5c0-.276.215-.5.49-.5h3.02a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5H.49A.5.5 0 0 1 0 9.5zm0 2c0-.276.215-.5.498-.5h4.004c.275 0 .498.232.498.5 0 .276-.215.5-.498.5H.498A.504.504 0 0 1 0 11.5zm0 4c0-.276.222-.5.51-.5h7.98a.51.51 0 0 1 .51.5c0 .276-.222.5-.51.5H.51a.51.51 0 0 1-.51-.5zm0-2c0-.276.233-.5.503-.5h5.994c.278 0 .503.232.503.5 0 .276-.233.5-.503.5H.503A.507.507 0 0 1 0 13.5z"
  })));
};

SprinterFee.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = SprinterFee;
exports.default = _default;