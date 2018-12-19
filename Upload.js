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

var Upload = function Upload(props) {
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
    d: "M12.5 11H4s-3.019-.31-3-3c.01-1.52 1.344-2.91 3-3 0-2.07 1.325-4 3.5-4 1.716 0 2.861 1.05 3.269 2.505C13.246 3.4 14.922 5.36 15 7c.068 1.415-1.16 3.24-2.5 4zm-.966-8.485A4.493 4.493 0 0 0 3.015 4.17C1.272 4.67 0 6.195 0 8c0 2.13 1.77 3.865 4 3.99l8.5.01c1.719-.745 3.5-2.825 3.5-4.75 0-2.53-1.976-4.59-4.466-4.735zm-6.34 3.233A.749.749 0 0 0 5.75 7h1.25v1.99a1 1 0 1 0 2 0V7h1.25a.75.75 0 0 0 .558-1.252l-2.25-2.5a.748.748 0 0 0-1.115 0l-2.25 2.5z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

Upload.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = Upload;
exports.default = _default;