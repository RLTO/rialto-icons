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

var DocumentTypeZip = function DocumentTypeZip(props) {
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
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .999-1h8.004c.274 0 .657.16.85.353l3.794 3.794c.195.195.353.572.353.847V15c0 .552-.45 1-1.007 1H1.007z",
    fill: fill
  }), _react.default.createElement("path", {
    d: "M1.5 15c-.276 0-.5-.22-.5-.498V1.498C1 1.223 1.23 1 1.5 1H9v4h4v9.49c0 .282-.229.51-.5.51h-11z",
    fill: "#FFF"
  }), _react.default.createElement("path", {
    fillOpacity: ".7",
    fill: "#FFF",
    d: "M9 1v4h4z"
  }), _react.default.createElement("g", {
    transform: "translate(5 6)"
  }, _react.default.createElement("rect", {
    fill: fill,
    width: "15",
    height: "8",
    rx: "2"
  }), _react.default.createElement("path", {
    d: "M2.672 5.724H5.14V6.5H1.503v-.588l2.413-3.606H1.51v-.783h3.568l.004.571-2.41 3.63zm3.387-4.2h2.878v.775h-.97v3.429h.97V6.5H6.06v-.772h.947V2.299H6.06v-.776zm5.011 3.15V6.5h-.96V1.523h1.702c.27 0 .516.04.735.118.218.079.405.188.558.328.154.14.273.309.356.505.083.196.125.413.125.652 0 .224-.042.43-.125.62-.083.188-.202.352-.356.49-.153.137-.34.245-.558.323a2.19 2.19 0 0 1-.735.116h-.742zm0-.778h.742c.136 0 .255-.021.355-.062a.686.686 0 0 0 .402-.412.85.85 0 0 0 .05-.289c0-.116-.017-.224-.05-.324a.708.708 0 0 0-.402-.44.892.892 0 0 0-.355-.066h-.742v1.593z",
    fill: "#FFF",
    fillRule: "nonzero"
  })))));
};

DocumentTypeZip.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
DocumentTypeZip.defaultProps = {
  fill: "#91A6B6"
};
var _default = DocumentTypeZip;
exports.default = _default;