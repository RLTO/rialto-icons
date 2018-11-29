
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const OSeparator = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3"><circle cx="1.5" cy="1.5" r="1.5" fill="#91A6B6" fill-rule="evenodd"/></svg>
  </svg>
); 

OSeparator.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default OSeparator;
