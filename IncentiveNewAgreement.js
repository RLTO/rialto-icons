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

var IncentiveNewAgreement = function IncentiveNewAgreement(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return _react.default.createElement("svg", _extends({}, (0, _iconStyle.default)(size), {
    viewBox: "0 0 16 16",
    onClick: onClick
  }), _react.default.createElement("svg", {
    width: "22",
    height: "22",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M8.675 2.325L11 0l2.325 2.325 3.175-.851.85 3.175 3.176.851-.85 3.175L22 11l-2.325 2.325.851 3.175-3.175.85-.851 3.176-3.175-.85L11 22l-2.325-2.325-3.175.851-.85-3.175-3.176-.851.85-3.175L0 11l2.325-2.325L1.474 5.5l3.175-.85.851-3.176 3.175.85zM6.05 6.05a7 7 0 1 0 9.9 9.9 7 7 0 0 0-9.9-9.9zm7.243 2.243a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293z",
    fill: "#152435",
    "fill-rule": "evenodd"
  })));
};

IncentiveNewAgreement.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = IncentiveNewAgreement;
exports.default = _default;