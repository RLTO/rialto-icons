
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Phone = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="none" stroke="#91A6B6" d="M6.146 5.074a1.473 1.473 0 0 0 0-2.081L4.584 1.43a1.472 1.472 0 0 0-2.081 0l-.856.856a2.205 2.205 0 0 0-.28 2.778 34.224 34.224 0 0 0 9.568 9.568 2.208 2.208 0 0 0 2.778-.278l.856-.857a1.472 1.472 0 0 0 0-2.082l-1.561-1.561a1.472 1.472 0 0 0-2.082 0l-.52.52a34.97 34.97 0 0 1-4.78-4.782l.52-.52h0z"/></svg>
  </svg>
); 

Phone.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Phone;
