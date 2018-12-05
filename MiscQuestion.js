
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MiscQuestion = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12"><path fill="#91A6B6" fill-rule="evenodd" d="M2.5 11c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zM0 3.51C0 1.57 1.57 0 3.5 0 5.433 0 7 1.57 7 3.5 7 5.433 5.43 7 4.5 7v2h-2V6.01C2.5 5.451 2.947 5 3.502 5 4.33 5 5 4.334 5 3.5 5 2.672 4.334 2 3.5 2 2.672 2 2 2.677 2 3.495V4H0v-.49z"/></svg>
  </svg>
); 

MiscQuestion.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MiscQuestion;
