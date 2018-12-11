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

var Commission = function Commission(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M6.5 0C10.09 0 13 2.866 13 6.4 13 9.934 6.5 16 6.5 16S0 9.934 0 6.4 2.91 0 6.5 0zM4 10v1h1v-1H4zm2 0v1h1v-1H6zm2 0v1h1v-1H8zM4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-.393-4.817L4.11 8.185l.786.623 4-4.996-.788-.63z"
  })));
};

Commission.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Commission;
exports.default = _default;