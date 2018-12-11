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

var CategoryCoworking = function CategoryCoworking(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "15",
    height: "15",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M7.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-2 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.298 2.684c.16.298.379.559.64.768L3.702 5.316a2.511 2.511 0 0 0-.64-.768l2.236-1.864zm4.404 0l2.236 1.864c-.261.21-.48.47-.64.768L9.062 3.452c.261-.21.48-.47.64-.768zm-8.01 6.309c.345-.026.67-.123.962-.275l.654 2.29c-.345.025-.67.122-.962.274l-.654-2.29zm11.616 0l-.654 2.289a2.485 2.485 0 0 0-.962-.275l.654-2.289c.292.152.617.249.962.275zM9.05 14h-3.1a2.511 2.511 0 0 0 0-1h3.1a2.511 2.511 0 0 0 0 1zM7.5 10.65a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z",
    "fill-rule": "nonzero",
    fill: "#91A6B6"
  })));
};

CategoryCoworking.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryCoworking;
exports.default = _default;