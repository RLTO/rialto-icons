
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const More = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4"><path fill="#91A6B6" fill-rule="evenodd" d="M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
  </svg>
); 

More.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default More;
