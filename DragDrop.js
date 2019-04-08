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

var DragDrop = function DragDrop(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 40 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M28 32.948a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005zM7.638 35.035l2.475 2.462a1 1 0 0 1-.003 1.42l-1.402 1.384a1 1 0 0 1-1.41-.006l-5.886-5.909a2 2 0 0 1 .005-2.828l5.873-5.86a1 1 0 0 1 1.416.005l1.42 1.433a1 1 0 0 1-.003 1.411L7.638 31.03h16.644c.892-4.005 3.994-6.04 7.718-6.04 4.418 0 8 3.554 8 7.98 0 4.424-3.582 8.03-8 8.03-3.724 0-6.826-3.963-7.718-5.965H7.638zM4 8.018a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005zm4 8a8 8 0 0 1-8-8.004C0 3.59 3.582 0 8 0c3.724 0 6.826 1.994 7.718 6h16.644l-2.48-2.469a1 1 0 0 1 0-1.416L31.293.707a1 1 0 0 1 1.414 0l5.88 5.879a2 2 0 0 1 .002 2.826l-5.881 5.896a1 1 0 0 1-1.416 0l-1.414-1.417a1 1 0 0 1 .002-1.415l2.482-2.472H15.718c-.892 4.005-3.994 6.014-7.718 6.014z",
    fill: "#91A6B6",
    fillRule: "evenodd"
  })));
};

DragDrop.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = DragDrop;
exports.default = _default;