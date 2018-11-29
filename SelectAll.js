
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SelectAll = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 1h7a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm0 5h7a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm0 5h7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM1.745 2.268L3.785.21a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 3.79a.707.707 0 0 1-1.006 0L.208 2.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535zm0 5l2.04-2.058a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 8.79a.707.707 0 0 1-1.006 0L.208 7.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535zm0 5l2.04-2.058a.707.707 0 0 1 1.007 0 .722.722 0 0 1 0 1.015L2.247 13.79a.707.707 0 0 1-1.006 0L.208 12.747a.722.722 0 0 1 0-1.014.707.707 0 0 1 1.007 0l.53.535z" fill="#329798" fill-rule="evenodd"/></svg>
  </svg>
); 

SelectAll.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default SelectAll;
