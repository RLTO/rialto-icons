
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CollapseWhite = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="12" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 5zm6.356 2.356l2.288 2.288c.195.195.136.356-.135.356H3.491c-.263 0-.332-.16-.135-.356l2.288-2.288a.505.505 0 0 1 .712 0zm0-4.712a.505.505 0 0 1-.712 0L3.356.356C3.159.159 3.228 0 3.49 0h5.018c.271 0 .33.161.135.356L6.356 2.644z" fill="#FFF" fill-rule="evenodd"/></svg>
  </svg>
); 

CollapseWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CollapseWhite;
