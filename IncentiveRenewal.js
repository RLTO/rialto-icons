
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const IncentiveRenewal = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M.078 7.81a9.002 9.002 0 0 1 15.766-4.654L18 1v6h-6l2.425-2.425A7.002 7.002 0 0 0 2.07 8H2.06a1 1 0 1 1-2 0H.055a9.02 9.02 0 0 1 .023-.19zm17.844 2.38a9.002 9.002 0 0 1-15.766 4.654L0 17v-6h6l-2.425 2.425A7.002 7.002 0 0 0 15.93 10h.011a1 1 0 1 1 2 0h.005a9.016 9.016 0 0 1-.023.19z" fill="#152435" fill-rule="evenodd"/></svg>
  </svg>
); 

IncentiveRenewal.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default IncentiveRenewal;
