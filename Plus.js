
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Plus = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7"><path fill="#329798" fill-rule="evenodd" d="M4 3V0H3v3H0v1h3v3h1V4h3V3z"/></svg>
  </svg>
); 

Plus.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Plus;
