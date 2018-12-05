
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SearchSmall = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#91A6B6" fill-rule="evenodd" d="M11.67 10.08L8.374 6.782C8.77 6.112 9 5.334 9 4.5A4.5 4.5 0 1 0 4.5 9c.834 0 1.613-.231 2.282-.627l3.297 3.297a1.125 1.125 0 1 0 1.591-1.59zM1 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>
  </svg>
); 

SearchSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchSmall;
