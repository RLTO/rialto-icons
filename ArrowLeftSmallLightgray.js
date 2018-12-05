
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowLeftSmallLightgray = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10"><path fill="#DCE6ED" fill-rule="evenodd" d="M5.25 0c.414 0 .75.32.75.714 0 .193-.08.367-.21.496L1.809 5.002l3.93 3.742c.16.131.261.325.261.542 0 .394-.336.714-.75.714a.767.767 0 0 1-.519-.199l-.002.002-4.5-4.286A.696.696 0 0 1 0 5.003V5c0-.202.088-.384.23-.514L4.73.2a.767.767 0 0 1 .52-.2z"/></svg>
  </svg>
); 

ArrowLeftSmallLightgray.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ArrowLeftSmallLightgray;
