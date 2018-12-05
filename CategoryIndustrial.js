
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryIndustrial = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 14a1 1 0 0 0 1-1V4l-1 .75V3.5L13 2v11c0 .364-.097.706-.268 1H1a1 1 0 0 1-1-1V7l4-3v3l4-3v3l3-2.25V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v13h-5V4.75 14zm-9-3v2h2v-2H2zm3 0v2h2v-2H5zm3 0v2h2v-2H8zM2 8v2h2V8H2zm3 0v2h2V8H5zm3 0v2h2V8H8z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

CategoryIndustrial.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryIndustrial;
