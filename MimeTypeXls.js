"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));

var _excluded = ["dimensions", "onClick", "size", "fill", "stroke"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MimeTypeXls = function MimeTypeXls(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    style: _objectSpread(_objectSpread({}, (0, _iconStyle["default"])(size)), dimensions),
    onClick: onClick
  }, otherProps), /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 15 8",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    fill: fill,
    width: "15",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m3.332 3.308.885-1.785h1.128L3.944 3.991 5.379 6.5H4.26l-.914-1.812L2.436 6.5H1.302l1.435-2.509L1.34 1.523H2.46l.872 1.785zm3.544 2.416h2.331V6.5H5.912V1.523h.964v4.201zm5.756-.523a.59.59 0 0 0-.203-.467 1.16 1.16 0 0 0-.29-.184 2.776 2.776 0 0 0-.447-.155 4.211 4.211 0 0 1-.62-.223 2.259 2.259 0 0 1-.521-.32 1.488 1.488 0 0 1-.361-.438 1.188 1.188 0 0 1-.135-.575c0-.21.044-.4.133-.57.09-.171.212-.317.37-.438.157-.12.342-.214.557-.279.214-.064.446-.097.697-.097.26 0 .497.038.712.113.216.075.4.18.556.316a1.44 1.44 0 0 1 .492 1.099h-.937a.978.978 0 0 0-.06-.308.65.65 0 0 0-.157-.24.721.721 0 0 0-.26-.158 1.067 1.067 0 0 0-.363-.056c-.128 0-.241.015-.34.046a.738.738 0 0 0-.252.13.555.555 0 0 0-.208.446.47.47 0 0 0 .07.253.69.69 0 0 0 .203.203c.09.06.197.116.323.166.127.05.27.097.43.14.227.066.437.147.628.243.192.095.356.209.494.34a1.332 1.332 0 0 1 .436 1.007c0 .218-.044.412-.132.582a1.26 1.26 0 0 1-.364.43c-.155.118-.34.207-.553.267-.215.06-.448.09-.701.09-.157 0-.314-.013-.47-.042a2.182 2.182 0 0 1-.448-.131 1.97 1.97 0 0 1-.398-.223 1.417 1.417 0 0 1-.531-.714 1.539 1.539 0 0 1-.077-.499h.943c.004.15.03.28.079.386a.692.692 0 0 0 .2.263.826.826 0 0 0 .307.15c.12.033.251.049.395.049.127 0 .24-.015.34-.045.1-.03.183-.07.251-.123a.534.534 0 0 0 .212-.434z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

MimeTypeXls.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
MimeTypeXls.defaultProps = {
  fill: "#91A6B6"
};
var _default = MimeTypeXls;
exports["default"] = _default;