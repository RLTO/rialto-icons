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

var DocumentTypeDoc = function DocumentTypeDoc(props) {
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
    width: "20",
    height: "16",
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .999-1h8.004c.274 0 .657.16.85.353l3.794 3.794c.195.195.353.572.353.847V15c0 .552-.45 1-1.007 1H1.007z",
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
    d: "M1.626 6.5V1.523h1.289c.33 0 .63.057.897.17A1.998 1.998 0 0 1 4.94 2.887c.104.28.155.588.155.923v.41c0 .335-.051.642-.155.921-.104.28-.249.52-.436.722a1.945 1.945 0 0 1-.673.47 2.193 2.193 0 0 1-.868.167H1.626zm.968-4.197v3.425h.369c.18 0 .34-.035.483-.103a.99.99 0 0 0 .363-.297c.099-.13.174-.288.227-.474.052-.185.079-.397.079-.634v-.417c0-.223-.026-.426-.077-.61a1.378 1.378 0 0 0-.23-.473 1.047 1.047 0 0 0-.375-.308 1.166 1.166 0 0 0-.518-.11h-.321zM9.32 4.377c0 .32-.042.613-.126.882-.085.27-.207.5-.366.694a1.67 1.67 0 0 1-.583.453 1.79 1.79 0 0 1-.774.162c-.287 0-.542-.054-.766-.162a1.586 1.586 0 0 1-.564-.455 2.07 2.07 0 0 1-.348-.693 3.073 3.073 0 0 1-.12-.88v-.725c0-.32.04-.613.12-.882.08-.269.196-.5.348-.696a1.607 1.607 0 0 1 1.327-.62c.289 0 .548.055.777.164.23.11.423.262.583.456.16.195.281.427.366.696.084.269.126.563.126.882v.724zm-.974-.731c0-.203-.017-.39-.05-.56a1.424 1.424 0 0 0-.155-.441.81.81 0 0 0-.272-.29.74.74 0 0 0-.401-.104.69.69 0 0 0-.39.105.755.755 0 0 0-.253.289c-.064.123-.11.27-.137.44-.027.171-.04.358-.04.561v.731c0 .201.013.387.04.558.028.17.073.319.137.444a.763.763 0 0 0 .253.294c.105.07.236.106.393.106a.724.724 0 0 0 .668-.398c.07-.125.121-.272.156-.443.034-.17.05-.358.05-.56v-.732zm5.158 1.295c-.016.251-.07.477-.163.677-.092.2-.216.372-.37.513-.155.141-.34.25-.554.326a2.105 2.105 0 0 1-.711.115c-.294 0-.555-.054-.783-.163a1.601 1.601 0 0 1-.574-.454 2.07 2.07 0 0 1-.356-.703 3.13 3.13 0 0 1-.123-.902v-.67c0-.33.044-.632.13-.906.087-.273.21-.508.37-.704.159-.196.352-.348.579-.456.226-.108.481-.162.764-.162.273 0 .516.038.73.116.212.077.394.188.545.331.15.144.268.32.355.527.087.207.141.44.164.7h-.957a1.63 1.63 0 0 0-.067-.39.74.74 0 0 0-.153-.278.632.632 0 0 0-.253-.167 1.049 1.049 0 0 0-.364-.057.753.753 0 0 0-.387.096.757.757 0 0 0-.271.28 1.428 1.428 0 0 0-.16.453 3.271 3.271 0 0 0-.05.61v.677c0 .49.068.852.206 1.087.138.235.356.352.655.352.25 0 .449-.067.595-.2.145-.133.226-.35.242-.648h.96z",
    fill: "#FFF",
    fillRule: "nonzero"
  })))));
};

DocumentTypeDoc.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
DocumentTypeDoc.defaultProps = {
  fill: "#91A6B6"
};
var _default = DocumentTypeDoc;
exports["default"] = _default;