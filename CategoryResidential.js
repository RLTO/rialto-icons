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

var CategoryResidential = function CategoryResidential(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M14 12v-.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5v2c0 .828-.677 1.5-1.495 1.5H15v1h-1v-1H3v1H2v-1h-.505A1.494 1.494 0 0 1 0 13.5v-2c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5v.5h11zM8 6v5H3.95A2.493 2.493 0 0 0 2 9.05V8.005C2 6.898 2.898 6 3.998 6H8zm1 0h4.002C14.102 6 15 6.898 15 8.005V9.05A2.493 2.493 0 0 0 13.05 11H9V6zm5-3.046V5.17A2.99 2.99 0 0 0 13 5V2.961c-.934-.143-2-.696-2-1.961h5c0 1.164-1.066 1.787-2 1.954zM1 0h6v4H1V0zm1 1v2h4V1H2z"
  })));
};

CategoryResidential.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryResidential;
exports.default = _default;