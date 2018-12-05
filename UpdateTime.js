
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const UpdateTime = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="#91A6B6" fill-rule="evenodd" d="M2.191 5.645l.07-.192a.5.5 0 0 1 .94.342l-.484 1.33a.5.5 0 0 1-.64.298l-1.33-.484A.5.5 0 0 1 1.09 6l.192.07a4.5 4.5 0 1 1 2.39 2.544l.407-.914a3.5 3.5 0 1 0-1.887-2.055zM6 4h1v1H5V2h1v2z"/></svg>
  </svg>
); 

UpdateTime.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default UpdateTime;
