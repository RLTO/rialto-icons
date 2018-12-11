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

var ArrowSelect = function ArrowSelect(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M7 3.5a.5.5 0 0 1-.847.36L3.499 1.206l-2.62 2.62a.499.499 0 1 1-.74-.672l-.001-.001 3-3A.498.498 0 0 1 3.498 0H3.5c.142 0 .269.059.36.153l3 3c.087.09.14.212.14.347zM6.5 6a.5.5 0 0 1 .36.847l-3 3a.5.5 0 0 1-.722 0L.139 6.846A.498.498 0 0 1 .5 6c.152 0 .287.068.38.174l2.619 2.62L6.153 6.14A.499.499 0 0 1 6.5 6z"
  })));
};

ArrowSelect.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowSelect;
exports.default = _default;