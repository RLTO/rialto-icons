
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const AssetPlaceholder = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94"><g fill="none" fill-rule="evenodd" stroke="#91A6B6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 29h36v64H1zM5 13h28v16H5zM19 13V1M65 37h28v56H65zM69 25h20v12H69zM37 53h28M37 93h28M13 21h12M9 37h20M9 45h20M9 53h20M9 61h20M9 69h20M9 77h20m44-32h12m-12 8h12m-12 8h12m-12 8h12m-12 8h12M45 61h12m-12 8h12m-12 8h12"/><path d="M11 85h8v8h-8zM77 85h8v8h-8z"/></g></svg>
  </svg>
); 

AssetPlaceholder.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default AssetPlaceholder;
