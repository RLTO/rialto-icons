
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const FormCheckboxCheckmark = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6"><path fill="#FFF" fill-rule="evenodd" d="M2.034 5.77l-1.8-1.715a.776.776 0 0 1 0-1.11.81.81 0 0 1 1.132 0L2.6 4.102 6.634.23a.81.81 0 0 1 1.132 0 .776.776 0 0 1 0 1.111l-4.6 4.429a.807.807 0 0 1-1.132 0z"/></svg>
  </svg>
); 

FormCheckboxCheckmark.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default FormCheckboxCheckmark;
