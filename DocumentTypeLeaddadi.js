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

var DocumentTypeLeaddadi = function DocumentTypeLeaddadi(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      fill = props.fill,
      stroke = props.stroke,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size", "fill", "stroke"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    viewBox: "0 0 40 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .999-1h8.004c.274 0 .657.16.85.353l3.794 3.794c.195.195.353.572.353.847V15c0 .552-.45 1-1.007 1H1.007z",
    fill: fill
  }), _react.default.createElement("path", {
    d: "M1.5 15c-.276 0-.5-.22-.5-.498V1.498C1 1.223 1.23 1 1.5 1H9v4h4v9.49c0 .282-.229.51-.5.51h-11z",
    fill: "#FFF"
  }), _react.default.createElement("path", {
    fillOpacity: ".7",
    fill: "#FFF",
    d: "M9 1v4h4z"
  }), _react.default.createElement("g", {
    transform: "translate(5 6)"
  }, _react.default.createElement("rect", {
    fill: fill,
    width: "35",
    height: "8",
    rx: "2"
  }), _react.default.createElement("path", {
    d: "M1.377 1.25h2.068v4.478h1.06V6.5H1.377v-.772h1.108V2.026H1.377V1.25zm5.797 5.318c-.285 0-.543-.046-.776-.14a1.835 1.835 0 0 1-.598-.38 1.664 1.664 0 0 1-.384-.568 1.81 1.81 0 0 1-.135-.7v-.136c0-.283.044-.54.133-.774.089-.234.213-.435.373-.603.16-.169.348-.3.567-.393a1.8 1.8 0 0 1 .714-.14c.267 0 .505.043.713.131.209.088.385.211.53.37.144.16.254.352.33.577.075.224.112.472.112.743v.403H6.245c.018.126.055.24.11.344a.946.946 0 0 0 .512.443c.111.04.233.061.365.061a1.434 1.434 0 0 0 .544-.108c.084-.035.163-.079.236-.131a.92.92 0 0 0 .191-.185l.475.513c-.059.084-.136.167-.23.248-.095.08-.207.152-.335.215a2.157 2.157 0 0 1-.939.21zm-.112-3.066a.693.693 0 0 0-.528.219.935.935 0 0 0-.17.253c-.045.098-.08.207-.102.328H7.82v-.075a.899.899 0 0 0-.058-.284.666.666 0 0 0-.38-.384.842.842 0 0 0-.32-.057zm4.83 2.998a.84.84 0 0 1-.059-.157 2.088 2.088 0 0 1-.041-.188 1.247 1.247 0 0 1-.408.292 1.367 1.367 0 0 1-.276.089c-.1.022-.208.032-.324.032-.19 0-.363-.027-.522-.082a1.239 1.239 0 0 1-.408-.229 1.026 1.026 0 0 1-.362-.793c0-.39.145-.69.435-.904.291-.213.725-.32 1.301-.32h.53v-.218a.537.537 0 0 0-.175-.422c-.116-.104-.283-.156-.502-.156-.194 0-.335.042-.424.125a.435.435 0 0 0-.133.333h-.95c0-.157.034-.306.104-.447.07-.142.17-.266.304-.373.133-.107.296-.192.489-.255.192-.062.413-.094.661-.094.224 0 .432.028.624.082.193.055.36.136.5.243.142.107.253.242.332.405.08.163.12.352.12.566v1.586c0 .198.013.362.038.492s.061.241.109.335V6.5h-.964zm-.907-.667a.993.993 0 0 0 .49-.123.787.787 0 0 0 .17-.124.655.655 0 0 0 .113-.142v-.636h-.486c-.148 0-.274.014-.379.043a.724.724 0 0 0-.256.12.477.477 0 0 0-.147.184.57.57 0 0 0-.048.234c0 .128.045.234.135.318.09.084.226.126.408.126zm2.697-1.21c0-.28.033-.536.098-.769.064-.232.16-.431.285-.598.125-.166.277-.295.456-.386.18-.091.384-.137.614-.137.193 0 .364.035.51.105.148.07.278.168.392.295V1.25h.954V6.5h-.858l-.048-.386a1.254 1.254 0 0 1-.41.335c-.157.08-.34.12-.547.12a1.278 1.278 0 0 1-1.061-.534 1.828 1.828 0 0 1-.286-.593 2.685 2.685 0 0 1-.099-.747v-.071zm.95.072c0 .155.013.3.04.433.026.133.069.25.128.348.059.1.135.177.229.234a.645.645 0 0 0 .342.086c.164 0 .3-.035.408-.106a.752.752 0 0 0 .258-.29V3.901a.739.739 0 0 0-.256-.292.727.727 0 0 0-.404-.104.644.644 0 0 0-.343.087.674.674 0 0 0-.23.24 1.15 1.15 0 0 0-.13.355c-.028.135-.042.28-.042.436v.071zM17.927 6.5V1.523h1.289c.33 0 .63.057.897.17a1.998 1.998 0 0 1 1.128 1.194c.104.28.155.588.155.923v.41c0 .335-.051.642-.155.921-.104.28-.249.52-.436.722a1.945 1.945 0 0 1-.673.47 2.193 2.193 0 0 1-.868.167h-1.337zm.968-4.197v3.425h.369c.18 0 .34-.035.483-.103a.99.99 0 0 0 .363-.297c.099-.13.175-.288.227-.474.052-.185.079-.397.079-.634v-.417c0-.223-.026-.426-.077-.61a1.378 1.378 0 0 0-.23-.473 1.047 1.047 0 0 0-.375-.308 1.166 1.166 0 0 0-.518-.11h-.321zm5.7 3.158h-1.493L22.808 6.5h-1.012l1.63-4.977h.872l1.6 4.977h-1.012l-.29-1.04zm-1.257-.817h1.032l-.51-1.832-.522 1.832zm2.99 1.856V1.523h1.29c.33 0 .629.057.896.17a1.998 1.998 0 0 1 1.128 1.194c.104.28.156.588.156.923v.41c0 .335-.052.642-.156.921-.103.28-.249.52-.435.722a1.945 1.945 0 0 1-.674.47 2.193 2.193 0 0 1-.868.167h-1.336zm.968-4.197v3.425h.369c.18 0 .341-.035.484-.103a.99.99 0 0 0 .362-.297c.1-.13.175-.288.227-.474.053-.185.079-.397.079-.634v-.417c0-.223-.026-.426-.077-.61a1.378 1.378 0 0 0-.229-.473 1.047 1.047 0 0 0-.376-.308 1.166 1.166 0 0 0-.518-.11h-.321zm3.466-.78h2.878V2.3h-.971v3.429h.97V6.5h-2.877v-.772h.946V2.299h-.946v-.776z",
    fill: "#FFF",
    fillRule: "nonzero"
  })))));
};

DocumentTypeLeaddadi.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string
};
DocumentTypeLeaddadi.defaultProps = {
  fill: "#91A6B6"
};
var _default = DocumentTypeLeaddadi;
exports.default = _default;