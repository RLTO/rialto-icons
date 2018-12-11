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

var ArrowPaginationRight = function ArrowPaginationRight(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "9",
    height: "8"
  }, _react.default.createElement("path", {
    fill: "#DCE6ED",
    "fill-rule": "evenodd",
    d: "M0 .714C0 .32.336 0 .75 0a.77.77 0 0 1 .52.2l3.5 3.286a.698.698 0 0 1 0 1.031L1.27 7.801A.767.767 0 0 1 .75 8C.336 8 0 7.68 0 7.286c0-.217.102-.411.262-.542L3.19 4.002.211 1.21A.695.695 0 0 1 0 .714zm5 1C5 1.32 5.336 1 5.75 1a.77.77 0 0 1 .52.2l2.5 2.286a.698.698 0 0 1 0 1.031L6.27 6.801A.767.767 0 0 1 5.75 7C5.336 7 5 6.68 5 6.286c0-.217.101-.411.261-.542l1.93-1.742-1.98-1.792A.695.695 0 0 1 5 1.714z"
  })));
};

ArrowPaginationRight.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowPaginationRight;
exports.default = _default;