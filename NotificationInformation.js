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

var NotificationInformation = function NotificationInformation(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M0 20h20V0H0v20zm2-2h16V2H2v16zM9 7h2V5H9v2zm0 8h2V9H9v6z",
    fill: "#FFF",
    "fill-rule": "evenodd"
  })));
};

NotificationInformation.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = NotificationInformation;
exports.default = _default;