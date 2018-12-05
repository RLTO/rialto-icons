
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MinAmount = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="4" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M0 .714C0 .32.336 0 .75 0a.77.77 0 0 1 .52.2l2.5 2.286a.698.698 0 0 1 0 1.031L1.27 5.801A.767.767 0 0 1 .75 6C.336 6 0 5.68 0 5.286c0-.217.102-.411.262-.542L2.19 3.002.211 1.21A.695.695 0 0 1 0 .714zM.75 6.5h2.498a.75.75 0 1 1 0 1.5H.75a.75.75 0 0 1 0-1.5z" fill="#91A6B6" fill-rule="evenodd"/></svg>
  </svg>
); 

MinAmount.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MinAmount;
