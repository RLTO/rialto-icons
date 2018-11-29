
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryOffice = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M1 16V8H0V7h4V6H1.999A1 1 0 0 1 1 5.01V.99A1 1 0 0 1 1.995 0h8.01c.55 0 .995.451.995.99v4.02c0 .546-.443.99-.999.99H8v1h9v1h-1v8h-1V8H2v8H1zM2 5h8V1H2v4zm6 4h6v7H8V9zm1 1v5h4v-5H9zm1 1h2v1h-2v-1zm0 2h2v1h-2v-1z"/></svg>
  </svg>
); 

CategoryOffice.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryOffice;
