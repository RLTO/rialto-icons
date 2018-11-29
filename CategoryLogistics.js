
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryLogistics = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M12.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM0 11h12.506A2.49 2.49 0 0 1 15 13.5c0 1.38-1.127 2.5-2.494 2.5H0v-1h12.502c.827 0 1.498-.666 1.498-1.5 0-.828-.675-1.5-1.498-1.5H0v-1zm1-5c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1H2c-.552 0-1-.444-1-1V6zM7 .995C7 .445 7.446 0 7.998 0h7.004c.551 0 .998.456.998.995v8.01c0 .55-.446.995-.998.995H7.998C7.447 10 7 9.544 7 9.005V.995zM12 1v1h3V1h-3zm1 2v1h2V3h-2zm1 2v1h1V5h-1zM3 6v1h2V6H3zm1 2v1h1V8H4z"/></svg>
  </svg>
); 

CategoryLogistics.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryLogistics;
