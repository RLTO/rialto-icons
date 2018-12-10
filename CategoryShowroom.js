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

var CategoryShowroom = function CategoryShowroom(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "17",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M2 8h1v4h11V8h1v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm.5-.5A2.5 2.5 0 0 1 0 5C0 4.49.939 3.081 3.1.2a.5.5 0 0 1 .4-.2h10a.5.5 0 0 1 .4.2C16.061 3.081 17 4.49 17 5a2.5 2.5 0 0 1-4.5 1.5c-.456.607-1.182 1-2 1a2.496 2.496 0 0 1-2-1c-.456.607-1.182 1-2 1a2.496 2.496 0 0 1-2-1c-.456.607-1.182 1-2 1zM1 5a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.152-1.004-1.662-2.75-4h-9.5C2.004 3.338 1 4.848 1 5z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

CategoryShowroom.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryShowroom;
exports.default = _default;