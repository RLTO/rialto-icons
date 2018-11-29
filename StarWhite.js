
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const StarWhite = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.36a.288.288 0 0 0-.281-.294h-1.87L3.268.209A.283.283 0 0 0 3 0a.283.283 0 0 0-.269.209l-.58 1.857H.282A.288.288 0 0 0 0 2.36a.3.3 0 0 0 .116.239l1.511 1.147-.582 1.866a.306.306 0 0 0-.014.092c0 .163.126.295.282.295a.272.272 0 0 0 .164-.056L3 4.788l1.523 1.156A.27.27 0 0 0 4.688 6a.288.288 0 0 0 .28-.295.308.308 0 0 0-.013-.092l-.582-1.866L5.883 2.6A.3.3 0 0 0 6 2.36z" fill="#FFF"/></svg>
  </svg>
); 

StarWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default StarWhite;
