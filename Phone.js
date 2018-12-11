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

var Phone = function Phone(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "none",
    stroke: "#91A6B6",
    d: "M6.146 5.074a1.473 1.473 0 0 0 0-2.081L4.584 1.43a1.472 1.472 0 0 0-2.081 0l-.856.856a2.205 2.205 0 0 0-.28 2.778 34.224 34.224 0 0 0 9.568 9.568 2.208 2.208 0 0 0 2.778-.278l.856-.857a1.472 1.472 0 0 0 0-2.082l-1.561-1.561a1.472 1.472 0 0 0-2.082 0l-.52.52a34.97 34.97 0 0 1-4.78-4.782l.52-.52h0z"
  })));
};

Phone.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Phone;
exports.default = _default;