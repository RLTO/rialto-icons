
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const EllipsePagination = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2"><path fill="#DCE6ED" fill-rule="evenodd" d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
  </svg>
); 

EllipsePagination.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default EllipsePagination;
