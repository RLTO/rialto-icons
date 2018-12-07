
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowOrderUpBlack = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="8" height="10"><path fill="none" stroke="#152435" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5 3.5L4 1l2.5 2.5M4 1v8"/></svg>
	</svg>
); 

ArrowOrderUpBlack.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowOrderUpBlack;
