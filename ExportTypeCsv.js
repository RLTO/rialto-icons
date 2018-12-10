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

var ExportTypeCsv = function ExportTypeCsv(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "23",
    height: "13"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M3.007 0h16.986A2.996 2.996 0 0 1 23 2.999V10A3.003 3.003 0 0 1 19.993 13H3.007A2.996 2.996 0 0 1 0 10.001V3A3.003 3.003 0 0 1 3.007 0zm-.012 1C1.893 1 1 1.9 1 2.992v7.016A2 2 0 0 0 2.995 12h17.01C21.107 12 22 11.1 22 10.008V2.992A2 2 0 0 0 20.005 1H2.995zM8 8c-.003 1.117-.9 2-2.005 2h-.99A2.003 2.003 0 0 1 3 7.994V5.006C3 3.886 3.898 3 5.005 3h.99C7.105 3 7.997 3.895 8 5H7c0-.552-.443-1-.999-1H4.999A.997.997 0 0 0 4 5v3c0 .552.443 1 .999 1h1.002A.997.997 0 0 0 7 8h1zm3.005-5A1.998 1.998 0 0 0 9 5c0 1.105.888 2 2 2h.99c.558 0 1.01.444 1.01 1 0 .552-.443 1-.999 1h-1.002C10.447 9 10 8.544 10 8.004v-.01H9v.005A2 2 0 0 0 11.005 10h.99A1.998 1.998 0 0 0 14 8c0-1.105-.888-2-2-2h-.99C10.451 6 10 5.556 10 5c0-.552.443-1 .999-1h1.002c.552 0 .999.453.999 1h1a2 2 0 0 0-2.005-2h-.99zM17.5 8.25L19 3h1l-2 7h-1l-2-7h1l1.5 5.25z"
  })));
};

ExportTypeCsv.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ExportTypeCsv;
exports.default = _default;