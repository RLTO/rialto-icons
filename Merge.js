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

var Merge = function Merge(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M1.34 11.153l1.052 1.052L.296 14.3a.99.99 0 1 0 1.402 1.402l2.096-2.096 1.051 1.051c.35.35.674-.26.701-.7v-2.51a.994.994 0 0 0-.995-.995h-2.51c-.44.027-1.05.35-.7.7zm9.113-9.111c.027-.44.35-1.052.7-.701l1.052 1.051L14.3.296a.99.99 0 1 1 1.402 1.402l-2.096 2.096 1.051 1.051c.35.35-.26.674-.7.701h-2.51a.994.994 0 0 1-.995-.995v-2.51zM9.4 9.402a1.982 1.982 0 1 0-2.803-2.804A1.982 1.982 0 0 0 9.4 9.4z"
  })));
};

Merge.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Merge;
exports.default = _default;