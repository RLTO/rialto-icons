
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const AddBlack = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#152435" fill-rule="evenodd" d="M6 4V1.01a1 1 0 1 0-2 0V4H1.01a1 1 0 1 0 0 2H4v2.99a1 1 0 1 0 2 0V6h2.99a1 1 0 1 0 0-2H6z"/></svg>
  </svg>
); 

AddBlack.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddBlack;
