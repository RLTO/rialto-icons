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

var IncentiveExpansion = function IncentiveExpansion(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "14",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M5.586 7L2.5 3.914l-.793.793C1.077 5.337 0 4.891 0 4V1a1 1 0 0 1 1-1h3c.89 0 1.337 1.077.707 1.707l-.793.793L7 5.586 10.086 2.5l-.793-.793C8.663 1.077 9.109 0 10 0h3a1 1 0 0 1 1 1v3c0 .89-1.077 1.337-1.707.707l-.793-.793L8.414 7l3.086 3.086.793-.793C12.923 8.663 14 9.109 14 10v3a1 1 0 0 1-1 1h-3c-.89 0-1.337-1.077-.707-1.707l.793-.793L7 8.414 3.914 11.5l.793.793C5.337 12.923 4.891 14 4 14H1a1 1 0 0 1-1-1v-3c0-.89 1.077-1.337 1.707-.707l.793.793L5.586 7z",
    fill: "#152435",
    "fill-rule": "nonzero"
  })));
};

IncentiveExpansion.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentiveExpansion;
exports.default = _default;