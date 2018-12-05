
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const LocationWhite = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#FFF" d="M0 4.64l4.947.353L5.39 10 10 0z"/></svg>
  </svg>
); 

LocationWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default LocationWhite;
