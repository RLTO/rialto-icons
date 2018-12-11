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

var DeleteItem = function DeleteItem(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.732-6.308a.75.75 0 1 1-1.061 1.066L7.99 9.077l-1.7 1.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l1.7-1.703L5.244 6.33a.75.75 0 1 1 1.061-1.066l1.679 1.682L9.707 5.22a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073L9.053 8.019l1.679 1.673z"
  })));
};

DeleteItem.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DeleteItem;
exports.default = _default;