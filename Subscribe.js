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

var Subscribe = function Subscribe(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.273 2.415A7.976 7.976 0 0 1 6 0c2.245 0 4.275.925 5.727 2.415l-.707.707A6.98 6.98 0 0 0 6 1 6.98 6.98 0 0 0 .98 3.122l-.707-.707zm2.121 2.121A4.985 4.985 0 0 1 6 3c1.417 0 2.696.59 3.606 1.536l-.707.708A3.989 3.989 0 0 0 6 4c-1.14 0-2.17.478-2.899 1.244l-.707-.708z"
  })));
};

Subscribe.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Subscribe;
exports.default = _default;