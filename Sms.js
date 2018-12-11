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

var Sms = function Sms(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "13"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    d: "M2 0h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7l-3.146 3.146A.5.5 0 0 1 3 11.793V9H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"
  })));
};

Sms.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Sms;
exports.default = _default;