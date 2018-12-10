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

var DeleteText = function DeleteText(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "12"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M13.731 7.692a.75.75 0 1 1-1.061 1.066l-1.679-1.681-1.7 1.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l1.7-1.703L8.243 4.33a.75.75 0 1 1 1.061-1.066l1.678 1.682 1.725-1.726a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073l-1.725 1.726 1.68 1.673zM5.027.002a.502.502 0 0 0-.39.14L.143 5.62A.494.494 0 0 0 0 6c-.007.14.038.28.143.385l4.494 5.46a.51.51 0 0 0 .354.145l11.003.008c1.107.001 2.004-.9 2.005-2.006V2.01C18 .9 17.11 0 16.002 0H5.027z"
  })));
};

DeleteText.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DeleteText;
exports.default = _default;