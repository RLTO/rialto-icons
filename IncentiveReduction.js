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

var IncentiveReduction = function IncentiveReduction(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "20",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M6 6v6h8V6H6zM5 4h10V1c0-1.207 1.743-1.38 1.98-.196.13.649.374 1.136.727 1.49.353.352.84.596 1.489.726C20.38 3.257 20.207 5 19 5h-3v8h3c1.207 0 1.38 1.744.196 1.98-.649.13-1.136.374-1.49.727-.352.353-.596.84-.726 1.49C16.743 18.38 15 18.206 15 17v-3H5v3c0 1.207-1.743 1.38-1.98.196-.13-.649-.374-1.136-.727-1.49-.353-.352-.84-.596-1.489-.726C-.38 14.743-.207 13 1 13h3V5H1C-.207 5-.38 3.256.804 3.02c.649-.13 1.136-.374 1.49-.727.352-.353.596-.84.726-1.49C3.257-.38 5-.206 5 1v3z",
    fill: "#152435",
    "fill-rule": "nonzero"
  })));
};

IncentiveReduction.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentiveReduction;
exports.default = _default;