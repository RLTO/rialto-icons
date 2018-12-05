
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const IncentiveRenegotiation = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="22" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4.5 1.206a1 1 0 1 1 1-1.732 1 1 0 0 1-1 1.732zM18.794 6.5a1 1 0 1 1 1.732-1 1 1 0 0 1-1.732 1zM20 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM2 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1.206-4.5a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1zM6.5 3.206a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732zm7 3.464a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 1 1-1.732-1l1-1.732A1 1 0 0 1 13.5 6.67z" fill="#152435" fill-rule="evenodd"/></svg>
  </svg>
); 

IncentiveRenegotiation.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default IncentiveRenegotiation;
