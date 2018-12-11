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

var Trophy = function Trophy(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "22",
    height: "22",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M16.5 2.5h5V7a5.5 5.5 0 0 1-5.025 5.48 4.502 4.502 0 0 1-3.975 3.993v1.189l5 2V21.5h-13v-1.839l5-2v-1.189a4.502 4.502 0 0 1-3.975-3.992A5.5 5.5 0 0 1 .5 7V2.5h5v-2h11v2zm-11 3h-2V7a2.5 2.5 0 0 0 2 2.45V5.5zm11 0v3.95a2.5 2.5 0 0 0 2-2.45V5.5h-2z",
    fill: "#F5A623",
    stroke: "#FFF",
    "fill-rule": "evenodd"
  })));
};

Trophy.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Trophy;
exports.default = _default;