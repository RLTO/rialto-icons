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

var ShareStatusAllBlue = function ShareStatusAllBlue(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 22 18"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "share-status-all-blue_svg__a",
    d: "M19.431 13.398c-.933-.48-.574-.113-1.72-.603-1.145-.49-1.416-.65-1.416-.65l-.01-1.122s.429-.336.563-1.397c.267.08.358-.324.373-.583.016-.249.158-1.026-.17-.957.067-.519.12-.988.096-1.236C17.065 5.978 16.59 5 15.084 5c-1.506 0-2.145.979-2.229 1.85-.021.249.027.718.398 1.237-.632-.07-.49.709-.473.958.013.258.101.663.37.583.133 1.062.562 1.4.562 1.4l-.01 1.129s-.272.17-1.418.66c-1.145.49-.786.102-1.72.58C9.09 14.156 9 16.428 9 16.428s.375.573.75.573h10.5c.375 0 .75-.57.75-.57s-.094-2.276-1.569-3.032z"
  }), _react.default.createElement("path", {
    id: "share-status-all-blue_svg__b",
    d: "M14.908 12.197c-1.244-.639-.765-.15-2.292-.804-1.528-.652-1.89-.866-1.89-.866l-.013-1.496s.572-.448.75-1.864c.358.107.478-.432.498-.776.021-.332.211-1.368-.226-1.276.09-.692.16-1.317.128-1.648C11.753 2.304 11.12 1 9.113 1 7.104 1 6.252 2.305 6.14 3.467c-.028.331.036.956.53 1.65-.842-.094-.654.944-.63 1.276.017.344.135.885.493.778.178 1.416.75 1.867.75 1.867l-.015 1.505s-.361.227-1.889.88c-1.527.654-1.048.135-2.292.774C1.12 13.207 1 16.237 1 16.237S1.5 17 2 17h14c.5 0 1-.76 1-.76s-.126-3.034-2.092-4.043z"
  })), _react.default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react.default.createElement("use", {
    fill: "#4DC9FF",
    xlinkHref: "#share-status-all-blue_svg__a"
  }), _react.default.createElement("path", {
    stroke: "#FFF",
    d: "M16.792 11.839l-.006-.621c.084-.107.17-.244.251-.415.106-.223.191-.48.251-.775a.857.857 0 0 0 .294-.354c.083-.177.126-.39.138-.602.001-.025.006-.065.02-.194.01-.095.016-.172.02-.25a1.6 1.6 0 0 0-.043-.546.782.782 0 0 0-.13-.258c.06-.5.08-.797.058-1.021-.128-1.36-.974-2.303-2.56-2.303-1.597 0-2.6.99-2.728 2.302-.027.315.028.668.179 1.025-.175.18-.266.447-.28.753-.005.122 0 .236.014.382l.011.118c.01.202.052.416.134.594.07.149.17.274.294.356.06.296.145.554.25.777.082.171.168.309.251.415l-.006.634c-.215.106-.574.27-1.116.501-.433.185-.58.227-.816.26l-.039.006c-.26.038-.478.115-.896.33-.65.333-1.111.908-1.421 1.644-.167.397-.28.818-.35 1.237-.042.252-.06.451-.066.573l-.006.16.088.134c.063.097.164.228.296.363.261.266.539.436.872.436h10.5c.332 0 .61-.169.872-.434a2.45 2.45 0 0 0 .296-.361l.088-.135-.006-.16a4.883 4.883 0 0 0-.067-.575c-.07-.419-.184-.839-.351-1.236-.311-.737-.774-1.313-1.423-1.646h0c-.414-.213-.627-.292-.88-.338l-.039-.007c-.248-.043-.396-.087-.832-.273-.537-.23-.897-.392-1.116-.496z"
  }), _react.default.createElement("use", {
    fill: "#4DC9FF",
    xlinkHref: "#share-status-all-blue_svg__b"
  }), _react.default.createElement("path", {
    stroke: "#FFF",
    d: "M11.224 10.22l-.01-.988c.115-.136.236-.323.352-.566.144-.303.258-.658.336-1.068a.938.938 0 0 0 .39-.437c.1-.213.153-.478.168-.742.002-.037.008-.094.027-.265.013-.125.022-.226.027-.326.015-.269.004-.485-.05-.672a.845.845 0 0 0-.188-.338c.085-.697.113-1.105.085-1.399C12.198 1.686 11.134.5 9.112.5c-2.039 0-3.308 1.252-3.47 2.92-.036.423.047.905.274 1.394-.257.205-.39.552-.408.966-.006.154 0 .3.018.487l.015.162c.012.252.065.518.164.732.09.195.223.35.39.44.077.411.191.767.335 1.07.115.244.237.43.35.568l-.009 1.003-.095.047c-.343.17-.833.392-1.493.674-.59.253-.8.311-1.13.358l-.051.007c-.328.049-.602.146-1.144.424-.825.424-1.417 1.161-1.816 2.11a7.226 7.226 0 0 0-.456 1.61c-.055.33-.08.588-.086.745l-.006.16.088.133c.079.12.207.288.374.459.32.325.656.531 1.044.531h14c.387 0 .723-.205 1.043-.529.168-.17.296-.336.375-.456l.088-.135-.006-.16a6.353 6.353 0 0 0-.087-.745 7.257 7.257 0 0 0-.458-1.612c-.4-.95-.993-1.687-1.819-2.111h0c-.539-.277-.808-.376-1.127-.434l-.05-.01c-.344-.06-.554-.121-1.147-.375a39.761 39.761 0 0 1-1.588-.712z"
  }))));
};

ShareStatusAllBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = ShareStatusAllBlue;
exports.default = _default;