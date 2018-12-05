
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MiscApply = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="#329798" fill-rule="evenodd" d="M4.034 7.77l-3.8-3.715a.776.776 0 0 1 0-1.11.81.81 0 0 1 1.132 0L4.6 6.102 10.634.23a.81.81 0 0 1 1.132 0 .776.776 0 0 1 0 1.111l-6.6 6.429a.807.807 0 0 1-1.132 0z"/></svg>
  </svg>
); 

MiscApply.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MiscApply;
