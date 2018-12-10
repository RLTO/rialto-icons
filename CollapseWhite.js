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

var CollapseWhite = function CollapseWhite(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "12",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M0 5c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 5zm6.356 2.356l2.288 2.288c.195.195.136.356-.135.356H3.491c-.263 0-.332-.16-.135-.356l2.288-2.288a.505.505 0 0 1 .712 0zm0-4.712a.505.505 0 0 1-.712 0L3.356.356C3.159.159 3.228 0 3.49 0h5.018c.271 0 .33.161.135.356L6.356 2.644z",
    fill: "#FFF",
    "fill-rule": "evenodd"
  })));
};

CollapseWhite.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CollapseWhite;
exports.default = _default;