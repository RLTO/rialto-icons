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

var Information = function Information(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM9.26 4.652a.882.882 0 0 1-.617.253.878.878 0 0 1-.613-.253.855.855 0 0 1 0-1.217.88.88 0 0 1 1.23 0 .86.86 0 0 1 0 1.216zM7.53 12.868a.613.613 0 0 1-.381-.133.599.599 0 0 1-.216-.585l.857-4.303-.472.263a.612.612 0 0 1-.829-.23.599.599 0 0 1 .232-.82l1.623-.904A.614.614 0 0 1 9 6.193a.599.599 0 0 1 .24.604l-.887 4.458.728-.313a.612.612 0 0 1 .801.311.6.6 0 0 1-.315.793l-1.792.772a.616.616 0 0 1-.244.05z"
  })));
};

Information.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Information;
exports.default = _default;