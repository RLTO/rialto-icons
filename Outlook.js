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

var Outlook = function Outlook(props) {
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
    viewBox: "0 0 26.458 25.013"
  }, _react.default.createElement("path", {
    d: "M7.53 23.42C3.594 22.724.362 22.15.347 22.146c-.014-.003-.027-4.323-.027-9.6 0-5.277.013-9.597.027-9.6.015-.004 3.259-.58 7.208-1.28L14.735.39l.029 2.608.029 2.609 5.445.054 5.444.054.247.247.247.247v12.78l-.247.247-.247.247-5.444.054-5.445.054-.054 2.55-.055 2.549z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M7.399 23.686L0 22.37V2.634l7.345-1.29c4.04-.71 7.43-1.312 7.534-1.338.177-.046.19.134.19 2.674v2.723h5.307c3.658 0 5.389.037 5.57.12.146.066.32.24.385.384.17.372.17 12.93 0 13.3a.902.902 0 0 1-.384.385c-.182.083-1.913.12-5.571.12h-5.307v2.657c0 2.058-.03 2.653-.136 2.644-.074-.006-3.465-.603-7.534-1.327zm18.186-10.323V7.88l-.315.252-3.58 2.88c-2.298 1.852-3.344 2.63-3.533 2.63-.18 0-.736-.377-1.679-1.139l-1.41-1.138v7.48h10.517zM7.918 16.895c1.601-.445 2.598-2.146 2.598-4.435 0-2.006-.708-3.48-2.001-4.164-.61-.323-1.862-.326-2.562-.005-1.358.622-2.16 2.227-2.157 4.316.002 1.61.352 2.587 1.254 3.493.784.79 1.837 1.08 2.868.795zm-1.634-1.871c-.198-.134-.486-.488-.639-.786-.245-.48-.277-.673-.278-1.68 0-1.026.029-1.2.3-1.751.335-.683.672-.958 1.269-1.038.795-.107 1.392.444 1.68 1.551.295 1.133.124 2.594-.388 3.312-.463.651-1.308.821-1.944.392zM21.98 9.799c3.24-2.606 3.605-2.932 3.605-3.215V6.27H15.069v4.11l1.537 1.249c.94.764 1.582 1.214 1.653 1.16.064-.05 1.738-1.394 3.72-2.99z",
    fill: fill
  })));
};

Outlook.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
Outlook.defaultProps = {
  fill: "#006fc4"
};
var _default = Outlook;
exports.default = _default;