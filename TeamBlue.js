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

var TeamBlue = function TeamBlue(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M11.586 7.879c.262-.396.414-.87.414-1.379 0-.517-.157-.998-.426-1.396l2.26-2.26a1.5 1.5 0 1 0-.697-.717L10.86 4.403A2.488 2.488 0 0 0 9.5 4c-.51 0-.983.152-1.379.414L5.854 2.147a1.5 1.5 0 1 0-.707.707L7.414 5.12C7.152 5.517 7 5.991 7 6.5c0 .502.148.97.403 1.36l-5.276 5.277a1.5 1.5 0 1 0 .717.697l5.26-5.26c.266.18.57.31.896.376v4.135a1.5 1.5 0 1 0 1 0V8.95c.32-.065.616-.19.879-.364l1.267 1.267a1.5 1.5 0 1 0 .707-.707L11.586 7.88z",
    fill: "#4DC9FF",
    "fill-rule": "evenodd"
  })));
};

TeamBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = TeamBlue;
exports.default = _default;