"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconStyle = _interopRequireDefault(require("./iconStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DocumentTypeSvg = function DocumentTypeSvg(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size", "fill", "stroke"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    style: _objectSpread(_objectSpread({}, (0, _iconStyle["default"])(size)), dimensions),
    onClick: onClick
  }, otherProps), /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.007 16A1.002 1.002 0 010 15V1c0-.552.445-1 .999-1h8.004c.274 0 .657.16.85.353l3.794 3.794c.195.195.353.572.353.847V15c0 .552-.45 1-1.007 1H1.007z",
    fill: fill
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.5 15c-.276 0-.5-.22-.5-.498V1.498C1 1.223 1.23 1 1.5 1H9v4h4v9.49c0 .282-.229.51-.5.51h-11z",
    fill: "#FFF"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillOpacity: ".7",
    fill: "#FFF",
    d: "M9 1v4h4z"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(5 6)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    fill: fill,
    width: "15",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.23 5.201a.59.59 0 00-.203-.467 1.16 1.16 0 00-.29-.184 2.776 2.776 0 00-.446-.155 4.211 4.211 0 01-.62-.223 2.259 2.259 0 01-.522-.32 1.488 1.488 0 01-.36-.438 1.188 1.188 0 01-.135-.575c0-.21.044-.4.133-.57.089-.171.212-.317.369-.438.157-.12.343-.214.557-.279.214-.064.447-.097.697-.097.26 0 .498.038.713.113.215.075.4.18.555.316a1.44 1.44 0 01.493 1.099h-.937a.978.978 0 00-.06-.308.65.65 0 00-.157-.24.721.721 0 00-.26-.158 1.067 1.067 0 00-.364-.056c-.127 0-.24.015-.34.046a.738.738 0 00-.251.13.555.555 0 00-.208.446.47.47 0 00.07.253.69.69 0 00.203.203c.089.06.196.116.323.166.126.05.27.097.429.14.228.066.437.147.629.243.191.095.356.209.494.34a1.332 1.332 0 01.436 1.007c0 .218-.044.412-.132.582a1.26 1.26 0 01-.364.43c-.155.118-.34.207-.554.267-.214.06-.448.09-.7.09-.158 0-.314-.013-.47-.042a2.182 2.182 0 01-.448-.131 1.97 1.97 0 01-.398-.223 1.417 1.417 0 01-.531-.714 1.539 1.539 0 01-.078-.499h.944c.004.15.03.28.078.386a.692.692 0 00.2.263.826.826 0 00.308.15c.12.033.25.049.394.049.128 0 .241-.015.34-.045.1-.03.183-.07.252-.123a.534.534 0 00.212-.434zm3.265-.092l.94-3.586h1.06L7.986 6.5H7.01L5.506 1.523h1.06l.929 3.586zm5.974.81a1.34 1.34 0 01-.252.229 1.96 1.96 0 01-.382.21 2.826 2.826 0 01-1.082.21c-.282 0-.537-.05-.765-.15a1.616 1.616 0 01-.584-.434 1.984 1.984 0 01-.375-.696 3.067 3.067 0 01-.131-.934v-.677c0-.349.046-.66.138-.935.092-.275.22-.508.383-.699a1.643 1.643 0 011.29-.588c.28 0 .525.035.733.106.209.07.385.173.528.306.144.133.256.296.337.487.081.191.134.407.16.646h-.937c-.032-.255-.11-.447-.231-.576-.122-.129-.31-.193-.566-.193a.654.654 0 00-.342.094.84.84 0 00-.273.275 1.53 1.53 0 00-.185.45 2.526 2.526 0 00-.068.62v.684c.002.464.08.82.232 1.068.153.247.387.372.701.374a1.437 1.437 0 00.427-.065c.064-.02.12-.044.17-.07a.377.377 0 00.11-.084l.004-.902h-.824v-.718h1.781l.003 1.962z",
    fill: "#FFF",
    fillRule: "nonzero"
  })))));
};

DocumentTypeSvg.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
DocumentTypeSvg.defaultProps = {
  fill: "#91A6B6"
};
var _default = DocumentTypeSvg;
exports["default"] = _default;