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

var NotificationsInactive = function NotificationsInactive(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "18"
  }, _react.default.createElement("path", {
    fill: "#DCE6ED",
    "fill-rule": "evenodd",
    d: "M14 12V6c0-2.69-2.31-5-5-5a.97.97 0 0 0-1-1 .97.97 0 0 0-1 1C4.31 1 2 3.31 2 6v6a.97.97 0 0 1-1 1c-.576 0-1 .38-1 1 0 .533.467 1 1 1h14c.533 0 1-.467 1-1 0-.62-.424-1-1-1a.97.97 0 0 1-1-1zm-4 4.043H6C6 17.196 6.847 18 8 18s2-.804 2-1.957z"
  })));
};

NotificationsInactive.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = NotificationsInactive;
exports.default = _default;