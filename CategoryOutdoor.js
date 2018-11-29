
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryOutdoor = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.833 8l.334 1H3.52a.75.75 0 0 0-.702.487l-1.191 3.175A.25.25 0 0 0 1.86 13h12.278a.25.25 0 0 0 .234-.338l-1.19-3.175A.75.75 0 0 0 12.48 9h-.647l.334-1h.391a2 2 0 0 1 1.898 1.368l1.105 3.316A1 1 0 0 1 14.613 14H1.387a1 1 0 0 1-.948-1.316l1.105-3.316A2 2 0 0 1 3.442 8h.391zM6 1c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1H7c-.552 0-1-.444-1-1V1zm1 0v1h3V1H7zM5 6.99c0-.546.451-.99.99-.99h4.02c.546 0 .99.451.99.99v4.02c0 .546-.451.99-.99.99H5.99a.996.996 0 0 1-.99-.99V6.99zM6 7v1h4V7H6z" fill="#91A6B6" fill-rule="evenodd"/></svg>
  </svg>
); 

CategoryOutdoor.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryOutdoor;
