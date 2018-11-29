
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Drag = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8"><path fill="#DCE6ED" fill-rule="evenodd" d="M0 1c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1zm0 3c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1zm0 3c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1z"/></svg>
  </svg>
); 

Drag.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Drag;
