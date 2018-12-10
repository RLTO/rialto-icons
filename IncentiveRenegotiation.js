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

var IncentiveRenegotiation = function IncentiveRenegotiation(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "22",
    height: "19",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4.5 1.206a1 1 0 1 1 1-1.732 1 1 0 0 1-1 1.732zM18.794 6.5a1 1 0 1 1 1.732-1 1 1 0 0 1-1.732 1zM20 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM2 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1.206-4.5a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1zM6.5 3.206a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732zm7 3.464a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 1 1-1.732-1l1-1.732A1 1 0 0 1 13.5 6.67z",
    fill: "#152435",
    "fill-rule": "evenodd"
  })));
};

IncentiveRenegotiation.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentiveRenegotiation;
exports.default = _default;