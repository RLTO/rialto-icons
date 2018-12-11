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

var NotificationError = function NotificationError(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M0 20h20V0H0v20zM10 8.5L7.5 6.003 6 7.5 8.5 10 6 12.5l1.5 1.502L10 11.5l2.5 2.502 1.499-1.502L11.5 10l2.499-2.5L12.5 6.003 10 8.5z",
    fill: "#FFF",
    "fill-rule": "evenodd"
  })));
};

NotificationError.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = NotificationError;
exports.default = _default;