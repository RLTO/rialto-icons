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

var Close = function Close(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10 1.071A1.071 1.071 0 0 0 8.171.314L5 3.485 1.829.314A1.071 1.071 0 1 0 .314 1.829L3.484 5 .315 8.171a1.071 1.071 0 0 0 1.515 1.515L5 6.516l3.171 3.17a1.071 1.071 0 1 0 1.515-1.515L6.516 5l3.17-3.17A1.07 1.07 0 0 0 10 1.07z"
  })));
};

Close.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Close;
exports.default = _default;