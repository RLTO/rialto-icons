
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const LockBig = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32"><path fill="#91A6B6" fill-rule="evenodd" d="M20 16V8c0-4.418-3.59-8-8-8-4.418 0-8 3.59-8 8v8H2c-1.105 0-2 .895-2 1.994v12.012A2 2 0 0 0 2.005 32h19.99A2 2 0 0 0 24 30.006V17.994A1.992 1.992 0 0 0 22 16h-2zM6 16V7.998A6.003 6.003 0 0 1 12 2c3.314 0 6 2.683 6 5.998V16H6z"/></svg>
  </svg>
); 

LockBig.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default LockBig;
