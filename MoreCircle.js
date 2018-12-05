
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MoreCircle = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
  </svg>
); 

MoreCircle.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MoreCircle;
