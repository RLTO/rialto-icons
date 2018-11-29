
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DeleteitemCross = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><path fill="#91A6B6" fill-rule="evenodd" d="M3.821 3.128a.5.5 0 1 1-.707.71l-1.12-1.12L.862 3.854a.508.508 0 0 1-.713 0 .507.507 0 0 1 0-.716L1.28 2.003.162.887A.5.5 0 1 1 .87.177l1.12 1.12 1.15-1.15a.506.506 0 0 1 .713.715l-1.15 1.15 1.12 1.116z"/></svg>
  </svg>
); 

DeleteitemCross.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default DeleteitemCross;
