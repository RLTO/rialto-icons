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

var ShareStatusPublicBlue = function ShareStatusPublicBlue(props) {
  var dimensions = props.dimensions,
      onClick = props.onClick,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["dimensions", "onClick", "size"]);

  return _react.default.createElement("svg", _extends({
    style: _objectSpread({}, (0, _iconStyle.default)(size), dimensions),
    onClick: onClick
  }, otherProps), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, _react.default.createElement("path", {
    fill: "#4DC9FF",
    fillRule: "evenodd",
    d: "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm10.403.696c-.024-.027-.247-.331-.271-.358a9.026 9.026 0 0 1-.266-.318C9.838 7.981 9.475 6.993 9.441 7c-.01-.012-.917-.134-.944-.087-.037.062-.063.16-.078.159-.042-.005-.374-.209-.382-.216-.017-.003-.2-.035-.234-.05-.003-.008-.088-.05-.094-.077a.93.93 0 0 0 .08-.263c-.017.01-.772.046-.804.06-.03.012-.18.108-.212.118a.835.835 0 0 1-.29-.072c-.008.004-.327.38-.335.402-.02.054.041.082-.002.146-.027.04-.386.352-.392.38 0 .013-.178.328-.173.364.004-.005.004.467-.03.479.046.023.405.583.403.596.038.012.227.164.28.191.018.01 1.199.076 1.249.031.027.005.135.042.196.04.005.018.326 1.2.328 1.226-.005.03-.04.726-.012.784.02.039.378.907.36.986-.01.003.525-.07.56-.122.02-.03.543-.28.545-.287.005-.012.515-.91.567-.945.037-.026-.03-.938-.019-.95.007-.007.938-1.288.943-1.299-.015-.01-.548.103-.548.103zm-7.3 4.302c.014-.014.287-.495.256-.508.04-.007.489-.214.529-.217-.001-.05.536-1.111.556-1.224.007-.042-.037-.197-.058-.204a28.217 28.217 0 0 1-1.126-.544c-.07-.01-.996-.673-1.02-.683.016-.01-1.021-.21-1.064-.22a4.37 4.37 0 0 1-.16-1.073c.058-.023.24-.249.257-.251.013-.021-.095-.404-.082-.472.009-.027.7-.959.79-.958.007-.035.82-.37.826-.372-.03-.031.085-.508.124-.537.022-.025.27-.19.258-.205.01-.017-.12-.186-.106-.211-.03-.008-.235-.08-.23-.094-.001-.025-.296-.518-.334-.536-.06.057-.243.218-.265.23-.045-.095-.147-.07-.144-.095.06-.043-.161-.314-.168-.32.03-.05.21-.098.221-.085.025.015.311-.023.346-.009a5.443 5.443 0 0 0-.245-.397c.028-.037.13-.071.166-.055.02.01.172.139.185.134 0-.017.172-.209.173-.21a5.772 5.772 0 0 0-.286-.174c.143-.212.318-.418.507-.611.033.007.338.058.324.063-.019.03-.02.161-.042.162a.846.846 0 0 0-.11.18c.011.026.185-.026.196-.029.001.028-.228.195-.25.2.014.01.304.172.293.162-.035-.028-.121.113-.132.116.04.041.275.27.269.286 0 .034.46.167.476.187.014.002.259-.105.259-.122-.026.003-.06-.247-.08-.262.024-.003.094-.37.093-.4.043-.027.318-.194.32-.204.037.01.24-.433.233-.442.016.006.127.024.141.025.013.002.333-.227.347-.23-.003-.05.081-.18.093-.196.001-.032-.299.078-.314.085-.014.006.189-.35.19-.36-.033.005-.361-.67-.361-.67C5.84 1.178 6.914 1 8 1c1.297 0 3.04.464 4.338 1.514-.017.043-.015.557-.034.57-.121-.091-2.417-.051-2.449-.079-.018-.005-.841-.265-.842-.29-.038.026-.72.307-.75.317-.005.05-.553.599-.565.624-.016.045-.643 1.55-.67 1.567-.03.02-.452.147-.477.147.016.034.307.315.313.341-.009-.011-.14.16-.175.15-.02.026-.48.03-.491.049.027.024.016.547.02.561.016-.004.24.097.275.088.015-.034.335-.133.367-.139.005-.059.04-.152.034-.166.009-.04.237-.32.305-.367.043-.03.156.035.19.029.064-.012.253-.14.299-.117.06.03.497.59.497.59a1.23 1.23 0 0 1 .183-.168c-.04-.087-.474-.495-.474-.514.007-.027.18.07.25.09-.009.032.31.234.322.24-.012.03.286.556.296.569.001.019.953.151.953.151l.749 1.592.556.013 1.65-.328c.01.056.32.83.336.847.025 0 .268-.624.287-.613.014-.008.385-.316.408-.33.028-.018.554-.025.566-.019.018.01.261.303.27.22.028.016.324 1.087.335 1.096a6.98 6.98 0 0 1-11.768 3.763zm3.391-7.78c.005.004.468-.142.452-.142.029-.01-.122-.334-.132-.347-.019-.022-.126-.174-.135-.18.051-.004-.021-.192-.002-.228a.522.522 0 0 0-.157-.005c.005.008-.06.22-.054.224.01-.007.02.675.028.678z"
  })));
};

ShareStatusPublicBlue.propTypes = {
  size: _propTypes.default.string,
  onClick: _propTypes.default.func,
  dimensions: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  })
};
var _default = ShareStatusPublicBlue;
exports.default = _default;