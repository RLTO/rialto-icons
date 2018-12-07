
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryOther = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"><path fill="#91A6B6" fill-rule="evenodd" d="M13 7v5H4V8H0V3h9v4h4zM1 4v3h3V4H1zm4 0v3h3V4H5zm0 4v3h3V8H5zm4 0v3h3V8H9zm2-8h5v5h-5V0zm1 1v3h3V1h-3z"/></svg>
	</svg>
); 

CategoryOther.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryOther;
