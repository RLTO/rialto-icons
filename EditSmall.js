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

var EditSmall = function EditSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "11",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M6.758 1.287L1.424 6.506l2.111 2.072L8.87 3.36 6.758 1.287zm3.223-.036L8.925.215a.756.756 0 0 0-1.056 0l-.583.554 2.111 2.073.584-.555a.723.723 0 0 0 0-1.036zM.19 9.787l2.814-.69L.892 7.024.189 9.787z",
    fill: "#329798",
    "fill-rule": "evenodd"
  })));
};

EditSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = EditSmall;
exports.default = _default;