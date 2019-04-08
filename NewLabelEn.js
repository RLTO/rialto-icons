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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NewLabelEn = function NewLabelEn(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 47 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M0 10C0 4.477 4.485 0 9.996 0h27.008C42.524 0 47 4.476 47 10c0 5.523-4.485 10-9.996 10H9.996C4.476 20 0 15.524 0 10z",
    fill: "#F5A623"
  }), _react.default.createElement("path", {
    d: "M40 9.36a.288.288 0 0 0-.281-.294h-1.87l-.58-1.857A.283.283 0 0 0 37 7a.283.283 0 0 0-.269.209l-.58 1.857h-1.87A.288.288 0 0 0 34 9.36a.3.3 0 0 0 .116.239l1.512 1.147-.583 1.866a.306.306 0 0 0-.014.092c0 .163.126.295.282.295a.272.272 0 0 0 .164-.056L37 11.788l1.523 1.156a.27.27 0 0 0 .164.056.288.288 0 0 0 .282-.295.308.308 0 0 0-.014-.092l-.582-1.866 1.51-1.147A.3.3 0 0 0 40 9.36zM13.362 13.5h-1.235L8.958 8.456V13.5H7.723V6.39h1.235l3.179 5.064V6.391h1.225V13.5zm5.616-3.174h-2.92v2.188h3.413v.986h-4.649V6.39h4.615v.997h-3.38V9.35h2.92v.976zm7.075 1.416l1.093-5.351h1.226l-1.64 7.109H25.55l-1.353-5.19-1.382 5.19H21.63l-1.64-7.11h1.225l1.103 5.342 1.358-5.341h1.035l1.343 5.351z",
    fill: "#FFF",
    fillRule: "nonzero"
  }))));
};

NewLabelEn.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = NewLabelEn;
exports.default = _default;