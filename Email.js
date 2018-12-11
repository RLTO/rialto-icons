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

var Email = function Email(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M5.5 8c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5c0 1.379-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 5.5 8zM0 8c0 4.412 3.589 8 8 8a7.954 7.954 0 0 0 4.522-1.392c.303-.208.427-.481.218-.786-.208-.303-.569-.282-.872-.074C10.765 14.505 9.36 15 8 15c-3.676 0-7-3.323-7-7 0-3.676 3.324-7 7-7s7 3.186 7 6.862V8.5c0 .863-1 2-1.899 2-1.564 0-1.564-1-1.564-1.862V8A3.541 3.541 0 0 0 8 4.463 3.541 3.541 0 0 0 4.463 8 3.54 3.54 0 0 0 8 11.537a3.53 3.53 0 0 0 2.708-1.267 2.897 2.897 0 0 0 2.393 1.267C14.7 11.537 16 10.098 16 8.5v-.638C16 3.451 12.411 0 8 0S0 3.589 0 8z"
  })));
};

Email.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Email;
exports.default = _default;