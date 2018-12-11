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

var Apply = function Apply(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "8"
  }, _react.default.createElement("path", {
    fill: "#329798",
    "fill-rule": "evenodd",
    d: "M4.034 7.77l-3.8-3.715a.776.776 0 0 1 0-1.11.81.81 0 0 1 1.132 0L4.6 6.102 10.634.23a.81.81 0 0 1 1.132 0 .776.776 0 0 1 0 1.111l-6.6 6.429a.807.807 0 0 1-1.132 0z"
  })));
};

Apply.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Apply;
exports.default = _default;