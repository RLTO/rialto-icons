
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowOrderRight = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 6.5v-5L9 4 6.5 6.5zM9 4H1h8z" stroke="#91A6B6" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </svg>
); 

ArrowOrderRight.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ArrowOrderRight;
