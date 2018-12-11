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

var IncentivesBlue = function IncentivesBlue(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "14",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M11.832 1.555l-8 12a1 1 0 1 1-1.664-1.11l8-12a1 1 0 0 1 1.664 1.11zm1.29 11.566A3 3 0 1 1 8.878 8.88a3 3 0 0 1 4.242 4.242zm-2.83-2.828a1 1 0 1 0 1.415 1.414 1 1 0 0 0-1.414-1.414zM5.123 5.12A3 3 0 1 1 .878.88 3 3 0 0 1 5.12 5.12zm-2.83-2.828a1 1 0 1 0 1.415 1.414 1 1 0 0 0-1.414-1.414z",
    fill: "#4DC9FF",
    "fill-rule": "nonzero"
  })));
};

IncentivesBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentivesBlue;
exports.default = _default;