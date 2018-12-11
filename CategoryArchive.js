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

var CategoryArchive = function CategoryArchive(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "14"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M1.778.443A.868.868 0 0 1 2.498 0H7v4H0L1.778.443zm11.444 0L15 4H8V0h4.502c.283 0 .597.198.72.443zM0 5h15v8.002c0 .551-.449.998-1.007.998H1.007A1.002 1.002 0 0 1 0 13.002V5zm9 5v2h4v-2H9zM3 6v2H1.5l2 2.5 2-2.5H4V6H3z"
  })));
};

CategoryArchive.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryArchive;
exports.default = _default;