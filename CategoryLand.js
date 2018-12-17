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

var CategoryLand = function CategoryLand(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 16 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M4.583 6l.334 1H3.52a.75.75 0 0 0-.702.487l-1.191 3.175A.25.25 0 0 0 1.86 11h12.278a.25.25 0 0 0 .234-.338l-1.19-3.175A.75.75 0 0 0 12.48 7h-1.397l.334-1h1.141a2 2 0 0 1 1.898 1.368l1.105 3.316A1 1 0 0 1 14.613 12H1.387a1 1 0 0 1-.948-1.316l1.105-3.316A2 2 0 0 1 3.442 6h1.141zM8 9c-.333 0-.61-.167-.83-.5C6.214 7.119 5 4.16 5 3a3 3 0 1 1 6 0c0 1.159-1.216 4.118-2.17 5.5-.22.333-.497.5-.83.5zm0-1c1-1.667 1.667-3.333 2-5 .206-1.031-.895-2-2-2s-2.206.97-2 2c.333 1.667 1 3.333 2 5zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

CategoryLand.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = CategoryLand;
exports.default = _default;