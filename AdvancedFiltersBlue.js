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

var AdvancedFiltersBlue = function AdvancedFiltersBlue(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#4DC9FF",
    "fill-rule": "evenodd",
    d: "M0 1c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 1zm3 4a1 1 0 0 1 .99-1h4.02c.546 0 .99.444.99 1a1 1 0 0 1-.99 1H3.99A.993.993 0 0 1 3 5zm2 4c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1z"
  })));
};

AdvancedFiltersBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = AdvancedFiltersBlue;
exports.default = _default;