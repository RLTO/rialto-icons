
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Star = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" d="M10 3.826L6.551 3.3 5 0 3.449 3.3 0 3.826l2.495 2.555L1.905 10 5 8.291 8.095 10l-.59-3.619L10 3.826"/></svg>
	</svg>
); 

Star.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Star;
