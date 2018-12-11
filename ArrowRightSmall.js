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

var ArrowRightSmall = function ArrowRightSmall(props) {
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(props.size), props, {
    onClick: props.onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "10"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M.75 0C.336 0 0 .32 0 .714c0 .193.08.367.21.496l3.981 3.792-3.93 3.742A.699.699 0 0 0 0 9.286C0 9.68.336 10 .75 10a.767.767 0 0 0 .519-.199l.002.002 4.5-4.286A.696.696 0 0 0 6 5.003V5a.696.696 0 0 0-.23-.514L1.27.2A.767.767 0 0 0 .75 0z"
  })));
};

ArrowRightSmall.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowRightSmall;
exports.default = _default;