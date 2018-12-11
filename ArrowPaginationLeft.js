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

var ArrowPaginationLeft = function ArrowPaginationLeft(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), {
    viewBox: "0 0 16 16"
  }, props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "9",
    height: "8"
  }, _react.default.createElement("path", {
    fill: "#DCE6ED",
    "fill-rule": "evenodd",
    d: "M9 .714C9 .32 8.664 0 8.25 0a.77.77 0 0 0-.52.2l-3.5 3.286a.698.698 0 0 0 0 1.031L7.73 7.801A.767.767 0 0 0 8.25 8c.414 0 .75-.32.75-.714a.699.699 0 0 0-.261-.542l-2.93-2.742 2.98-2.792A.695.695 0 0 0 9 .714zm-5 1C4 1.32 3.664 1 3.25 1a.77.77 0 0 0-.52.2L.23 3.486a.698.698 0 0 0 0 1.031L2.73 6.801A.767.767 0 0 0 3.25 7c.414 0 .75-.32.75-.714a.699.699 0 0 0-.261-.542l-1.93-1.742 1.98-1.792A.695.695 0 0 0 4 1.714z"
  })));
};

ArrowPaginationLeft.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowPaginationLeft;
exports.default = _default;