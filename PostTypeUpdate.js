
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PostTypeUpdate = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><path fill="#91A6B6" fill-rule="evenodd" d="M8.429 0C3.724 0 0 2.697 0 6.024c0 1.885 1.151 3.567 3.066 4.672.434.25.484 2.128-1.956 3.261 0 0 3.454.535 5.644-2.183.541.076 1.101.239 1.675.239 4.704 0 7.571-2.661 7.571-5.988C16 2.697 13.133 0 8.429 0z"/></svg>
  </svg>
); 

PostTypeUpdate.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default PostTypeUpdate;
