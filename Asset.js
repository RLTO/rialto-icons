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

var Asset = function Asset(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M6.995 0h8.01c.54 0 .995.448.995 1v15h-2v-2.001a.996.996 0 0 0-.999-.999h-1.002a.996.996 0 0 0-.999.999V16H9V5H6V4h3.51c.275 0 .49-.224.49-.5a.5.5 0 0 0-.49-.5H6V2h4.502A.494.494 0 0 0 11 1.5c0-.268-.223-.5-.498-.5H6c0-.547.446-1 .995-1zM.997 6H8v10H5v-2.001A.997.997 0 0 0 4 13c-.556 0-1 .447-1 .999V16H0v-4h1.495c.291 0 .505-.224.505-.5 0-.268-.226-.5-.505-.5H0v-1h2.505c.28 0 .495-.224.495-.5 0-.268-.222-.5-.495-.5H0V8h3.51c.275 0 .49-.224.49-.5a.5.5 0 0 0-.49-.5H0v-.003C0 6.453.446 6 .997 6z"
  })));
};

Asset.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Asset;
exports.default = _default;