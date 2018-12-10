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

var IncentiveRenewal = function IncentiveRenewal(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "18",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M.078 7.81a9.002 9.002 0 0 1 15.766-4.654L18 1v6h-6l2.425-2.425A7.002 7.002 0 0 0 2.07 8H2.06a1 1 0 1 1-2 0H.055a9.02 9.02 0 0 1 .023-.19zm17.844 2.38a9.002 9.002 0 0 1-15.766 4.654L0 17v-6h6l-2.425 2.425A7.002 7.002 0 0 0 15.93 10h.011a1 1 0 1 1 2 0h.005a9.016 9.016 0 0 1-.023.19z",
    fill: "#152435",
    "fill-rule": "evenodd"
  })));
};

IncentiveRenewal.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentiveRenewal;
exports.default = _default;