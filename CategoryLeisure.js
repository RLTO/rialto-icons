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

var CategoryLeisure = function CategoryLeisure(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M8 16a8 8 0 0 1-8-8V2.001A2 2 0 0 1 1.994 0h12.012C15.106 0 16 .899 16 2.008V8a8 8 0 0 1-8 8zm0-1a7 7 0 0 0 7-7V1.993A1 1 0 0 0 13.993 1H2.007A1.01 1.01 0 0 0 1 2v6a7 7 0 0 0 7 7zM3 5c0-.552.443-1 .999-1h1.002C5.553 4 6 4.444 6 5c0 .552-.443 1-.999 1H3.999A.997.997 0 0 1 3 5zm7 0c0-.552.443-1 .999-1h1.002c.552 0 .999.444.999 1 0 .552-.443 1-.999 1h-1.002A.997.997 0 0 1 10 5zM4.5 8c.268 0 .552.21.617.469C5.117 8.469 5.5 11 8 11s2.879-2.518 2.879-2.518A.68.68 0 0 1 11.5 8c.268 0 .458.212.406.475C11.906 8.475 11.5 12 8 12S4.098 8.49 4.098 8.49C4.037 8.215 4.224 8 4.5 8z"
  })));
};

CategoryLeisure.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryLeisure;
exports.default = _default;