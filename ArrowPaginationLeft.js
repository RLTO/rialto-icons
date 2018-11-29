
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowPaginationLeft = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="#DCE6ED" fill-rule="evenodd" d="M9 .714C9 .32 8.664 0 8.25 0a.77.77 0 0 0-.52.2l-3.5 3.286a.698.698 0 0 0 0 1.031L7.73 7.801A.767.767 0 0 0 8.25 8c.414 0 .75-.32.75-.714a.699.699 0 0 0-.261-.542l-2.93-2.742 2.98-2.792A.695.695 0 0 0 9 .714zm-5 1C4 1.32 3.664 1 3.25 1a.77.77 0 0 0-.52.2L.23 3.486a.698.698 0 0 0 0 1.031L2.73 6.801A.767.767 0 0 0 3.25 7c.414 0 .75-.32.75-.714a.699.699 0 0 0-.261-.542l-1.93-1.742 1.98-1.792A.695.695 0 0 0 4 1.714z"/></svg>
  </svg>
); 

ArrowPaginationLeft.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ArrowPaginationLeft;
