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

var Edit = function Edit(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10.258 2.287L2.924 9.506l2.111 2.072L12.37 4.36l-2.112-2.073zm4.223 0a.723.723 0 0 0 0-1.036L13.425.215a.756.756 0 0 0-1.056 0l-1.583 1.554 2.111 2.073 1.584-1.555zM16 15c0-.552-.445-1-1-1H1c-.552 0-1 .444-1 1 0 .552.445 1 1 1h14c.552 0 1-.444 1-1zM2.392 10.024l-.703 2.763 2.814-.69-2.111-2.073z"
  })));
};

Edit.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Edit;
exports.default = _default;