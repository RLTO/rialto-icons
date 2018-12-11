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

var DeleteItemCross = function DeleteItemCross(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "4",
    height: "4"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M3.821 3.128a.5.5 0 1 1-.707.71l-1.12-1.12L.862 3.854a.508.508 0 0 1-.713 0 .507.507 0 0 1 0-.716L1.28 2.003.162.887A.5.5 0 1 1 .87.177l1.12 1.12 1.15-1.15a.506.506 0 0 1 .713.715l-1.15 1.15 1.12 1.116z"
  })));
};

DeleteItemCross.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DeleteItemCross;
exports.default = _default;