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

var DuplicateGreen = function DuplicateGreen(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M4 4V2.009A2.01 2.01 0 0 1 6.009 0h7.982A2.01 2.01 0 0 1 16 2.009V9.99A2.01 2.01 0 0 1 13.991 12H12v2c0 1.105-.902 2-2.009 2H2.01A2.01 2.01 0 0 1 0 13.991V6.01A2 2 0 0 1 2 4h2zm0 2H3c-.552 0-1 .453-1 .997v6.006c0 .55.453.997.997.997h6.006c.55 0 .997-.444.997-1v-1H6.009A2.01 2.01 0 0 1 4 9.991V6zm2-3.003v6.006c0 .544.446.997.997.997h6.006c.544 0 .997-.446.997-.997V2.997c0-.544-.446-.997-.997-.997H6.997C6.453 2 6 2.446 6 2.997z",
    fill: "#329798",
    "fill-rule": "evenodd"
  })));
};

DuplicateGreen.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DuplicateGreen;
exports.default = _default;