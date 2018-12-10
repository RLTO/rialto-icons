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

var Disregarded = function Disregarded(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M27.313 4.685c-6.245-6.247-16.374-6.247-22.626 0-6.253 6.246-6.245 16.377 0 22.63 6.245 6.247 16.374 6.247 22.626 0 6.253-6.246 6.245-16.384 0-22.63zm-3.93 17.792l-.907.908-6.491-6.477-6.46 6.446-.908-.908L15.077 16l-6.46-6.446.907-.908 6.46 6.446 6.492-6.477.907.908L16.893 16l6.49 6.477z"
  })));
};

Disregarded.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Disregarded;
exports.default = _default;