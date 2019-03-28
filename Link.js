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

var Link = function Link(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    fillRule: "evenodd",
    d: "M9.452 4.079L8.53 5c-.575.576-1.43.691-2.124.36L8.53 3.236a.623.623 0 0 0 0-.883l-.881-.883a.623.623 0 0 0-.883 0L4.64 3.595A1.867 1.867 0 0 1 5 1.47l.922-.922a1.872 1.872 0 0 1 2.647 0l.883.882c.73.732.73 1.917 0 2.649zM3.236 6.764a.623.623 0 0 1 0-.882l2.647-2.647a.623.623 0 1 1 .882.882L4.118 6.764a.623.623 0 0 1-.882 0zm-1.766.883l.883.883a.623.623 0 0 0 .882 0l2.126-2.126c.33.696.215 1.55-.36 2.126l-.844.921a1.872 1.872 0 0 1-2.648 0l-.96-.96a1.873 1.873 0 0 1 0-2.648L1.468 5a1.868 1.868 0 0 1 2.127-.36L1.47 6.764a.625.625 0 0 0 0 .883z"
  })));
};

Link.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = Link;
exports.default = _default;