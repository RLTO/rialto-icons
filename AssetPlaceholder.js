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

var AssetPlaceholder = function AssetPlaceholder(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "94",
    height: "94"
  }, _react.default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "#91A6B6",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, _react.default.createElement("path", {
    d: "M1 29h36v64H1zM5 13h28v16H5zM19 13V1M65 37h28v56H65zM69 25h20v12H69zM37 53h28M37 93h28M13 21h12M9 37h20M9 45h20M9 53h20M9 61h20M9 69h20M9 77h20m44-32h12m-12 8h12m-12 8h12m-12 8h12m-12 8h12M45 61h12m-12 8h12m-12 8h12"
  }), _react.default.createElement("path", {
    d: "M11 85h8v8h-8zM77 85h8v8h-8z"
  }))));
};

AssetPlaceholder.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = AssetPlaceholder;
exports.default = _default;