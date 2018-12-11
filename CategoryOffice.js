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

var CategoryOffice = function CategoryOffice(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M1 16V8H0V7h4V6H1.999A1 1 0 0 1 1 5.01V.99A1 1 0 0 1 1.995 0h8.01c.55 0 .995.451.995.99v4.02c0 .546-.443.99-.999.99H8v1h9v1h-1v8h-1V8H2v8H1zM2 5h8V1H2v4zm6 4h6v7H8V9zm1 1v5h4v-5H9zm1 1h2v1h-2v-1zm0 2h2v1h-2v-1z"
  })));
};

CategoryOffice.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryOffice;
exports.default = _default;