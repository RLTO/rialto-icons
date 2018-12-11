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

var Search = function Search(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M15.56 13.44l-4.396-4.397A5.962 5.962 0 0 0 12 6a6 6 0 1 0-6 6c1.112 0 2.15-.308 3.043-.835l4.396 4.396a1.5 1.5 0 1 0 2.122-2.121zM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6z"
  })));
};

Search.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Search;
exports.default = _default;