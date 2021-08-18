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

var MimeTypeCsv = function MimeTypeCsv(props) {
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
    width: "15",
    height: "8",
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
    d: "M5.102 4.941c-.016.251-.07.477-.162.677-.092.2-.216.372-.37.513-.156.141-.34.25-.555.326a2.105 2.105 0 0 1-.71.115c-.295 0-.555-.054-.783-.163a1.601 1.601 0 0 1-.574-.454 2.07 2.07 0 0 1-.356-.703 3.13 3.13 0 0 1-.123-.902v-.67c0-.33.043-.632.13-.906.086-.273.21-.508.369-.704.16-.196.353-.348.58-.456.226-.108.48-.162.763-.162.274 0 .517.038.73.116.213.077.395.188.545.331.15.144.27.32.356.527.086.207.14.44.164.7h-.957a1.63 1.63 0 0 0-.067-.39.74.74 0 0 0-.154-.278.632.632 0 0 0-.253-.167 1.049 1.049 0 0 0-.364-.057.753.753 0 0 0-.386.096.757.757 0 0 0-.272.28 1.428 1.428 0 0 0-.159.453 3.271 3.271 0 0 0-.05.61v.677c0 .49.068.852.206 1.087.138.235.356.352.654.352.251 0 .45-.067.595-.2.146-.133.227-.35.243-.648h.96zm3.33.26a.59.59 0 0 0-.203-.467 1.16 1.16 0 0 0-.291-.184 2.776 2.776 0 0 0-.447-.155 4.211 4.211 0 0 1-.62-.223 2.259 2.259 0 0 1-.521-.32 1.488 1.488 0 0 1-.36-.438 1.188 1.188 0 0 1-.136-.575c0-.21.045-.4.134-.57.088-.171.211-.317.369-.438.157-.12.343-.214.557-.279.214-.064.446-.097.697-.097.26 0 .497.038.713.113.215.075.4.18.555.316a1.44 1.44 0 0 1 .492 1.099h-.936a.978.978 0 0 0-.06-.308.65.65 0 0 0-.157-.24.721.721 0 0 0-.26-.158 1.067 1.067 0 0 0-.364-.056c-.128 0-.241.015-.34.046a.738.738 0 0 0-.251.13.555.555 0 0 0-.209.446.47.47 0 0 0 .07.253.69.69 0 0 0 .204.203c.088.06.196.116.323.166.126.05.27.097.429.14.227.066.437.147.628.243.192.095.357.209.494.34a1.332 1.332 0 0 1 .436 1.007c0 .218-.044.412-.131.582a1.26 1.26 0 0 1-.364.43c-.155.118-.34.207-.554.267-.214.06-.448.09-.7.09-.158 0-.315-.013-.47-.042a2.182 2.182 0 0 1-.449-.131 1.97 1.97 0 0 1-.398-.223 1.417 1.417 0 0 1-.531-.714 1.539 1.539 0 0 1-.077-.499h.943c.005.15.031.28.079.386a.692.692 0 0 0 .2.263.826.826 0 0 0 .307.15c.12.033.252.049.395.049.128 0 .241-.015.34-.045.1-.03.183-.07.251-.123a.534.534 0 0 0 .212-.434zm3.264-.092.94-3.586h1.06L12.187 6.5h-.978L9.706 1.523h1.06l.93 3.586z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

MimeTypeCsv.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
MimeTypeCsv.defaultProps = {
  fill: "#91A6B6"
};
var _default = MimeTypeCsv;
exports["default"] = _default;