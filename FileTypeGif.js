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

var FileTypeGif = function FileTypeGif(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "21",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react.default.createElement("path", {
    d: "M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1H11l3 3v12.001c0 .552-.45.999-1.007.999H1.007zm.493-1h11c.271 0 .5-.224.5-.501V4h-3V1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498z",
    fill: "#91A6B6"
  }), _react.default.createElement("g", {
    transform: "translate(5 5)"
  }, _react.default.createElement("rect", {
    fill: "#91A6B6",
    width: "16",
    height: "9",
    rx: "2"
  }), _react.default.createElement("rect", {
    fill: "#EDF2F6",
    x: "1",
    y: "1",
    width: "14",
    height: "7",
    rx: "1"
  }), _react.default.createElement("text", {
    "font-family": "RobotoMono-Bold, Roboto Mono",
    "font-size": "7",
    "font-weight": "bold",
    fill: "#91A6B6"
  }, _react.default.createElement("tspan", {
    x: "1.699",
    y: "7"
  }, "GIF"))))));
};

FileTypeGif.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = FileTypeGif;
exports.default = _default;