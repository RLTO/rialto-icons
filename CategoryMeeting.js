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

var CategoryMeeting = function CategoryMeeting(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "17",
    height: "15",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M8.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-7-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm14 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM7 14.5a.5.5 0 1 1-1 0v-2a2.5 2.5 0 1 1 5 0v2a.5.5 0 1 1-1 0v-2a1.5 1.5 0 0 0-3 0v2zM4.5 12a.5.5 0 1 1 0 1H2.765a1 1 0 0 1-.917-1.4l3.063-8a1 1 0 0 1 .916-.6h5.346a1 1 0 0 1 .916.6l3.063 8a1 1 0 0 1-.917 1.4H12.5a.5.5 0 1 1 0-1h1.735l-3.062-8H5.827l-3.062 8H4.5zM1 10a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5V5a1 1 0 0 1 1-1h.64a1 1 0 0 1 .948.684l.386 1.158a.5.5 0 1 1-.948.316L1.64 5H1v5zm15 0V5h-.64l-.386 1.158a.5.5 0 0 1-.948-.316l.386-1.158A1 1 0 0 1 15.36 4H16a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5H16a.5.5 0 1 1 0-1z",
    fill: "#91A6B6",
    "fill-rule": "evenodd"
  })));
};

CategoryMeeting.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = CategoryMeeting;
exports.default = _default;