
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MiscReset = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" fill-rule="evenodd" d="M9.732 9.758a.75.75 0 0 1-1.061 0L4.99 6.077l-3.7 3.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l3.7-3.703L.244 1.33A.75.75 0 1 1 1.304.264l3.679 3.682L8.707.22a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073L6.053 5.019l3.679 3.673a.754.754 0 0 1 0 1.066z"/></svg>
  </svg>
); 

MiscReset.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MiscReset;
