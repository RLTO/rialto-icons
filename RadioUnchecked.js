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

var RadioUnchecked = function RadioUnchecked(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "16",
    height: "16"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  })), _react.default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react.default.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#a"
  }), _react.default.createElement("path", {
    stroke: "#DCE6ED",
    "stroke-width": "2",
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"
  }))));
};

RadioUnchecked.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = RadioUnchecked;
exports.default = _default;