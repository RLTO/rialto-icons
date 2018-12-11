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

var DownloadPdf = function DownloadPdf(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    width: "14",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M11 1h3V0h-4v5h1V3h2V2h-2V1zM0 5V0h2.5a1.5 1.5 0 0 1 0 3H1v2H0zm1-3h1.5a.5.5 0 0 0 0-1H1v1zm4 3V0h2.5A1.5 1.5 0 0 1 9 1.5v2A1.5 1.5 0 0 1 7.5 5H5zm1-1h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H6v3zm-4.998 7.998V12a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1v-1.499a.5.5 0 0 1 .499-.5h.002c.276 0 .499.224.499.499V12a2 2 0 0 1-2 2H1.998a1.998 1.998 0 0 1-1.995-2.001l.003-1.502a.5.5 0 1 1 1 .003l-.004 1.498zM6.5 10.293V7a.5.5 0 0 1 1 0v3.293l1.146-1.147a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L6.5 10.293z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

DownloadPdf.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = DownloadPdf;
exports.default = _default;