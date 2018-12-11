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

var CategoryIndustrial = function CategoryIndustrial(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "16",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M11 14a1 1 0 0 0 1-1V4l-1 .75V3.5L13 2v11c0 .364-.097.706-.268 1H1a1 1 0 0 1-1-1V7l4-3v3l4-3v3l3-2.25V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v13h-5V4.75 14zm-9-3v2h2v-2H2zm3 0v2h2v-2H5zm3 0v2h2v-2H8zM2 8v2h2V8H2zm3 0v2h2V8H5zm3 0v2h2V8H8z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

CategoryIndustrial.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryIndustrial;
exports.default = _default;