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

var ShareStatusBrokerOwnerTeamBlack = function ShareStatusBrokerOwnerTeamBlack(props) {
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
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 18 18"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("path", {
    id: "share-status-broker-owner-team-black_svg__a",
    d: "M14.908 12.197c-1.244-.639-.765-.15-2.292-.804-1.528-.652-1.89-.866-1.89-.866l-.013-1.496s.572-.448.75-1.864c.358.107.478-.432.498-.776.021-.332.211-1.368-.226-1.276.09-.692.16-1.317.128-1.648C11.753 2.304 11.12 1 9.113 1 7.104 1 6.252 2.305 6.14 3.467c-.028.331.036.956.53 1.65-.842-.094-.654.944-.63 1.276.017.344.135.885.493.778.178 1.416.75 1.867.75 1.867l-.015 1.505s-.361.227-1.889.88c-1.527.654-1.048.135-2.292.774C1.12 13.207 1 16.237 1 16.237S1.5 17 2 17h14c.5 0 1-.76 1-.76s-.126-3.034-2.092-4.043z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "share-status-broker-owner-team-black_svg__b",
    d: "M6 13v-2c0-1.105-.888-2-2-2-1.105 0-2 .888-2 2v2h-.5c-.276 0-.5.215-.5.49v3.02c0 .27.228.49.491.49h5.018A.488.488 0 007 16.51v-3.02a.5.5 0 00-.5-.49H6zm-3 0v-2.001A.997.997 0 014 10c.552 0 1 .443 1 .999V13H3z"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    fill: fill,
    xlinkHref: "#share-status-broker-owner-team-black_svg__a"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#FFF",
    d: "M11.224 10.22l-.01-.988c.115-.136.236-.323.352-.566.144-.303.258-.658.336-1.068a.938.938 0 00.39-.437c.1-.213.153-.478.168-.742.002-.037.008-.094.027-.265.013-.125.022-.226.027-.326.015-.269.004-.485-.05-.672a.845.845 0 00-.188-.338c.085-.697.113-1.105.085-1.399C12.198 1.686 11.134.5 9.112.5c-2.039 0-3.308 1.252-3.47 2.92-.036.423.047.905.274 1.394-.257.205-.39.552-.408.966-.006.154 0 .3.018.487l.015.162c.012.252.065.518.164.732.09.195.223.35.39.44.077.411.191.767.335 1.07.115.244.237.43.35.568l-.009 1.003-.095.047c-.343.17-.833.392-1.493.674-.59.253-.8.311-1.13.358l-.051.007c-.328.049-.602.146-1.144.424-.825.424-1.417 1.161-1.816 2.11a7.226 7.226 0 00-.456 1.61c-.055.33-.08.588-.086.745l-.006.16.088.133c.079.12.207.288.374.459.32.325.656.531 1.044.531h14c.387 0 .723-.205 1.043-.529.168-.17.296-.336.375-.456l.088-.135-.006-.16a6.353 6.353 0 00-.087-.745 7.257 7.257 0 00-.458-1.612c-.4-.95-.993-1.687-1.819-2.111h0c-.539-.277-.808-.376-1.127-.434l-.05-.01c-.344-.06-.554-.121-1.147-.375a39.761 39.761 0 01-1.588-.712z"
  }), /*#__PURE__*/_react["default"].createElement("use", {
    fill: fill,
    xlinkHref: "#share-status-broker-owner-team-black_svg__b"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#FFF",
    d: "M6.5 12.5V11c0-1.383-1.114-2.5-2.5-2.5A2.495 2.495 0 001.5 11v1.5c-.551 0-1 .438-1 .99v3.02c0 .545.45.99.991.99h5.018c.548 0 .991-.44.991-.99v-3.02a1 1 0 00-1-.99h0zm-3 0v-1.501c0-.277.222-.499.5-.499s.5.22.5.499V12.5h-1z"
  }))));
};

ShareStatusBrokerOwnerTeamBlack.propTypes = {
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  dimensions: _propTypes["default"].shape({
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
};
ShareStatusBrokerOwnerTeamBlack.defaultProps = {
  fill: "#152435"
};
var _default = ShareStatusBrokerOwnerTeamBlack;
exports["default"] = _default;