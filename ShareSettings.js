
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ShareSettings = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" d="M8 9a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2M6.07 7.5H3.93a1.88 1.88 0 0 0-.776-1.128L4.548 3.96c.272.054.534.052.805-.005L6.775 6.43c-.341.266-.593.57-.705 1.07M2 9a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m2.938-8a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2m2.761 5.03L6.245 3.502c.421-.366.692-.9.692-1.502a2 2 0 0 0-4 0c0 .61.28 1.15.711 1.517L2.202 6.021A1.984 1.984 0 0 0 0 8a2 2 0 0 0 2 2c.931 0 1.706-.5 1.93-1.5h2.14C6.293 9.5 7.07 10 8 10a2 2 0 0 0 2-2 1.988 1.988 0 0 0-2.3-1.97"/></svg>
  </svg>
); 

ShareSettings.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ShareSettings;
