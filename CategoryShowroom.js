
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryShowroom = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h1v4h11V8h1v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm.5-.5A2.5 2.5 0 0 1 0 5C0 4.49.939 3.081 3.1.2a.5.5 0 0 1 .4-.2h10a.5.5 0 0 1 .4.2C16.061 3.081 17 4.49 17 5a2.5 2.5 0 0 1-4.5 1.5c-.456.607-1.182 1-2 1a2.496 2.496 0 0 1-2-1c-.456.607-1.182 1-2 1a2.496 2.496 0 0 1-2-1c-.456.607-1.182 1-2 1zM1 5a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.667 1-.667 1 0a1.5 1.5 0 0 0 3 0c0-.152-1.004-1.662-2.75-4h-9.5C2.004 3.338 1 4.848 1 5z" fill="#91A6B6" fill-rule="evenodd"/></svg>
  </svg>
); 

CategoryShowroom.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryShowroom;
