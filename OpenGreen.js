
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const OpenGreen = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><g fill="none" fill-rule="evenodd"><path fill="#329798" d="M1 11l.007-10H4V0H0v12h12V7.997L11 8v3z"/><path stroke="#329798" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.5 1H11v3.5M11 1L6 6l5-5z"/></g></svg>
  </svg>
); 

OpenGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default OpenGreen;
