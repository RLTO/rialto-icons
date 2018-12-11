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

var ViewSmall = function ViewSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "8"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M5 4c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1zm6.997-.053l-.003-.027a.57.57 0 0 0-.126-.293c-.383-.535-.838-1.011-1.301-1.446C9.57 1.244 8.429.461 7.17.145A4.819 4.819 0 0 0 4.98.109c-.665.14-1.307.432-1.907.794-.94.566-1.797 1.346-2.545 2.221a7.44 7.44 0 0 0-.401.503.616.616 0 0 0 0 .746c.382.535.838 1.01 1.3 1.446.998.937 2.139 1.72 3.398 2.036.727.183 1.46.19 2.19.036.666-.14 1.307-.432 1.908-.794.94-.566 1.797-1.346 2.545-2.221.138-.162.276-.327.402-.503a.569.569 0 0 0 .125-.291l.003-.03A.794.794 0 0 0 12 4l-.001-.026a.39.39 0 0 0-.002-.027zM3.5 4c0-1.25 1.25-2.498 2.5-2.5 1.249-.002 2.5 1.24 2.5 2.492S7.249 6.498 6 6.5C4.75 6.502 3.5 5.25 3.5 4z"
  })));
};

ViewSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ViewSmall;
exports.default = _default;