
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CloseWhite = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" fill-rule="evenodd" d="M10.929 0c-.296 0-.564.12-.758.314L6 4.485 1.829.314A1.071 1.071 0 1 0 .314 1.829L4.484 6l-4.17 4.171a1.071 1.071 0 0 0 1.515 1.515L6 7.516l4.171 4.17a1.071 1.071 0 1 0 1.515-1.515L7.516 6l4.17-4.17A1.07 1.07 0 0 0 10.93 0z"/></svg>
  </svg>
); 

CloseWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CloseWhite;
