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

var Datepicker = function Datepicker(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M3.5 4c.276 0 .5-.215.5-.49V.49A.5.5 0 0 0 3.5 0c-.276 0-.5.215-.5.49v3.02a.5.5 0 0 0 .5.49zm2.782 3.75H6.28h.002-.001zM12.5 4c.276 0 .5-.215.5-.49V.49a.5.5 0 0 0-.5-.49c-.276 0-.5.215-.5.49v3.02a.5.5 0 0 0 .5.49zM14 2v1.5c0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5V2H5v1.5C5 4.328 4.334 5 3.5 5 2.672 5 2 4.334 2 3.5V2H1c-.552 0-1 .45-1 1.007v11.986C0 15.55.445 16 1 16h14c.552 0 1-.45 1-1.007V3.007C16 2.45 15.556 2 15 2h-1zm1 13H1V6h14v9z"
  })));
};

Datepicker.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Datepicker;
exports.default = _default;