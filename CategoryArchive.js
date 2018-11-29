
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryArchive = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14"><path fill="#91A6B6" fill-rule="evenodd" d="M1.778.443A.868.868 0 0 1 2.498 0H7v4H0L1.778.443zm11.444 0L15 4H8V0h4.502c.283 0 .597.198.72.443zM0 5h15v8.002c0 .551-.449.998-1.007.998H1.007A1.002 1.002 0 0 1 0 13.002V5zm9 5v2h4v-2H9zM3 6v2H1.5l2 2.5 2-2.5H4V6H3z"/></svg>
  </svg>
); 

CategoryArchive.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryArchive;
