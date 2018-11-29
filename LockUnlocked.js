
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const LockUnlocked = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M0 8.997C0 8.447.444 8 1 8h1V4a4 4 0 0 1 8 0v1H9V3.99A2.997 2.997 0 0 0 6 1C4.343 1 3 2.35 3 4.01V8h8.002c.551 0 .998.453.998.997v6.006c0 .55-.456.997-1.002.997H1.002A1.004 1.004 0 0 1 0 15.003V8.997z"/></svg>
  </svg>
); 

LockUnlocked.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default LockUnlocked;
