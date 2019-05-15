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

var CategoryMeeting = function CategoryMeeting(props) {
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
    viewBox: "0 0 17 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M8.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-7-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm14 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM7 14.5a.5.5 0 1 1-1 0v-2a2.5 2.5 0 1 1 5 0v2a.5.5 0 1 1-1 0v-2a1.5 1.5 0 0 0-3 0v2zM4.5 12a.5.5 0 1 1 0 1H2.765a1 1 0 0 1-.917-1.4l3.063-8a1 1 0 0 1 .916-.6h5.346a1 1 0 0 1 .916.6l3.063 8a1 1 0 0 1-.917 1.4H12.5a.5.5 0 1 1 0-1h1.735l-3.062-8H5.827l-3.062 8H4.5zM1 10a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5V5a1 1 0 0 1 1-1h.64a1 1 0 0 1 .948.684l.386 1.158a.5.5 0 1 1-.948.316L1.64 5H1v5zm15 0V5h-.64l-.386 1.158a.5.5 0 0 1-.948-.316l.386-1.158A1 1 0 0 1 15.36 4H16a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5H16a.5.5 0 1 1 0-1z",
    fill: fill,
    fillRule: "evenodd"
  })));
};

CategoryMeeting.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
CategoryMeeting.defaultProps = {
  fill: "#91A6B6"
};
var _default = CategoryMeeting;
exports.default = _default;