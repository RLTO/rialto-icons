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

var CategoryLogistics = function CategoryLogistics(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M12.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM0 11h12.506A2.49 2.49 0 0 1 15 13.5c0 1.38-1.127 2.5-2.494 2.5H0v-1h12.502c.827 0 1.498-.666 1.498-1.5 0-.828-.675-1.5-1.498-1.5H0v-1zm1-5c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1H2c-.552 0-1-.444-1-1V6zM7 .995C7 .445 7.446 0 7.998 0h7.004c.551 0 .998.456.998.995v8.01c0 .55-.446.995-.998.995H7.998C7.447 10 7 9.544 7 9.005V.995zM12 1v1h3V1h-3zm1 2v1h2V3h-2zm1 2v1h1V5h-1zM3 6v1h2V6H3zm1 2v1h1V8H4z"
  })));
};

CategoryLogistics.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryLogistics;
exports.default = _default;