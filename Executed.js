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

var Executed = function Executed(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32"
  }, _react.default.createElement("path", {
    fill: "#329798",
    "fill-rule": "evenodd",
    d: "M12.494 21.76L8.32 17.43l.88-.991 3.336 3.461 10.31-9.66.834 1.04-11.186 10.48zM16 0C7.164 0 0 7.164 0 16s7.164 16 16 16c8.837 0 16-7.164 16-16S24.837 0 16 0z"
  })));
};

Executed.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Executed;
exports.default = _default;