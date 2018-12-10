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

var Dashboard = function Dashboard(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M10 17.982c-4.059 0-7.394-3.032-7.904-6.954L6 11.036v-.007l2.417-2.437 3.282 5.627L14.907 11h3.018A7.957 7.957 0 0 1 10 17.982m0-16.018A7.971 7.971 0 0 1 17.936 9H14v.048l-1.96 1.995-2.247-3.866.006-.005L8.754 5.38 7.342 6.795l.009-.006L5.122 9H2.064A7.971 7.971 0 0 1 10 1.964M10 0C4.477 0 0 4.478 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10",
    fill: "#91A6B6",
    "fill-rule": "nonzero"
  })));
};

Dashboard.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Dashboard;
exports.default = _default;