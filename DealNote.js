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

var DealNote = function DealNote(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "14"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M8.429 0C3.724 0 0 2.697 0 6.024c0 1.885 1.151 3.567 3.066 4.672.434.25.484 2.128-1.956 3.261 0 0 3.454.535 5.644-2.183.541.076 1.101.239 1.675.239 4.704 0 7.571-2.661 7.571-5.988C16 2.697 13.133 0 8.429 0z"
  })));
};

DealNote.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DealNote;
exports.default = _default;