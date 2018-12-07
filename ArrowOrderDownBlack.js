
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowOrderDownBlack = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="8" height="10"><path fill="none" stroke="#152435" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5 6.5L4 9l2.5-2.5M4 9V1"/></svg>
	</svg>
); 

ArrowOrderDownBlack.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowOrderDownBlack;
