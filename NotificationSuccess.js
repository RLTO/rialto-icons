
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationSuccess = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 18h16V2H2v16zm-2 2h20V0H0v20zm9-9l4.5-4.5L15 8l-6 6-4-4 1.5-1.5L9 11z" fill="#FFF" fill-rule="evenodd"/></svg>
  </svg>
); 

NotificationSuccess.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default NotificationSuccess;
