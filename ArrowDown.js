
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowDown = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8"><path fill="#91A6B6" fill-rule="evenodd" d="M14 1a1 1 0 0 0-1.694-.72L6.998 5.588 1.758.348a1 1 0 1 0-1.48 1.343l-.002.003 6 6a.997.997 0 0 0 .72.306H7a.997.997 0 0 0 .72-.306l6-6A.996.996 0 0 0 14 1z"/></svg>
	</svg>
); 

ArrowDown.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowDown;
