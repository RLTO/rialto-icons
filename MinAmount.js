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

var MinAmount = function MinAmount(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "4",
    height: "8",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M0 .714C0 .32.336 0 .75 0a.77.77 0 0 1 .52.2l2.5 2.286a.698.698 0 0 1 0 1.031L1.27 5.801A.767.767 0 0 1 .75 6C.336 6 0 5.68 0 5.286c0-.217.102-.411.262-.542L2.19 3.002.211 1.21A.695.695 0 0 1 0 .714zM.75 6.5h2.498a.75.75 0 1 1 0 1.5H.75a.75.75 0 0 1 0-1.5z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

MinAmount.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = MinAmount;
exports.default = _default;