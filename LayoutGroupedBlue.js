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

var LayoutGroupedBlue = function LayoutGroupedBlue(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M0 1.01C0 .451.443 0 1.01 0h1.98C3.549 0 4 .443 4 1.01v1.98C4 3.549 3.557 4 2.99 4H1.01C.451 4 0 3.557 0 2.99V1.01zm0 6C0 6.451.443 6 1.01 6h1.98C3.549 6 4 6.443 4 7.01v1.98C4 9.549 3.557 10 2.99 10H1.01C.451 10 0 9.557 0 8.99V7.01zm0 6C0 12.451.443 12 1.01 12h1.98c.558 0 1.01.443 1.01 1.01v1.98C4 15.549 3.557 16 2.99 16H1.01C.451 16 0 15.557 0 14.99v-1.98zm6-12C6 .451 6.443 0 7.01 0h1.98C9.549 0 10 .443 10 1.01v1.98C10 3.549 9.557 4 8.99 4H7.01C6.451 4 6 3.557 6 2.99V1.01zm0 6C6 6.451 6.443 6 7.01 6h1.98C9.549 6 10 6.443 10 7.01v1.98C10 9.549 9.557 10 8.99 10H7.01C6.451 10 6 9.557 6 8.99V7.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01H7.01C6.451 16 6 15.557 6 14.99v-1.98zm6-12C12 .451 12.443 0 13.01 0h1.98C15.549 0 16 .443 16 1.01v1.98C16 3.549 15.557 4 14.99 4h-1.98C12.451 4 12 3.557 12 2.99V1.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98C12.451 10 12 9.557 12 8.99V7.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z",
    fill: "#4DC9FF"
  }), _react.default.createElement("path", {
    d: "M1 1h2v2H1V1zm6 0h2v2H7V1zm6 0h2v2h-2V1zM1 7h2v2H1V7zm6 0h2v2H7V7zm6 0h2v2h-2V7zM1 13h2v2H1v-2zm6 0h2v2H7v-2zm6 0h2v2h-2v-2z",
    fillOpacity: ".7",
    fill: "#FFF"
  }))));
};

LayoutGroupedBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = LayoutGroupedBlue;
exports.default = _default;