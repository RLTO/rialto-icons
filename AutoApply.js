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

var AutoApply = function AutoApply(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "8",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M5.087 8.75l-.548.677a.424.424 0 0 1-.592.065.414.414 0 0 1-.065-.586L7.25 4.74C7.5 4.432 8 4.606 8 5v4.167c0 .23-.189.416-.421.416a.419.419 0 0 1-.421-.416V8.75H5.087zm2.081-.833v-1.73l-1.397 1.73h1.397zm-3.274-3.75h1.58c.356 0 .551.408.326.68L2.01 9.431c-.28.34-.832.074-.736-.355l.728-3.243H.422a.416.416 0 0 1-.326-.68L3.886.569c.28-.34.833-.074.736.355l-.728 3.243z",
    fill: "#91A6B6",
    "fill-rule": "nonzero"
  })));
};

AutoApply.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = AutoApply;
exports.default = _default;