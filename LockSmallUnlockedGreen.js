
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const LockSmallUnlockedGreen = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="#329798" fill-rule="evenodd" d="M6 5.01C6 4.451 5.557 4 4.99 4H2V1.999A.997.997 0 0 1 3 1c.552 0 1 .453 1 .997V2h1v-.006A1.992 1.992 0 0 0 3 0C1.895 0 1 .888 1 2v2a1 1 0 0 0-1 1.01v1.98C0 7.549.451 8 .99 8h4.02C5.555 8 6 7.557 6 6.99V5.01z"/></svg>
  </svg>
); 

LockSmallUnlockedGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default LockSmallUnlockedGreen;
