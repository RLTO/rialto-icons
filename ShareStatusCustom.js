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

var ShareStatusCustom = function ShareStatusCustom(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M5.002 8.002a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm1.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6.803-3.019c.28-.377 1.245-1.786.55-2.481l-.358-.377c-.594-.595-2.114.334-2.483.574a6.04 6.04 0 0 0-1.4-.577C9.535 1.65 9.188 0 8.21 0h-.391c-.84 0-1.323 1.706-1.43 2.134a6.05 6.05 0 0 0-1.381.58c-.34-.253-1.795-1.258-2.505-.548l-.377.317c-.619.618.41 2.25.598 2.536-.238.425-.43.88-.56 1.36C1.752 6.443 0 6.781 0 7.788v.392c0 .874 1.837 1.359 2.173 1.44.133.476.325.927.563 1.349-.197.31-1.186 1.935-.573 2.548l.357.297c.808.808 2.494-.518 2.494-.518l-.079-.084c.448.265.932.474 1.444.618.084.344.569 2.169 1.439 2.169h.391c1.142 0 1.425-2.13 1.425-2.13l-.105-.004a6.064 6.064 0 0 0 1.463-.586c.357.237 1.85 1.172 2.447.576l.397-.397c.795-.796-.5-2.424-.536-2.47.246-.43.443-.892.58-1.38.444-.114 2.12-.594 2.12-1.427V7.79c0-1.106-1.993-1.405-2.118-1.423a6.032 6.032 0 0 0-.577-1.384zM3.502 8.002a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"
  })));
};

ShareStatusCustom.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ShareStatusCustom;
exports.default = _default;