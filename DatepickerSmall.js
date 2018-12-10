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

var DatepickerSmall = function DatepickerSmall(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M2.5 2c.276 0 .5-.214.5-.505v-.99A.508.508 0 0 0 2.5 0c-.276 0-.5.214-.5.505v.99c0 .279.232.505.5.505zm5 0c.276 0 .5-.214.5-.505v-.99A.508.508 0 0 0 7.5 0c-.276 0-.5.214-.5.505v.99c0 .279.232.505.5.505zM9 1v.505C9 2.33 8.334 3 7.5 3 6.672 3 6 2.323 6 1.505V1H4v.505C4 2.33 3.334 3 2.5 3 1.672 3 1 2.323 1 1.505V1c-.552 0-1 .446-1 .998v6.005C0 9.106.887 10 2 10h6a2 2 0 0 0 2-1.997V1.998C10 1.447 9.547 1 9 1zm0 6.99C9 8.549 8.547 9 8.003 9H1.997A.998.998 0 0 1 1 7.99V5h8v2.99z"
  })));
};

DatepickerSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DatepickerSmall;
exports.default = _default;