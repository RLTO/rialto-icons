"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// -- Icon Sizes
var iconDefault = "1rem";
var iconXlarge = "2rem";
var iconLarge = "1.5rem";
var iconSmall = ".75rem";
var iconXs = ".625rem";
var iconXxs = ".5rem";

var getSize = function getSize(size) {
  return {
    "xlarge": iconXlarge,
    "large": iconLarge,
    "small": iconSmall,
    "xs": iconXs,
    "xxs": iconXxs
  }[size] || iconDefault;
}; // eslint-disable-next-line no-unused-vars


var getIconStyle = function getIconStyle(size) {
  var iconStyle = {
    display: "inline-block",
    height: getSize(size),
    width: getSize(size),
    fill: "true"
  };
  return iconStyle;
};

var _default = getIconStyle;
exports["default"] = _default;