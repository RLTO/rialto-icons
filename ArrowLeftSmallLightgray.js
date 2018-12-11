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

var ArrowLeftSmallLightgray = function ArrowLeftSmallLightgray(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#DCE6ED",
    "fill-rule": "evenodd",
    d: "M5.25 0c.414 0 .75.32.75.714 0 .193-.08.367-.21.496L1.809 5.002l3.93 3.742c.16.131.261.325.261.542 0 .394-.336.714-.75.714a.767.767 0 0 1-.519-.199l-.002.002-4.5-4.286A.696.696 0 0 1 0 5.003V5c0-.202.088-.384.23-.514L4.73.2a.767.767 0 0 1 .52-.2z"
  })));
};

ArrowLeftSmallLightgray.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowLeftSmallLightgray;
exports.default = _default;