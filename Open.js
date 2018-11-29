
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Open = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><g fill="none" fill-rule="evenodd"><path fill="#91A6B6" d="M1 9l.007-8H3V0H0v10h10V6.997L9 7v2z"/><path stroke="#91A6B6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 1H9v3.5h0M9 1L5 5l4-4z"/></g></svg>
  </svg>
); 

Open.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Open;
