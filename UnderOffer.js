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

var UnderOffer = function UnderOffer(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "16"
  }, _react.default.createElement("path", {
    fill: "#91A6B6",
    "fill-rule": "evenodd",
    d: "M10.16 0L9.143 1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498h11c.271 0 .5-.224.5-.501V4.17l1-.99V15c0 .552-.45.999-1.007.999H1.007A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1h9.165zM3 10h8v1H3v-1zm0 2h8v1H3v-1zm1.689-3.213l.703-2.763 2.111 2.073-2.814.69zm4.57-6.5l2.11 2.073-3.334 3.218-2.111-2.072 3.334-3.219zm4.222-1.036a.723.723 0 0 1 0 1.036l-1.584 1.555-2.111-2.073L11.369.215a.756.756 0 0 1 1.056 0l1.056 1.036z"
  })));
};

UnderOffer.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = UnderOffer;
exports.default = _default;