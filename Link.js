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

var Link = function Link(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M9.452 4.079L8.53 5c-.575.576-1.43.691-2.124.36L8.53 3.236a.623.623 0 0 0 0-.883l-.881-.883a.623.623 0 0 0-.883 0L4.64 3.595A1.867 1.867 0 0 1 5 1.47l.922-.922a1.872 1.872 0 0 1 2.647 0l.883.882c.73.732.73 1.917 0 2.649zM3.236 6.764a.623.623 0 0 1 0-.882l2.647-2.647a.623.623 0 1 1 .882.882L4.118 6.764a.623.623 0 0 1-.882 0zm-1.766.883l.883.883a.623.623 0 0 0 .882 0l2.126-2.126c.33.696.215 1.55-.36 2.126l-.844.921a1.872 1.872 0 0 1-2.648 0l-.96-.96a1.873 1.873 0 0 1 0-2.648L1.468 5a1.868 1.868 0 0 1 2.127-.36L1.47 6.764a.625.625 0 0 0 0 .883z"
  })));
};

Link.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Link;
exports.default = _default;