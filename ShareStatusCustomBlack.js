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

var ShareStatusCustomBlack = function ShareStatusCustomBlack(props) {
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
    fill: "#152435",
    "fill-rule": "evenodd",
    d: "M8.002 5.002a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5.88-3.135a6.032 6.032 0 0 0-.577-1.384c.28-.377 1.245-1.786.55-2.481l-.358-.377c-.594-.595-2.114.334-2.483.574a6.04 6.04 0 0 0-1.4-.577C9.535 1.65 9.188 0 8.21 0h-.391c-.84 0-1.323 1.706-1.43 2.134a6.05 6.05 0 0 0-1.381.58c-.34-.253-1.795-1.258-2.505-.548l-.377.317c-.619.618.41 2.25.598 2.536-.238.425-.43.88-.56 1.36C1.752 6.443 0 6.781 0 7.788v.392c0 .874 1.837 1.359 2.173 1.44.133.476.325.927.563 1.349-.197.31-1.186 1.935-.573 2.548l.357.297c.808.808 2.494-.518 2.494-.518l-.079-.084c.448.265.932.474 1.444.618.084.344.569 2.169 1.439 2.169h.391c1.142 0 1.425-2.13 1.425-2.13l-.105-.004a6.064 6.064 0 0 0 1.463-.586c.357.237 1.85 1.172 2.447.576l.397-.397c.795-.796-.5-2.424-.536-2.47.246-.43.443-.892.58-1.38.444-.114 2.12-.594 2.12-1.427V7.79c0-1.106-1.993-1.405-2.118-1.423zm-5.88 6.135a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
  })));
};

ShareStatusCustomBlack.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = ShareStatusCustomBlack;
exports.default = _default;